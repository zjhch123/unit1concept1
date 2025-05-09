import {
  BookmarkIcon,
  BuildingIcon,
  ChevronRightIcon,
  ClockIcon,
  CompassIcon,
  FileTextIcon,
  HelpCircleIcon,
  HomeIcon,
  MapPinIcon,
  NewspaperIcon,
  SignpostIcon,
  SmilePlusIcon,
  UsersIcon,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { Separator } from "../../../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const MainContentByAnima = (): JSX.Element => {
  const [isForYouSticky, setIsForYouSticky] = useState(false);
  const [isColumnsSticky, setIsColumnsSticky] = useState(false);
  const forYouRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);
  const mainScrollRef = useRef<HTMLDivElement>(null);
  const [nestedContainerHeight, setNestedContainerHeight] = useState(920);

  useEffect(() => {
    const handleScroll = () => {
      if (forYouRef.current && columnsRef.current) {
        const forYouRect = forYouRef.current.getBoundingClientRect();
        const columnsRect = columnsRef.current.getBoundingClientRect();

        // For You section sticky logic - using window scroll position
        setIsForYouSticky(forYouRect.top <= 0 && forYouRect.bottom > 0);

        // Columns section sticky logic
        setIsColumnsSticky(columnsRect.top <= (isForYouSticky ? 40 : 0));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isForYouSticky]);

  // Navigation links data
  const navLinks = [
    { icon: <HomeIcon className="w-5 h-5" />, label: "Home", active: true },
    {
      icon: <CompassIcon className="w-5 h-5" />,
      label: "Explore",
      active: false,
    },
    {
      icon: <BookmarkIcon className="w-5 h-5" />,
      label: "Saved",
      active: false,
    },
  ];

  // Featured cards data
  const featuredCards = [
    {
      image: "./image.png",
      title: "Emergency Medicine Insights Report",
      description:
        "This report delves into the latest trends in emergency medicine, examining patient flow, treatment efficacy, and resource utilization in urgent care settings.",
      isNew: true,
    },
    {
      image: "./image-1.png",
      title: "Emergency Care Performance Metrics",
      description:
        "This overview presents critical performance metrics in emergency care, including response times, patient satisfaction ratings, and treatment success rates.",
      isNew: false,
    },
    {
      image: "./image-2.png",
      title: "Trends in Emergency Medicine",
      description:
        "This analysis investigates the latest trends in emergency medicine, focusing on advancements in triage protocols and telehealth integration.",
      isNew: false,
    },
    {
      image: "./image.png",
      title: "Patient Flow Optimization",
      description:
        "A comprehensive guide to optimizing patient flow in emergency departments, reducing wait times and improving overall efficiency.",
      isNew: true,
    },
    {
      image: "./image-1.png",
      title: "Resource Allocation Strategies",
      description:
        "Strategic approaches to resource allocation in emergency care settings, ensuring optimal utilization of staff and equipment.",
      isNew: false,
    },
    {
      image: "./image-2.png",
      title: "Quality Metrics Dashboard",
      description:
        "An interactive dashboard for tracking and analyzing quality metrics in emergency medicine departments.",
      isNew: false,
    },
    {
      image: "./image.png",
      title: "Staff Training Programs",
      description:
        "Comprehensive training programs for emergency department staff, focusing on latest protocols and best practices.",
      isNew: true,
    },
  ];

  // Recently visited reports data
  const recentReports = [
    { title: "EM KPIs by Month", time: "Just now" },
    { title: "Quarterly Performance Trends", time: "10m ago" },
    { title: "EM KPIs by Month", time: "Today at HH:MM" },
    { title: "Monthly Review of Outcomes", time: "Yesterday at HH:MM" },
    { title: "Monthly Analysis of Health KPIs", time: "Fri at HH:MM" },
    { title: "Performance Dashboard", time: "Apr 22" },
    { title: "Annual Health Metrics Overview", time: "Dec 22, 2024" },
    { title: "Annual Health Metrics Overview", time: "Dec 22, 2024" },
    { title: "Annual Health Metrics Overview", time: "Dec 22, 2024" },
    { title: "Annual Health Metrics Overview", time: "Dec 22, 2024" },
    { title: "Annual Health Metrics Overview", time: "Dec 22, 2024" },
    { title: "Annual Health Metrics Overview", time: "Dec 22, 2024" },
    { title: "Annual Health Metrics Overview", time: "Dec 22, 2024" },
    { title: "Annual Health Metrics Overview", time: "Dec 22, 2024" },
    { title: "Annual Health Metrics Overview", time: "Dec 22, 2024" },
  ];

  // Saved collections data
  const savedCollections = [
    {
      title: "Monthly Compliance Reports",
      description: "All reports related to monthly compliance checks.",
      reportCount: 5,
      updatedDate: "04/02/2025",
    },
    {
      title: "ED Performance Dashboards",
      description: "Key dashboards for ED performance tracking.",
      reportCount: 5,
      updatedDate: "04/02/2025",
    },
    {
      title: "Monthly Compliance Reports",
      description: "All reports related to monthly compliance checks.",
      reportCount: 5,
      updatedDate: "04/02/2025",
    },
    {
      title: "Monthly Compliance Reports",
      description: "All reports related to monthly compliance checks.",
      reportCount: 5,
      updatedDate: "04/02/2025",
    },
    {
      title: "Monthly Compliance Reports",
      description: "All reports related to monthly compliance checks.",
      reportCount: 5,
      updatedDate: "04/02/2025",
    },
    {
      title: "Monthly Compliance Reports",
      description: "All reports related to monthly compliance checks.",
      reportCount: 5,
      updatedDate: "04/02/2025",
    },
    {
      title: "Monthly Compliance Reports",
      description: "All reports related to monthly compliance checks.",
      reportCount: 5,
      updatedDate: "04/02/2025",
    },
    {
      title: "Monthly Compliance Reports",
      description: "All reports related to monthly compliance checks.",
      reportCount: 5,
      updatedDate: "04/02/2025",
    },
    {
      title: "Monthly Compliance Reports",
      description: "All reports related to monthly compliance checks.",
      reportCount: 5,
      updatedDate: "04/02/2025",
    },
    {
      title: "Monthly Compliance Reports",
      description: "All reports related to monthly compliance checks.",
      reportCount: 5,
      updatedDate: "04/02/2025",
    },
    {
      title: "Monthly Compliance Reports",
      description: "All reports related to monthly compliance checks.",
      reportCount: 5,
      updatedDate: "04/02/2025",
    },
  ];

  // New releases data
  const newReleases = [
    {
      title: "System Quadruple Aim Scorecard",
      releaseDate: "2/14/2025",
      image: "./image-67.png",
      description:
        "A single balanced scorecard for standardized, system-wide performance.",
      type: "Announcement",
      category: "Product",
    },
    {
      title: "System Quadruple Aim Scorecard",
      releaseDate: "2/14/2025",
      image: "./image-67.png",
      description:
        "A single balanced scorecard for standardized, system-wide performance.",
      type: "Announcement",
      category: "Product",
    },
    {
      title: "System Quadruple Aim Scorecard",
      releaseDate: "2/14/2025",
      image: "./image-67.png",
      description:
        "A single balanced scorecard for standardized, system-wide performance.",
      type: "Announcement",
      category: "Product",
    },
    {
      title: "System Quadruple Aim Scorecard",
      releaseDate: "2/14/2025",
      image: "./image-67.png",
      description:
        "A single balanced scorecard for standardized, system-wide performance.",
      type: "Announcement",
      category: "Product",
    },
    {
      title: "System Quadruple Aim Scorecard",
      releaseDate: "2/14/2025",
      image: "./image-67.png",
      description:
        "A single balanced scorecard for standardized, system-wide performance.",
      type: "Announcement",
      category: "Product",
    },
  ];

  // Shortcuts data
  const shortcuts = [
    { icon: <HelpCircleIcon className="w-4 h-4" />, label: "About ACOE" },
    {
      icon: <NewspaperIcon className="w-4 h-4" />,
      label: "What's new on CARE?",
    },
    { icon: <SignpostIcon className="w-4 h-4" />, label: "Onboarding guide" },
    { icon: <SmilePlusIcon className="w-4 h-4" />, label: "Feedback" },
  ];

  // Pinned reports data
  const pinnedReports = [
    { title: "Report name" },
    { title: "Report name" },
    { title: "Report name" },
    { title: "Report name" },
  ];

  // Add scroll button handlers
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  const nestedScrollViewOffset = 48;

  React.useEffect(() => {
    const calculateHeight = () => {
      const nestedContainerHeight = (document.getElementById('main-canvas') as HTMLDivElement).offsetHeight - 48;
      setNestedContainerHeight(nestedContainerHeight);
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    return () => {
      window.removeEventListener('resize', calculateHeight);
    };
  }, []);

  React.useEffect(() => {
    const outer = document.querySelector('#main-canvas') as HTMLDivElement;
    const inner = document.querySelectorAll('.inner-scroll-view') as NodeListOf<HTMLDivElement>;
    const listener = () => {
      const outerBottom = Math.ceil(outer.scrollTop + outer.clientHeight) >= outer.scrollHeight;

      if (outerBottom) {
        inner.forEach((item) => {
          item.style.overflow = 'auto';
        });
      } else {
        inner.forEach((item) => {
          item.style.overflow = 'hidden';
        });
      }
    };
  
    listener();
    outer.addEventListener('scroll', listener);

    return () => {
      outer.removeEventListener('scroll', listener);
    };
  }, []);

  return (
    <div id="app-container" style={{ height: 'calc(100vh - 80px)', background: '#f7f9fb', width: '100%' }}>
      <div id="main-row" style={{ display: 'flex', minHeight: 0, height: '100%' }}>
        <nav id="primary-nav" style={{ width: 48, minWidth: 0, minHeight: 0 }}>
          {navLinks.map((link, index) => (
            <button
              key={index}
              style={{
                display: 'flex', flexDirection: 'column', height: 48, alignItems: 'center', justifyContent: 'center', gap: 4, padding: '4px 12px', width: '100%', borderRadius: 8, background: link.active ? '#E5EAF2' : 'transparent', border: 'none', cursor: 'pointer', marginBottom: 4
              }}
            >
              {link.icon}
              <span style={{ fontSize: 12, color: link.active ? '#000' : '#6b7280', fontWeight: 400 }}>{link.label}</span>
            </button>
          ))}
        </nav>
        <div id="main-canvas" style={{
          flex: 1,
          minWidth: 0,
          minHeight: 0,
          marginLeft: 16,
          marginRight: 16,
          borderRadius: 16,
          background: '#fff',
          boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          padding: 24,
          height: '100%',
          overflowY: 'auto',
          scrollbarWidth: 'none',
        }}>
          <section id="for-you-section" ref={forYouRef} style={{ position: 'relative', width: '100%', marginBottom: 24, minWidth: 0, maxWidth: '100%' }}>
            <header style={Object.assign({ display: 'flex', width: '100%', height: 28, alignItems: 'center', gap: 16, marginBottom: 8 }, isForYouSticky ? { position: 'sticky' as const, top: 0, background: '#fff', zIndex: 10, padding: '8px 0', boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)' } : {})}>
              <h2 style={{ fontWeight: 600, fontSize: 16, letterSpacing: 0.15, lineHeight: '28px' }}>For you</h2>
            </header>

            <div style={{ position: 'relative', overflowX: 'hidden', maxWidth: '100%' }}>
              {/* Left scroll button */}
              <button
                onClick={handleScrollLeft}
                style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(255,255,255,0.8)', borderRadius: 9999, padding: 8, boxShadow: '0 1px 4px 0 rgba(0,0,0,0.08)', border: 'none', cursor: 'pointer' }}
              >
                <ChevronRightIcon style={{ width: 24, height: 24, transform: 'rotate(180deg)' }} />
              </button>

              {/* Right scroll button */}
              <button
                onClick={handleScrollRight}
                style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(255,255,255,0.8)', borderRadius: 9999, padding: 8, boxShadow: '0 1px 4px 0 rgba(0,0,0,0.08)', border: 'none', cursor: 'pointer' }}
              >
                <ChevronRightIcon style={{ width: 24, height: 24 }} />
              </button>

              <div ref={scrollContainerRef} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, overflowX: 'auto', paddingBottom: 16, maxWidth: '100%', minWidth: 0, scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}>
                {featuredCards.map((card, index) => (
                  <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: 8, border: '1px solid #dae2ec', borderRadius: 12, background: '#fff', flexShrink: 0, minWidth: 0, width: 320, scrollSnapAlign: 'start' }}>
                    <div style={{ display: 'flex', height: 132, alignItems: 'flex-start', position: 'relative', width: '100%', borderRadius: 8, overflow: 'hidden', border: '1px solid #dae2ec' }}>
                      <img
                        alt={card.title}
                        src={card.image}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      {card.isNew && (
                        <div style={{ position: 'absolute', top: 8, left: 8 }}>
                          <span style={{ background: '#2563eb26', color: '#2563eb', border: 'none', fontWeight: 600, borderRadius: 8, padding: '2px 8px', fontSize: 12 }}>New</span>
                        </div>
                      )}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, padding: 0, width: '100%' }}>
                      <h3 style={{ fontWeight: 500, color: '#05060f', fontSize: 16, letterSpacing: 0.15, lineHeight: '28px', margin: 0 }}>{card.title}</h3>
                      <p style={{ fontWeight: 400, color: '#00000099', fontSize: 14, letterSpacing: 0.17, lineHeight: '20px', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll indicators */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '2px 8px', background: 'rgba(255,255,255,0.8)', borderRadius: 9999, boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)' }}>
                  {featuredCards.map((_, index) => (
                    <div key={index} style={{ width: 6, height: 6, borderRadius: 9999, background: '#d1d5db' }}></div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Three-column section */}
          <div id="three-column-section" ref={columnsRef} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, position: 'relative', width: '100%', minWidth: 0 }}>
            {/* Recently visited reports column */}
            <div style={{ flex: 1, minWidth: 0, height: nestedContainerHeight }}>
              <h2 style={Object.assign({ fontWeight: 600, fontSize: 16, letterSpacing: 0.15, lineHeight: '28px', marginBottom: 12 }, isColumnsSticky ? { position: 'sticky' as const, top: 0, background: '#fff', zIndex: 10, padding: '8px 0', boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)' } : {})}>Recently visited reports</h2>
              <div className="inner-scroll-view" style={{ scrollbarWidth: 'none', overflow: 'hidden', height: `calc(100% - ${nestedScrollViewOffset}px)`, display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'flex-start', gap: 12, overflowY: isColumnsSticky ? 'auto' : 'hidden' }}>
                {recentReports.map((report, index) => (
                  <div key={index} style={{ display: 'flex', width: '100%', alignItems: 'center', gap: 16 }}>
                    <img alt="Report thumbnail" src="./image-18.png" style={{ width: 44, height: 44, objectFit: 'cover' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4, flex: 1 }}>
                      <div style={{ fontWeight: 400, color: '#000000de', fontSize: 14, letterSpacing: 0.17, lineHeight: '20px' }}>{report.title}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <ClockIcon style={{ width: 16, height: 16 }} />
                        <span style={{ fontWeight: 400, color: '#00000099', fontSize: 12, letterSpacing: 0.4, lineHeight: '20px' }}>{report.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Saved column */}
            <div style={{ flex: 1, minWidth: 0, height: nestedContainerHeight }}>
              <div style={{ display: 'flex', height: 28, alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <h2 style={{ fontWeight: 600, fontSize: 16, letterSpacing: 0.15, lineHeight: '28px' }}>Saved</h2>
                <button style={{ color: '#1976d2', fontSize: 14, padding: 0, background: 'none', border: 'none', cursor: 'pointer' }}>See more</button>
              </div>
              {/* Tabs */}
              <div style={{ display: 'flex', gap: 8, background: '#efefef', borderRadius: 8, marginBottom: 16 }}>
                <button style={{ background: '#fff', border: 'none', borderRadius: 8, padding: '4px 12px', fontWeight: 500, fontSize: 14, cursor: 'pointer' }}>My collections</button>
                <button style={{ background: 'transparent', border: 'none', borderRadius: 8, padding: '4px 12px', fontWeight: 500, fontSize: 14, cursor: 'pointer' }}>Followed</button>
              </div>
              <div className="inner-scroll-view" style={{ scrollbarWidth: 'none', overflow: 'hidden', height: `calc(100% - ${nestedScrollViewOffset + 42}px)`, display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'flex-start', gap: 8, overflowY: isColumnsSticky ? 'auto' : 'hidden' }}>
                {savedCollections.map((collection, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 8, width: '100%', border: '1px solid #dae2ec', borderRadius: 8, background: '#fff' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', width: 65, height: 56, alignItems: 'flex-start', gap: 4 }}>
                      {[...Array(4)].map((_, i) => (
                        <div key={i} style={{ width: 26, height: 26, border: '1px solid #dae2ec', borderRadius: 4, overflow: 'hidden' }}>
                          <img alt="Thumbnail" src="./image-62.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4, flex: 1, padding: 0 }}>
                      <div style={{ fontWeight: 400, color: '#000000de', fontSize: 14, lineHeight: '20px' }}>{collection.title}</div>
                      <div style={{ fontWeight: 400, color: '#000000de', fontSize: 12, lineHeight: '16px' }}>{collection.description}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                          <FileTextIcon style={{ width: 12, height: 12 }} />
                          <span style={{ color: '#00000099', fontSize: 12 }}>{collection.reportCount} reports</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                          <ClockIcon style={{ width: 12, height: 12 }} />
                          <span style={{ color: '#00000099', fontSize: 12 }}>Updated {collection.updatedDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newly released column */}
            <div style={{ flex: 1, minWidth: 0, height: nestedContainerHeight }}>
              <h2 style={Object.assign({ fontWeight: 600, fontSize: 16, letterSpacing: 0.15, lineHeight: '28px', marginBottom: 12 }, isColumnsSticky ? { position: 'sticky' as const, top: 0, background: '#fff', zIndex: 10, padding: '8px 0', boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)' } : {})}>Newly released</h2>
              <div className="inner-scroll-view" style={{ scrollbarWidth: 'none', overflow: 'hidden', height: `calc(100% - ${nestedScrollViewOffset}px)`, display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'flex-start', gap: 12, overflowY: isColumnsSticky ? 'auto' : 'hidden'}}>
                {newReleases.map((release, index) => (
                  <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12, padding: 16, width: '100%', border: '1px solid #e5e7eb', borderRadius: 8, background: '#fff', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.04)' }}>
                    <div style={{ width: '100%' }}>
                      <h3 style={{ fontWeight: 500, color: '#111827', fontSize: 14, lineHeight: '22px', margin: 0 }}>{release.title}</h3>
                      <div style={{ color: '#6b7280', fontSize: 12 }}>Released on {release.releaseDate}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, width: '100%' }}>
                      <div style={{ width: 96, height: 60, borderRadius: 8, overflow: 'hidden', border: '1px solid #f1f1f1', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.04)' }}>
                        <img alt={release.title} src={release.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <p style={{ flex: 1, color: '#6b7280', fontSize: 12, lineHeight: '20px', margin: 0 }}>{release.description}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                      <span style={{ fontWeight: 500, color: '#374151', fontSize: 14 }}>{release.type}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <span style={{ fontWeight: 500, color: '#2561e5', fontSize: 14 }}>{release.category}</span>
                        <ChevronRightIcon style={{ width: 16, height: 16 }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <aside id="sidebar" style={{
          display: 'flex',
          flexDirection: 'column',
          width: 210,
          minWidth: 0,
          minHeight: 0,
          height: '100%',
          alignItems: 'flex-start',
          gap: 16,
          overflow: 'auto'
        }}>
          {/* User profile section */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, width: '100%' }}>
            <div style={{ width: '100%' }}>
              <h2 style={{ fontWeight: 500, fontSize: 16, color: '#000000de', lineHeight: '28px', margin: 0 }}>Kim, Hanae</h2>
              <p style={{ color: '#00000099', fontSize: 12, margin: 0 }}>Senior Program Manager</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', gap: 4 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
                <UsersIcon style={{ width: 16, height: 16 }} />
                <span style={{ color: '#00000099', fontSize: 12, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%', display: 'block' }}>4007 Ss CC Cll Analytics</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
                <MapPinIcon style={{ width: 16, height: 16 }} />
                <span style={{ color: '#00000099', fontSize: 12 }}>Queen of the Valley Medical Center(HR)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
                <BuildingIcon style={{ width: 16, height: 16 }} />
                <span style={{ color: '#00000099', fontSize: 12, whiteSpace: 'nowrap' }}>Providence St. Joseph Health</span>
              </div>
            </div>
          </div>
          <div style={{ width: '100%', height: 1, background: '#e5e7eb', margin: '8px 0' }} />
          {/* Shortcuts section */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, width: '100%' }}>
            <h3 style={{ fontWeight: 500, fontSize: 14, color: '#000000de', lineHeight: '20px', margin: 0 }}>Shortcuts</h3>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, width: '100%' }}>
              {shortcuts.map((shortcut, index) => (
                <button
                  key={index}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', justifyContent: 'flex-start', padding: 0, height: 'auto', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <div style={{ display: 'flex', width: 24, height: 24, alignItems: 'center', justifyContent: 'center', background: '#e5eaf2', borderRadius: 8 }}>{shortcut.icon}</div>
                  <span style={{ color: '#00000099', fontSize: 14 }}>{shortcut.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div style={{ width: '100%', height: 1, background: '#e5e7eb', margin: '8px 0' }} />
          {/* Pinned reports section */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, width: '100%' }}>
            <h3 style={{ fontWeight: 500, fontSize: 14, color: '#000000de', lineHeight: '20px', margin: 0 }}>Pinned reports</h3>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, width: '100%' }}>
              {pinnedReports.map((report, index) => (
                <button
                  key={index}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-start', padding: 0, height: 'auto', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <div style={{ width: 32, height: 32, background: '#efefef', borderRadius: 8 }} />
                  <span style={{ color: '#00000099', fontSize: 14 }}>{report.title}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};