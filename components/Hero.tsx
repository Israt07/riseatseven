"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import PioneerCards from '@/components/PioneerCards';
import ReadyToRise from '@/components/ReadyToRise';

export default function Hero() {
  const featuredWork = [
    { name: 'SIXT', years: '[2023-2025]', tag: 'Car rental', image: '/img/scroll/black-car.png' },
    { name: 'Dojo – B2B', years: '[2021-2025]', tag: 'Fintech', image: '/img/scroll/card-pay.png' },
    { name: 'Magnet Trade - B2B', years: '[2022-2025]', tag: 'Gaming', image: '/img/scroll/magnet.png' },
    { name: 'Leading E Sim brand globally', years: '[2020-2025]', tag: 'Aviation', image: '/img/scroll/e-sim.png' },
    { name: 'JD Sports', years: '[2023-2025]', tag: 'B2B SaaS', image: '/img/scroll/family.png' },
    { name: 'Parkdean Resorts', years: '[2023-2025]', tag: 'B2B SaaS', image: '/img/scroll/beach.png' },
    { name: 'Pooky', years: '[2023-2025]', tag: 'B2B SaaS', image: '/img/scroll/lamp.png' },
    { name: 'Parkdean Resorts', years: '[2023-2025]', tag: 'B2B SaaS', image: '/img/scroll/river.png' },
    { name: 'Revolution Beauty', years: '[2023-2025]', tag: 'B2B SaaS', image: '/img/scroll/cosmatices.png' },
    { name: 'Lloyds Pharmacy', years: '[2023-2025]', tag: 'B2B SaaS', image: '/img/scroll/peach.png' },
    { name: 'PrettyLittleThing', years: '[2023-2025]', tag: 'B2B SaaS', image: '/img/scroll/models.png' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollTranslate, setScrollTranslate] = useState(0);
  const featuredSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const itemHeight = 560 + 12; // image height + gap
    const totalHeight = itemHeight * featuredWork.length - 560;

    const handleScroll = () => {
      if (!featuredSectionRef.current) return;
      const rect = featuredSectionRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const slowFactor = 32; // make this section scroll much slower
      const scrollDistance = Math.max((rect.height - 560) * slowFactor, 1);
      const progress = Math.min(
        Math.max((viewportCenter - rect.top) / scrollDistance, 0),
        1
      );

      setScrollTranslate(-totalHeight * progress);
      setActiveIndex(Math.min(featuredWork.length - 1, Math.floor(progress * featuredWork.length)));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [featuredWork.length]);

  const syncFromText = (index: number) => {
    if (!featuredSectionRef.current) return;
    const sectionTop = featuredSectionRef.current.getBoundingClientRect().top + window.scrollY;
    const targetScroll = sectionTop - 120;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    setActiveIndex(index);
  };

  return (
    <main className="relative flex-1 flex flex-col items-center justify-center overflow-hidden py-24 bg-white">

      {/* Client Logo Bar */}
      <div className="w-full bg-[#f0f0f0] py-6 overflow-hidden mb-12">
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center">
          <div className="flex-shrink-0 pl-6 sm:pl-12 pr-4 z-10 bg-[#f0f0f0] mb-2 sm:mb-0">
            <p className="text-xs sm:text-sm font-medium whitespace-nowrap">The agency behind...</p>
          </div>
          <div className="relative overflow-hidden flex-1">
            {/* Left fade */}
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#f0f0f0] to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee" style={{ width: 'max-content' }}>
              {[0, 1].map((_, idx) => (
                <div key={idx} className="flex items-center gap-[80px]" style={{ height: '96px', paddingRight: '80px' }}>
                  <Image src="/img/slide/axa.png" alt="AXA" width={100} height={64} className="h-16 w-auto object-contain grayscale opacity-80" />
                  <Image src="/img/slide/capitalone.png" alt="Capital One" width={100} height={64} className="h-16 w-auto object-contain grayscale opacity-80" />
                  <Image src="/img/slide/emirates.png" alt="Emirates" width={100} height={64} className="h-16 w-auto object-contain grayscale opacity-80" />
                  <Image src="/img/slide/hubspot.png" alt="HubSpot" width={100} height={64} className="h-16 w-auto object-contain grayscale opacity-80" />
                  <Image src="/img/slide/jd.png" alt="JD" width={100} height={64} className="h-16 w-auto object-contain grayscale opacity-80" />
                  <Image src="/img/slide/kroger.png" alt="Kroger" width={100} height={64} className="h-16 w-auto object-contain grayscale opacity-80" />
                  <Image src="/img/slide/playstation.png" alt="PlayStation" width={100} height={64} className="h-16 w-auto object-contain grayscale opacity-80" />
                  <Image src="/img/slide/revolution.png" alt="Revolution" width={150} height={96} className="h-16 w-auto object-contain grayscale opacity-80 scale-150" />
                  <Image src="/img/slide/sixt.png" alt="SIXT" width={100} height={64} className="h-16 w-auto object-contain grayscale opacity-80" />
                  <Image src="/img/slide/xbox.png" alt="Xbox" width={100} height={64} className="h-16 w-auto object-contain grayscale opacity-80" />
                </div>
              ))}
            </div>

            {/* Right fade */}
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#f0f0f0] to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Driving Demand Section */}
      <div className="w-full bg-[#eeece8] py-16 px-6 sm:px-12 mb-12 overflow-hidden">
        <div className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-10 md:gap-12">
          <p className="text-lg font-bold text-slate-900 max-w-sm md:max-w-xs leading-snug text-left">
            A global team of search-first content marketers engineering semantic relevancy & category signals for both the internet and people
          </p>
          <div className="flex flex-col items-start gap-6 w-full md:w-auto">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-3 text-left">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight md:leading-none">
                Driving Demand &<br />
                <span className="inline-flex items-center md:items-end gap-3">
                  Discovery
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-white/20 flex-shrink-0 mb-1">
                    <Image src="/img/girl-board.png" alt="Client" width={80} height={80} className="w-full h-full object-cover" />
                  </div>
                </span>
              </h2>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 w-full">
              <button className="w-full md:w-auto px-10 py-5 rounded-full bg-white text-slate-900 font-bold text-lg shadow-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Our Story <span className="text-xl">↗</span>
              </button>
              <button className="w-full md:w-auto px-6 py-4 text-slate-900 font-bold text-lg hover:opacity-70 transition-all flex items-center justify-center gap-2">
                Our Services <span className="text-xl">↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Work Section */}
      <div ref={featuredSectionRef} className="w-full bg-[#111111] rounded-[2rem] sm:rounded-3xl overflow-hidden mb-6 mx-4 sm:mx-8" style={{ maxWidth: 'calc(100% - 2rem)' }}>
        
        {/* Mobile View: Vertical List of Cards */}
        <div className="lg:hidden p-4 sm:p-6 flex flex-col gap-4">
          <p className="text-white text-sm font-bold uppercase tracking-wider mb-2">
            Featured Work
          </p>
          
          {featuredWork.map((work, i) => (
            <div key={i} className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden group">
              <Image
                src={work.image}
                alt={work.name}
                width={800}
                height={1000}
                className="w-full h-full object-cover"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-t from-black/60 via-transparent to-transparent">
                {/* Top Tag */}
                <div className="self-end bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-2">
                  <span className="text-[10px] text-white font-bold uppercase tracking-widest">{work.tag}</span>
                  <span className="text-white text-xs">↗</span>
                </div>
                
                {/* Bottom Title */}
                <div>
                  <p className="text-white/60 text-[10px] font-mono mb-1">{work.years}</p>
                  <h3 className="text-white text-2xl font-black tracking-tight leading-none uppercase">
                    {work.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Desktop View: Sticky Scroll Layout */}
        <div className="hidden lg:flex flex-row">
          {/* Left: Active Work Text */}
          <div className="flex flex-col w-1/2 p-10 sticky top-24 self-start h-[560px]">
            <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-8">
              Featured Work
            </p>
            <div className="mt-auto">
              <div className="flex flex-wrap items-baseline gap-3 py-1">
                <span className="font-black tracking-tight leading-none text-white text-7xl">
                   {featuredWork[activeIndex].name}
                </span>
                <span className="text-white/40 text-xs font-mono">
                  {featuredWork[activeIndex].years}
                </span>
              </div>
              <p className="mt-6 text-white/50 text-sm max-w-lg">
                {featuredWork[activeIndex].tag}
              </p>
            </div>
          </div>

          {/* Right: Page-driven image panel */}
          <div className="w-1/2 m-3 rounded-2xl h-[560px] overflow-hidden relative">
            <div
              className="absolute inset-0 transition-transform duration-200 ease-out"
              style={{ transform: `translateY(${scrollTranslate}px)` }}
            >
              {featuredWork.map((work, i) => (
                <div key={i} className="relative w-full h-[560px] flex-shrink-0 overflow-hidden rounded-2xl mb-3">
                  <Image
                    src={work.image}
                    alt={work.name}
                    width={800}
                    height={560}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
                    <span className="text-xs">🔍</span>
                    <span className="text-xs font-semibold text-slate-800">{work.tag}</span>
                    <span className="text-xs text-slate-500">↗</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Explore Our Work Button */}
      <div className="flex justify-center w-full py-8 px-4 sm:px-8">
        <button className="w-full sm:w-auto px-10 py-5 sm:px-8 sm:py-3 rounded-full bg-white text-slate-900 font-bold sm:font-semibold text-lg sm:text-sm shadow-md border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
          Explore Our Work <span>↗</span>
        </button>
      </div>

      {/* Our Services Section */}
      <div className="w-full bg-[#eeece8] px-6 sm:px-12 pt-16 pb-8 overflow-hidden">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-6">
          <h2 className="text-5xl sm:text-6xl font-black tracking-tight text-slate-900 flex flex-wrap items-center justify-start gap-4">
            Our
            <div className="inline-flex w-16 h-16 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shadow-md border border-slate-200 mx-1 align-middle flex-shrink-0">
              <Image src="/img/meeting.png" alt="Our Services" width={80} height={80} className="w-full h-full object-cover" />
            </div>
            Services
          </h2>
          <button className="hidden md:flex px-6 py-3 rounded-full bg-white text-slate-900 font-semibold text-sm shadow-sm border border-slate-200 hover:bg-slate-50 transition-all items-center gap-2 whitespace-nowrap">
            View All Services <span>↗</span>
          </button>
        </div>
        {/* Our Services Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            {[
              { label: 'Digital PR', image: '/img/services/man-card.png' },
              { label: 'Organic Social & Content', image: '/img/services/organic-content.png' },
              { label: 'Search & Growth Strategy', image: '/img/services/search-strategy.png' },
              { label: 'Content Experience', image: '/img/services/content-experience.png' },
              { label: 'Data & Growth Strategy', image: '/img/services/data-insights.png' },
              { label: 'Onsite SEO', image: '/img/services/onsite-seo.png' },
            ].map((service, i) => (
              <div
                key={i}
                className="group relative border-b border-slate-300 md:border-b-0 md:border-t py-6 sm:py-8 flex items-center gap-4 sm:gap-6"
              >
                {/* Mobile/Default Inline Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm">
                  <Image src={service.image} alt={service.label} width={100} height={100} className="w-full h-full object-cover" />
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight transition-all duration-300 lg:group-hover:opacity-0 lg:group-hover:translate-y-2">
                  {service.label}
                </h3>

                {/* Desktop Hover state: panoramic image pill */}
                <div className="hidden lg:block absolute inset-0 mx-0 my-3 rounded-full overflow-hidden opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                  <Image src={service.image} alt={service.label} width={800} height={100} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute inset-0 flex items-center gap-3 px-6">
                    <span className="text-white text-lg font-bold">↗</span>
                    <span className="text-white text-xl font-black tracking-tight drop-shadow-sm">{service.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile View All Services Button */}
          <div className="md:hidden mt-8">
            <button className="w-full px-10 py-5 rounded-full bg-white text-slate-900 font-bold text-lg shadow-md border border-slate-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              View All Services <span>↗</span>
            </button>
          </div>
        </div>

        {/* Chasing Consumers Marquee Section */}
        <div className="w-full py-6 overflow-hidden">
          <div className="flex items-center animate-marquee-text whitespace-nowrap">
            {[0, 1].map((_, idx) => (
              <div key={idx} className="flex items-center gap-0 flex-shrink-0">

                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 px-4 sm:px-8">
                  Not Algorithms
                </span>

                {/* Landscape pill */}
                <div
                  className="inline-flex items-center rounded-2xl sm:rounded-3xl overflow-hidden mx-2 sm:mx-4 flex-shrink-0"
                  style={{ width: '140px', height: '80px' }}
                >
                  <style jsx>{`
                    @media (min-width: 640px) {
                      div { width: 280px !important; height: 160px !important; }
                    }
                  `}</style>
                  <Image src="/img/screen.png" alt="" width={280} height={160} className="w-full h-full object-cover" />
                </div>

                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 px-4 sm:px-8">
                  Chasing Consumers
                </span>

                {/* Portrait square */}
                <div
                  className="inline-flex items-center rounded-2xl sm:rounded-3xl overflow-hidden mx-2 sm:mx-4 flex-shrink-0"
                  style={{ width: '80px', height: '80px' }}
                >
                  <style jsx>{`
                    @media (min-width: 640px) {
                      div { width: 160px !important; height: 160px !important; }
                    }
                  `}</style>
                  <Image src="/img/gang.png" alt="" width={160} height={160} className="w-full h-full object-cover" />
                </div>

              </div>
            ))}
          </div>
        </div>


        {/* Pioneer Stacked Cards Section */}
        <div className="w-full bg-[#f5f4f0] py-24 px-0 sm:px-6 flex flex-col items-center overflow-hidden">
          <PioneerCards />
        </div>


        {/* What's New Section */}
        <div className="w-full bg-[#f5f4f0] px-6 sm:px-12 py-16 overflow-hidden">
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between mb-12 gap-6">

            {/* Left: Title with inline image */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
              <h2 className="text-6xl sm:text-7xl md:text-6xl font-black tracking-tight text-slate-900 flex items-center gap-4">
                What's
                <div className="inline-flex w-16 h-16 sm:w-20 sm:h-20 md:w-16 md:h-16 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src="/img/concert.png" alt="" width={80} height={80} className="w-full h-full object-cover" />
                </div>
              </h2>
              <h2 className="text-6xl sm:text-7xl md:text-6xl font-black tracking-tight text-slate-900">
                New
              </h2>
            </div>

            {/* Right: Button (Desktop) */}
            <button className="hidden md:flex px-6 py-3 rounded-full bg-white text-slate-900 font-semibold text-sm shadow-sm border border-slate-200 hover:bg-slate-50 transition-all items-center gap-2 whitespace-nowrap">
              Explore More Thoughts <span>↗</span>
            </button>

          </div>
        </div>


        <div className="w-full bg-white px-0 md:px-12 py-16 overflow-hidden">
          <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 no-scrollbar px-6 md:px-0">
            {[
              {
                image: '/img/three-people.png',
                author: 'Ray Saddiq',
                authorImg: '/img/ray-saddiq.png',
                readTime: '3 mins',
                title: 'Rise at Seven Appoints Hollie Lovell as Senior Operations Lead',
                tag: null,
              },
              {
                image: '/img/black-three.png',
                author: 'Ray Saddiq',
                authorImg: '/img/ray-saddiq.png',
                readTime: '2 mins',
                title: 'Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they go for global expansion',
                tag: null,
              },
              {
                image: '/img/bill-board.png',
                author: 'Carrie Rose',
                authorImg: '/img/ray-saddiq.png',
                readTime: '2 mins',
                title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
                tag: 'News',
              },
            ].map((article, i) => (
              <div key={i} className="flex-shrink-0 w-[85vw] md:w-auto snap-center flex flex-col cursor-pointer group">
                <div className="relative w-full rounded-2xl overflow-hidden mb-4" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {article.tag && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-slate-700">{article.tag}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1.5 bg-slate-100 rounded-full px-2 py-1">
                    <div className="w-5 h-5 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
                      <Image src={article.authorImg} alt={article.author} width={20} height={20} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-sm text-slate-600 font-medium">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 bg-slate-100 rounded-full px-2 py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="text-sm text-slate-500">{article.readTime}</span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-xl font-black text-slate-900 tracking-tight leading-tight group-hover:underline">
                  {article.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Mobile Explore More Thoughts Button */}
          <div className="md:hidden mt-8 px-6">
            <button className="w-full py-4 rounded-full bg-white text-slate-900 font-bold text-lg shadow-md border border-slate-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              Explore More Thoughts <span>↗</span>
            </button>
          </div>
        </div>


        {/* Ready to Rise Section */}
        <div className="hidden md:block">
          <ReadyToRise />
        </div>




      </div>

    </main>
  );
}