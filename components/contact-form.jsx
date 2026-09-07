"use client";

import { useState } from "react";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { handleContactFormSubmit } from "@/lib/form-actions";

export function ContactForm({
    title = "Get a Free Roof Inspection",
    subtitle = "Fill out the form below and we'll get back to you within 24 hours.",
}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const result = await handleContactFormSubmit(formData);
            setSubmitStatus(result);

            if (result.success) {
                // Reset form on success
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    street: "",
                    city: "",
                    state: "",
                    zip: "",
                    message: "",
                });
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field>
                            <FieldLabel htmlFor="street">Street Address</FieldLabel>
                            <Input
                                id="street"
                                name="street"
                                type="text"
                                placeholder="123 Main St"
                                value={formData.street}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="city">City</FieldLabel>
                            <Input
                                id="city"
                                name="city"
                                type="text"
                                placeholder="San Francisco"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                        </Field>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field>
                            <FieldLabel htmlFor="state">State</FieldLabel>
                            <Input
                                id="state"
                                name="state"
                                type="text"
                                placeholder="CA"
                                value={formData.state}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                                maxLength={2}
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="zip">Zip Code</FieldLabel>
                            <Input
                                id="zip"
                                name="zip"
                                type="text"
                                placeholder="94102"
                                value={formData.zip}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                                pattern="[0-9]{5}"
                                maxLength={5}
                            />
                        </Field>
                    </div>

                    <Field>
                        <FieldLabel htmlFor="message">Message</FieldLabel>
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your roofing needs..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            rows={4}
                        />
                    </Field>

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
