"use server";

// import { ServerClient } from "postmark";

// Requires POSTMARK_API_TOKEN in .env, plus `npm install postmark`.
// const client = new ServerClient(process.env.POSTMARK_API_TOKEN);

const LEAD_NOTIFICATION_RECIPIENT = "tuna@premierclassicpools.com";

const escapeHtml = (value = "") =>
    String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

const buildEmailBody = ({ name, email, phone, address, message }) => {
    const rows = [
        ["Name", name],
        ["Email", email],
        ["Phone", phone],
        ["Address", address],
        // The form states consent is granted by submitting, so reaching here implies it.
        ["SMS Consent", "Yes (accepted by submitting the form)"],
    ];

    const html = `
        <div style="font-family: Arial, sans-serif; color: #111;">
            <h2>New Quote Request</h2>
            <p>Someone submitted the quote form on premierclassicpools.com.</p>
            ${rows
                .map(
                    ([label, value]) =>
                        `<p style="margin:4px 0;"><strong>${label}:</strong> ${escapeHtml(value || "—")}</p>`
                )
                .join("")}
            <h3>Message</h3>
            <p style="white-space: pre-wrap;">${escapeHtml(message || "—")}</p>
        </div>
    `;

    const text = [
        "New Quote Request",
        ...rows.map(([label, value]) => `${label}: ${value || "—"}`),
        "",
        "Message:",
        message || "—",
    ].join("\n");

    return { html, text };
};

export async function submitContactForm(formData) {
    try {
        const { name, email, phone, address, message } = formData || {};

        if (!name || !email || !phone || !address) {
            return {
                success: false,
                message: "Please fill out your name, email, phone, and address.",
            };
        }

        const { html, text } = buildEmailBody({ name, email, phone, address, message });

        console.log("Contact form submission:", formData);

        // TODO: uncomment once POSTMARK_API_TOKEN is set and `postmark` is installed.
        // const result = await client.sendEmail({
        //     From: "Romey Notifications <leads@notifications.romey.ai>",
        //     To: LEAD_NOTIFICATION_RECIPIENT,
        //     Subject: `New Quote Request: ${name}`,
        //     HtmlBody: html,
        //     TextBody: text,
        //     ReplyTo: email,
        //     MessageStream: "outbound",
        //     Tag: "contact_form_submission",
        // });
        // console.log("Email sent successfully:", result.MessageID);

        return {
            success: true,
            message: "Thank you! We've received your request and will be in touch shortly.",
        };
    } catch (error) {
        console.error("Error submitting contact form:", error);
        return {
            success: false,
            message: "Something went wrong. Please try again.",
        };
    }
}
