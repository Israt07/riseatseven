'use client';
import React, { useState, useEffect } from 'react';

export default function Header() {
  const [activeServiceImg, setActiveServiceImg] = useState('/img/services/data.png');
  const images = [
    '/img/RedBull-Instagram-Post-45.png',
    '/img/emirates-airpline-in-flight.png',
    '/img/header-bg.png',
    '/img/kitchen.png',
    '/img/spaseekers.png'
  ];

  const [currentImage, setCurrentImage] = useState(images[1]);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [internationalOpen, setInternationalOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [blogResourcesOpen, setBlogResourcesOpen] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setCurrentImage(randomImage);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY;

      // Show glass only when scrolling UP and not at the very top
      setIsScrolledUp(scrollingUp && currentScrollY > 10);

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative z-50 w-full transition-all px-4 sm:px-2">
      {/* Announcement Bar */}
      <div className="mx-auto max-w-[1400px] w-full bg-[#b2f5ea] rounded-full flex items-center justify-center py-1.5 px-6 mt-2">
        <span className="text-sm font-semibold text-gray-800 flex items-center gap-2">
          🚨 The Category Leaderboard - Live Now
        </span>
      </div>

      <div className="relative w-full overflow-hidden rounded-3xl mt-2">
        {/* Blurred Background Wrapper to prevent bleeding */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[10px] brightness-75 scale-105 transition-all duration-1000"
            style={{ backgroundImage: `url('${currentImage}')` }}
          />
        </div>

        {/* Navbar */}
        <div
          className={`mx-auto flex max-w-full items-center justify-between py-3 px-4 sm:px-6 my-2 rounded-full transition-all duration-300 ${isScrolledUp
            ? 'bg-white/10 backdrop-blur-md border border-white/20'
            : 'bg-transparent border border-transparent'
            }`}
        >

          {/* Logo */}
          <a href="https://riseatseven.com/?msID=85f68c76-1ceb-4e06-a974-ece05bb6abf3" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 168 21"
              className="h-5 w-auto fill-white"
            >
              <path d="M91.3152 5.40061C91.3152 3.94241 92.5306 2.67359 93.9881 2.67359C95.7162 2.67359 96.797 3.83419 96.797 5.56225H99.7127C99.7127 2.1873 97.3096 0 93.9874 0C90.9371 0 88.3988 2.32257 88.3988 5.42766C88.3988 9.31596 90.883 10.2344 93.9874 11.4221C95.6627 12.07 97.2007 12.5563 97.2007 14.6895C97.2007 16.634 95.9867 18.0651 93.9874 18.0651C91.8813 18.0651 90.7477 16.3905 90.7477 14.446H87.832C87.832 18.0651 90.3426 20.7381 93.9874 20.7381C97.6323 20.7381 100.118 18.2816 100.118 14.6895C100.118 7.10161 91.3145 9.64061 91.3145 5.40061H91.3152Z" />
              <path d="M109.209 4.99609C104.834 4.99609 101.539 8.53405 101.539 12.8539C101.539 17.1737 104.888 20.738 109.155 20.738C112.422 20.738 115.203 18.713 116.337 15.662H113.529C112.718 17.2278 111.017 18.1733 109.262 18.1733C106.806 18.1733 104.915 16.4182 104.348 14.0963H116.743C116.797 13.6371 116.823 13.1508 116.823 12.6922C116.823 8.47926 113.447 4.99609 109.209 4.99609ZM104.348 11.9361C104.509 9.47823 106.751 7.56147 109.181 7.56147C111.611 7.56147 113.853 9.47823 114.014 11.9361H104.348Z" />
              <path d="M127.476 5.40039L123.575 16.0941L119.673 5.40039H116.676L122.617 20.3598H124.588L130.475 5.40039H127.476Z" />
              <path d="M137.942 4.99609C133.567 4.99609 130.273 8.53405 130.273 12.8539C130.273 17.1737 133.621 20.738 137.888 20.738C141.155 20.738 143.936 18.713 145.071 15.662H142.262C141.453 17.2278 139.75 18.1733 137.996 18.1733C135.538 18.1733 133.649 16.4182 133.081 14.0963H145.476C145.53 13.6371 145.556 13.1508 145.556 12.6922C145.556 8.47926 142.182 4.99609 137.942 4.99609ZM133.081 11.9361C133.243 9.47823 135.484 7.56147 137.915 7.56147C140.347 7.56147 142.586 9.47823 142.749 11.9361H133.081Z" />
              <path d="M147.473 8.21195V8.69013V20.3618H150.032V10.1815L167.216 20.3618V17.2405L147.473 5.40039V8.21195Z" />
              <path d="M67.8431 7.50804H67.789C66.6818 5.80635 64.7103 4.99609 62.713 4.99609C58.1775 4.99609 54.7734 8.3981 54.7734 12.935C54.7734 17.4719 58.2296 20.7387 62.713 20.7387C64.7651 20.7387 66.7359 19.8473 67.789 18.0387H67.8431V20.3606H70.652V5.40122H67.8431V7.50804ZM62.686 18.1733C59.823 18.1733 57.5823 15.7168 57.5823 12.9073C57.5823 10.0978 59.7425 7.56079 62.7124 7.56079C65.6822 7.56079 67.8972 9.90973 67.8972 12.9073C67.8972 15.9048 65.6024 18.1733 62.6867 18.1733H62.686Z" />
              <path d="M77.5832 0.378906H74.7736V5.40144H72.75V7.96681H74.7736V20.3608H77.5832V7.96681H80.0403V5.40144H77.5832V0.378906Z" />
              <path d="M18.3089 0.378906H15.5V3.2953H18.3089V0.378906Z" />
              <path d="M18.3089 5.02344H15.5V19.9828H18.3089V5.02344Z" />
              <path d="M25.8409 10.7205C24.8142 10.3959 23.5183 10.0996 23.5183 8.77603C23.5183 7.77639 24.3279 7.18256 25.2728 7.18256C26.4077 7.18256 27.0549 7.91166 27.1895 8.99178H29.9984C29.9443 6.39935 27.9727 4.61719 25.4087 4.61719C22.8447 4.61719 20.7088 6.3723 20.7088 8.93767C20.7088 14.2307 27.5412 12.6102 27.5412 15.743C27.5412 17.0389 26.6227 17.7951 25.381 17.7951C23.707 17.7951 22.9516 16.6074 22.8427 15.0681H20.0352C20.0352 17.417 21.1951 19.2269 23.4094 20.0094C24.0303 20.2252 24.6789 20.3604 25.3262 20.3604C28.1892 20.3604 30.3494 18.5248 30.3494 15.5807C30.3494 12.6366 28.296 11.476 25.8402 10.7205H25.8409Z" />
              <path d="M39.3637 4.61719C34.9891 4.61719 31.6953 8.15514 31.6953 12.475C31.6953 16.7948 35.0432 20.3591 39.3096 20.3591C42.577 20.3591 45.3581 18.3341 46.493 15.2831H43.6842C42.8746 16.8489 41.1722 17.7944 39.4178 17.7944C36.96 17.7944 35.0709 16.0393 34.5028 13.7174H46.8975C46.9516 13.2582 46.978 12.7719 46.978 12.3133C46.978 8.10036 43.6037 4.61719 39.3637 4.61719ZM34.5028 11.5565C34.6651 9.09864 36.9059 7.18188 39.3373 7.18188C41.7688 7.18188 44.0075 9.09932 44.1705 11.5565H34.5028Z" />
              <path d="M9.55945 12.1512C12.1519 11.2327 13.3395 9.09953 13.3395 6.39957C13.3395 4.67151 12.7728 2.88934 11.5046 1.67395C10.0998 0.297591 8.07419 0 6.18314 0H0V19.9826H2.91572V13.8069L13.3389 19.9826V16.8606L6.22575 12.5949L7.61496 12.5293C8.26222 12.5293 8.96359 12.3676 9.55809 12.1512H9.55945ZM4.91499 10.3156H2.91572V2.67359H5.99444C8.317 2.67359 10.4231 3.86192 10.4231 6.40024C10.4231 9.5865 7.50742 10.3156 4.91499 10.3156Z" />
              <path d="M164.759 7.94414L166.061 8.71517V8.08955L165.395 7.69051C165.437 7.68172 165.48 7.66954 165.521 7.65466C165.869 7.53157 166.061 7.24209 166.061 6.84034C166.061 6.57725 165.966 6.33579 165.801 6.17753C165.583 5.9638 165.277 5.93945 165.065 5.93945H164.191V8.63807H164.758V7.94346L164.759 7.94414ZM164.908 7.22856H164.76V6.47715H165.043C165.261 6.47715 165.495 6.57251 165.495 6.84102C165.495 7.10953 165.297 7.22856 164.908 7.22856H164.908Z" />
              <path d="M165.127 10.1622C166.714 10.1622 168 8.87583 168 7.28913C168 5.70242 166.714 4.41602 165.127 4.41602C163.54 4.41602 162.254 5.70242 162.254 7.28913C162.254 8.87583 163.54 10.1622 165.127 10.1622ZM165.127 5.22763C166.264 5.22763 167.189 6.15219 167.189 7.28913C167.189 8.42606 166.264 9.35062 165.127 9.35062C163.99 9.35062 163.066 8.42606 163.066 7.28913C163.066 6.15219 163.99 5.22763 165.127 5.22763Z" />
            </svg>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center 4 relative px-4">

            {/* Services — with dropdown */}
            <div
              className="static"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-md font-semibold text-white px-4 py-1.5 hover:bg-white hover:text-gray-900 rounded-full transition-all">
                Services +
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full z-[999] pt-2"
                  style={{ minWidth: 'max-content', left: '50%', transform: 'translateX(-50%)', marginLeft: 'auto', marginRight: 'auto' }}
                >
                  <div
                    className="bg-white rounded-2xl shadow-2xl flex items-center gap-6 p-7 border border-gray-100"
                    style={{ animation: 'dropIn 0.18s ease' }}
                  >
                    <div className="flex-1">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-5">
                        Core Services
                      </p>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {[
                          { name: 'Search & Growth Strategy', img: '/img/services/three-men.png', href: 'https://riseatseven.com/services/strategy-growth/' },
                          { name: 'Digital PR', img: '/img/services/man-white-shirt.png', href: 'https://riseatseven.com/services/digital-pr/' },
                          { name: 'Onsite SEO', img: '/img/services/woman-presentation.png', href: 'https://riseatseven.com/services/onsite-seo/' },
                          { name: 'Social Media & Campaigns', img: '/img/services/two-men.png', href: 'https://riseatseven.com/services/social/' },
                          { name: 'Content Experience', img: '/img/services/man-card.png', href: 'https://riseatseven.com/services/content-experience/' },
                          { name: 'Data & Insights', img: '/img/services/girl-camera.png', href: 'https://riseatseven.com/services/data-insights/' },
                          { name: 'B2B Marketing', img: '/img/services/data.png', href: 'https://riseatseven.com/services/b2b-marketing/' },
                          { name: 'Social SEO/Search', img: '/img/services/screenshots.png', href: 'https://riseatseven.com/services/social-seo-tiktok-youtube/' },
                        ].map((service) => (
                          <a
                            key={service.name}
                            href={service.href || "#"}
                            onMouseEnter={() => setActiveServiceImg(service.img)}
                            className="group relative overflow-hidden flex items-center whitespace-nowrap text-[20px] font-bold text-gray-900 py-2 h-[1.5em] font-['Suisse_Intl',Helvetica,Arial,sans-serif]"
                          >
                            {/* Default text - slides up and out on hover */}
                            <span className="transition duration-300 pointer-fine:group-hover:-translate-y-8 block">
                              {service.name}
                            </span>
                            {/* Hover text - slides up into view on hover */}
                            <span className="transition duration-300 absolute top-0 left-0 translate-y-8 pointer-fine:group-hover:translate-y-0 text-black-600 block">
                              {service.name}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="w-64 flex flex-col bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                      <div className="flex-1">
                        <div className="nav-options">
                          <div className="rounded-md border border-gray-100 overflow-hidden shadow-sm">
                            <img
                              key={activeServiceImg}
                              src={activeServiceImg}
                              alt="Service Preview"
                              className="w-full h-auto object-cover transition-opacity duration-300"
                              style={{ animation: 'fadeIn 0.3s ease' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries — with dropdown */}
            <div
              className="static"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-md font-semibold text-white px-4 py-1.5 hover:bg-white hover:text-gray-900 rounded-full transition-all">
                Industries +
              </button>

              {industriesOpen && (
                <div
                  className="absolute top-full z-[999] pt-2"
                  style={{ minWidth: 'max-content', left: '50%', transform: 'translateX(-50%)', marginLeft: 'auto', marginRight: 'auto' }}
                >
                  <div
                    className="bg-white rounded-2xl shadow-2xl flex items-center gap-6 p-7 border border-gray-100"
                    style={{ animation: 'dropIn 0.18s ease' }}
                  >
                    <div className="flex-1">
                      <div className="grid grid-cols-1 gap-x-2 gap-y-1">
                        {[
                          { name: 'B2B Marketing', img: '/img/services/two-men.png', href: 'https://riseatseven.com/services/b2b-marketing/' }
                        ].map((service) => (
                          <a
                            key={service.name}
                            href={service.href || "#"}
                            onMouseEnter={() => setActiveServiceImg(service.img)}
                            className="group relative overflow-hidden flex items-center whitespace-nowrap text-[20px] font-bold text-gray-900 py-2 h-[1.5em] font-['Suisse_Intl',Helvetica,Arial,sans-serif]"
                          >
                            {/* Default text - slides up and out on hover */}
                            <span className="transition duration-300 pointer-fine:group-hover:-translate-y-8 block">
                              {service.name}
                            </span>
                            {/* Hover text - slides up into view on hover */}
                            <span className="transition duration-300 absolute top-0 left-0 translate-y-8 pointer-fine:group-hover:translate-y-0 text-black-600 block">
                              {service.name}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="w-64 flex flex-col bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                      <div className="flex-1">
                        <div className="nav-options">
                          <div className="rounded-md border border-gray-100 overflow-hidden shadow-sm">
                            <img
                              key={activeServiceImg}
                              src={activeServiceImg}
                              alt="Service Preview"
                              className="w-full h-auto object-cover transition-opacity duration-300"
                              style={{ animation: 'fadeIn 0.3s ease' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* International — with dropdown */}
            <div
              className="static"
              onMouseEnter={() => setInternationalOpen(true)}
              onMouseLeave={() => setInternationalOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-md font-semibold text-white px-4 py-1.5 hover:bg-white hover:text-gray-900 rounded-full transition-all">
                International +
              </button>

              {internationalOpen && (
                <div
                  className="absolute top-full z-[999] pt-2"
                  style={{ minWidth: 'max-content', left: '50%', transform: 'translateX(-50%)', marginLeft: 'auto', marginRight: 'auto' }}
                >
                  <div
                    className="bg-white rounded-2xl shadow-2xl flex items-center gap-6 p-7 border border-gray-100"
                    style={{ animation: 'dropIn 0.18s ease' }}
                  >
                    <div className="flex-1">
                      <div className="grid grid-cols-1 gap-x-4 gap-y-1">
                        {[
                          { name: 'US Digital PR', img: '/img/services/three-men.png', href: 'https://riseatseven.com/international/us-digital-pr/' },
                          { name: 'Spain Digital PR', img: '/img/services/spain.png', href: 'https://riseatseven.com/international/us-digital-pr/spain-digital-pr/' },
                          { name: 'Germany Digital PR', img: '/img/services/germany.png', href: 'https://riseatseven.com/germany-digital-pr/' },
                          { name: 'Netherlands Digital PR', img: '/img/services/netherlands.png', href: 'https://riseatseven.com/netherlands-digital-pr/' }
                        ].map((service) => (
                          <a
                            key={service.name}
                            href={service.href || "#"}
                            onMouseEnter={() => setActiveServiceImg(service.img)}
                            className="group relative overflow-hidden flex items-center whitespace-nowrap text-[20px] font-bold text-gray-900 py-2 h-[1.5em] font-['Suisse_Intl',Helvetica,Arial,sans-serif]"
                          >
                            {/* Default text - slides up and out on hover */}
                            <span className="transition duration-300 pointer-fine:group-hover:-translate-y-8 block">
                              {service.name}
                            </span>
                            {/* Hover text - slides up into view on hover */}
                            <span className="transition duration-300 absolute top-0 left-0 translate-y-8 pointer-fine:group-hover:translate-y-0 text-black-600 block">
                              {service.name}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="w-64 flex flex-col bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                      <div className="flex-1">
                        <div className="nav-options">
                          <div className="rounded-md border border-gray-100 overflow-hidden shadow-sm">
                            <img
                              key={activeServiceImg}
                              src={activeServiceImg}
                              alt="Service Preview"
                              className="w-full h-auto object-cover transition-opacity duration-300"
                              style={{ animation: 'fadeIn 0.3s ease' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* About + — with dropdown */}
            <div
              className="static"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-md font-semibold text-white px-4 py-1.5 hover:bg-white hover:text-gray-900 rounded-full transition-all">
                About +
              </button>

              {aboutOpen && (
                <div
                  className="absolute top-full z-[999] pt-2"
                  style={{ minWidth: 'max-content', left: '50%', transform: 'translateX(-50%)', marginLeft: 'auto', marginRight: 'auto' }}
                >
                  <div
                    className="bg-white rounded-2xl shadow-2xl flex items-center gap-6 p-7 border border-gray-100"
                    style={{ animation: 'dropIn 0.18s ease' }}
                  >
                    <div className="flex-1">
                      <div className="grid grid-cols-1 gap-x-4 gap-y-1">
                        {[
                          { name: 'About Us', img: '/img/services/about-us.png', href: 'https://riseatseven.com/about/' },
                          { name: 'Meet The Risers', img: '/img/services/three-men.png', href: 'https://riseatseven.com/meet-the-team/' },
                          { name: 'Culture', img: '/img/services/culture.png', href: 'https://riseatseven.com/culture/' },
                          { name: 'Testimonials', img: '/img/services/pr-week.png', href: 'https://riseatseven.com/testimonials/' }
                        ].map((service) => (
                          <a
                            key={service.name}
                            href={service.href || "#"}
                            onMouseEnter={() => setActiveServiceImg(service.img)}
                            className="group relative overflow-hidden flex items-center whitespace-nowrap text-[20px] font-bold text-gray-900 py-2 h-[1.5em] font-['Suisse_Intl',Helvetica,Arial,sans-serif]"
                          >
                            {/* Default text - slides up and out on hover */}
                            <span className="transition duration-300 pointer-fine:group-hover:-translate-y-8 block">
                              {service.name}
                            </span>
                            {/* Hover text - slides up into view on hover */}
                            <span className="transition duration-300 absolute top-0 left-0 translate-y-8 pointer-fine:group-hover:translate-y-0 text-black-600 block">
                              {service.name}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="w-64 flex flex-col bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                      <div className="flex-1">
                        <div className="nav-options">
                          <div className="rounded-md border border-gray-100 overflow-hidden shadow-sm">
                            <img
                              key={activeServiceImg}
                              src={activeServiceImg}
                              alt="Service Preview"
                              className="w-full h-auto object-cover transition-opacity duration-300"
                              style={{ animation: 'fadeIn 0.3s ease' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Nav Links */}
            {[
              { name: 'Work', href: 'https://riseatseven.com/work/' },
              { name: 'Careers', href: 'https://riseatseven.com/careers/' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-white px-4 py-1.5 rounded-full hover:bg-white hover:text-gray-900 transition-all whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}

            {/* Blog & Resources + — with dropdown */}
            <div
              className="static"
              onMouseEnter={() => setBlogResourcesOpen(true)}
              onMouseLeave={() => setBlogResourcesOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-md font-semibold text-white px-4 py-1.5 hover:bg-white hover:text-gray-900 rounded-full transition-all">
                Blog & Resources +
              </button>

              {blogResourcesOpen && (
                <div
                  className="absolute top-full z-[999] pt-2"
                  style={{ minWidth: 'max-content', left: '50%', transform: 'translateX(-50%)', marginLeft: 'auto', marginRight: 'auto' }}
                >
                  <div
                    className="bg-white rounded-2xl shadow-2xl flex items-center gap-6 p-7 border border-gray-100"
                    style={{ animation: 'dropIn 0.18s ease' }}
                  >
                    <div className="flex-1">
                      <div className="grid grid-cols-1 gap-x-4 gap-y-1">
                        {[
                          { name: 'Blog', img: '/img/services/blog.png', href: 'https://riseatseven.com/blog/' },
                          { name: 'Category Leaderboard', img: '/img/services/leaderboard.png', href: 'https://riseatseven.com/category-leaderboard/' },
                          { name: 'Multi-Channel Search Report', img: '/img/services/report.png', href: 'https://riseatseven.com/multi-channel-search-report-2026-/' }
                        ].map((service) => (
                          <a
                            key={service.name}
                            href={service.href || "#"}
                            onMouseEnter={() => setActiveServiceImg(service.img)}
                            className="group relative overflow-hidden flex items-center whitespace-nowrap text-[20px] font-bold text-gray-900 py-2 h-[1.5em] font-['Suisse_Intl',Helvetica,Arial,sans-serif]"
                          >
                            {/* Default text - slides up and out on hover */}
                            <span className="transition duration-300 pointer-fine:group-hover:-translate-y-8 block">
                              {service.name}
                            </span>
                            {/* Hover text - slides up into view on hover */}
                            <span className="transition duration-300 absolute top-0 left-0 translate-y-8 pointer-fine:group-hover:translate-y-0 text-black-600 block">
                              {service.name}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="w-64 flex flex-col bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                      <div className="flex-1">
                        <div className="nav-options">
                          <div className="rounded-md border border-gray-100 overflow-hidden shadow-sm">
                            <img
                              key={activeServiceImg}
                              src={activeServiceImg}
                              alt="Service Preview"
                              className="w-full h-auto object-cover transition-opacity duration-300"
                              style={{ animation: 'fadeIn 0.3s ease' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {[
              { name: 'Webinar', href: 'https://riseatseven.com/webinars/' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-white px-4 py-1.5 rounded-full hover:bg-white hover:text-gray-900 transition-all whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a href="https://riseatseven.com/connect-with-us/" className="hidden sm:block rounded-full bg-white px-5 py-2 text-sm font-bold text-black hover:bg-gray-100 transition-all shadow-md">
              Get In Touch ↗
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] backdrop-blur-md flex items-center justify-center p-3 animate-in fade-in duration-300">
            <div className="bg-[#1a1a1a]/95 w-full h-full max-w-md rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between px-4 py-2.5">
              
              <div className="w-full flex flex-col gap-y-5">
                {/* Header inside mobile menu */}
                <div className="flex items-center justify-between p-6 pb-0">
                  <a href="https://riseatseven.com/?msID=85f68c76-1ceb-4e06-a974-ece05bb6abf3" onClick={() => setMobileMenuOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 21" className="h-4 w-auto fill-white">
                      <path d="M91.3152 5.40061C91.3152 3.94241 92.5306 2.67359 93.9881 2.67359C95.7162 2.67359 96.797 3.83419 96.797 5.56225H99.7127C99.7127 2.1873 97.3096 0 93.9874 0C90.9371 0 88.3988 2.32257 88.3988 5.42766C88.3988 9.31596 90.883 10.2344 93.9874 11.4221C95.6627 12.07 97.2007 12.5563 97.2007 14.6895C97.2007 16.634 95.9867 18.0651 93.9874 18.0651C91.8813 18.0651 90.7477 16.3905 90.7477 14.446H87.832C87.832 18.0651 90.3426 20.7381 93.9874 20.7381C97.6323 20.7381 100.118 18.2816 100.118 14.6895C100.118 7.10161 91.3145 9.64061 91.3145 5.40061H91.3152Z" />
                      <path d="M109.209 4.99609C104.834 4.99609 101.539 8.53405 101.539 12.8539C101.539 17.1737 104.888 20.738 109.155 20.738C112.422 20.738 115.203 18.713 116.337 15.662H113.529C112.718 17.2278 111.017 18.1733 109.262 18.1733C106.806 18.1733 104.915 16.4182 104.348 14.0963H116.743C116.797 13.6371 116.823 13.1508 116.823 12.6922C116.823 8.47926 113.447 4.99609 109.209 4.99609ZM104.348 11.9361C104.509 9.47823 106.751 7.56147 109.181 7.56147C111.611 7.56147 113.853 9.47823 114.014 11.9361H104.348Z" />
                      <path d="M127.476 5.40039L123.575 16.0941L119.673 5.40039H116.676L122.617 20.3598H124.588L130.475 5.40039H127.476Z" />
                      <path d="M137.942 4.99609C133.567 4.99609 130.273 8.53405 130.273 12.8539C130.273 17.1737 133.621 20.738 137.888 20.738C141.155 20.738 143.936 18.713 145.071 15.662H142.262C141.453 17.2278 139.75 18.1733 137.996 18.1733C135.538 18.1733 133.649 16.4182 133.081 14.0963H145.476C145.53 13.6371 145.556 13.1508 145.556 12.6922C145.556 8.47926 142.182 4.99609 137.942 4.99609ZM133.081 11.9361C133.243 9.47823 135.484 7.56147 137.915 7.56147C140.347 7.56147 142.586 9.47823 142.749 11.9361H133.081Z" />
                      <path d="M147.473 8.21195V8.69013V20.3618H150.032V10.1815L167.216 20.3618V17.2405L147.473 5.40039V8.21195Z" />
                      <path d="M67.8431 7.50804H67.789C66.6818 5.80635 64.7103 4.99609 62.713 4.99609C58.1775 4.99609 54.7734 8.3981 54.7734 12.935C54.7734 17.4719 58.2296 20.7387 62.713 20.7387C64.7651 20.7387 66.7359 19.8473 67.789 18.0387H67.8431V20.3606H70.652V5.40122H67.8431V7.50804ZM62.686 18.1733C59.823 18.1733 57.5823 15.7168 57.5823 12.9073C57.5823 10.0978 59.7425 7.56079 62.7124 7.56079C65.6822 7.56079 67.8972 9.90973 67.8972 12.9073C67.8972 15.9048 65.6024 18.1733 62.6867 18.1733H62.686Z" />
                      <path d="M77.5832 0.378906H74.7736V5.40144H72.75V7.96681H74.7736V20.3608H77.5832V7.96681H80.0403V5.40144H77.5832V0.378906Z" />
                      <path d="M18.3089 0.378906H15.5V3.2953H18.3089V0.378906Z" />
                      <path d="M18.3089 5.02344H15.5V19.9828H18.3089V5.02344Z" />
                      <path d="M25.8409 10.7205C24.8142 10.3959 23.5183 10.0996 23.5183 8.77603C23.5183 7.77639 24.3279 7.18256 25.2728 7.18256C26.4077 7.18256 27.0549 7.91166 27.1895 8.99178H29.9984C29.9443 6.39935 27.9727 4.61719 25.4087 4.61719C22.8447 4.61719 20.7088 6.3723 20.7088 8.93767C20.7088 14.2307 27.5412 12.6102 27.5412 15.743C27.5412 17.0389 26.6227 17.7951 25.381 17.7951C23.707 17.7951 22.9516 16.6074 22.8427 15.0681H20.0352C20.0352 17.417 21.1951 19.2269 23.4094 20.0094C24.0303 20.2252 24.6789 20.3604 25.3262 20.3604C28.1892 20.3604 30.3494 18.5248 30.3494 15.5807C30.3494 12.6366 28.296 11.476 25.8402 10.7205H25.8409Z" />
                      <path d="M39.3637 4.61719C34.9891 4.61719 31.6953 8.15514 31.6953 12.475C31.6953 16.7948 35.0432 20.3591 39.3096 20.3591C42.577 20.3591 45.3581 18.3341 46.493 15.2831H43.6842C42.8746 16.8489 41.1722 17.7944 39.4178 17.7944C36.96 17.7944 35.0709 16.0393 34.5028 13.7174H46.8975C46.9516 13.2582 46.978 12.7719 46.978 12.3133C46.978 8.10036 43.6037 4.61719 39.3637 4.61719ZM34.5028 11.5565C34.6651 9.09864 36.9059 7.18188 39.3373 7.18188C41.7688 7.18188 44.0075 9.09932 44.1705 11.5565H34.5028Z" />
                      <path d="M9.55945 12.1512C12.1519 11.2327 13.3395 9.09953 13.3395 6.39957C13.3395 4.67151 12.7728 2.88934 11.5046 1.67395C10.0998 0.297591 8.07419 0 6.18314 0H0V19.9826H2.91572V13.8069L13.3389 19.9826V16.8606L6.22575 12.5949L7.61496 12.5293C8.26222 12.5293 8.96359 12.3676 9.55809 12.1512H9.55945ZM4.91499 10.3156H2.91572V2.67359H5.99444C8.317 2.67359 10.4231 3.86192 10.4231 6.40024C10.4231 9.5865 7.50742 10.3156 4.91499 10.3156Z" />
                      <path d="M164.759 7.94414L166.061 8.71517V8.08955L165.395 7.69051C165.437 7.68172 165.48 7.66954 165.521 7.65466C165.869 7.53157 166.061 7.24209 166.061 6.84034C166.061 6.57725 165.966 6.33579 165.801 6.17753C165.583 5.9638 165.277 5.93945 165.065 5.93945H164.191V8.63807H164.758V7.94346L164.759 7.94414ZM164.908 7.22856H164.76V6.47715H165.043C165.261 6.47715 165.495 6.57251 165.495 6.84102C165.495 7.10953 165.297 7.22856 164.908 7.22856H164.908Z" />
                      <path d="M165.127 10.1622C166.714 10.1622 168 8.87583 168 7.28913C168 5.70242 166.714 4.41602 165.127 4.41602C163.54 4.41602 162.254 5.70242 162.254 7.28913C162.254 8.87583 163.54 10.1622 165.127 10.1622ZM165.127 5.22763C166.264 5.22763 167.189 6.15219 167.189 7.28913C167.189 8.42606 166.264 9.35062 165.127 9.35062C163.99 9.35062 163.066 8.42606 163.066 7.28913C163.066 6.15219 163.99 5.22763 165.127 5.22763Z" />
                    </svg>
                  </a>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white/70 hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
  
                {/* Navigation Items */}
                <nav className="flex flex-col px-4 gap-y-1">
                {[
                  { 
                    name: 'Services', 
                    hasDropdown: true,
                    subItems: [
                      { name: 'Search & Growth Strategy', href: 'https://riseatseven.com/services/strategy-growth/' },
                      { name: 'Onsite SEO', href: 'https://riseatseven.com/services/onsite-seo/' },
                      { name: 'Content Experience', href: 'https://riseatseven.com/services/content-experience/' },
                      { name: 'B2B Marketing', href: 'https://riseatseven.com/services/b2b-marketing/' },
                      { name: 'Digital PR', href: 'https://riseatseven.com/services/digital-pr/' },
                      { name: 'Social Media & Campaigns', href: 'https://riseatseven.com/services/social/' },
                      { name: 'Data & Insights', href: 'https://riseatseven.com/services/data-insights/' },
                      { name: 'Social SEO/Search', href: 'https://riseatseven.com/services/social-seo-tiktok-youtube/' }
                    ]
                  },
                  { 
                    name: 'Industries', 
                    hasDropdown: true,
                    subItems: [
                      { name: 'B2B Marketing', href: 'https://riseatseven.com/services/b2b-marketing/' }
                    ]
                  },
                  { 
                    name: 'International', 
                    hasDropdown: true,
                    subItems: [
                      { name: 'US Digital PR', href: 'https://riseatseven.com/international/us-digital-pr/' },
                      { name: 'Spain Digital PR', href: 'https://riseatseven.com/international/us-digital-pr/spain-digital-pr/' },
                      { name: 'Germany Digital PR', href: 'https://riseatseven.com/germany-digital-pr/' },
                      { name: 'Netherlands Digital PR', href: 'https://riseatseven.com/netherlands-digital-pr/' }
                    ]
                  },
                  { 
                    name: 'About', 
                    hasDropdown: true,
                    subItems: [
                      { name: 'About Us', href: 'https://riseatseven.com/about/' },
                      { name: 'Meet The Risers', href: 'https://riseatseven.com/meet-the-team/' },
                      { name: 'Culture', href: 'https://riseatseven.com/culture/' },
                      { name: 'Testimonials', href: 'https://riseatseven.com/testimonials/' }
                    ]
                  },
                  { name: 'Work', hasDropdown: false, href: 'https://riseatseven.com/work/' },
                  { name: 'Careers', hasDropdown: false, href: 'https://riseatseven.com/careers/' },
                  { 
                    name: 'Blog & Resources', 
                    hasDropdown: true,
                    subItems: [
                      { name: 'Blog', href: 'https://riseatseven.com/blog/' },
                      { name: 'Category Leaderboard', href: 'https://riseatseven.com/category-leaderboard/' },
                      { name: 'Multi-Channel Search Report', href: 'https://riseatseven.com/multi-channel-search-report-2026-/' }
                    ]
                  },
                  { name: 'Webinar', hasDropdown: false, href: 'https://riseatseven.com/webinars/' },
                ].map((item, idx) => (
                  <div key={item.name} className="w-full border-b border-white/20 pb-3 first:border-t first:pt-3">
                    <div
                      className="flex items-center justify-between py-1 cursor-pointer group"
                      onClick={() => {
                        if (item.hasDropdown) {
                          setExpandedItem(expandedItem === item.name ? null : item.name);
                        } else {
                          window.location.href = item.href || '#';
                          setMobileMenuOpen(false);
                        }
                      }}
                    >
                      <span className="text-3xl md:text-5xl tracking-tight font-medium text-white group-hover:opacity-70 transition-all">
                        {item.name}
                      </span>
                      {item.hasDropdown && (
                        <div className={`w-6 h-6 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${expandedItem === item.name ? 'rotate-180 bg-white/10' : ''}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    {/* Accordion Content */}
                    {item.hasDropdown && item.subItems && (
                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedItem === item.name ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                      >
                        <div className="flex flex-col gap-y-2 pb-2">
                          {item.subItems.map((sub) => (
                            <a 
                              key={typeof sub === 'string' ? sub : sub.name} 
                              href={typeof sub === 'string' ? '#' : sub.href} 
                              className="text-xl font-medium text-white hover:text-white/70 transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {typeof sub === 'string' ? sub : sub.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                </nav>
              </div>

              <div className="w-full mt-auto py-6 flex justify-center">
                <a
                  href="https://riseatseven.com/connect-with-us/"
                  className="w-full group inline-flex justify-center items-center gap-x-2 text-base px-6 py-3 rounded-3xl bg-white text-gray-900 font-medium transition-all hover:rounded-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="relative overflow-hidden h-6 flex flex-col">
                    <span className="transition-transform duration-300 group-hover:-translate-y-6">Get in touch</span>
                    <span className="absolute inset-0 transition-transform duration-300 translate-y-6 group-hover:translate-y-0">Get in touch</span>
                  </span>
                  <i className="fa-regular fa-sharp fa-arrow-up-right text-xs mt-0.5"></i>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Awards Row */}
        <div className="flex flex-col items-center pt-8 pb-2 px-2 sm:px-6">
          <p className="text-white text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-center mb-4">
            #1 Most Recommended<br />Content Marketing Agency
          </p>
          <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-1 sm:gap-x-4 opacity-80">
            <svg viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 sm:w-6 fill-current text-white">
              <path d="M25.826 36.2423C24.1628 35.2302 22.3284 34.9354 20.4357 34.7259C19.6852 34.6204 18.9236 34.4691 18.193 34.2705C17.3545 34.0474 16.5347 33.7576 15.7419 33.4062L16.4438 31.9431C17.2169 30.332 16.5375 28.3991 14.9263 27.6261L14.0759 29.3985C13.5361 30.5234 13.7046 31.805 14.4037 32.7394C13.3196 32.1373 12.3026 31.4146 11.3802 30.5845L12.6328 29.1752C13.8199 27.8396 13.6998 25.7945 12.364 24.6072L11.0579 26.0765C10.0602 27.199 9.98609 28.8225 10.7806 30.0168C10.6575 29.8939 10.5358 29.7692 10.4166 29.6422C9.49052 28.6654 8.6932 27.5814 8.02681 26.4223L9.41226 25.5441C10.9217 24.5875 11.3698 22.5885 10.4131 21.0791L8.75281 22.1315C7.7684 22.7554 7.23555 23.8229 7.24942 24.9087C6.7712 23.8595 6.39118 22.7641 6.11088 21.6429L7.61991 21.1998C9.33444 20.6962 10.3162 18.8982 9.81266 17.1835L7.92644 17.7374C6.85358 18.0523 6.06774 18.8744 5.75319 19.8655C5.57825 18.727 5.50281 17.5732 5.52904 16.4239L7.2633 16.4128C9.05024 16.4013 10.4897 14.9435 10.4782 13.1565L8.5124 13.1691C7.23035 13.1773 6.12736 13.93 5.61055 15.0146C5.73 13.7312 5.98818 12.4645 6.37211 11.2376L8.06062 11.7101C9.78144 12.1916 11.5669 11.1871 12.0486 9.46623L10.1554 8.93641C8.90673 8.58696 7.62424 9.02009 6.83038 9.94142C7.30904 8.72939 7.91213 7.56635 8.62664 6.47593L10.1355 7.40528C11.6568 8.34265 13.6501 7.86898 14.5873 6.3476L12.9135 5.31658C11.788 4.62331 10.4045 4.70229 9.38126 5.40589C9.87033 4.76053 10.4008 4.14639 10.9692 3.56888C11.3054 3.84679 11.7648 3.98423 12.2801 3.86023C12.6898 3.7616 13.1 3.57083 13.4724 3.24067C15.26 1.65751 15.26 0.0708753 15.26 0.0708753C13.0683 -0.225683 11.698 0.452629 10.855 1.28334C10.1931 1.93542 10.3013 2.86694 10.8194 3.42667C10.0988 4.13143 9.44456 4.88605 8.85752 5.68142C9.29 4.30204 8.75303 2.75334 7.46577 1.96057L5.792 0.929551C4.85463 2.45093 5.3283 4.44425 6.84968 5.3814L8.39642 6.33437C7.60321 7.51085 6.94961 8.76602 6.43887 10.0721C6.32463 8.76906 5.42108 7.61187 4.087 7.23857L2.19384 6.70876C1.71237 8.42958 2.71694 10.215 4.43776 10.6967L6.05409 11.1491C5.63353 12.4429 5.34824 13.7772 5.2004 15.1264C4.69182 13.9916 3.54916 13.2042 2.22571 13.2127L0.259922 13.2252C0.271412 15.0122 1.72927 16.4516 3.51621 16.4401L5.10068 16.4299C5.03933 17.8386 5.12691 19.2542 5.36667 20.6479C4.57671 19.6171 3.20665 19.1237 1.88601 19.5115L0 20.0652C0.503586 21.7797 2.30158 22.7615 4.01633 22.2579L5.59928 21.7931C5.90776 23.1092 6.35563 24.398 6.94419 25.6345C5.91621 24.9679 4.55222 24.917 3.44966 25.6157L1.78932 26.6681C2.74598 28.1776 4.74494 28.6257 6.25439 27.669L7.56983 26.8353C8.22039 27.9801 9.00038 29.0699 9.91151 30.0823C8.7617 29.767 7.48073 30.1015 6.63528 31.053L5.32916 32.5224C6.66476 33.7095 8.70989 33.5894 9.89721 32.2535L10.9189 31.1042C11.9553 32.0671 13.113 32.8948 14.3532 33.5737C13.0642 33.4781 11.7889 34.1658 11.196 35.4014L10.3455 37.1739C11.9566 37.9469 13.8895 37.2675 14.6625 35.6564L15.4065 34.1057C16.8386 34.7702 18.36 35.2451 19.9167 35.5122C20.2867 35.5738 20.73 35.6432 21.0908 35.6865C23.2018 35.9542 24.9211 36.55 26.5574 37.9224L27.162 37.1667C26.7397 36.8346 26.2964 36.5207 25.8264 36.2426L25.826 36.2423Z" />
            </svg>
            <img src="/img/services/global-search-awards.png" alt="Global Search Awards" className="h-3 sm:h-4 w-auto object-contain brightness-0 invert px-1 sm:px-2" />
            <img src="/img/services/mask-group.png" alt="The Drum" className="h-3 sm:h-4 w-auto object-contain brightness-0 invert px-1 sm:px-2" />
            <img src="/img/services/ukSocial-Media-Awards-White.png" alt="UK Social Media Awards" className="h-3 sm:h-4 w-auto object-contain brightness-0 invert px-1 sm:px-2" />
            <img src="/img/services/uk-Content-Awards-White.png" alt="Content Awards" className="h-3 sm:h-4 w-auto object-contain brightness-0 invert px-1 sm:px-2" />
            <svg viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 sm:w-6 fill-current text-white">
              <path d="M26.1158 19.5111C24.7952 19.1232 23.4251 19.6166 22.6352 20.6472C22.8747 19.2535 22.9627 17.8379 22.9011 16.4293L24.4854 16.4395C26.2723 16.451 27.7302 15.0115 27.7417 13.2246L25.7759 13.212C24.4527 13.2036 23.31 13.9907 22.8014 15.1256C22.6536 13.7763 22.3683 12.4422 21.9477 11.1485L23.5641 10.6963C25.2849 10.2148 26.2897 8.42914 25.808 6.70832L23.9148 7.23814C22.5807 7.61144 21.6772 8.76862 21.563 10.0717C21.0522 8.76559 20.3988 7.51042 19.6054 6.33416L21.1524 5.38118C22.6737 4.44381 23.1474 2.45071 22.21 0.929334L20.5363 1.96035C19.249 2.75334 18.712 4.30204 19.1447 5.68164C18.5577 4.88627 17.9034 4.13143 17.1826 3.42667C17.701 2.86715 17.8091 1.93542 17.1473 1.28334C16.304 0.452629 14.9337 -0.225683 12.7423 0.0708753C12.7423 0.0708753 12.7423 1.65751 14.5294 3.24067C14.9021 3.57083 15.312 3.7616 15.7217 3.86023C16.236 3.98402 16.6942 3.84723 17.0302 3.57083C17.5991 4.14834 18.1306 4.76183 18.621 5.40611C17.5976 4.70222 16.2138 4.62309 15.0883 5.31658L13.4145 6.3476C14.3519 7.86898 16.345 8.34265 17.8664 7.40528L19.3773 6.47441C19.4378 6.56633 19.4977 6.6589 19.5564 6.7519C20.2139 7.76709 20.7591 8.8458 21.1931 9.96678C20.401 9.0279 19.1064 8.58371 17.8464 8.93641L15.9533 9.46623C16.4347 11.187 18.2204 12.1918 19.9412 11.7101L21.6321 11.2369C22.0045 12.4557 22.2521 13.713 22.3759 14.9829C21.8528 13.9153 20.7589 13.1771 19.4894 13.1689L17.5236 13.1563C17.5122 14.9432 18.9516 16.4011 20.7385 16.4126L22.4635 16.4236C22.491 17.5726 22.4186 18.7241 22.2469 19.8597C21.931 18.8711 21.1461 18.0517 20.0754 17.7374L18.1892 17.1835C17.6856 18.898 18.6674 20.6962 20.3819 21.1998L21.8916 21.6431C21.6124 22.7678 21.2324 23.866 20.7522 24.9185C20.7693 23.8294 20.2362 22.7574 19.2488 22.1317L17.5885 21.0793C16.6318 22.5887 17.0799 24.5877 18.5893 25.5443L19.9778 26.4245C19.3121 27.5804 18.5143 28.6628 17.585 29.6426C17.4645 29.7716 17.342 29.8982 17.2173 30.0228C18.0157 28.8279 17.9429 27.2012 16.9435 26.077L15.6374 24.6076C14.3018 25.7947 14.1815 27.8401 15.3686 29.1757L16.6227 30.5865C15.7009 31.4168 14.684 32.1363 13.6001 32.7365C14.2973 31.8024 14.4648 30.5225 13.9255 29.3989L13.075 27.6265C11.4639 28.3996 10.7845 30.3324 11.5576 31.9435L12.2582 33.4038C10.8847 34.0125 9.42985 34.4402 7.94359 34.6704C7.57181 34.7259 7.17748 34.7808 6.79789 34.8215C4.50564 35.0815 2.65757 35.6999 0.839844 37.1671L1.44445 37.9228C1.83574 37.6055 2.23982 37.3104 2.66212 37.0518C3.94872 36.2469 5.39553 35.8909 6.91084 35.6867C8.89049 35.4606 10.8129 34.9293 12.5949 34.1053L13.3393 35.6568C14.1124 37.2679 16.0452 37.9473 17.6563 37.1743L16.8059 35.4019C16.2132 34.1666 14.9387 33.479 13.6502 33.574C14.886 32.8987 16.0406 32.074 17.0831 31.1046L18.1048 32.254C19.2919 33.5896 21.3373 33.7099 22.6729 32.5228L21.3668 31.0534C20.5211 30.102 19.2401 29.7675 18.0905 30.0827C19.0017 29.0701 19.7814 27.9805 20.432 26.8357L21.7474 27.6695C23.2569 28.6261 25.2558 28.178 26.2125 26.6686L24.5522 25.6161C23.4494 24.9172 22.0854 24.9681 21.0574 25.635C21.646 24.3984 22.0939 23.1097 22.4025 21.7934L23.9855 22.2581C25.7 22.7617 27.4982 21.7799 28.0018 20.0654L26.1156 19.5115L26.1158 19.5111Z" />
            </svg>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="flex flex-col items-center text-center px-6 py-6 overflow-hidden">
          <h1 className="text-white font-extrabold leading-none tracking-tight" style={{ fontSize: 'clamp(2.5rem, 8vw, 9rem)' }}>
            We Create
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4" style={{ fontSize: 'clamp(2.5rem, 8vw, 9rem)' }}>
            <span className="text-white font-extrabold leading-none tracking-tight">Category</span>
            <div
              className="inline-flex items-center justify-center rounded-2xl overflow-hidden shadow-xl border border-white/20"
              style={{ width: 'clamp(3rem, 6vw, 8rem)', height: 'clamp(3rem, 6vw, 8rem)' }}
            >
              <img src={currentImage} alt="Client" className="w-full h-full object-cover" />
            </div>
            <span className="text-white font-extrabold leading-none tracking-tight">Leaders</span>
          </div>
          <p className="mt-4 text-white/90 font-semibold text-xl md:text-2xl tracking-wide">
            on every searchable platform
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 pb-8 pt-4 gap-6">
          <p className="hidden md:block text-white/80 text-sm max-w-xs text-center md:text-left">
            Organic media planners creating, distributing & optimising{' '}
            <strong className="text-white">search-first</strong> content for SEO, Social, PR, Ai and LLM search
          </p>
          <p className="text-white/80 text-sm text-center md:text-right">
            <strong className="text-white">4 Global Offices serving</strong><br />
            UK, USA (New York) & EU
          </p>
        </div>
      </div>
    </header>
  );
}