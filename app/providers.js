"use client";

import { ProgressProvider } from "@bprogress/next/app";

const Providers = ({ children, height = "4px", color, showSpinner = false }) => {
    return (
        <ProgressProvider height={height} color={color} options={{ showSpinner }} shallowRouting>
            {children}
        </ProgressProvider>
    );
};

export default Providers;
