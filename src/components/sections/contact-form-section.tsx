"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import React from "react";

const ContactFormSection = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
    };

  return (
    <section id="kontakt" className="py-16 md:py-20 bg-muted/30 scroll-mt-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Zostań z nami w kontakcie</h2>
                <p className="text-lg text-muted-foreground">
                    Masz pytania? Chcesz umówić się na prezentację? Skontaktuj się z nami już dziś i rozpocznijmy współpracę.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                {/* Contact Info Column */}
                <div className="lg:col-span-2">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold">Informacje kontaktowe</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col space-y-8 pt-2">
                            <div className="flex items-start space-x-4">
                                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                                    <MapPin className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground text-base">Adres biura</h4>
                                    <p className="text-muted-foreground text-sm">Osiedle Robińskich 7</p>
                                    <p className="text-muted-foreground text-sm">63-700 Krotoszyn</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                                    <Phone className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground text-base">Telefon</h4>
                                    <p className="text-muted-foreground text-sm">+48 698 474 320</p>
                                    <p className="text-muted-foreground text-xs mt-1">Pon-Pt: 8:00-20:00, Sob: 8:00-14:00</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                                    <Mail className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground text-base">Email</h4>
                                    <p className="text-muted-foreground text-sm">biuro@piotrowski-krotoszyn.pl</p>
                                    <p className="text-muted-foreground text-xs mt-1">Odpowiadamy w 24h</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Contact Form Column */}
                <div className="lg:col-span-3">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold">Wyślij wiadomość</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="name">Imię i nazwisko</Label>
                                        <Input id="name" placeholder="Jan Kowalski" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="jan@example.com" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="phone">Telefon</Label>
                                        <Input id="phone" type="tel" placeholder="+48 698 474 320" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="subject">Temat</Label>
                                        <Input id="subject" placeholder="W czym możemy pomóc?" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="message">Wiadomość</Label>
                                    <Textarea id="message" placeholder="Opisz swoje potrzeby..." className="min-h-[120px]" />
                                </div>
                                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 px-8 text-base font-medium">
                                    <Send className="mr-2 h-4 w-4" />
                                    Wyślij wiadomość
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ContactFormSection;