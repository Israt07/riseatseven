"use client";
import { useEffect, useRef, useState } from "react";

export default function ReadyToRise() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;

            const element = ref.current;
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            // Calculate scroll progress based on when element enters and leaves viewport
            let progress = 0;
            if (elementBottom > 0 && elementTop < windowHeight) {
                progress = (windowHeight - elementTop) / (windowHeight + element.clientHeight);
                progress = Math.max(0, Math.min(1, progress));
            }

            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Call once on mount

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const text = "Ready to Rise at Seven?";
    const characters = text.split("");

    return (
        <div 
            className="w-full bg-[#f5f4f0] py-32 px-6 flex items-center justify-center overflow-hidden"
            ref={ref}
        >
            <div
                style={{
                    fontSize: 'clamp(2.5rem, 7vw, 8rem)',
                    fontWeight: 900,
                    letterSpacing: '-0.03em',
                    color: '#0f172a',
                    lineHeight: 1,
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    display: 'inline-block',
                }}
            >
                {characters.map((char, index) => {
                    // Each character starts revealing at a different scroll point
                    const charDelay = index * 0.05;
                    const charProgress = Math.max(0, Math.min(1, (scrollProgress - charDelay) / 0.5));
                    
                    // Move from right side (150px) to center (0px)
                    const xOffset = (1 - charProgress) * 150;

                    return (
                        <span
                            key={index}
                            style={{
                                display: 'inline-block',
                                transform: `translateX(${xOffset}px)`,
                                opacity: charProgress,
                                willChange: 'transform, opacity',
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}