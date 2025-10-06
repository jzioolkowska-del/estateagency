"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
"@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const heroBackgroundImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87babdff-4b6e-4481-a55f-eb7c1dc5d9ad-template-whisperer-21-lovable-app/assets/images/hero-property-DWO36_xI-6.jpg";

  const handleSearch = () => {
    // Build query parameters
    const params = new URLSearchParams();
    if (location) params.append("city", location);
    if (propertyType) params.append("type", propertyType);
    if (maxPrice) params.append("maxPrice", maxPrice.replace(/\s/g, ""));

    // Navigate to appropriate page based on property type
    let targetPage = "/mieszkania";
    if (propertyType === "dom") targetPage = "/domy";
    else if (propertyType === "dzialka") targetPage = "/dzialki";
    else if (propertyType === "lokal") targetPage = "/lokale";
    
    const queryString = params.toString();
    router.push(queryString ? `${targetPage}?${queryString}` : targetPage);
  };

  return (
    <section className="relative min-h-[600px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}>
      </div>
      <div className="absolute inset-0 !opacity-100 !text-[#2c3e50] !block !bg-[url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/87babdff-4b6e-4481-a55f-eb7c1dc5d9ad/visual-edit-uploads/1758619069962-n7rtpeqr29.jpg)] !bg-cover !bg-center"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight md:!text-[#2c3e50] !whitespace-pre-line !bg-transparent mt-2 mx-auto !w-[103.9%] !h-[206px] bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            NIERUCHOMOŚCI KROTOSZYN
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-tight !text-[#2c3e50] md:!text-[#2c3e50] !whitespace-pre-line mt-2 mx-auto !w-[103.9%] !h-[120px] backdrop-blur-sm rounded-lg p-4 shadow-lg !bg-transparent">
            Znajdź swój wymarzony dom z naszą pomocą. Tysiące ofert w jednym miejscu.
          </p>
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <Label htmlFor="location" className="block text-sm font-medium text-foreground mb-2 text-left">
                  Miejscowość
                </Label>
                <Input 
                  id="location" 
                  placeholder="Wprowadź miasto" 
                  className="bg-background border-border h-10 text-foreground"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="property-type" className="block text-sm font-medium text-foreground mb-2 text-left !w-full !h-5">
                  Typ nieruchomości
                </Label>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger id="property-type" className="w-full bg-background border-border h-10 [&>span]:line-clamp-1 text-foreground">
                    <SelectValue placeholder="Wybierz typ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mieszkanie">Mieszkanie</SelectItem>
                    <SelectItem value="dom">Dom</SelectItem>
                    <SelectItem value="apartament">Apartament</SelectItem>
                    <SelectItem value="dzialka">Działka</SelectItem>
                    <SelectItem value="lokal">Lokal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="max-price" className="block text-sm font-medium text-foreground mb-2 text-left">
                  Maksymalna cena
                </Label>
                <Input 
                  id="max-price" 
                  placeholder="500 000 zł" 
                  className="bg-background border-border h-10 text-foreground"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
              <div className="flex items-end h-full">
                <Button 
                  className="w-full h-11 bg-accent hover:bg-accent/90 text-accent-foreground px-8"
                  onClick={handleSearch}
                >
                  <Search className="h-4 w-4 mr-2" />
                  Szukaj
                </Button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Kompleksowa obsługa klienta • Najlepsze ceny • Profesjonalna pomoc
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;