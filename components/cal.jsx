"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalWidget({ darkTheme = false, calLink = "roofera/discovery" }) {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: calLink });
            cal("ui", {
                theme: darkTheme ? "dark" : "light",
                cssVarsPerTheme: {
                    light: { "cal-brand": "#3DCF8E" },
                    dark: { "cal-brand": "#3DCF8E" },
                },
                hideEventTypeDetails: true,
                layout: "month_view",
            });
        })();
    }, [darkTheme]);

    return (
        <Cal
            namespace={calLink}
            calLink={calLink}
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view", theme: darkTheme ? "dark" : "light" }}
        />
    );
}
