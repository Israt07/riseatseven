"use client";
import { useState } from "react";
import Image from "next/image";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || '';



const cards = [
    {
        image: `${bp}/img/girl-board.png`,
        title: "Pioneers",
        body: "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
        body2: "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    },
    {
        image: `${bp}/img/services/pr-week.png`,
        title: "Award Winning",
        body: "A roll top full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search and Global Content Marketing Awards.",
    },
    {
        image: `${bp}/img/seo-week.png`,
        title: "Speed",
        body: "People ask us why we are called Rise atSeven? Ever heard the saying Early Bird cathces the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We've created a service which takes ideas to result within 60 minutes.",
    },
];

export default function PioneerCards() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((p) => Math.min(p + 1, cards.length - 1));
    const prev = () => setCurrent((p) => Math.max(p - 1, 0));

    return (
        <div className="flex flex-col items-center gap-6 sm:gap-10 w-full overflow-hidden">
            
            <p className="text-slate-900 text-sm font-bold uppercase tracking-wider px-6 text-center">
                Legacy In The Making
            </p>

            {/* Mobile View: Horizontal Scroll */}
            <div className="md:hidden w-full overflow-x-auto snap-x snap-mandatory flex gap-4 pb-10 no-scrollbar px-[24px]">
                {cards.map((card, i) => (
                    <div 
                        key={i} 
                        className="flex-shrink-0 w-[calc(100vw-48px)] snap-center bg-[#111111] rounded-[2.5rem] p-6 flex flex-col items-center text-center shadow-2xl"
                    >
                        {/* Image */}
                        <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6">
                            <Image src={card.image} alt={card.title} width={400} height={400} className="w-full h-full object-cover" />
                        </div>

                        {/* Text */}
                        <h3 className="text-3xl font-black text-white mb-3 uppercase tracking-tighter leading-none">{card.title}</h3>
                        <p className="text-white/90 text-[13px] leading-snug mb-3 font-medium px-2">{card.body}</p>
                        {card.body2 && (
                            <p className="text-white/90 text-[13px] leading-snug font-medium px-2">{card.body2}</p>
                        )}
                        
                        {/* Custom scroll indicator for this card */}
                        <div className="mt-auto pt-8 w-full">
                            <div className="h-[2px] w-full bg-white/10 relative">
                                <div 
                                    className="absolute top-0 left-0 h-full bg-white transition-all duration-300"
                                    style={{ width: `${(1 / cards.length) * 100}%`, left: `${(i / cards.length) * 100}%` }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop View: Card Stack */}
            <div className="hidden md:block relative w-full max-w-sm mx-auto" style={{ height: '580px' }}>
                {cards.map((card, i) => {
                    const offset = i - current;
                    const isActive = offset === 0;
                    const isPast = offset < 0;
                    const isFuture = offset > 0;

                    const translateY = isFuture ? offset * 12 : isPast ? -80 : 0;
                    const translateX = isPast ? -60 : isFuture ? offset * 6 : 0;
                    const rotate = isPast ? -12 : isFuture ? offset * 2 : 0;
                    const scale = isActive ? 1 : isFuture ? Math.max(0.88, 1 - offset * 0.04) : 0.88;
                    const zIndex = cards.length - Math.abs(offset);
                    const opacity = isPast ? 0 : isFuture && offset > 3 ? 0 : 1;

                    return (
                        <div
                            key={i}
                            onClick={isActive ? next : undefined}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
                                zIndex,
                                opacity,
                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: isActive && current < cards.length - 1 ? 'pointer' : 'default',
                            }}
                            className="w-full bg-[#111111] rounded-3xl overflow-hidden p-6 flex flex-col items-center text-center select-none"
                        >
                            <div className="w-56 h-64 rounded-2xl overflow-hidden mb-6 flex-shrink-0">
                                <Image src={card.image} alt={card.title} width={224} height={256} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-4xl font-black text-white mb-4">{card.title}</h3>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">{card.body}</p>
                            {card.body2 && (
                                <p className="text-white/70 text-sm leading-relaxed">{card.body2}</p>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 mt-4">
                <button
                    onClick={prev}
                    disabled={current === 0}
                    className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-30 transition-all"
                >
                    ←
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                    {cards.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`rounded-full transition-all duration-300 ${i === current
                                ? 'w-6 h-2 bg-slate-900'
                                : 'w-2 h-2 bg-slate-300'
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={next}
                    disabled={current === cards.length - 1}
                    className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-30 transition-all"
                >
                    →
                </button>
            </div>
        </div>
    );
}