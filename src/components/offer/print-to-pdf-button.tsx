"use client";

import { Printer } from "lucide-react";
import React from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface PrintToPdfButtonProps {
  targetId?: string;
  fileName?: string;
  slug: string;
}

export const PrintToPdfButton: React.FC<PrintToPdfButtonProps> = ({
  targetId = "offer-pdf",
  fileName = "oferta.pdf",
  slug
}) => {
  const [isPrinting, setIsPrinting] = React.useState(false);

  const handlePrint = async () => {
    if (isPrinting) return;
    setIsPrinting(true);

    try {
      // Hide non-offer elements for clean PDF
      const nav = (document.querySelector('nav') || document.querySelector('header')) as HTMLElement | null;
      const footer = document.querySelector('footer') as HTMLElement | null;
      const sidebar = document.querySelector('aside') as HTMLElement | null;
      const buttonContainer = document.querySelector('.mb-4.flex.items-center.justify-end') as HTMLElement | null;

      const originalNavDisplay = nav ? nav.style.display : null;
      const originalFooterDisplay = footer ? footer.style.display : null;
      const originalSidebarDisplay = sidebar ? sidebar.style.display : null;
      const originalButtonDisplay = buttonContainer ? buttonContainer.style.display : null;

      if (nav) nav.style.display = 'none';
      if (footer) footer.style.display = 'none';
      if (sidebar) sidebar.style.display = 'none';
      if (buttonContainer) buttonContainer.style.display = 'none';

      const target = document.getElementById(targetId);
      if (!target) {
        console.error('Target element not found');
        setIsPrinting(false);
        return;
      }

      // Apply print-friendly styles
      target.style.width = '100%';
      target.style.margin = '0';
      target.style.padding = '20px';
      target.style.background = 'white';

      // Generate canvas from HTML
      const canvas = await html2canvas(target, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      // Calculate PDF dimensions
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      const pdf = new jsPDF('p', 'mm', 'a4');
      let position = 0;

      // Add image to PDF
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add additional pages if content is longer than one page
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Save PDF
      pdf.save(fileName);

      // Restore original styles
      if (nav) nav.style.display = originalNavDisplay;
      if (footer) footer.style.display = originalFooterDisplay;
      if (sidebar) sidebar.style.display = originalSidebarDisplay;
      if (buttonContainer) buttonContainer.style.display = originalButtonDisplay;
      if (target) {
        target.style.width = '';
        target.style.margin = '';
        target.style.padding = '';
        target.style.background = '';
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsPrinting(false);
    }
  };

  return (
    <button
      onClick={handlePrint}
      className={`inline-flex items-center gap-2 rounded-md px-3 py-2 transition shadow ${
      isPrinting ?
      "bg-muted text-muted-foreground cursor-not-allowed" :
      "bg-primary text-primary-foreground hover:bg-primary/90"}`
      }
      disabled={isPrinting}>

      <span className="text-sm font-medium !whitespace-pre-line">
        {isPrinting ? "Generowanie PDF..." : "Pobierz PDF"}
      </span>
      <Printer className="h-4 w-4" />
    </button>);

};

export default PrintToPdfButton;
