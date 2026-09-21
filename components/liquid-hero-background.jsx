"use client";

import { useEffect, useRef, useCallback } from "react";

export function LiquidHeroBackground({
    backgroundColor = "#0f172a",
    opacity = 0.35,
}) {
    const canvasRef = useRef(null);

    const generateBaseImage = useCallback(() => {
        const dpr = window.devicePixelRatio || 1;
        const offscreen = document.createElement("canvas");
        const w = window.innerWidth;
        const h = window.innerHeight;
        offscreen.width = w * dpr;
        offscreen.height = h * dpr;
        const ctx = offscreen.getContext("2d");
        if (!ctx) return null;

        ctx.scale(dpr, dpr);
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, w, h);

        // Soft ambient glow for the liquid to reflect
        ctx.globalCompositeOperation = "screen";

        const glow1 = ctx.createRadialGradient(w * 0.3, h * 0.3, 0, w * 0.3, h * 0.3, w * 0.5);
        glow1.addColorStop(0, "rgba(37, 99, 235, 0.3)");
        glow1.addColorStop(1, "rgba(15, 23, 42, 0)");
        ctx.fillStyle = glow1;
        ctx.fillRect(0, 0, w, h);

        const glow2 = ctx.createRadialGradient(w * 0.7, h * 0.7, 0, w * 0.7, h * 0.7, w * 0.4);
        glow2.addColorStop(0, "rgba(14, 165, 233, 0.2)");
        glow2.addColorStop(1, "rgba(15, 23, 42, 0)");
        ctx.fillStyle = glow2;
        ctx.fillRect(0, 0, w, h);

        ctx.globalCompositeOperation = "source-over";

        return offscreen.toDataURL("image/png");
    }, [backgroundColor]);

    useEffect(() => {
        if (!canvasRef.current) return;

        const dataUrl = generateBaseImage();
        if (!dataUrl) return;

        const script = document.createElement("script");
        script.type = "module";
        script.textContent = `
            import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.30/build/backgrounds/liquid1.min.js';

            const canvas = document.getElementById('liquid-canvas');
            if (canvas) {
                const app = LiquidBackground(canvas);
                app.loadImage('${dataUrl}');
                app.liquidPlane.material.metalness = 0.3;
                app.liquidPlane.material.roughness = 0.5;
                app.liquidPlane.uniforms.displacementScale.value = 2.5;
                app.setRain(false);
                window.__liquidApp = app;
            }
        `;
        document.body.appendChild(script);

        return () => {
            if (window.__liquidApp && window.__liquidApp.dispose) {
                window.__liquidApp.dispose();
            }
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, [generateBaseImage]);

    return (
        <div
            className="absolute inset-0 touch-none overflow-hidden"
            style={{ opacity, mixBlendMode: "screen" }}
        >
            <canvas
                ref={canvasRef}
                id="liquid-canvas"
                className="absolute inset-0 w-full h-full"
            />
        </div>
    );
}
