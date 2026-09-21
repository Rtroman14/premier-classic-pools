"use client";

import { useState } from "react";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PlaceAutocomplete } from "@/components/ui/place-autocomplete";
import { submitContactForm } from "@/lib/actions/submit-contact-form";

const emptyForm = {
    name: "",
    email: "",
    phone: "",
    address: "",
    placeId: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    lat: null,
    lng: null,
    message: "",
};

export function ContactForm({
    title = "Request a Consultation",
    subtitle = "Fill out the form below and we'll get back to you within 24 hours.",
}) {
    const [formData, setFormData] = useState(emptyForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Typing in the address input clears any previously resolved place details.
    const handleAddressChange = (address) => {
        setFormData((prev) => ({
            ...prev,
            address,
            placeId: "",
            street: "",
            city: "",
            state: "",
            zip: "",
            lat: null,
            lng: null,
        }));
    };

    const handleAddressSelect = (place) => {
        setFormData((prev) => ({ ...prev, ...place }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const result = await submitContactForm(formData);
            setSubmitStatus(result);

            if (result.success) {
                setFormData(emptyForm);
            }
        } catch (error) {
            setSubmitStatus({
                success: false,
                message: "Something went wrong. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full bg-card border border-border rounded-3xl p-6 shadow-lg">
            <div className="mb-4">
                <h3 className="text-2xl font-semibold mb-1">{title}</h3>
                <p className="text-muted-foreground text-sm">{subtitle}</p>
            </div>

            {submitStatus && (
                <div
                    className={`mb-6 p-4 rounded-md ${
                        submitStatus.success
                            ? "bg-green-50 text-green-900 border border-green-200"
                            : "bg-red-50 text-red-900 border border-red-200"
                    }`}
                >
                    <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="name">Full Name</FieldLabel>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                        />
                    </Field>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field>
                            <FieldLabel htmlFor="email">Email Address</FieldLabel>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="(555) 123-4567"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                        </Field>
                    </div>

                    <Field>
                        <FieldLabel htmlFor="address">Project Address</FieldLabel>
                        <PlaceAutocomplete
                            id="address"
                            value={formData.address}
                            onChange={handleAddressChange}
                            onSelect={handleAddressSelect}
                            disabled={isSubmitting}
                            required
                        />
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="message">Message</FieldLabel>
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your project..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            rows={4}
                        />
                    </Field>

                    <p className="text-xs leading-normal text-muted-foreground">
                        By submitting this form, you consent to receive non-marketing text messages
                        from Premier Classic Pools &amp; Outdoors about solutions, support, and
                        scheduling. Message &amp; data rates may apply. Message frequency varies.
                        Reply HELP for help or STOP to opt-out.
                    </p>

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full rounded-full"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Get In Touch"}
                    </Button>
                </FieldGroup>
            </form>
        </div>
    );
}
