
// import React, { useEffect, useRef, useState } from "react";
// import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
// import {
//   Users, Briefcase, Calendar, Mail, UserCheck, Clock, MapPin,
//   FileSpreadsheet, DollarSign, BarChart2, MessageSquare, Phone,
//   Video, Download, Shield, ChevronDown, ChevronRight, Menu, X,
//   Check, Star, ArrowRight, Building2, Zap, Globe, Lock,
//   TrendingUp, Bell, Search, Filter, GitBranch, Award,
//   Layers, Activity, Database, Send, PlayCircle,
//   CheckCircle2, HelpCircle, MapPinned, FileBarChart, ClipboardList,
//   Link2, Rss, AtSign, Share2, ExternalLink
// } from "lucide-react";



// // ─────────────────────────── DESIGN TOKENS ───────────────────────────
// const COLORS = {
//   primary:      "#a68dd1",
//   primaryDark:  "#6f3fd3",
//   primaryLight: "#f3eeff",
//   primaryBorder:"#d4c5ed",
//   green:        "#065931",
//   greenLight:   "#054a2942",
//   amber:        "#fa7c25",
//   amberLight:   "#fa7e253d",
//   blue:         "#3a6fd5",
//   blueLight:    "#e8f4fd",
//   bg:           "#f7f8fc",
//   surface:      "#ffffff",
//   border:       "#e2e5ea",
//   text:         "#111827",
//   muted:        "#6b7280",
//   mutedLight:   "#9ca3af",
//   dark:         "#1a1030",
//   darkMid:      "#231545",
//   darkBorder:   "rgba(166,141,209,0.25)",
//   darkText:     "rgba(220,210,240,0.70)",
// };

// const G = {
//   primary: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})`,
//   primaryHover: `linear-gradient(135deg, ${COLORS.primaryDark}, #5a2fb8)`,
//   hero: `linear-gradient(to bottom, #f5f0ff, #faf7ff, ${COLORS.surface})`,
//   dark: `linear-gradient(to bottom, ${COLORS.dark}, ${COLORS.darkMid}, ${COLORS.dark})`,
//   cta:  `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})`,
// };

// // ─────────────────────────── GLOBAL RESPONSIVE STYLES ───────────────────────────
// const GLOBAL_STYLES = `
//   *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//   html { scroll-behavior: smooth; }
//   body { overflow-x: hidden; }

//   /* ── Navbar ── */
//   @media (min-width: 768px) { .nav-mobile-btn { display: none !important; } }
//   @media (max-width: 767px) {
//     .nav-desktop { display: none !important; }
//     .nav-mobile-btn { display: flex !important; }
//   }

//   /* ── Two-col grids → single col on mobile ── */
//   .two-col-grid {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 80px;
//     align-items: center;
//   }
//   @media (max-width: 900px) {
//     .two-col-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
//   }

//   /* ── Feature cards grid ── */
//   .features-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
//     gap: 20px;
//   }
//   @media (max-width: 480px) {
//     .features-grid { grid-template-columns: 1fr !important; }
//   }

//   /* ── Workflow steps ── */
//   .workflow-steps {
//     display: flex;
//     align-items: flex-start;
//     overflow-x: auto;
//     padding-bottom: 16px;
//     -webkit-overflow-scrolling: touch;
//     scrollbar-width: none;
//   }
//   .workflow-steps::-webkit-scrollbar { display: none; }
//   .workflow-step {
//     flex: 0 0 auto;
//     min-width: 100px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
//   @media (min-width: 768px) {
//     .workflow-step { flex: 1; min-width: unset; }
//   }

//   /* ── Communication features grid ── */
//   .comm-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
//     gap: 16px;
//     max-width: 720px;
//     margin: 0 auto;
//   }
//   @media (max-width: 480px) {
//     .comm-grid { grid-template-columns: 1fr 1fr !important; }
//   }

//   /* ── Pricing cards ── */
//   .pricing-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
//     gap: 24px;
//     max-width: 960px;
//     margin: 0 auto;
//   }
//   @media (max-width: 600px) {
//     .pricing-grid { grid-template-columns: 1fr !important; }
//   }

//   /* ── Attendance mini stats ── */
//   .att-stats-grid {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     gap: 12px;
//     padding: 16px;
//   }

//   /* ── Employee directory card ── */
//   .emp-dir-card {
//     position: relative;
//     background: #fff;
//     border-radius: 24px;
//     border: 1px solid ${COLORS.primaryBorder};
//     box-shadow: 0 16px 48px ${COLORS.primary}18;
//     padding: 24px;
//   }

//   /* ── Dashboard stats row ── */
//   .dash-stats {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     gap: 12px;
//     margin-bottom: 16px;
//   }
//   @media (max-width: 600px) {
//     .dash-stats { grid-template-columns: 1fr 1fr !important; }
//   }

//   /* ── Dashboard bottom row ── */
//   .dash-bottom {
//     display: grid;
//     grid-template-columns: 1fr 0.45fr;
//     gap: 12px;
//   }
//   @media (max-width: 480px) {
//     .dash-bottom { grid-template-columns: 1fr !important; }
//   }

//   /* ── Analytics items grid ── */
//   .att-items-grid {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 12px;
//   }
//   @media (max-width: 480px) {
//     .att-items-grid { grid-template-columns: 1fr !important; }
//   }

//   /* ── Contact form grid ── */
//   .contact-name-grid {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 16px;
//     margin-bottom: 16px;
//   }
//   @media (max-width: 480px) {
//     .contact-name-grid { grid-template-columns: 1fr !important; }
//   }

//   /* ── Footer grid ── */
//   .footer-grid {
//     display: grid;
//     grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
//     gap: 32px;
//   }
//   @media (max-width: 900px) {
//     .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; }
//   }
//   @media (max-width: 540px) {
//     .footer-grid { grid-template-columns: 1fr 1fr !important; }
//   }

//   /* ── Footer bottom ── */
//   .footer-bottom {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-wrap: wrap;
//     gap: 12px;
//   }
//   @media (max-width: 540px) {
//     .footer-bottom { flex-direction: column; align-items: flex-start; }
//   }

//   /* ── Hero CTAs ── */
//   .hero-ctas {
//     display: flex;
//     gap: 16px;
//     margin-top: 40px;
//     flex-wrap: wrap;
//     justify-content: center;
//   }
//   @media (max-width: 480px) {
//     .hero-ctas { flex-direction: column; align-items: stretch; width: 100%; max-width: 320px; }
//     .hero-ctas a { text-align: center; justify-content: center; }
//   }

//   /* ── CTA banner buttons ── */
//   .cta-buttons {
//     display: flex;
//     gap: 16px;
//     justify-content: center;
//     flex-wrap: wrap;
//   }
//   @media (max-width: 480px) {
//     .cta-buttons { flex-direction: column; align-items: center; }
//   }

//   /* ── Section padding responsive ── */
//   .section-pad { padding: 96px 0; }
//   @media (max-width: 768px) { .section-pad { padding: 64px 0; } }
//   @media (max-width: 480px) { .section-pad { padding: 48px 0; } }

//   /* ── Container ── */
//   .container {
//     max-width: 1280px;
//     margin: 0 auto;
//     padding: 0 24px;
//   }
//   @media (max-width: 480px) { .container { padding: 0 16px; } }

//   /* ── 4K / ultra-wide ── */
//   @media (min-width: 2560px) {
//     .container { max-width: 1600px; }
//     body { font-size: 18px; }
//   }

//   /* ── Reduced motion ── */
//   @media (prefers-reduced-motion: reduce) {
//     * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
//   }
// `;

// // ─────────────────────────── helpers ───────────────────────────
// function useScrolled(threshold = 20) {
//   const [scrolled, setScrolled] = useState(false);
//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > threshold);
//     window.addEventListener("scroll", fn, { passive: true });
//     return () => window.removeEventListener("scroll", fn);
//   }, [threshold]);
//   return scrolled;
// }

// function FadeIn({ children, delay = 0, direction = "up", className = "", initialVisible = false, style = {} }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: false, margin: "-60px" });
//   const variants = {
//     hidden: {
//       opacity: 0,
//       y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
//       x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
//     },
//     visible: { opacity: 1, y: 0, x: 0 },
//   };
//   return (
//     <motion.div
//       ref={ref}
//       variants={variants}
//       initial={initialVisible ? "visible" : "hidden"}
//       animate={inView ? "visible" : initialVisible ? "visible" : "hidden"}
//       transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
//       className={className}
//       style={style}
//     >
//       {children}
//     </motion.div>
//   );
// }

// // ─────────────────────────── NAVBAR ───────────────────────────
// const NAV_LINKS = [
//   { label: "Features",      href: "#features" },
//   { label: "Workflow",      href: "#workflow" },
//   { label: "Attendance",    href: "#attendance" },
//   { label: "Communication", href: "#communication" },
//   { label: "Pricing",       href: "#pricing" },
//   { label: "FAQ",           href: "#faq" },
// ];

// function Navbar() {
//   const scrolled = useScrolled();
//   const [open, setOpen] = useState(false);

//   const scrollTo = (e, href) => {
//     e.preventDefault();
//     document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
//     setOpen(false);
//   };

//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//       style={{
//         position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
//         transition: "all 0.3s",
//         background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
//         backdropFilter: scrolled ? "blur(20px)" : "none",
//         boxShadow: scrolled ? `0 1px 0 ${COLORS.border}, 0 4px 24px rgba(166,141,209,0.08)` : "none",
//       }}
//     >
//       <div className="container">
//         <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
//           {/* Logo */}
//           <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
//             <div style={{
//               width: 44, height: 44, borderRadius: 10,
//               display: "flex", alignItems: "center", justifyContent: "center",
//               boxShadow: `0 4px 14px ${COLORS.primary}55`,
//             }}>
//               <span style={{ color: "white", fontWeight: 800, fontSize: 14 }}>
//                 <img src="./Wowelse2.png" alt="Info HRM" style={{ width: "40px", height: "40px" }} />
//               </span>
//             </div>
//             <div style={{ lineHeight: 1 }}>
//               <div style={{ fontWeight: 800, color: COLORS.text, fontSize: 15, letterSpacing: "-0.3px" }}></div>
//               <div style={{ fontSize: 10, color: COLORS.primary, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>HR Management</div>
//             </div>
//           </a>

//           {/* Desktop Links */}
//           <div style={{ display: "flex", alignItems: "center", gap: 2 }} className="nav-desktop">
//             {NAV_LINKS.map((l) => (
//               <a key={l.label} href={l.href} onClick={(e) => scrollTo(e, l.href)}
//                 style={{ position: "relative", padding: "8px 12px", fontSize: 13, color: COLORS.muted, fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
//                 onMouseEnter={e => e.currentTarget.style.color = COLORS.primary}
//                 onMouseLeave={e => e.currentTarget.style.color = COLORS.muted}
//               >
//                 {l.label}
//               </a>
//             ))}
//           </div>

//           {/* CTA */}
//           <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="nav-desktop">
//             <a href="https://hrm-front-one.vercel.app/login" style={{ fontSize: 14, fontWeight: 600, color: COLORS.primary, textDecoration: "none" }}>Log in</a>
//             <a href="/register"
//               style={{ padding: "9px 20px", fontSize: 14, fontWeight: 600, color: "white", borderRadius: 10, textDecoration: "none", background: G.primary, boxShadow: `0 4px 14px ${COLORS.primary}55`, transition: "all 0.2s" }}
//               onMouseEnter={e => e.currentTarget.style.background = G.primaryHover}
//               onMouseLeave={e => e.currentTarget.style.background = G.primary}
//             >Get Started</a>
//           </div>

//           {/* Mobile toggle */}
//           <button onClick={() => setOpen(!open)}
//             style={{ background: "none", border: "none", cursor: "pointer", color: COLORS.muted, padding: 8, borderRadius: 8, display: "none" }}
//             className="nav-mobile-btn"
//           >
//             {open ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.25 }}
//             style={{ background: COLORS.surface, borderTop: `1px solid ${COLORS.border}`, overflow: "hidden" }}
//           >
//             <div style={{ padding: "16px 20px" }}>
//               {NAV_LINKS.map((l) => (
//                 <a key={l.label} href={l.href} onClick={(e) => scrollTo(e, l.href)}
//                   style={{ display: "block", padding: "10px 16px", fontSize: 14, fontWeight: 500, color: COLORS.text, textDecoration: "none", borderRadius: 8, marginBottom: 2 }}
//                 >
//                   {l.label}
//                 </a>
//               ))}
//               <div style={{ borderTop: `1px solid ${COLORS.border}`, marginTop: 12, paddingTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
//                 <a href="/login" style={{ padding: "10px 16px", textAlign: "center", fontSize: 14, fontWeight: 600, color: COLORS.primary, border: `1px solid ${COLORS.primaryBorder}`, borderRadius: 10, textDecoration: "none" }}>Log in</a>
//                 <a href="/register" style={{ padding: "10px 16px", textAlign: "center", fontSize: 14, fontWeight: 600, color: "white", background: G.primary, borderRadius: 10, textDecoration: "none" }}>Get Started</a>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }

// // ─────────────────────────── HERO ───────────────────────────
// // ─────────────────────────── HERO (REDESIGNED) ───────────────────────────
// // Replace your existing Hero() function with this one.
// // Uses the same COLORS, G tokens, FadeIn, and framer-motion already in your file.
// // The dashboard screenshot is loaded from /Dashboard.png (public folder).

// function Hero() {
//   const { scrollY } = useScroll();
//   const opacity = useTransform(scrollY, [0, 600], [1, 0]);

//   const scrollToContact = (e) => {
//     e.preventDefault();
//     document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Feature pills shown under the headline
//   const pills = [
//     { icon: Clock,           label: "Toggle & GPS Attendance" },
//     { icon: MapPin,          label: "Geofence Check-In" },
//     { icon: FileSpreadsheet, label: "Excel Import" },
//     { icon: Users,           label: "Employee Directory" },
//     { icon: BarChart2,       label: "Live Analytics" },
//     { icon: MessageSquare,   label: "Internal Chat" },
//   ];

//   // Live stats strip
//   const stats = [
//     { value: "2,000+", label: "HR teams" },
//     { value: "94%",    label: "Avg attendance rate" },
//     { value: "13",     label: "Modules built-in" },
//     { value: "< 1 day",label: "Setup time" },
//   ];

//   return (
//     <section style={{
//       position: "relative",
//       minHeight: "100vh",
//       display: "flex",
//       alignItems: "center",
//       overflow: "hidden",
//       background: G.hero,
//       paddingTop: 80,
//       paddingBottom: 40,
//     }}>
//       {/* ── Background decorations ── */}
//       <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
//         <div style={{ position: "absolute", top: -120, left: -120, width: 480, height: 480, background: `${COLORS.primary}1a`, borderRadius: "50%", filter: "blur(80px)" }} />
//         <div style={{ position: "absolute", bottom: -80, right: -80, width: 360, height: 360, background: `${COLORS.primaryDark}10`, borderRadius: "50%", filter: "blur(60px)" }} />
//         {/* Grid overlay */}
//         <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: `linear-gradient(${COLORS.primary} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.primary} 1px, transparent 1px)`, backgroundSize: "56px 56px" }} />
//       </div>

//       <motion.div style={{ opacity, position: "relative", zIndex: 10, width: "100%", maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
//         <style>{`
//           .hero-split {
//             display: grid;
//             grid-template-columns: 1fr 1fr;
//             gap: 64px;
//             align-items: center;
//           }
//           @media (max-width: 900px) {
//             .hero-split {
//               grid-template-columns: 1fr;
//               gap: 48px;
//               text-align: center;
//             }
//             .hero-pills { justify-content: center !important; }
//             .hero-cta-row { justify-content: center !important; }
//             .hero-stats { justify-content: center !important; }
//           }

//           .hero-pill {
//             display: inline-flex;
//             align-items: center;
//             gap: 6px;
//             padding: 5px 12px;
//             border-radius: 999px;
//             background: ${COLORS.primaryLight};
//             border: 1px solid ${COLORS.primaryBorder};
//             font-size: 11.5px;
//             font-weight: 600;
//             color: ${COLORS.primaryDark};
//             white-space: nowrap;
//           }

//           .hero-cta-primary {
//             display: inline-flex;
//             align-items: center;
//             gap: 8px;
//             padding: 14px 28px;
//             font-size: 15px;
//             font-weight: 700;
//             color: white;
//             border-radius: 14px;
//             text-decoration: none;
//             background: ${G.primary};
//             box-shadow: 0 8px 32px ${COLORS.primary}55;
//             transition: all 0.2s;
//             cursor: pointer;
//             border: none;
//           }
//           .hero-cta-primary:hover {
//             background: ${G.primaryHover};
//             transform: translateY(-2px);
//           }

//           .hero-cta-secondary {
//             display: inline-flex;
//             align-items: center;
//             gap: 8px;
//             padding: 14px 28px;
//             font-size: 15px;
//             font-weight: 700;
//             color: ${COLORS.primary};
//             border-radius: 14px;
//             text-decoration: none;
//             background: ${COLORS.surface};
//             border: 1.5px solid ${COLORS.primaryBorder};
//             box-shadow: 0 2px 8px rgba(0,0,0,0.06);
//             transition: all 0.2s;
//           }
//           .hero-cta-secondary:hover {
//             background: ${COLORS.primaryLight};
//             border-color: ${COLORS.primary};
//           }

//           .hero-stat-item {
//             display: flex;
//             flex-direction: column;
//             align-items: flex-start;
//             padding-left: 16px;
//             border-left: 2px solid ${COLORS.primaryBorder};
//           }
//           @media (max-width: 900px) {
//             .hero-stat-item { align-items: center; }
//           }

//           .screenshot-frame {
//             position: relative;
//             border-radius: 16px;
//             overflow: hidden;
//             box-shadow: 0 32px 80px ${COLORS.primary}28, 0 4px 24px rgba(0,0,0,0.10);
//             border: 1px solid ${COLORS.primaryBorder};
//             background: ${COLORS.surface};
//           }

//           .screenshot-bar {
//             background: #f8f9fb;
//             border-bottom: 1px solid ${COLORS.border};
//             padding: 9px 14px;
//             display: flex;
//             align-items: center;
//             gap: 12px;
//           }

//           .floating-badge {
//             position: absolute;
//             background: white;
//             border-radius: 12px;
//             box-shadow: 0 8px 28px rgba(0,0,0,0.12);
//             border: 1px solid ${COLORS.primaryBorder};
//             padding: 10px 14px;
//             display: flex;
//             align-items: center;
//             gap: 8px;
//             font-size: 12px;
//             font-weight: 600;
//             color: ${COLORS.text};
//             white-space: nowrap;
//             z-index: 10;
//           }
//         `}</style>

//         <div className="hero-split">

//           {/* ── LEFT: Content ── */}
//           <div>
//             {/* Eyebrow */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//             >
//               <span style={{
//                 display: "inline-flex", alignItems: "center", gap: 6,
//                 padding: "5px 14px", borderRadius: 999,
//                 background: COLORS.primaryLight, border: `1px solid ${COLORS.primaryBorder}`,
//                 color: COLORS.primaryDark, fontSize: 11, fontWeight: 700,
//                 textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20,
//               }}>
//                 <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLORS.primary, animation: "pulse 2s infinite" }} />
//                 All-in-one HR Platform
//               </span>
//               <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
//             </motion.div>

//             {/* Headline */}
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//               style={{
//                 fontSize: "clamp(30px, 4.5vw, 58px)",
//                 fontWeight: 900, color: COLORS.text,
//                 lineHeight: 1.08, letterSpacing: "-1.5px",
//                 margin: "0 0 20px",
//               }}
//             >
//               Human Resources,{" "}
//               <span style={{ position: "relative", display: "inline-block" }}>
//                 <span style={{ position: "relative", zIndex: 1, background: G.primary, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                   Simplified
//                 </span>
//                 <motion.span
//                   initial={{ scaleX: 0 }}
//                   animate={{ scaleX: 1 }}
//                   transition={{ duration: 0.6, delay: 0.9 }}
//                   style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, background: G.primary, borderRadius: 999, transformOrigin: "left" }}
//                 />
//               </span>
//             </motion.h1>

//             {/* Sub */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.35 }}
//               style={{ fontSize: "clamp(14px, 1.8vw, 17px)", color: COLORS.muted, lineHeight: 1.75, marginBottom: 28, maxWidth: 480 }}
//             >
//               From recruitment to payroll — manage GPS attendance, employee records,
//               internal chat, and live analytics in one platform. Built for Indian businesses.
//             </motion.p>

//             {/* Feature pills */}
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.45 }}
//               className="hero-pills"
//               style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}
//             >
//               {pills.map((p, i) => (
//                 <span key={i} className="hero-pill">
//                   <p.icon size={12} style={{ color: COLORS.primary }} />
//                   {p.label}
//                 </span>
//               ))}
//             </motion.div>

//             {/* CTAs */}
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.55 }}
//               className="hero-cta-row"
//               style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}
//             >
//               <a href="#contact" onClick={scrollToContact} className="hero-cta-primary">
//                 Get started free <ArrowRight size={17} />
//               </a>
//               <a
//                 href="#features"
//                 onClick={(e) => { e.preventDefault(); document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" }); }}
//                 className="hero-cta-secondary"
//               >
//                 <PlayCircle size={17} /> See features
//               </a>
//             </motion.div>

//             {/* Stats strip */}

//           </div>

//           {/* ── RIGHT: Real screenshot ── */}
//           <motion.div
//             initial={{ opacity: 0, x: 40, scale: 0.97 }}
//             animate={{ opacity: 1, x: 0, scale: 1 }}
//             transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
//             style={{ position: "relative" }}
//           >
//             {/* Glow behind frame */}
//             <div style={{ position: "absolute", inset: -24, background: `linear-gradient(135deg, ${COLORS.primary}22, ${COLORS.primaryDark}14)`, borderRadius: 32, filter: "blur(32px)", pointerEvents: "none" }} />

//             {/* Screenshot frame */}
//             <div className="screenshot-frame" style={{ position: "relative" }}>
//               {/* Browser bar */}
//               <div className="screenshot-bar">
//                 <div style={{ display: "flex", gap: 5 }}>
//                   <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#fc5c65" }} />
//                   <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#fed330" }} />
//                   <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#26de81" }} />
//                 </div>
//                 <div style={{ flex: 1, maxWidth: 220, background: "#eef0f4", borderRadius: 5, padding: "3px 10px", fontSize: 10.5, color: COLORS.muted, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
//                   🔒 app.infohrm.com/dashboard
//                 </div>
//               </div>

//               {/* Real dashboard screenshot */}
//               <img
//                 src="/Dashboard.png"
//                 alt="Info HRM Attendance Dashboard"
//                 style={{ width: "100%", display: "block", maxHeight: 420, objectFit: "cover", objectPosition: "top" }}
//                 onError={(e) => {
//                   // Fallback if image not found
//                   e.target.style.display = "none";
//                   e.target.nextSibling.style.display = "flex";
//                 }}
//               />

//               {/* Fallback UI if image missing */}
//               <div style={{
//                 display: "none", background: `linear-gradient(135deg, ${COLORS.primaryLight}, #faf8ff)`,
//                 padding: 24, flexDirection: "column", gap: 12, minHeight: 320,
//                 alignItems: "center", justifyContent: "center",
//               }}>
//                 <BarChart2 size={40} style={{ color: COLORS.primary, opacity: 0.4 }} />
//                 <span style={{ fontSize: 13, color: COLORS.muted }}>Place Dashboard.png in /public folder</span>
//               </div>
//             </div>

//             {/* Floating badge — top left */}
//             <motion.div
//               initial={{ opacity: 0, y: -12 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.1, duration: 0.5 }}
//               className="floating-badge"
//               style={{ top: -16, left: -20 }}
//             >
//               <div style={{ width: 28, height: 28, borderRadius: 8, background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <UserCheck size={14} style={{ color: "#16a34a" }} />
//               </div>
//               <div>
//                 <div style={{ fontSize: 10, color: COLORS.muted, fontWeight: 500 }}>Today</div>
//                 <div style={{ fontSize: 13, fontWeight: 700, color: "#16a34a" }}>94% Present</div>
//               </div>
//             </motion.div>

//             {/* Floating badge — bottom right */}
//             <motion.div
//               initial={{ opacity: 0, y: 12 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.25, duration: 0.5 }}
//               className="floating-badge"
//               style={{ bottom: -18, right: -18 }}
//             >
//               <div style={{ width: 28, height: 28, borderRadius: 8, background: COLORS.primaryLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <MapPin size={14} style={{ color: COLORS.primary }} />
//               </div>
//               <div>
//                 <div style={{ fontSize: 10, color: COLORS.muted, fontWeight: 500 }}>GPS Check-In</div>
//                 <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.primaryDark }}>3 locations live</div>
//               </div>
//             </motion.div>

//             {/* Floating badge — right middle */}
//             <motion.div
//               initial={{ opacity: 0, x: 12 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 1.4, duration: 0.5 }}
//               className="floating-badge"
//               style={{ top: "42%", right: -22, transform: "translateY(-50%)" }}
//             >
//               <div style={{ width: 28, height: 28, borderRadius: 8, background: "#fef9c3", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <Bell size={14} style={{ color: "#b45309" }} />
//               </div>
//               <div>
//                 <div style={{ fontSize: 10, color: COLORS.muted, fontWeight: 500 }}>Auto alert</div>
//                 <div style={{ fontSize: 12, fontWeight: 700, color: "#b45309" }}>5 late arrivals</div>
//               </div>
//             </motion.div>
//           </motion.div>

//         </div>{/* end hero-split */}
//       </motion.div>

//       {/* Scroll cue */}
//       <motion.div
//         initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
//         style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, color: COLORS.muted, fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}
//       >
//         <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
//           <ChevronDown size={18} />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }
// function DashboardIllustration() {
//   const stats = [
//     { label: "Total Employees", value: "248",  sub: "↑ 12% this month",    bg: COLORS.primaryLight, border: COLORS.primaryBorder },
//     { label: "Departments",     value: "12",   sub: "Across org",           bg: COLORS.bg,           border: COLORS.border },
//     { label: "Attendance",      value: "94%",  sub: "↑ 3% vs last month",  bg: "#e6f8f0",           border: "#b7e8cf" },
//     { label: "Onboarding",      value: "6",    sub: "Submitted this cycle", bg: "#fff4ec",           border: "#fcd3b0" },
//   ];
//   return (
//     <div>
//       <div style={{ fontSize: 11, color: COLORS.muted, marginBottom: 4, fontWeight: 500 }}>HR Dashboard · Info HRM</div>
//       <div style={{ fontSize: "clamp(16px, 3vw, 22px)", fontWeight: 800, color: COLORS.text, marginBottom: 12 }}>Good Afternoon 👋</div>
//       <div className="dash-stats">
//         {stats.map((s) => (
//           <div key={s.label} style={{ borderRadius: 10, padding: "10px 10px", background: s.bg, border: `1px solid ${s.border}` }}>
//             <div style={{ fontSize: 10, color: COLORS.muted, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.label}</div>
//             <div style={{ fontSize: "clamp(16px, 2.5vw, 20px)", fontWeight: 800, color: COLORS.text, margin: "3px 0 2px" }}>{s.value}</div>
//             <div style={{ fontSize: 9, color: COLORS.mutedLight }}>{s.sub}</div>
//           </div>
//         ))}
//       </div>
//       <div className="dash-bottom">
//         <div style={{ borderRadius: 10, padding: 12, background: COLORS.surface, border: `1px solid ${COLORS.border}` }}>
//           <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.text, marginBottom: 6 }}>Employee Growth</div>
//           <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 52 }}>
//             {[40,55,35,70,60,80,65,90,75,88,72,95].map((h, i) => (
//               <div key={i} style={{ flex: 1, borderRadius: "3px 3px 0 0", height: `${h}%`, background: `linear-gradient(to top, ${COLORS.primary}, ${COLORS.primary}80)`, opacity: 0.65 + i * 0.03 }} />
//             ))}
//           </div>
//           <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: COLORS.mutedLight, marginTop: 4 }}>
//             <span>Jan</span><span>Apr</span><span>Jul</span><span>Oct</span><span>Dec</span>
//           </div>
//         </div>
//         <div style={{ borderRadius: 10, padding: 12, background: COLORS.surface, border: `1px solid ${COLORS.border}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
//           <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.text, marginBottom: 6 }}>Attendance</div>
//           <svg viewBox="0 0 80 80" style={{ width: 56, height: 56 }}>
//             <circle cx="40" cy="40" r="28" fill="none" stroke={COLORS.border} strokeWidth="10" />
//             <circle cx="40" cy="40" r="28" fill="none" stroke={COLORS.primary} strokeWidth="10"
//               strokeDasharray={`${2 * Math.PI * 28 * 0.94} ${2 * Math.PI * 28 * 0.06}`}
//               strokeLinecap="round" transform="rotate(-90 40 40)" />
//             <text x="40" y="44" textAnchor="middle" fontSize="13" fontWeight="800" fill={COLORS.text}>94%</text>
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─────────────────────────── FEATURES ───────────────────────────
// const FEATURES = [
//   { icon: Briefcase,      title: "Recruitment Management", desc: "Post jobs, manage pipelines, and move candidates through stages — all from one board.", color: "primary" },
//   { icon: ClipboardList,  title: "Candidate Tracking",     desc: "Track every applicant, attach resumes, and log interview notes in real time.",          color: "blue" },
//   { icon: Calendar,       title: "Interview Scheduling",   desc: "Coordinate interviews with automatic calendar invites and conflict detection.",          color: "primary" },
//   { icon: Mail,           title: "Automated Emails",       desc: "Trigger offer letters, rejection emails, and onboarding packs automatically.",          color: "blue" },
//   { icon: UserCheck,      title: "Candidate Onboarding",   desc: "Digital onboarding checklists, document collection, and e-signatures built in.",        color: "primary" },
//   { icon: Users,          title: "Employee Management",    desc: "A single source of truth for every employee's profile, role, and history.",             color: "blue" },
//   { icon: Clock,          title: "Attendance Management",  desc: "Real-time check-ins, timesheets, shift scheduling, and overtime alerts.",               color: "primary" },
//   { icon: MapPinned,      title: "GPS Check-In/Out",       desc: "Location-verified attendance with photo capture and geofence enforcement.",             color: "blue" },
//   { icon: FileSpreadsheet,title: "Excel Import",           desc: "Bulk-import employees and attendance records from any Excel or CSV file.",              color: "primary" },
//   { icon: BarChart2,      title: "HR Analytics",           desc: "Live dashboards for headcount, attrition, attendance, and hiring funnels.",            color: "blue" },
//   { icon: MessageSquare,  title: "Internal Chat",          desc: "Private and group messaging with read receipts and file sharing.",                      color: "primary" },
//   { icon: Phone,          title: "Audio Calling",          desc: "Crystal-clear audio calls between employees, right inside the app.",                   color: "blue" },
//   { icon: Shield,         title: "Role-Based Access",      desc: "Granular permissions ensure every user sees only what they need.",                      color: "primary" },
// ];

// const FEAT_COLORS = {
//   primary: { bg: COLORS.primaryLight, text: COLORS.primaryDark, border: COLORS.primaryBorder },
//   blue:    { bg: COLORS.blueLight,    text: COLORS.blue,         border: "#c3d9f7" },
// };

// function Features() {
//   return (
//     <section id="features" className="section-pad" style={{ background: `linear-gradient(to bottom, ${COLORS.surface}, ${COLORS.primaryLight}55)` }}>
//       <div className="container">
//         <FadeIn>
//           <div style={{ textAlign: "center", marginBottom: 56 }}>
//             <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: 999, background: COLORS.primaryLight, color: COLORS.primary, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16, border: `1px solid ${COLORS.primaryBorder}` }}>Everything you need</span>
//             <h2 style={{ fontSize: "clamp(24px, 4vw, 48px)", fontWeight: 900, color: COLORS.text, letterSpacing: "-0.8px", margin: "0 0 16px" }}>
//               13 powerful features,<br />one platform
//             </h2>
//             <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: COLORS.muted, maxWidth: 520, margin: "0 auto" }}>
//               Stop juggling multiple HR tools. Info HRM brings every workflow under one roof.
//             </p>
//           </div>
//         </FadeIn>

//         <div className="features-grid">
//           {FEATURES.map((f, i) => {
//             const c = FEAT_COLORS[f.color];
//             return (
//               <FadeIn key={f.title} delay={i * 0.04} direction="up">
//                 <motion.div
//                   whileHover={{ y: -4, boxShadow: `0 20px 40px -12px ${COLORS.primary}22` }}
//                   style={{ padding: "20px", background: COLORS.surface, borderRadius: 16, border: `1px solid ${COLORS.border}`, cursor: "default", height: "100%", transition: "border-color 0.2s" }}
//                   onMouseEnter={e => e.currentTarget.style.borderColor = COLORS.primaryBorder}
//                   onMouseLeave={e => e.currentTarget.style.borderColor = COLORS.border}
//                 >
//                   <div style={{ width: 44, height: 44, borderRadius: 12, background: c.bg, border: `1px solid ${c.border}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
//                     <f.icon size={20} style={{ color: c.text }} />
//                   </div>
//                   <div style={{ fontWeight: 700, color: COLORS.text, marginBottom: 6, fontSize: 15 }}>{f.title}</div>
//                   <div style={{ fontSize: 13, color: COLORS.muted, lineHeight: 1.65 }}>{f.desc}</div>
//                 </motion.div>
//               </FadeIn>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────── WORKFLOW ───────────────────────────
// const WORKFLOW_STEPS = [
//   { icon: Briefcase,    label: "Job Posting",  desc: "Publish roles across boards" },
//   { icon: ClipboardList,label: "Application",  desc: "Candidates apply online" },
//   { icon: Calendar,     label: "Interview",    desc: "Schedule & conduct rounds" },
//   { icon: CheckCircle2, label: "Selection",    desc: "Rate, score, and decide" },
//   { icon: Mail,         label: "Auto Email",   desc: "Offers or rejections sent" },
//   { icon: UserCheck,    label: "Onboarding",   desc: "Digital welcome checklist" },
//   { icon: Users,        label: "Employee",     desc: "Profile auto-created" },
// ];

// function Workflow() {
//   return (
//     <section id="workflow" className="section-pad" style={{ background: COLORS.surface }}>
//       <div className="container">
//         <FadeIn>
//           <div style={{ textAlign: "center", marginBottom: 48 }}>
//             <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: 999, background: COLORS.primaryLight, color: COLORS.primary, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16, border: `1px solid ${COLORS.primaryBorder}` }}>Recruitment</span>
//             <h2 style={{ fontSize: "clamp(24px, 4vw, 48px)", fontWeight: 900, color: COLORS.text, letterSpacing: "-0.8px", margin: "0 0 12px" }}>From job post to first day</h2>
//             <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: COLORS.muted }}>The entire hiring pipeline, automated end-to-end.</p>
//           </div>
//         </FadeIn>

//         <div className="workflow-steps">
//           {WORKFLOW_STEPS.map((step, i) => (
//             <FadeIn key={step.label} delay={i * 0.08} direction="up" style={{ flex: "1 0 auto", minWidth: "110px", display: "flex", flexDirection: "column", alignItems: "center" }}>
//               <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
//                 <div style={{ flex: 1, height: 2, background: i === 0 ? "transparent" : `linear-gradient(to right, ${COLORS.primaryBorder}, ${COLORS.primary}80)` }} />
//                 <motion.div whileHover={{ scale: 1.12 }}
//                   style={{ width: 48, height: 48, borderRadius: 14, flexShrink: 0, background: COLORS.primaryLight, border: `2px solid ${COLORS.primaryBorder}`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 16px ${COLORS.primary}20`, zIndex: 1, cursor: "default" }}
//                 >
//                   <step.icon size={20} style={{ color: COLORS.primary }} />
//                 </motion.div>
//                 <div style={{ flex: 1, height: 2, background: i === WORKFLOW_STEPS.length - 1 ? "transparent" : `linear-gradient(to right, ${COLORS.primary}80, ${COLORS.primaryBorder})` }} />
//               </div>
//               <div style={{ marginTop: 12, textAlign: "center", padding: "0 4px" }}>
//                 <div style={{ fontWeight: 700, color: COLORS.text, fontSize: 12 }}>{step.label}</div>
//                 <div style={{ fontSize: 11, color: COLORS.muted, marginTop: 3 }}>{step.desc}</div>
//               </div>
//               <div style={{ marginTop: 6, width: 18, height: 18, borderRadius: "50%", background: COLORS.primaryLight, color: COLORS.primary, fontSize: 9, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${COLORS.primaryBorder}` }}>
//                 {i + 1}
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────── EMPLOYEE MGMT ───────────────────────────
// function EmployeeManagement() {
//   const features = [
//     { icon: Users,     title: "Unified Profiles",    desc: "Every employee's employment history, documents, and performance in one place." },
//     { icon: GitBranch, title: "Org Chart",           desc: "Visual hierarchy with drill-down from CEO to individual contributors." },
//     { icon: Award,     title: "Performance Reviews", desc: "Structured appraisal cycles with 360° feedback and goal alignment." },
//     { icon: Database,  title: "Document Vault",      desc: "Contracts, IDs, certificates — stored, versioned, and access-controlled." },
//   ];

//   return (
//     <section className="section-pad" style={{ background: `linear-gradient(to bottom, ${COLORS.primaryLight}55, ${COLORS.surface})` }}>
//       <div className="container">
//         <div className="two-col-grid">
//           <FadeIn direction="right">
//             <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: 999, background: COLORS.primaryLight, color: COLORS.primary, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16, border: `1px solid ${COLORS.primaryBorder}` }}>Employee Management</span>
//             <h2 style={{ fontSize: "clamp(22px, 3vw, 40px)", fontWeight: 900, color: COLORS.text, letterSpacing: "-0.6px", margin: "0 0 16px" }}>Your people, perfectly organized</h2>
//             <p style={{ fontSize: "clamp(14px, 1.8vw, 17px)", color: COLORS.muted, marginBottom: 28, lineHeight: 1.7 }}>
//               Replace scattered spreadsheets with a real-time employee database that keeps everyone's records accurate and accessible.
//             </p>
//             <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
//               {features.map((f) => (
//                 <div key={f.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
//                   <div style={{ width: 38, height: 38, borderRadius: 10, background: COLORS.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `1px solid ${COLORS.primaryBorder}` }}>
//                     <f.icon size={17} style={{ color: COLORS.primary }} />
//                   </div>
//                   <div>
//                     <div style={{ fontWeight: 700, color: COLORS.text, fontSize: 14 }}>{f.title}</div>
//                     <div style={{ fontSize: 13, color: COLORS.muted, marginTop: 3, lineHeight: 1.6 }}>{f.desc}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </FadeIn>

//           <FadeIn direction="left" delay={0.15}>
//             <div style={{ position: "relative" }}>
//               <div style={{ position: "absolute", inset: 0, background: `${COLORS.primary}18`, borderRadius: 28, filter: "blur(32px)" }} />
//               <div className="emp-dir-card">
//                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
//                   <div style={{ fontWeight: 700, color: COLORS.text, fontSize: 15 }}>Employee Directory</div>
//                   <div style={{ fontSize: 12, color: COLORS.primary, background: COLORS.primaryLight, padding: "3px 10px", borderRadius: 999, fontWeight: 600 }}>248 employees</div>
//                 </div>
//                 {[
//                   { name: "Priya Sharma", role: "Senior Designer",  dept: "Product",     active: true  },
//                   { name: "Arjun Nair",   role: "Backend Engineer", dept: "Engineering", active: true  },
//                   { name: "Kiran Mehta",  role: "HR Manager",       dept: "HR",          active: false },
//                   { name: "Divya Raj",    role: "Sales Lead",       dept: "Sales",       active: true  },
//                 ].map((emp, i) => (
//                   <motion.div key={emp.name} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
//                     style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: i < 3 ? `1px solid ${COLORS.border}` : "none", flexWrap: "wrap" }}
//                   >
//                     <div style={{ width: 34, height: 34, borderRadius: "50%", background: G.primary, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{emp.name[0]}</div>
//                     <div style={{ flex: 1, minWidth: 0 }}>
//                       <div style={{ fontWeight: 600, fontSize: 13, color: COLORS.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{emp.name}</div>
//                       <div style={{ fontSize: 11, color: COLORS.muted, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{emp.role} · {emp.dept}</div>
//                     </div>
//                     <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 999, fontWeight: 600, background: emp.active ? "#e6f8f0" : "#fff4ec", color: emp.active ? COLORS.green : COLORS.amber, whiteSpace: "nowrap" }}>
//                       {emp.active ? "Active" : "On Leave"}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </FadeIn>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────── ATTENDANCE & GPS ───────────────────────────
// function AttendanceGPS() {
//   const items = [
//     { icon: Clock,           title: "Normal Attendance",  desc: "Standard check-in/out with timestamped records and shift reports." },
//     { icon: MapPin,          title: "GPS Attendance",     desc: "Verify employee location on check-in with live map visualization." },
//     { icon: FileSpreadsheet, title: "Excel Upload",       desc: "Bulk import historical attendance from any spreadsheet format." },
//     { icon: BarChart2,       title: "Attendance Reports", desc: "Daily, weekly, and monthly reports exported in one click." },
//     { icon: Bell,            title: "Late Alerts",        desc: "Automated notifications for late arrivals and missed check-outs." },
//   ];

//   return (
//     <section id="attendance" className="section-pad" style={{ background: COLORS.surface }}>
//       <div className="container">
//         <div className="two-col-grid">
//           {/* Map mock */}
//           <FadeIn direction="right" delay={0.1}>
//             <div style={{ position: "relative" }}>
//               <div style={{ position: "absolute", inset: 0, background: `${COLORS.primary}14`, borderRadius: 28, filter: "blur(32px)" }} />
//              <div style={{ position: "relative", background: COLORS.surface, borderRadius: 20, border: `1px solid ${COLORS.primaryBorder}`, boxShadow: `0 16px 48px ${COLORS.primary}18`, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>
//                <div style={{ position: "relative", flex: 1, minHeight: 400, background: "linear-gradient(135deg, #f0eeff, #e8e0f8)", overflow: "hidden" }}>
//                   <div style={{ position: "absolute", inset: 0, backgroundImage: `repeating-linear-gradient(0deg, ${COLORS.primary}14 0px, transparent 1px, transparent 39px, ${COLORS.primary}14 40px), repeating-linear-gradient(90deg, ${COLORS.primary}14 0px, transparent 1px, transparent 39px, ${COLORS.primary}14 40px)` }} />
//                   <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 10, background: "rgba(255,255,255,0.6)", transform: "translateY(-50%)" }} />
//                   <div style={{ position: "absolute", left: "33%", top: 0, bottom: 0, width: 10, background: "rgba(255,255,255,0.6)" }} />
//                   <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 100, height: 100, borderRadius: "50%", border: `2px solid ${COLORS.primary}55`, background: `${COLORS.primary}08` }} />
//                   <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//                     style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
//                   >
//                     <div style={{ width: 36, height: 36, borderRadius: "50%", background: COLORS.primary, border: "3px solid white", boxShadow: `0 4px 16px ${COLORS.primary}80`, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                       <MapPin size={14} style={{ color: "white" }} />
//                     </div>
//                   </motion.div>
//                   <div style={{ position: "absolute", top: 10, left: 10, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)", borderRadius: 7, padding: "3px 8px", fontSize: 11, fontWeight: 600, color: COLORS.text }}>📍 Geofence Active</div>
//                 </div>
//                 <div className="att-stats-grid">
//                   {[
//                     { label: "Present", value: "231", color: COLORS.green },
//                     { label: "Late",    value: "11",  color: COLORS.amber },
//                     { label: "Absent",  value: "6",   color: "#ef4444" },
//                   ].map((s) => (
//                     <div key={s.label} style={{ textAlign: "center" }}>
//                       <div style={{ fontSize: "clamp(18px, 3vw, 24px)", fontWeight: 800, color: s.color }}>{s.value}</div>
//                       <div style={{ fontSize: 11, color: COLORS.muted, marginTop: 2 }}>{s.label}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </FadeIn>

//           <FadeIn direction="left">
//             <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: 999, background: COLORS.primaryLight, color: COLORS.primary, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16, border: `1px solid ${COLORS.primaryBorder}` }}>Attendance & GPS</span>
//             <h2 style={{ fontSize: "clamp(22px, 3vw, 40px)", fontWeight: 900, color: COLORS.text, letterSpacing: "-0.6px", margin: "0 0 16px" }}>Know where your team is, always</h2>
//             <p style={{ fontSize: "clamp(14px, 1.8vw, 17px)", color: COLORS.muted, marginBottom: 24, lineHeight: 1.7 }}>
//               GPS-verified check-ins, geofencing, and photo capture give you unmatched attendance accuracy.
//             </p>
//             <div className="att-items-grid">
//               {items.map((item) => (
//                 <div key={item.title}
//                   style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: 10, borderRadius: 10, transition: "background 0.2s", cursor: "default" }}
//                   onMouseEnter={e => e.currentTarget.style.background = COLORS.primaryLight}
//                   onMouseLeave={e => e.currentTarget.style.background = "transparent"}
//                 >
//                   <div style={{ width: 30, height: 30, borderRadius: 8, background: COLORS.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//                     <item.icon size={15} style={{ color: COLORS.primary }} />
//                   </div>
//                   <div>
//                     <div style={{ fontWeight: 700, fontSize: 13, color: COLORS.text }}>{item.title}</div>
//                     <div style={{ fontSize: 12, color: COLORS.muted, marginTop: 2, lineHeight: 1.5 }}>{item.desc}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </FadeIn>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────── COMMUNICATION HUB ───────────────────────────
// function CommunicationHub() {
//   const features = [
//     { icon: MessageSquare, label: "Private Chat",  desc: "1-to-1 encrypted messages" },
//     { icon: Users,         label: "Group Rooms",   desc: "Department & project channels" },
//     { icon: Phone,         label: "Audio Calls",   desc: "High-quality voice calls" },
//     { icon: Bell,          label: "Smart Alerts",  desc: "Push + in-app notifications" },
//     { icon: Download,      label: "File Sharing",  desc: "Docs, images, and more" },
//   ];

//   return (
//     <section id="communication" className="section-pad" style={{ background: G.dark, position: "relative", overflow: "hidden" }}>
//       {/* Background blobs */}
//       <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
//         {Array.from({ length: 30 }).map((_, i) => (
//           <div key={i} style={{ position: "absolute", borderRadius: "50%", background: COLORS.primary, width: (Math.random() * 3 + 1) + "px", height: (Math.random() * 3 + 1) + "px", top: (Math.random() * 100) + "%", left: (Math.random() * 100) + "%", opacity: Math.random() * 0.4 + 0.1 }} />
//         ))}
//         <div style={{ position: "absolute", top: "30%", left: "20%", width: 250, height: 250, background: `${COLORS.primary}12`, borderRadius: "50%", filter: "blur(60px)" }} />
//         <div style={{ position: "absolute", bottom: "20%", right: "15%", width: 180, height: 180, background: `${COLORS.primaryDark}10`, borderRadius: "50%", filter: "blur(40px)" }} />
//       </div>

//       <div className="container" style={{ position: "relative" }}>
//         <div className="two-col-grid">

//           {/* LEFT: heading + feature list */}
//           <FadeIn direction="right">
//             <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: 999, background: `${COLORS.primary}22`, color: COLORS.primary, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16, border: `1px solid ${COLORS.primary}44` }}>
//               Communication Hub
//             </span>
//             <h2 style={{ fontSize: "clamp(22px, 3vw, 40px)", fontWeight: 900, color: "white", letterSpacing: "-0.6px", margin: "0 0 14px" }}>
//               Your team's command center
//             </h2>
//             <p style={{ fontSize: "clamp(14px, 1.8vw, 17px)", color: COLORS.darkText, marginBottom: 28, lineHeight: 1.7 }}>
//               Real-time chat, calls, and notifications — purpose-built for your workforce.
//             </p>

//             <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//               {features.map((f) => (
//                 <div key={f.label}
//                   style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 12px", borderRadius: 12, border: `1px solid ${COLORS.darkBorder}`, background: `${COLORS.primary}0d`, transition: "background 0.2s", cursor: "default" }}
//                   onMouseEnter={e => e.currentTarget.style.background = `${COLORS.primary}1f`}
//                   onMouseLeave={e => e.currentTarget.style.background = `${COLORS.primary}0d`}
//                 >
//                   <div style={{ width: 34, height: 34, borderRadius: 9, background: `${COLORS.primary}22`, border: `1px solid ${COLORS.primary}33`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//                     <f.icon size={16} style={{ color: COLORS.primary }} />
//                   </div>
//                   <div>
//                     <div style={{ fontWeight: 700, color: "white", fontSize: 13 }}>{f.label}</div>
//                     <div style={{ fontSize: 12, color: COLORS.darkText, marginTop: 2 }}>{f.desc}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </FadeIn>

//           {/* RIGHT: Chat preview */}
//           <FadeIn direction="left" delay={0.15}>
//             <div style={{ position: "relative" }}>
//               <div style={{ position: "absolute", inset: 0, background: `${COLORS.primary}18`, borderRadius: 28, filter: "blur(32px)" }} />
//               <div style={{ position: "relative", background: `${COLORS.primary}10`, border: `1px solid ${COLORS.darkBorder}`, borderRadius: 18, overflow: "hidden", backdropFilter: "blur(8px)" }}>

//                 {/* Chat header */}
//                 <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 16px", borderBottom: `1px solid ${COLORS.darkBorder}` }}>
//                   <div style={{ width: 32, height: 32, borderRadius: "50%", background: G.primary, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 13, flexShrink: 0 }}>P</div>
//                   <div>
//                     <div style={{ color: "white", fontSize: 13, fontWeight: 700 }}>Product Team</div>
//                     <div style={{ color: COLORS.darkText, fontSize: 11 }}>12 members · 3 online</div>
//                   </div>
//                   <div style={{ marginLeft: "auto", display: "flex", gap: 10 }}>
//                     <Phone size={15} style={{ color: COLORS.primary }} />
//                     <Video size={15} style={{ color: COLORS.primary }} />
//                   </div>
//                 </div>

//                 {/* Messages */}
//                 <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
//                   {[
//                     { name: "Arjun", msg: "Design review at 3pm today?",           time: "2:41 PM", self: false },
//                     { name: "Priya", msg: "Works for me 👍",                        time: "2:42 PM", self: false },
//                     { name: "You",   msg: "Confirmed. Sending calendar invite now.", time: "2:43 PM", self: true  },
//                   ].map((m) => (
//                     <div key={m.time} style={{ display: "flex", gap: 8, flexDirection: m.self ? "row-reverse" : "row" }}>
//                       {!m.self && (
//                         <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${COLORS.primary}55`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>
//                           {m.name[0]}
//                         </div>
//                       )}
//                       <div style={{ padding: "8px 12px", borderRadius: 10, fontSize: 13, maxWidth: "80%", background: m.self ? COLORS.primary : `${COLORS.primary}22`, color: "white" }}>
//                         {m.msg}
//                         <div style={{ fontSize: 10, marginTop: 3, opacity: 0.55 }}>{m.time}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Online members strip */}
//                 <div style={{ padding: "10px 16px", borderTop: `1px solid ${COLORS.darkBorder}`, borderBottom: `1px solid ${COLORS.darkBorder}`, display: "flex", alignItems: "center", gap: 8 }}>
//                   <div style={{ fontSize: 11, color: COLORS.darkText, fontWeight: 500 }}>Online:</div>
//                   {["A", "P", "K"].map((initial, i) => (
//                     <div key={i} style={{ width: 24, height: 24, borderRadius: "50%", background: G.primary, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 10, fontWeight: 700, border: `2px solid ${COLORS.dark}` }}>
//                       {initial}
//                     </div>
//                   ))}
//                   <div style={{ width: 8, height: 8, borderRadius: "50%", background: COLORS.green, marginLeft: "auto", boxShadow: `0 0 0 2px ${COLORS.green}44` }} />
//                   <span style={{ fontSize: 11, color: COLORS.green, fontWeight: 600 }}>3 active</span>
//                 </div>

//                 {/* Input */}
//                 <div style={{ padding: "12px 16px" }}>
//                   <div style={{ display: "flex", alignItems: "center", gap: 8, background: `${COLORS.primary}15`, border: `1px solid ${COLORS.darkBorder}`, borderRadius: 10, padding: "9px 12px" }}>
//                     <input style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 13, color: "white", minWidth: 0 }} placeholder="Type a message..." readOnly />
//                     <Send size={15} style={{ color: COLORS.primary, flexShrink: 0 }} />
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </FadeIn>

//         </div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────── ANALYTICS ───────────────────────────
// function Analytics() {
//   return (
//     <section className="section-pad" style={{ background: COLORS.surface }}>
//       <div className="container">
//         <div className="two-col-grid">
//           <FadeIn direction="right">
//             <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: 999, background: COLORS.primaryLight, color: COLORS.primary, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16, border: `1px solid ${COLORS.primaryBorder}` }}>Analytics</span>
//             <h2 style={{ fontSize: "clamp(22px, 3vw, 40px)", fontWeight: 900, color: COLORS.text, letterSpacing: "-0.6px", margin: "0 0 16px" }}>Data that drives better decisions</h2>
//             <p style={{ fontSize: "clamp(14px, 1.8vw, 17px)", color: COLORS.muted, marginBottom: 28, lineHeight: 1.7 }}>
//               Live dashboards for every HR metric that matters — from hiring velocity to attrition risk.
//             </p>
//             <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
//               {[
//                 { label: "Headcount Growth",     value: 78, color: COLORS.primary },
//                 { label: "Attendance Rate",       value: 94, color: COLORS.blue },
//                 { label: "Offer Acceptance",      value: 86, color: COLORS.amber },
//                 { label: "Onboarding Completion", value: 91, color: COLORS.primaryDark },
//               ].map((m, i) => (
//                 <FadeIn key={m.label} delay={i * 0.1} direction="right">
//                   <div>
//                     <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 5 }}>
//                       <span style={{ color: COLORS.muted, fontWeight: 500 }}>{m.label}</span>
//                       <span style={{ color: COLORS.text, fontWeight: 800 }}>{m.value}%</span>
//                     </div>
//                     <div style={{ height: 8, background: COLORS.border, borderRadius: 999, overflow: "hidden" }}>
//                       <motion.div initial={{ width: 0 }} whileInView={{ width: `${m.value}%` }} transition={{ duration: 1, ease: "easeOut", delay: i * 0.1 }}
//                         style={{ height: "100%", borderRadius: 999, background: m.color }}
//                       />
//                     </div>
//                   </div>
//                 </FadeIn>
//               ))}
//             </div>
//           </FadeIn>

//           <FadeIn direction="left" delay={0.1}>
//             <div style={{ background: COLORS.surface, borderRadius: 20, border: `1px solid ${COLORS.border}`, boxShadow: `0 8px 32px ${COLORS.primary}10`, padding: 20 }}>
//               <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
//                 <div style={{ fontWeight: 700, color: COLORS.text, fontSize: 15 }}>Hiring Funnel</div>
//                 <Filter size={16} style={{ color: COLORS.muted }} />
//               </div>
//               {[
//                 { stage: "Applied",     count: 342, pct: 100 },
//                 { stage: "Screened",    count: 218, pct: 63 },
//                 { stage: "Interviewed", count: 104, pct: 30 },
//                 { stage: "Offered",     count: 42,  pct: 12 },
//                 { stage: "Joined",      count: 36,  pct: 10 },
//               ].map((s, i) => (
//                 <div key={s.stage} style={{ marginBottom: 12 }}>
//                   <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
//                     <span style={{ color: COLORS.muted }}>{s.stage}</span>
//                     <span style={{ fontWeight: 700, color: COLORS.text }}>{s.count}</span>
//                   </div>
//                   <div style={{ height: 20, background: COLORS.bg, borderRadius: 8, overflow: "hidden" }}>
//                     <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.pct}%` }} transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
//                       style={{ height: "100%", borderRadius: 8, background: `linear-gradient(to right, ${COLORS.primaryLight}, ${COLORS.primary}88)`, display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 8 }}
//                     >
//                       <span style={{ fontSize: 10, color: COLORS.primaryDark, fontWeight: 700 }}>{s.pct}%</span>
//                     </motion.div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </FadeIn>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────── PRICING ───────────────────────────
// const PLANS = [
//   {
//     name: "Starter", price: "₹999", period: "/month",
//     desc: "Perfect for small teams just getting started.",
//     features: ["Up to 25 employees","Recruitment & Onboarding","Basic Attendance","Employee Profiles","Email Support"],
//     cta: "Get started", highlight: false,
//   },
//   {
//     name: "Professional", price: "₹2,499", period: "/month",
//     desc: "The full platform for growing companies.",
//     features: ["Up to 200 employees","Everything in Starter","GPS Attendance","Payroll & Leave","Chat & Calling","Analytics Dashboard","Priority Support"],
//     cta: "Start free trial", highlight: true,
//   },
//   {
//     name: "Enterprise", price: "Custom", period: "",
//     desc: "Tailored solutions for large organisations.",
//     features: ["Unlimited employees","Everything in Professional","Custom Integrations","Dedicated Account Manager","SLA & 24/7 Support","On-premise option"],
//     cta: "Contact sales", highlight: false,
//   },
// ];

// function Pricing() {
//   return (
//     <section id="pricing" className="section-pad" style={{ background: `linear-gradient(to bottom, ${COLORS.primaryLight}55, ${COLORS.surface})` }}>
//       <div className="container">
//         <FadeIn>
//           <div style={{ textAlign: "center", marginBottom: 56 }}>
//             <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: 999, background: COLORS.primaryLight, color: COLORS.primary, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16, border: `1px solid ${COLORS.primaryBorder}` }}>Pricing</span>
//             <h2 style={{ fontSize: "clamp(24px, 4vw, 48px)", fontWeight: 900, color: COLORS.text, letterSpacing: "-0.8px", margin: "0 0 12px" }}>Simple, transparent pricing</h2>
//             <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: COLORS.muted }}>No hidden fees. Cancel anytime.</p>
//           </div>
//         </FadeIn>

//         <div className="pricing-grid">
//           {PLANS.map((plan, i) => (
//             <FadeIn key={plan.name} delay={i * 0.12}>
//               <motion.div whileHover={{ y: -6 }}
//                 style={{
//                   position: "relative", padding: "24px 24px", borderRadius: 22,
//                   display: "flex", flexDirection: "column", height: "100%",
//                   ...(plan.highlight ? {
//                     background: G.primary, color: "white",
//                     boxShadow: `0 20px 60px ${COLORS.primary}50`, border: "none",
//                   } : {
//                     background: COLORS.surface, border: `1px solid ${COLORS.border}`,
//                     boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
//                   }),
//                   transition: "all 0.3s",
//                 }}
//               >
//                 {plan.highlight && (
//                   <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: COLORS.amber, color: "white", fontSize: 11, fontWeight: 800, padding: "4px 14px", borderRadius: 999, boxShadow: `0 4px 12px ${COLORS.amber}55`, whiteSpace: "nowrap" }}>Most Popular</div>
//                 )}
//                 <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8, color: plan.highlight ? "rgba(255,255,255,0.7)" : COLORS.primary }}>{plan.name}</div>
//                 <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 6 }}>
//                   <span style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 900, color: plan.highlight ? "white" : COLORS.text }}>{plan.price}</span>
//                   <span style={{ fontSize: 13, marginBottom: 6, color: plan.highlight ? "rgba(255,255,255,0.55)" : COLORS.muted }}>{plan.period}</span>
//                 </div>
//                 <p style={{ fontSize: 13, marginBottom: 20, color: plan.highlight ? "rgba(255,255,255,0.7)" : COLORS.muted }}>{plan.desc}</p>
//                 <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
//                   {plan.features.map((f) => (
//                     <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13 }}>
//                       <CheckCircle2 size={15} style={{ color: plan.highlight ? "rgba(255,255,255,0.8)" : COLORS.primary, flexShrink: 0 }} />
//                       <span style={{ color: plan.highlight ? "rgba(255,255,255,0.85)" : COLORS.muted }}>{f}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <a href="/register"
//                   style={{ display: "block", textAlign: "center", padding: "12px", borderRadius: 12, fontSize: 14, fontWeight: 700, textDecoration: "none", transition: "all 0.2s", ...(plan.highlight ? { background: "white", color: COLORS.primaryDark } : { background: COLORS.primary, color: "white", boxShadow: `0 4px 14px ${COLORS.primary}44` }) }}
//                 >
//                   {plan.cta}
//                 </a>
//               </motion.div>
//             </FadeIn>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────── FAQ ───────────────────────────
// const FAQS = [
//   { q: "How long does setup take?", a: "Most teams are fully onboarded within a day. Our setup wizard walks you through company configuration, employee import, and role assignment step by step." },
//   { q: "Can I import our existing employee data?", a: "Yes. Info HRM accepts Excel and CSV imports for employees, attendance records, and leave balances. We provide a template with all required columns." },
//   { q: "Is GPS attendance accurate indoors?", a: "GPS accuracy varies indoors but is highly reliable outdoors. For indoor environments we support Wi-Fi and beacon-based check-ins as a complement." },
//   { q: "Does it work on mobile?", a: "Yes — our Flutter app for Android and iOS covers all core features including check-ins, chat, leave requests, and notifications." },
//   { q: "Is there a free trial?", a: "The Professional plan includes a 14-day free trial with no credit card required. Starter is free for up to 25 employees permanently." },
// ];

// function FAQ() {
//   const [open, setOpen] = useState(null);

//   return (
//     <section id="faq" className="section-pad" style={{ background: `linear-gradient(to bottom, ${COLORS.primaryLight}55, ${COLORS.surface})` }}>
//       <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
//         <FadeIn>
//           <div style={{ textAlign: "center", marginBottom: 48 }}>
//             <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: 999, background: COLORS.primaryLight, color: COLORS.primary, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16, border: `1px solid ${COLORS.primaryBorder}` }}>FAQ</span>
//             <h2 style={{ fontSize: "clamp(24px, 4vw, 44px)", fontWeight: 900, color: COLORS.text, letterSpacing: "-0.8px", margin: 0 }}>Frequently asked questions</h2>
//           </div>
//         </FadeIn>

//         <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//           {FAQS.map((faq, i) => (
//             <FadeIn key={i} delay={i * 0.06}>
//               <div onClick={() => setOpen(open === i ? null : i)}
//                 style={{ background: COLORS.surface, borderRadius: 14, overflow: "hidden", cursor: "pointer", border: `1px solid ${open === i ? COLORS.primaryBorder : COLORS.border}`, transition: "border-color 0.2s", boxShadow: open === i ? `0 4px 16px ${COLORS.primary}14` : "none" }}
//               >
//                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", gap: 12 }}>
//                   <span style={{ fontWeight: 700, color: COLORS.text, fontSize: "clamp(13px, 2vw, 14px)" }}>{faq.q}</span>
//                   <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
//                     <ChevronDown size={17} style={{ color: COLORS.primary, flexShrink: 0 }} />
//                   </motion.div>
//                 </div>
//                 <AnimatePresence>
//                   {open === i && (
//                     <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
//                       <p style={{ padding: "0 18px 14px", fontSize: 14, color: COLORS.muted, lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────── CONTACT ───────────────────────────


// // ─────────────────────────── CONTACT (with API Integration) ───────────────────────────
// // Replace your existing Contact function with this one.
// // Reads VITE_API_BASE_URL from .env → POST to /contact/

// function Contact() {
//   const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

//   const INITIAL = {
//     name: "",
//     last_name: "",
//     work_email: "",
//     company_size: "1-25 employees",
//     message: "",
//   };

//   const [form, setForm]       = useState(INITIAL);
//   const [status, setStatus]   = useState("idle"); // idle | loading | success | error
//   const [errors, setErrors]   = useState({});
//   const [apiError, setApiError] = useState("");

//   // ── Field change handler ──
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//     // Clear field-level error on change
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   // ── Client-side validation ──
//   const validate = () => {
//     const errs = {};
//     if (!form.name.trim())         errs.name       = "First name is required";
//     if (!form.last_name.trim())    errs.last_name  = "Last name is required";
//     if (!form.work_email.trim())   errs.work_email = "Email is required";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.work_email))
//                                    errs.work_email = "Enter a valid email";
//     if (!form.message.trim())      errs.message    = "Message is required";
//     return errs;
//   };

//   // ── Submit handler ──
//   const handleSubmit = async () => {
//     setApiError("");
//     const errs = validate();
//     if (Object.keys(errs).length) { setErrors(errs); return; }

//     setStatus("loading");
//     try {
//       const res = await fetch(`${API_BASE}/contact/`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (res.status === 201) {
//         setStatus("success");
//         setForm(INITIAL);
//         setErrors({});
//       } else {
//         const data = await res.json();
//         // Map Django field errors back to form
//         const serverErrs = {};
//         Object.entries(data).forEach(([key, val]) => {
//           serverErrs[key] = Array.isArray(val) ? val[0] : val;
//         });
//         setErrors(serverErrs);
//         setApiError("Please fix the errors below and try again.");
//         setStatus("error");
//       }
//     } catch {
//       setApiError("Network error — please check your connection and try again.");
//       setStatus("error");
//     }
//   };

//   // ── Input style helper ──
//   const inputStyle = (field) => ({
//     width: "100%",
//     padding: "10px 12px",
//     borderRadius: 9,
//     border: `1px solid ${errors[field] ? "#ef4444" : COLORS.border}`,
//     fontSize: 13,
//     color: COLORS.text,
//     outline: "none",
//     transition: "border-color 0.2s, box-shadow 0.2s",
//     background: COLORS.surface,
//     boxSizing: "border-box",
//   });

//   const labelStyle = {
//     display: "block",
//     fontSize: 11,
//     fontWeight: 700,
//     color: COLORS.muted,
//     marginBottom: 6,
//     textTransform: "uppercase",
//     letterSpacing: "0.05em",
//   };

//   const errorStyle = {
//     fontSize: 11,
//     color: "#ef4444",
//     marginTop: 4,
//     display: "block",
//   };

//   return (
//     <section id="contact" className="section-pad" style={{ background: COLORS.surface }}>
//       <div className="container">
//         <div className="two-col-grid">

//           {/* ── LEFT: Info ── */}
//           <FadeIn direction="right">
//             <span style={{
//               display: "inline-block", padding: "4px 14px", borderRadius: 999,
//               background: COLORS.primaryLight, color: COLORS.primary,
//               fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em",
//               marginBottom: 16, border: `1px solid ${COLORS.primaryBorder}`,
//             }}>Contact</span>

//             <h2 style={{ fontSize: "clamp(22px, 3vw, 40px)", fontWeight: 900, color: COLORS.text, letterSpacing: "-0.6px", margin: "0 0 14px" }}>
//               Let's talk about your team
//             </h2>
//             <p style={{ fontSize: "clamp(14px, 1.8vw, 17px)", color: COLORS.muted, marginBottom: 28, lineHeight: 1.7 }}>
//               Whether you're evaluating, migrating, or just curious — we're happy to help.
//             </p>

//             <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
//               {[
//                 { icon: Mail,   label: "hello@hrm.com" },
//                 { icon: Phone,  label: "+91 00000 00000" },
//                 { icon: MapPin, label: "Coimbatore, Tamil Nadu, India " },
//               ].map((c) => (
//                 <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 12, color: COLORS.muted, fontSize: 14 }}>
//                   <div style={{ width: 34, height: 34, borderRadius: 9, background: COLORS.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${COLORS.primaryBorder}`, flexShrink: 0 }}>
//                     <c.icon size={15} style={{ color: COLORS.primary }} />
//                   </div>
//                   {c.label}
//                 </div>
//               ))}
//             </div>
//           </FadeIn>

//           {/* ── RIGHT: Form ── */}
//           <FadeIn direction="left" delay={0.1}>
//             <div style={{ background: COLORS.surface, borderRadius: 22, border: `1px solid ${COLORS.border}`, boxShadow: `0 8px 32px ${COLORS.primary}10`, padding: "28px" }}>

//               {/* ── Success State ── */}
//               <AnimatePresence>
//                 {status === "success" && (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0 }}
//                     style={{
//                       textAlign: "center", padding: "32px 16px",
//                       display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
//                     }}
//                   >
//                     <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#e6f8f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                       <CheckCircle2 size={28} style={{ color: COLORS.green }} />
//                     </div>
//                     <div style={{ fontWeight: 800, fontSize: 18, color: COLORS.text }}>Message sent!</div>
//                     <p style={{ fontSize: 14, color: COLORS.muted, lineHeight: 1.6, maxWidth: 280 }}>
//                       Thanks for reaching out. Our team will get back to you within 24 hours.
//                     </p>
//                     <button
//                       onClick={() => setStatus("idle")}
//                       style={{ marginTop: 8, padding: "10px 24px", borderRadius: 10, border: `1px solid ${COLORS.primaryBorder}`, background: COLORS.primaryLight, color: COLORS.primary, fontWeight: 700, fontSize: 13, cursor: "pointer" }}
//                     >
//                       Send another message
//                     </button>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* ── Form Fields ── */}
//               {status !== "success" && (
//                 <>
//                   {/* API-level error banner */}
//                   {apiError && (
//                     <div style={{ marginBottom: 16, padding: "10px 14px", borderRadius: 9, background: "#fef2f2", border: "1px solid #fecaca", fontSize: 13, color: "#dc2626" }}>
//                       {apiError}
//                     </div>
//                   )}

//                   {/* First + Last name */}
//                   <div className="contact-name-grid">
//                     <div>
//                       <label style={labelStyle}>First name</label>
//                       <input
//                         name="name"
//                         value={form.name}
//                         onChange={handleChange}
//                         style={inputStyle("name")}
//                         placeholder="Kavin"
//                         onFocus={e => { e.target.style.borderColor = COLORS.primary; e.target.style.boxShadow = `0 0 0 3px ${COLORS.primary}20`; }}
//                         onBlur={e => { e.target.style.borderColor = errors.name ? "#ef4444" : COLORS.border; e.target.style.boxShadow = ""; }}
//                       />
//                       {errors.name && <span style={errorStyle}>{errors.name}</span>}
//                     </div>
//                     <div>
//                       <label style={labelStyle}>Last name</label>
//                       <input
//                         name="last_name"
//                         value={form.last_name}
//                         onChange={handleChange}
//                         style={inputStyle("last_name")}
//                         placeholder="Raj"
//                         onFocus={e => { e.target.style.borderColor = COLORS.primary; e.target.style.boxShadow = `0 0 0 3px ${COLORS.primary}20`; }}
//                         onBlur={e => { e.target.style.borderColor = errors.last_name ? "#ef4444" : COLORS.border; e.target.style.boxShadow = ""; }}
//                       />
//                       {errors.last_name && <span style={errorStyle}>{errors.last_name}</span>}
//                     </div>
//                   </div>

//                   {/* Work email */}
//                   <div style={{ marginBottom: 14 }}>
//                     <label style={labelStyle}>Work email</label>
//                     <input
//                       type="email"
//                       name="work_email"
//                       value={form.work_email}
//                       onChange={handleChange}
//                       style={inputStyle("work_email")}
//                       placeholder="kavin@company.com"
//                       onFocus={e => { e.target.style.borderColor = COLORS.primary; e.target.style.boxShadow = `0 0 0 3px ${COLORS.primary}20`; }}
//                       onBlur={e => { e.target.style.borderColor = errors.work_email ? "#ef4444" : COLORS.border; e.target.style.boxShadow = ""; }}
//                     />
//                     {errors.work_email && <span style={errorStyle}>{errors.work_email}</span>}
//                   </div>

//                   {/* Company size — matches Django CHOICES exactly */}
//                   <div style={{ marginBottom: 14 }}>
//                     <label style={labelStyle}>Company size</label>
//                     <select
//                       name="company_size"
//                       value={form.company_size}
//                       onChange={handleChange}
//                       style={{ ...inputStyle("company_size"), cursor: "pointer" }}
//                     >
//                       <option value="1-25 employees">1–25 employees</option>
//                       <option value="26-100 employees">26–100 employees</option>
//                       <option value="101-500 employees">101–500 employees</option>
//                     </select>
//                   </div>

//                   {/* Message */}
//                   <div style={{ marginBottom: 20 }}>
//                     <label style={labelStyle}>Message</label>
//                     <textarea
//                       name="message"
//                       value={form.message}
//                       onChange={handleChange}
//                       rows={3}
//                       style={{ ...inputStyle("message"), resize: "none" }}
//                       placeholder="Tell us about your HR challenges..."
//                       onFocus={e => { e.target.style.borderColor = COLORS.primary; e.target.style.boxShadow = `0 0 0 3px ${COLORS.primary}20`; }}
//                       onBlur={e => { e.target.style.borderColor = errors.message ? "#ef4444" : COLORS.border; e.target.style.boxShadow = ""; }}
//                     />
//                     {errors.message && <span style={errorStyle}>{errors.message}</span>}
//                   </div>

//                   {/* Submit button */}
//                   <button
//                     onClick={handleSubmit}
//                     disabled={status === "loading"}
//                     style={{
//                       width: "100%", padding: 13, borderRadius: 12,
//                       fontSize: 14, fontWeight: 700, color: "white",
//                       background: status === "loading" ? `${COLORS.primary}99` : G.primary,
//                       border: "none", cursor: status === "loading" ? "not-allowed" : "pointer",
//                       boxShadow: `0 4px 14px ${COLORS.primary}44`,
//                       display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
//                       transition: "all 0.2s",
//                     }}
//                     onMouseEnter={e => { if (status !== "loading") { e.currentTarget.style.background = G.primaryHover; e.currentTarget.style.transform = "translateY(-1px)"; } }}
//                     onMouseLeave={e => { e.currentTarget.style.background = status === "loading" ? `${COLORS.primary}99` : G.primary; e.currentTarget.style.transform = ""; }}
//                   >
//                     {status === "loading" ? (
//                       <>
//                         {/* Spinner */}
//                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
//                           style={{ animation: "spin 0.8s linear infinite" }}>
//                           <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
//                         </svg>
//                         Sending…
//                         <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
//                       </>
//                     ) : (
//                       <><Send size={15} /> Send message</>
//                     )}
//                   </button>
//                 </>
//               )}
//             </div>
//           </FadeIn>

//         </div>
//       </div>
//     </section>
//   );
// }


// // function Contact() {
// //   return (
// //     <section id="contact" className="section-pad" style={{ background: COLORS.surface }}>
// //       <div className="container">
// //         <div className="two-col-grid">
// //           <FadeIn direction="right">
// //             <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: 999, background: COLORS.primaryLight, color: COLORS.primary, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16, border: `1px solid ${COLORS.primaryBorder}` }}>Contact</span>
// //             <h2 style={{ fontSize: "clamp(22px, 3vw, 40px)", fontWeight: 900, color: COLORS.text, letterSpacing: "-0.6px", margin: "0 0 14px" }}>Let's talk about your team</h2>
// //             <p style={{ fontSize: "clamp(14px, 1.8vw, 17px)", color: COLORS.muted, marginBottom: 28, lineHeight: 1.7 }}>
// //               Whether you're evaluating, migrating, or just curious — we're happy to help.
// //             </p>
// //             <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
// //               {[
// //                 { icon: Mail,  label: "hello@infohrm.com" },
// //                 { icon: Phone, label: "+91 98765 43210" },
// //                 { icon: MapPin,label: "Coimbatore, Tamil Nadu, India" },
// //               ].map((c) => (
// //                 <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 12, color: COLORS.muted, fontSize: 14 }}>
// //                   <div style={{ width: 34, height: 34, borderRadius: 9, background: COLORS.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${COLORS.primaryBorder}`, flexShrink: 0 }}>
// //                     <c.icon size={15} style={{ color: COLORS.primary }} />
// //                   </div>
// //                   {c.label}
// //                 </div>
// //               ))}
// //             </div>
// //           </FadeIn>

// //           <FadeIn direction="left" delay={0.1}>
// //             <div style={{ background: COLORS.surface, borderRadius: 22, border: `1px solid ${COLORS.border}`, boxShadow: `0 8px 32px ${COLORS.primary}10`, padding: "24px" }}>
// //               <div className="contact-name-grid">
// //                 {["First name", "Last name"].map((l) => (
// //                   <div key={l}>
// //                     <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: COLORS.muted, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{l}</label>
// //                     <input style={{ width: "100%", padding: "10px 12px", borderRadius: 9, border: `1px solid ${COLORS.border}`, fontSize: 13, color: COLORS.text, outline: "none", transition: "border-color 0.2s" }}
// //                       placeholder={l.split(" ")[0].toLowerCase()}
// //                       onFocus={e => { e.target.style.borderColor = COLORS.primary; e.target.style.boxShadow = `0 0 0 3px ${COLORS.primary}20`; }}
// //                       onBlur={e => { e.target.style.borderColor = COLORS.border; e.target.style.boxShadow = ""; }}
// //                     />
// //                   </div>
// //                 ))}
// //               </div>
// //               <div style={{ marginBottom: 14 }}>
// //                 <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: COLORS.muted, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>Work email</label>
// //                 <input type="email" style={{ width: "100%", padding: "10px 12px", borderRadius: 9, border: `1px solid ${COLORS.border}`, fontSize: 13, color: COLORS.text, outline: "none" }}
// //                   placeholder="kavin@company.com"
// //                   onFocus={e => { e.target.style.borderColor = COLORS.primary; e.target.style.boxShadow = `0 0 0 3px ${COLORS.primary}20`; }}
// //                   onBlur={e => { e.target.style.borderColor = COLORS.border; e.target.style.boxShadow = ""; }}
// //                 />
// //               </div>
// //               <div style={{ marginBottom: 14 }}>
// //                 <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: COLORS.muted, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>Company size</label>
// //                 <select style={{ width: "100%", padding: "10px 12px", borderRadius: 9, border: `1px solid ${COLORS.border}`, fontSize: 13, color: COLORS.muted, outline: "none", background: COLORS.surface }}>
// //                   <option>1–25 employees</option>
// //                   <option>26–100 employees</option>
// //                   <option>101–500 employees</option>
// //                   <option>500+ employees</option>
// //                 </select>
// //               </div>
// //               <div style={{ marginBottom: 20 }}>
// //                 <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: COLORS.muted, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>Message</label>
// //                 <textarea rows={3} style={{ width: "100%", padding: "10px 12px", borderRadius: 9, border: `1px solid ${COLORS.border}`, fontSize: 13, color: COLORS.text, outline: "none", resize: "none" }}
// //                   placeholder="Tell us about your HR challenges..."
// //                   onFocus={e => { e.target.style.borderColor = COLORS.primary; e.target.style.boxShadow = `0 0 0 3px ${COLORS.primary}20`; }}
// //                   onBlur={e => { e.target.style.borderColor = COLORS.border; e.target.style.boxShadow = ""; }}
// //                 />
// //               </div>
// //               <button style={{ width: "100%", padding: 13, borderRadius: 12, fontSize: 14, fontWeight: 700, color: "white", background: G.primary, border: "none", cursor: "pointer", boxShadow: `0 4px 14px ${COLORS.primary}44`, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "all 0.2s" }}
// //                 onMouseEnter={e => { e.currentTarget.style.background = G.primaryHover; e.currentTarget.style.transform = "translateY(-1px)"; }}
// //                 onMouseLeave={e => { e.currentTarget.style.background = G.primary; e.currentTarget.style.transform = ""; }}
// //               >
// //                 <Send size={15} /> Send message
// //               </button>
// //             </div>
// //           </FadeIn>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // ─────────────────────────── CTA BANNER ───────────────────────────
// function CTABanner() {
//   return (
//     <section className="section-pad" style={{ background: G.primary, position: "relative", overflow: "hidden" }}>
//       <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
//         <div style={{ position: "absolute", top: -80, right: -80, width: 250, height: 250, background: "rgba(255,255,255,0.06)", borderRadius: "50%", filter: "blur(40px)" }} />
//         <div style={{ position: "absolute", bottom: -80, left: -80, width: 250, height: 250, background: "rgba(255,255,255,0.04)", borderRadius: "50%", filter: "blur(40px)" }} />
//       </div>
//       <FadeIn>
//         <div style={{ position: "relative", maxWidth: 720, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
//           <h2 style={{ fontSize: "clamp(24px, 4vw, 44px)", fontWeight: 900, color: "white", letterSpacing: "-0.8px", margin: "0 0 14px" }}>
//             Ready to modernise your HR?
//           </h2>
//           {/* <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "rgba(255,255,255,0.75)", marginBottom: 36 }}>
//             Join 2,000+ companies already running on Info HRM. Set up in minutes, free forever for small teams.
//           </p> */}
//           <div className="cta-buttons">
//             <a href="/register"
//               style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", fontSize: 15, fontWeight: 700, color: COLORS.primary, background: "white", borderRadius: 14, textDecoration: "none", boxShadow: "0 8px 24px rgba(0,0,0,0.15)", transition: "all 0.2s" }}
//               onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
//               onMouseLeave={e => e.currentTarget.style.transform = ""}
//             >
//               Start for free <ArrowRight size={18} />
//             </a>
//             <a href="#contact"
//               onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
//               style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", fontSize: 15, fontWeight: 700, color: "white", borderRadius: 14, textDecoration: "none", border: "2px solid rgba(255,255,255,0.4)", transition: "all 0.2s" }}
//               onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
//               onMouseLeave={e => e.currentTarget.style.background = "transparent"}
//             >
//               Talk to sales
//             </a>
//           </div>
//         </div>
//       </FadeIn>
//     </section>
//   );
// }

// // ─────────────────────────── FOOTER ───────────────────────────

// // ─────────────────────────── FOOTER (NEW UI) ───────────────────────────
// // Drop-in replacement for the Footer function in your LandingPage.jsx
// // Requires the same COLORS / G tokens already defined in your file.
// // Icons used: Link2, Rss, AtSign, Share2, Globe  (already imported)

// function Footer() {
//   const quickLinks = ["Home", "Features", "Pricing"];
//   const infoLinks  = ["Terms of Service", "Privacy Policy", "Cookies Settings", "Security"];

//   const scrollTo = (href) => {
//     const el = document.querySelector(href);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <footer style={{ background: "#0d0b1e", color: "white", fontFamily: "'DM Sans','Segoe UI',Arial,sans-serif" }}>
//       <style>{`
//         /* ── Footer responsive ── */
//         .ft-top {
//           display: grid;
//           grid-template-columns: 1.6fr 1fr 1fr;
//           gap: 40px;
//           padding: 72px 0 48px;
//           align-items: start;
//         }
//         @media (max-width: 900px) {
//           .ft-top { grid-template-columns: 1fr 1fr; }
//           .ft-left { grid-column: 1 / -1; }
//         }
//         @media (max-width: 540px) {
//           .ft-top { grid-template-columns: 1fr; gap: 32px; padding: 48px 0 32px; }
//           .ft-left { grid-column: unset; }
//         }

//         .ft-heading {
//           font-size: clamp(32px, 5vw, 56px);
//           font-weight: 900;
//           line-height: 1.06;
//           letter-spacing: -1.5px;
//           color: #ffffff;
//           margin: 0 0 32px;
//         }

//         .ft-btn-schedule {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           padding: 14px 28px;
//           border-radius: 999px;
//           border: 1.5px solid rgba(255,255,255,0.18);
//           background: rgba(255,255,255,0.06);
//           color: white;
//           font-size: 15px;
//           font-weight: 600;
//           text-decoration: none;
//           cursor: pointer;
//           transition: background 0.2s, border-color 0.2s, transform 0.2s;
//           backdrop-filter: blur(4px);
//         }
//         .ft-btn-schedule:hover {
//           background: rgba(255,255,255,0.12);
//           border-color: rgba(255,255,255,0.35);
//           transform: translateX(3px);
//         }

//         .ft-email-label {
//           font-size: 10px;
//           font-weight: 800;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//           color: rgba(200,190,230,0.55);
//           margin: 32px 0 10px;
//         }

//         .ft-email-pill {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           padding: 12px 20px;
//           border-radius: 999px;
//           background: rgba(255,255,255,0.07);
//           border: 1px solid rgba(255,255,255,0.12);
//           font-size: 14px;
//           color: rgba(220,210,255,0.85);
//           text-decoration: none;
//           transition: background 0.2s;
//           cursor: pointer;
//         }
//         .ft-email-pill:hover { background: rgba(255,255,255,0.12); }

//         .ft-copy-btn {
//           background: rgba(255,255,255,0.1);
//           border: none;
//           border-radius: 6px;
//           padding: 4px 6px;
//           cursor: pointer;
//           color: rgba(200,190,230,0.7);
//           display: flex;
//           align-items: center;
//           transition: background 0.2s;
//           flex-shrink: 0;
//         }
//         .ft-copy-btn:hover { background: rgba(255,255,255,0.18); color: white; }

//         .ft-nav-label {
//           font-size: 10px;
//           font-weight: 800;
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           color: rgba(200,190,230,0.45);
//           margin-bottom: 22px;
//         }
//         .ft-nav-link {
//           display: block;
//           font-size: 14px;
//           color: rgba(220,210,255,0.65);
//           text-decoration: none;
//           margin-bottom: 14px;
//           transition: color 0.2s;
//           font-weight: 500;
//         }
//         .ft-nav-link:hover { color: #ffffff; }

//         /* ── App store badges ── */
//         .ft-badges {
//           display: flex;
//           gap: 12px;
//           flex-wrap: wrap;
//           margin-top: 28px;
//         }
//         .ft-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           padding: 10px 18px;
//           border-radius: 12px;
//           background: #1a1530;
//           border: 1.5px solid rgba(255,255,255,0.12);
//           color: white;
//           text-decoration: none;
//           transition: border-color 0.2s, background 0.2s, transform 0.2s;
//           cursor: pointer;
//           min-width: 140px;
//         }
//         .ft-badge:hover {
//           border-color: rgba(166,141,209,0.55);
//           background: #221840;
//           transform: translateY(-2px);
//         }
//         .ft-badge-icon { flex-shrink: 0; }
//         .ft-badge-text-top { font-size: 9px; color: rgba(200,190,230,0.6); letter-spacing: 0.04em; display: block; line-height: 1; margin-bottom: 2px; }
//         .ft-badge-text-main { font-size: 15px; font-weight: 800; color: white; display: block; line-height: 1.1; }

//         /* ── Divider ── */
//         .ft-divider {
//           border: none;
//           border-top: 1px solid rgba(166,141,209,0.15);
//           margin: 0;
//         }

//         /* ── Bottom bar ── */
//         .ft-bottom {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 20px 0 28px;
//           flex-wrap: wrap;
//           gap: 14px;
//         }
//         @media (max-width: 540px) {
//           .ft-bottom { flex-direction: column; align-items: flex-start; }
//         }

//         .ft-social-row { display: flex; gap: 10px; align-items: center; }
//         .ft-social-btn {
//           width: 34px; height: 34px; border-radius: 8px;
//           background: rgba(255,255,255,0.05);
//           border: 1px solid rgba(255,255,255,0.1);
//           display: flex; align-items: center; justify-content: center;
//           color: rgba(200,190,230,0.55);
//           text-decoration: none;
//           transition: background 0.2s, color 0.2s, border-color 0.2s;
//           cursor: pointer;
//         }
//         .ft-social-btn:hover {
//           background: rgba(166,141,209,0.18);
//           color: #a68dd1;
//           border-color: rgba(166,141,209,0.35);
//         }

//         .ft-logo-row {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           margin-bottom: 28px;
//           text-decoration: none;
//         }
//       `}</style>

//       <div className="container">
//         <div className="ft-top">

//           {/* ── LEFT: Heading + CTA + Email ── */}
//           <div className="ft-left">
//             {/* Logo */}
//             <a href="#" className="ft-logo-row">
//               <div style={{ width: 40, height: 40, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 14px #a68dd155`, flexShrink: 0 }}>
//                 <img src="./Wowelse2.png" alt=" HRM" style={{ width: 38, height: 38 }} />
//               </div>
//               <div style={{ lineHeight: 1 }}>
//                 <div style={{ fontSize: 10, color: "#a68dd1", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>HR Management</div>
//               </div>
//             </a>

//             {/* Big heading */}
//             <h2 className="ft-heading">
//               Let's Build Your<br />
//               <span style={{ background: "linear-gradient(135deg, #a68dd1, #6f3fd3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                 Dream Team.
//               </span>
//             </h2>

//             {/* Schedule CTA */}
//             <a href="/register" className="ft-btn-schedule">
//               Get started free
//               <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                 <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </a>

//             {/* Email section */}
//             <div className="ft-email-label">Or email us at</div>
//             <EmailPill email="hello@hrm.com" />

//             {/* App Store Badges */}
//             <div className="ft-badges">
//               {/* <a href="#" className="ft-badge">
//                 <span className="ft-badge-icon">

//                   <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ color: "white" }}>
//                     <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
//                   </svg>
//                 </span>
//                 <div>
//                   <span className="ft-badge-text-top">Download on the</span>
//                   <span className="ft-badge-text-main">App Store</span>
//                 </div>
//               </a> */}

//               <a href="#" className="ft-badge">
//                 <span className="ft-badge-icon">
//                   {/* Google Play colorful triangle */}
//                   <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//                     <path d="M3.18 23.76c.37.21.8.22 1.18.02l12.62-7.29-2.75-2.75-11.05 10z" fill="#EA4335"/>
//                     <path d="M20.82 10.56 17.6 8.7 14.56 11.74l3.05 3.05 3.2-1.85a1.5 1.5 0 0 0 0-2.38z" fill="#FBBC04"/>
//                     <path d="M3.18.24A1.5 1.5 0 0 0 2 1.65v20.7c0 .58.31 1.1.8 1.4l11.76-11.75L3.18.24z" fill="#4285F4"/>
//                     <path d="M4.36 23.78l12.62-7.28-2.42-2.42L3.18 23.76c.37.2.8.22 1.18.02z" fill="#34A853"/>
//                     <path d="M4.36.22 14.56 10.4l2.42-2.4L4.36.22z" fill="#4285F4" opacity=".5"/>
//                   </svg>
//                 </span>
//                 <div>
//                   <span className="ft-badge-text-top">Get it on</span>
//                   <span className="ft-badge-text-main">Google Play</span>
//                 </div>
//               </a>
//             </div>
//           </div>

//           {/* ── QUICK LINKS ── */}
//           <div>
//             <div className="ft-nav-label">Quick Links</div>
//             {quickLinks.map((item) => (
//               <a key={item} href="#" className="ft-nav-link"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   const map = { Home: "#", Features: "#features", Pricing: "#pricing"};
//                   const href = map[item];
//                   if (href && href !== "#") scrollTo(href);
//                 }}
//               >{item}</a>
//             ))}
//           </div>

//           {/* ── INFORMATION ── */}
//           <div>
//             <div className="ft-nav-label">Information</div>
//             {infoLinks.map((item) => (
//               <a key={item} href="#" className="ft-nav-link">{item}</a>
//             ))}

//                       <div className="ft-social-row"style={{marginTop:"250px"}}>
//             {[
//               { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
//               { label: "Twitter",  path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
//               { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
//               { label: "Facebook",  path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
//             ].map(({ label, path }) => (
//               <a key={label} href="#" className="ft-social-btn" title={label}>
//                 <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d={path} />
//                 </svg>
//               </a>
//             ))}
//           </div>
//           </div>

          
//         </div>
        

//         {/* ── DIVIDER ── */}
//         <hr className="ft-divider" />

//         {/* ── BOTTOM BAR ── */}
//         <div className="ft-bottom">
//           <p style={{ fontSize: 12, color: "rgba(200,190,230,0.4)", margin: 0 }}>
//             © 2026 HRM. All rights reserved.
//           </p>

//           {/* Social icons */}
//           {/* <div className="ft-social-row">
//             {[
//               { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
//               { label: "Twitter",  path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
//               { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
//               { label: "Facebook",  path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
//             ].map(({ label, path }) => (
//               <a key={label} href="#" className="ft-social-btn" title={label}>
//                 <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d={path} />
//                 </svg>
//               </a>
//             ))}
//           </div> */}

//           {/* Bottom legal links */}
//           <div style={{ display: "flex", gap: 18 }}>
//             {["Privacy", "Terms", "Cookies"].map((l) => (
//               <a key={l} href="#" style={{ fontSize: 12, color: "rgba(200,190,230,0.4)", textDecoration: "none", transition: "color 0.2s" }}
//                 onMouseEnter={e => e.currentTarget.style.color = "white"}
//                 onMouseLeave={e => e.currentTarget.style.color = "rgba(200,190,230,0.4)"}
//               >{l}</a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// // ── Email pill with copy-to-clipboard ──
// function EmailPill({ email }) {
//   const [copied, setCopied] = React.useState(false);

//   const copy = () => {
//     navigator.clipboard?.writeText(email).then(() => {
//       setCopied(true);
//       setTimeout(() => setCopied(false), 1800);
//     });
//   };

//   return (
//     <div className="ft-email-pill" onClick={copy} title="Click to copy">
//       <span>{email}</span>
//       <button className="ft-copy-btn" aria-label="Copy email">
//         {copied
//           ? <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#a68dd1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
//           : <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
//         }
//       </button>
//     </div>
//   );
// }
// // function Footer() {
// //   const links = {
// //     Product: ["Features","Pricing","Changelog","Roadmap"],
// //     Company: ["About","Blog","Careers","Press"],
// //     Legal:   ["Privacy","Terms","Security","Cookies"],
// //     Support: ["Documentation","Help Center","Status","Contact"],
// //   };

// //   return (
// //     <footer style={{ background: COLORS.dark, color: "white" }}>
// //       <div className="container" style={{ paddingTop: 56, paddingBottom: 40 }}>
// //         <div className="footer-grid">
// //           <div>
// //             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
// //           <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
// //             <div style={{
// //               width: 44, height: 44, borderRadius: 10,
// //               display: "flex", alignItems: "center", justifyContent: "center",
// //               boxShadow: `0 4px 14px ${COLORS.primary}55`,
// //             }}>
// //               <span style={{ color: "white", fontWeight: 800, fontSize: 14 }}>
// //                 <img src="./Wowelse2.png" alt="Info HRM" style={{ width: "40px", height: "40px" }} />
// //               </span>
// //             </div>
// //             <div style={{ lineHeight: 1 }}>
// //               <div style={{ fontWeight: 800, color: COLORS.text, fontSize: 15, letterSpacing: "-0.3px" }}></div>
// //               <div style={{ fontSize: 10, color: COLORS.primary, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>HR Management</div>
// //             </div>
// //           </a>
// //             </div>
// //             <p style={{ fontSize: 13, color: COLORS.muted, lineHeight: 1.7, maxWidth: 200, marginBottom: 16 }}>
// //               The all-in-one HR platform built for modern Indian businesses.
// //             </p>
// //             <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
// //               {[Link2, Rss, AtSign, Share2, Globe].map((Icon, i) => (
// //                 <a key={i} href="#"
// //                   style={{ width: 30, height: 30, borderRadius: 7, background: `${COLORS.primary}15`, border: `1px solid ${COLORS.darkBorder}`, display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.muted, textDecoration: "none", transition: "color 0.2s" }}
// //                   onMouseEnter={e => e.currentTarget.style.color = COLORS.primary}
// //                   onMouseLeave={e => e.currentTarget.style.color = COLORS.muted}
// //                 >
// //                   <Icon size={13} />
// //                 </a>
// //               ))}
// //             </div>
// //           </div>

// //           {Object.entries(links).map(([group, items]) => (
// //             <div key={group}>
// //               <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: COLORS.muted, marginBottom: 14 }}>{group}</div>
// //               <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
// //                 {items.map((item) => (
// //                   <li key={item}>
// //                     <a href="#" style={{ fontSize: 13, color: "#4b5563", textDecoration: "none", transition: "color 0.2s" }}
// //                       onMouseEnter={e => e.currentTarget.style.color = "white"}
// //                       onMouseLeave={e => e.currentTarget.style.color = "#4b5563"}
// //                     >{item}</a>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           ))}
// //         </div>

// //         <div style={{ marginTop: 40, paddingTop: 20, borderTop: `1px solid ${COLORS.darkBorder}` }} className="footer-bottom">
// //           <p style={{ fontSize: 12, color: "#4b5563", margin: 0 }}>© 2026 HRM. All rights reserved. Built with ♥ in Coimbatore.</p>
// //           <div style={{ display: "flex", gap: 16 }}>
// //             {["Privacy","Terms","Cookies"].map((l) => (
// //               <a key={l} href="#" style={{ fontSize: 12, color: "#4b5563", textDecoration: "none", transition: "color 0.2s" }}
// //                 onMouseEnter={e => e.currentTarget.style.color = "white"}
// //                 onMouseLeave={e => e.currentTarget.style.color = "#4b5563"}
// //               >{l}</a>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }

// // ─────────────────────────── ROOT ───────────────────────────
// export default function LandingPage() {
//   return (
//     <div style={{ fontFamily: "'DM Sans', 'Segoe UI', Arial, sans-serif", WebkitFontSmoothing: "antialiased" }}>
//       <style>{GLOBAL_STYLES}</style>
//       <Navbar />
//       <Hero />
//       <Features />
//       <Workflow />
//       <EmployeeManagement />
//       <AttendanceGPS />
//       <CommunicationHub />
//       <Analytics />
//       <Pricing />
//       <FAQ />
//       <Contact />
//       <CTABanner />
//       <Footer />
//     </div>
//   );
// }



























import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Users, Briefcase, Calendar, Mail, UserCheck, Clock, MapPin,
  FileSpreadsheet, DollarSign, BarChart2, MessageSquare, Phone,
  Video, Download, Shield, ChevronDown, ChevronRight, Menu, X,
  Check, Star, ArrowRight, Building2, Zap, Globe, Lock,
  TrendingUp, Bell, Search, Filter, GitBranch, Award,
  Layers, Activity, Database, Send, PlayCircle,
  CheckCircle2, HelpCircle, MapPinned, FileBarChart, ClipboardList,
  Link2, Rss, AtSign, Share2, ExternalLink
} from "lucide-react";

// ─────────────────────────── DESIGN TOKENS ───────────────────────────
const COLORS = {
  primary:      "#a68dd1",
  primaryDark:  "#6f3fd3",
  primaryLight: "#f3eeff",
  primaryBorder:"#d4c5ed",
  green:        "#065931",
  greenLight:   "#054a2942",
  amber:        "#fa7c25",
  amberLight:   "#fa7e253d",
  blue:         "#3a6fd5",
  blueLight:    "#e8f4fd",
  bg:           "#f7f8fc",
  surface:      "#ffffff",
  border:       "#e2e5ea",
  text:         "#111827",
  muted:        "#6b7280",
  mutedLight:   "#9ca3af",
  dark:         "#1a1030",
  darkMid:      "#231545",
  darkBorder:   "rgba(166,141,209,0.25)",
  darkText:     "rgba(220,210,240,0.70)",
};

const G = {
  primary: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})`,
  primaryHover: `linear-gradient(135deg, ${COLORS.primaryDark}, #5a2fb8)`,
  hero: `linear-gradient(to bottom, #f5f0ff, #faf7ff, ${COLORS.surface})`,
  dark: `linear-gradient(to bottom, ${COLORS.dark}, ${COLORS.darkMid}, ${COLORS.dark})`,
  cta:  `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})`,
};

// ─────────────────────────── GLOBAL STYLES ───────────────────────────
const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap');

  :root {
    --font-heading: 'Outfit', 'DM Sans', sans-serif;
    --font-body: 'Inter', 'Segoe UI', sans-serif;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { overflow-x: hidden; font-family: var(--font-body); }
  h1,h2,h3,h4,h5,h6 { font-family: var(--font-heading); }

  @media (min-width: 768px) { .nav-mobile-btn { display: none !important; } }
  @media (max-width: 767px) { .nav-desktop { display: none !important; } .nav-mobile-btn { display: flex !important; } }

  .two-col-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
  @media (max-width: 900px) { .two-col-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }

  .features-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); gap: 16px; }
  @media (max-width: 480px) { .features-grid { grid-template-columns: 1fr !important; } }

  .workflow-steps { display: flex; align-items: flex-start; overflow-x: auto; padding-bottom: 8px; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
  .workflow-steps::-webkit-scrollbar { display: none; }
  .workflow-step { flex: 0 0 auto; min-width: 100px; display: flex; flex-direction: column; align-items: center; }
  @media (min-width: 768px) { .workflow-step { flex: 1; min-width: unset; } }

  .pricing-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px; max-width: 900px; margin: 0 auto; }
  @media (max-width: 600px) { .pricing-grid { grid-template-columns: 1fr !important; } }

  .att-stats-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; padding: 14px 16px; }
  .emp-dir-card { position: relative; background: #fff; border-radius: 20px; border: 1px solid ${COLORS.primaryBorder}; box-shadow: 0 16px 48px ${COLORS.primary}18; padding: 20px; }

  .dash-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 12px; }
  @media (max-width: 600px) { .dash-stats { grid-template-columns: 1fr 1fr !important; } }

  .dash-bottom { display: grid; grid-template-columns: 1fr 0.45fr; gap: 10px; }
  @media (max-width: 480px) { .dash-bottom { grid-template-columns: 1fr !important; } }

  .att-items-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  @media (max-width: 480px) { .att-items-grid { grid-template-columns: 1fr !important; } }

  .contact-name-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
  @media (max-width: 480px) { .contact-name-grid { grid-template-columns: 1fr !important; } }

  .cta-buttons { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  @media (max-width: 480px) { .cta-buttons { flex-direction: column; align-items: center; } }

  .section-pad { padding: 60px 0; }
  @media (max-width: 768px) { .section-pad { padding: 56px 0; } }
  @media (max-width: 480px) { .section-pad { padding: 40px 0; } }

  .container { max-width: 1240px; margin: 0 auto; padding: 0 24px; }
  @media (max-width: 480px) { .container { padding: 0 16px; } }

  @media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }

  /* Premium hover & micro-interactions */
  .feat-card { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s ease; }
  .feat-card:hover { transform: translateY(-5px) scale(1.01); }

  .btn-shine {
    position: relative; overflow: hidden;
  }
  .btn-shine::after {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 60%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
    transition: left 0.5s ease;
  }
  .btn-shine:hover::after { left: 150%; }

  /* Glowing border animation for workflow */
  @keyframes borderFlow {
    0%   { stroke-dashoffset: 1000; opacity: 1; }
    80%  { opacity: 1; }
    100% { stroke-dashoffset: 0;    opacity: 0; }
  }

  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 0 0 rgba(166,141,209,0.4); }
    50%       { box-shadow: 0 0 0 8px rgba(166,141,209,0); }
  }

  @keyframes floatY {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-8px); }
  }

  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }

  .float-anim { animation: floatY 4s ease-in-out infinite; }
  .pulse-dot  { animation: pulse 2s infinite; }

  /* Gradient text shimmer */
  .text-shimmer {
    background: linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primaryDark}, ${COLORS.primary});
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 3s linear infinite;
  }

  /* Nav link underline slide */
  .nav-link-item { position: relative; }
  .nav-link-item::after {
    content: '';
    position: absolute;
    bottom: 0; left: 50%; right: 50%;
    height: 2px; border-radius: 999px;
    background: ${COLORS.primary};
    transition: left 0.25s ease, right 0.25s ease;
  }
  .nav-link-item:hover::after { left: 8px; right: 8px; }
`;

// ─────────────────────────── helpers ───────────────────────────
function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}

function FadeIn({ children, delay = 0, direction = "up", className = "", initialVisible = false, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 28 : direction === "down" ? -28 : 0,
      x: direction === "left" ? 28 : direction === "right" ? -28 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial={initialVisible ? "visible" : "hidden"}
      animate={inView ? "visible" : initialVisible ? "visible" : "hidden"}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────── NAVBAR ───────────────────────────
const NAV_LINKS = [
  { label: "Features",      href: "#features" },
  { label: "Workflow",      href: "#workflow" },
  { label: "Attendance",    href: "#attendance" },
  { label: "Communication", href: "#communication" },
  { label: "Pricing",       href: "#pricing" },
  { label: "FAQ",           href: "#faq" },
];

function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
        background: scrolled ? "rgba(255,255,255,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        boxShadow: scrolled ? `0 1px 0 ${COLORS.border}, 0 4px 24px rgba(166,141,209,0.10)` : "none",
      }}
    >
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 62 }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 14px ${COLORS.primary}55` }}>
              <img src="./Wowelse2.png" alt="Info HRM" style={{ width: "38px", height: "38px" }} />
            </div>
            <div style={{ lineHeight: 1 }}>
              <div style={{ fontSize: 10, color: COLORS.primary, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "var(--font-heading)" }}>HR Management</div>
            </div>
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: 2 }} className="nav-desktop">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} onClick={(e) => scrollTo(e, l.href)}
                className="nav-link-item"
                style={{ padding: "6px 12px", fontSize: 13, color: COLORS.muted, fontWeight: 500, textDecoration: "none", transition: "color 0.2s", fontFamily: "var(--font-body)" }}
                onMouseEnter={e => e.currentTarget.style.color = COLORS.primaryDark}
                onMouseLeave={e => e.currentTarget.style.color = COLORS.muted}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="nav-desktop">
            <a href="https://hrm-front-one.vercel.app/login" style={{ fontSize: 13, fontWeight: 600, color: COLORS.primary, textDecoration: "none", transition: "opacity 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >Log in</a>
            <a href="/register" className="btn-shine"
              style={{ padding: "8px 18px", fontSize: 13, fontWeight: 700, color: "white", borderRadius: 10, textDecoration: "none", background: G.primary, boxShadow: `0 4px 14px ${COLORS.primary}55`, transition: "transform 0.2s, box-shadow 0.2s", display: "inline-flex", alignItems: "center", gap: 6 }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${COLORS.primary}70`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = `0 4px 14px ${COLORS.primary}55`; }}
            >Get Started <ArrowRight size={13} /></a>
          </div>

          <button onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", cursor: "pointer", color: COLORS.muted, padding: 8, borderRadius: 8, display: "none", transition: "color 0.2s" }}
            className="nav-mobile-btn"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            style={{ background: COLORS.surface, borderTop: `1px solid ${COLORS.border}`, overflow: "hidden" }}
          >
            <div style={{ padding: "14px 20px" }}>
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.href} onClick={(e) => scrollTo(e, l.href)}
                  style={{ display: "block", padding: "9px 14px", fontSize: 14, fontWeight: 500, color: COLORS.text, textDecoration: "none", borderRadius: 8, marginBottom: 2 }}
                >{l.label}</a>
              ))}
              <div style={{ borderTop: `1px solid ${COLORS.border}`, marginTop: 10, paddingTop: 10, display: "flex", flexDirection: "column", gap: 8 }}>
                <a href="/login" style={{ padding: "9px 16px", textAlign: "center", fontSize: 14, fontWeight: 600, color: COLORS.primary, border: `1px solid ${COLORS.primaryBorder}`, borderRadius: 10, textDecoration: "none" }}>Log in</a>
                <a href="/register" style={{ padding: "9px 16px", textAlign: "center", fontSize: 14, fontWeight: 600, color: "white", background: G.primary, borderRadius: 10, textDecoration: "none" }}>Get Started</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ─────────────────────────── HERO ───────────────────────────
function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const yBg = useTransform(scrollY, [0, 500], [0, 80]);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const pills = [
    { icon: Clock,           label: "Toggle & GPS Attendance" },
    { icon: MapPin,          label: "Geofence Check-In" },
    { icon: FileSpreadsheet, label: "Excel Import" },
    { icon: Users,           label: "Employee Directory" },
    { icon: BarChart2,       label: "Live Analytics" },
    { icon: MessageSquare,   label: "Internal Chat" },
  ];

  return (
    <section style={{
      position: "relative", minHeight: "100vh", display: "flex", alignItems: "center",
      overflow: "hidden", background: G.hero, paddingTop: 80, paddingBottom: 48,
    }}>
      <motion.div style={{ y: yBg, position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -140, left: -140, width: 520, height: 520, background: `${COLORS.primary}18`, borderRadius: "50%", filter: "blur(90px)" }} />
        <div style={{ position: "absolute", bottom: -80, right: -80, width: 380, height: 380, background: `${COLORS.primaryDark}0e`, borderRadius: "50%", filter: "blur(70px)" }} />
        <div style={{ position: "absolute", top: "40%", left: "30%", width: 200, height: 200, background: `${COLORS.primary}0a`, borderRadius: "50%", filter: "blur(50px)" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.025, backgroundImage: `linear-gradient(${COLORS.primary} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.primary} 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
      </motion.div>

      <motion.div style={{ opacity, position: "relative", zIndex: 10, width: "100%", maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
        <style>{`
          .hero-split { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
          @media (max-width: 900px) {
            .hero-split { grid-template-columns: 1fr; gap: 40px; text-align: center; }
            .hero-pills { justify-content: center !important; }
            .hero-cta-row { justify-content: center !important; }
          }
          .hero-pill {
            display: inline-flex; align-items: center; gap: 6px; padding: 5px 11px;
            border-radius: 999px; background: ${COLORS.primaryLight}; border: 1px solid ${COLORS.primaryBorder};
            font-size: 11px; font-weight: 600; color: ${COLORS.primaryDark}; white-space: nowrap;
            transition: background 0.2s, transform 0.2s;
          }
          .hero-pill:hover { background: ${COLORS.primaryBorder}; transform: translateY(-1px); }
          .hero-cta-primary {
            display: inline-flex; align-items: center; gap: 8px; padding: 13px 26px;
            font-size: 14px; font-weight: 700; color: white; border-radius: 14px; text-decoration: none;
            background: ${G.primary}; box-shadow: 0 8px 28px ${COLORS.primary}55;
            transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s; cursor: pointer; border: none;
            font-family: var(--font-heading);
          }
          .hero-cta-primary:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 16px 40px ${COLORS.primary}60; }
          .hero-cta-secondary {
            display: inline-flex; align-items: center; gap: 8px; padding: 13px 26px;
            font-size: 14px; font-weight: 600; color: ${COLORS.primaryDark}; border-radius: 14px;
            text-decoration: none; background: ${COLORS.surface};
            border: 1.5px solid ${COLORS.primaryBorder};
            box-shadow: 0 2px 8px rgba(0,0,0,0.05); transition: all 0.25s;
            font-family: var(--font-heading);
          }
          .hero-cta-secondary:hover { background: ${COLORS.primaryLight}; border-color: ${COLORS.primary}; transform: translateY(-2px); }
          .screenshot-frame { position: relative; border-radius: 14px; overflow: hidden; box-shadow: 0 32px 80px ${COLORS.primary}28, 0 4px 24px rgba(0,0,0,0.10); border: 1px solid ${COLORS.primaryBorder}; background: ${COLORS.surface}; }
          .screenshot-bar { background: #f8f9fb; border-bottom: 1px solid ${COLORS.border}; padding: 8px 12px; display: flex; align-items: center; gap: 10px; }
          .floating-badge { position: absolute; background: white; border-radius: 12px; box-shadow: 0 8px 28px rgba(0,0,0,0.12); border: 1px solid ${COLORS.primaryBorder}; padding: 9px 13px; display: flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 600; color: ${COLORS.text}; white-space: nowrap; z-index: 10; }
        `}</style>

        <div className="hero-split">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 13px", borderRadius: 999,
                background: COLORS.primaryLight, border: `1px solid ${COLORS.primaryBorder}`,
                color: COLORS.primaryDark, fontSize: 11, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLORS.primary }} className="pulse-dot" />
                All-in-one HR Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: "clamp(30px, 4.5vw, 56px)", fontWeight: 900, color: COLORS.text, lineHeight: 1.08, letterSpacing: "-1.5px", margin: "0 0 18px", fontFamily: "var(--font-heading)" }}
            >
              Human Resources,{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-shimmer">Simplified</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, background: G.primary, borderRadius: 999, transformOrigin: "left" }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{ fontSize: "clamp(14px, 1.6vw, 16px)", color: COLORS.muted, lineHeight: 1.8, marginBottom: 24, maxWidth: 460, fontFamily: "var(--font-body)" }}
            >
              From recruitment to payroll — manage GPS attendance, employee records,
              internal chat, and live analytics in one platform. Built for Indian businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="hero-pills"
              style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 28 }}
            >
              {pills.map((p, i) => (
                <motion.span key={i} className="hero-pill"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.07, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <p.icon size={11} style={{ color: COLORS.primary }} />
                  {p.label}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="hero-cta-row"
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
            >
              <a href="#contact" onClick={scrollToContact} className="hero-cta-primary btn-shine">
                Get started free <ArrowRight size={16} />
              </a>
              <a
                href="#features"
                onClick={(e) => { e.preventDefault(); document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" }); }}
                className="hero-cta-secondary"
              >
                <PlayCircle size={16} /> See features
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative" }}
          >
            <div style={{ position: "absolute", inset: -24, background: `linear-gradient(135deg, ${COLORS.primary}22, ${COLORS.primaryDark}14)`, borderRadius: 32, filter: "blur(32px)", pointerEvents: "none" }} />

            <div className="screenshot-frame float-anim" style={{ position: "relative" }}>
              <div className="screenshot-bar">
                <div style={{ display: "flex", gap: 5 }}>
                  <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#fc5c65" }} />
                  <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#fed330" }} />
                  <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#26de81" }} />
                </div>
                <div style={{ flex: 1, maxWidth: 220, background: "#eef0f4", borderRadius: 5, padding: "3px 10px", fontSize: 10.5, color: COLORS.muted, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  🔒 app.infohrm.com/dashboard
                </div>
              </div>
              <img
                src="/Dashboard.png"
                alt="Info HRM Dashboard"
                style={{ width: "100%", display: "block", maxHeight: 400, objectFit: "cover", objectPosition: "top" }}
                onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
              />
              <div style={{ display: "none", background: `linear-gradient(135deg, ${COLORS.primaryLight}, #faf8ff)`, padding: 24, flexDirection: "column", gap: 12, minHeight: 300, alignItems: "center", justifyContent: "center" }}>
                <BarChart2 size={40} style={{ color: COLORS.primary, opacity: 0.4 }} />
                <span style={{ fontSize: 13, color: COLORS.muted }}>Place Dashboard.png in /public</span>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.5 }}
              className="floating-badge" style={{ top: -14, left: -18 }}>
              <div style={{ width: 26, height: 26, borderRadius: 8, background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <UserCheck size={13} style={{ color: "#16a34a" }} />
              </div>
              <div><div style={{ fontSize: 9.5, color: COLORS.muted }}>Today</div><div style={{ fontSize: 12, fontWeight: 800, color: "#16a34a" }}>94% Present</div></div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25, duration: 0.5 }}
              className="floating-badge" style={{ bottom: -16, right: -16 }}>
              <div style={{ width: 26, height: 26, borderRadius: 8, background: COLORS.primaryLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <MapPin size={13} style={{ color: COLORS.primary }} />
              </div>
              <div><div style={{ fontSize: 9.5, color: COLORS.muted }}>GPS Check-In</div><div style={{ fontSize: 12, fontWeight: 800, color: COLORS.primaryDark }}>3 locations live</div></div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4, duration: 0.5 }}
              className="floating-badge" style={{ top: "42%", right: -20, transform: "translateY(-50%)" }}>
              <div style={{ width: 26, height: 26, borderRadius: 8, background: "#fef9c3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Bell size={13} style={{ color: "#b45309" }} />
              </div>
              <div><div style={{ fontSize: 9.5, color: COLORS.muted }}>Auto alert</div><div style={{ fontSize: 12, fontWeight: 800, color: "#b45309" }}>5 late arrivals</div></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, color: COLORS.muted, fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ChevronDown size={17} />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─────────────────────────── FEATURES ───────────────────────────
const FEATURES = [
  { icon: Briefcase,      title: "Recruitment Management", desc: "Post jobs, manage pipelines, and move candidates through stages from one board.", color: "primary" },
  { icon: ClipboardList,  title: "Candidate Tracking",     desc: "Track every applicant, attach resumes, and log interview notes in real time.",  color: "blue" },
  { icon: Calendar,       title: "Interview Scheduling",   desc: "Coordinate interviews with automatic calendar invites and conflict detection.",  color: "primary" },
  { icon: Mail,           title: "Automated Emails",       desc: "Trigger offer letters, rejection emails, and onboarding packs automatically.",  color: "blue" },
  { icon: UserCheck,      title: "Candidate Onboarding",   desc: "Digital onboarding checklists, document collection, and e-signatures built in.", color: "primary" },
  { icon: Users,          title: "Employee Management",    desc: "A single source of truth for every employee's profile, role, and history.",     color: "blue" },
  { icon: Clock,          title: "Attendance Management",  desc: "Real-time check-ins, timesheets, shift scheduling, and overtime alerts.",       color: "primary" },
  { icon: MapPinned,      title: "GPS Check-In/Out",       desc: "Location-verified attendance with photo capture and geofence enforcement.",     color: "blue" },
  { icon: FileSpreadsheet,title: "Excel Import",           desc: "Bulk-import employees and attendance records from any Excel or CSV file.",      color: "primary" },
  { icon: BarChart2,      title: "HR Analytics",           desc: "Live dashboards for headcount, attrition, attendance, and hiring funnels.",    color: "blue" },
  { icon: MessageSquare,  title: "Internal Chat",          desc: "Private and group messaging with read receipts and file sharing.",              color: "primary" },
  { icon: Phone,          title: "Audio Calling",          desc: "Crystal-clear audio calls between employees, right inside the app.",           color: "blue" },
  { icon: Shield,         title: "Role-Based Access",      desc: "Granular permissions ensure every user sees only what they need.",             color: "primary" },
];

const FEAT_COLORS = {
  primary: { bg: COLORS.primaryLight, text: COLORS.primaryDark, border: COLORS.primaryBorder },
  blue:    { bg: COLORS.blueLight,    text: COLORS.blue,         border: "#c3d9f7" },
};

function Features() {
  return (
    <section id="features" className="section-pad" style={{ background: `linear-gradient(to bottom, ${COLORS.surface}, ${COLORS.primaryLight}44)` }}>
      <div className="container">
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ display: "inline-block", padding: "4px 13px", borderRadius: 999, background: COLORS.primaryLight, color: COLORS.primary, fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14, border: `1px solid ${COLORS.primaryBorder}` }}>Everything you need</span>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 44px)", fontWeight: 900, color: COLORS.text, letterSpacing: "-0.8px", margin: "0 0 12px", fontFamily: "var(--font-heading)" }}>
              13 powerful features,<br />one platform
            </h2>
            <p style={{ fontSize: "clamp(14px, 1.8vw, 16px)", color: COLORS.muted, maxWidth: 480, margin: "0 auto", fontFamily: "var(--font-body)" }}>
              Stop juggling multiple HR tools. Info HRM brings every workflow under one roof.
            </p>
          </div>
        </FadeIn>

        <div className="features-grid">
          {FEATURES.map((f, i) => {
            const c = FEAT_COLORS[f.color];
            return (
              <FadeIn key={f.title} delay={i * 0.035} direction="up">
                <motion.div
                  className="feat-card"
                  whileHover={{ y: -5, boxShadow: `0 20px 40px -12px ${COLORS.primary}25`, borderColor: COLORS.primaryBorder }}
                  style={{ padding: "18px", background: COLORS.surface, borderRadius: 14, border: `1px solid ${COLORS.border}`, cursor: "default", height: "100%" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    style={{ width: 40, height: 40, borderRadius: 11, background: c.bg, border: `1px solid ${c.border}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}
                  >
                    <f.icon size={18} style={{ color: c.text }} />
                  </motion.div>
                  <div style={{ fontWeight: 700, color: COLORS.text, marginBottom: 5, fontSize: 14, fontFamily: "var(--font-heading)" }}>{f.title}</div>
                  <div style={{ fontSize: 12.5, color: COLORS.muted, lineHeight: 1.65, fontFamily: "var(--font-body)" }}>{f.desc}</div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────── WORKFLOW with border glow animation ───────────────────────────
const WORKFLOW_STEPS = [
  { icon: Briefcase,    label: "Job Posting",  desc: "Publish roles across boards" },
  { icon: ClipboardList,label: "Application",  desc: "Candidates apply online" },
  { icon: Calendar,     label: "Interview",    desc: "Schedule & conduct rounds" },
  { icon: CheckCircle2, label: "Selection",    desc: "Rate, score, and decide" },
  { icon: Mail,         label: "Auto Email",   desc: "Offers or rejections sent" },
  { icon: UserCheck,    label: "Onboarding",   desc: "Digital welcome checklist" },
  { icon: Users,        label: "Employee",     desc: "Profile auto-created" },
];

// Border glow SVG component for each card
function GlowingBorderCard({ children, isActive, style = {} }) {
  return (
    <div style={{ position: "relative", ...style }}>
      {/* SVG glowing border overlay */}
      {isActive && (
        <svg
          style={{ position: "absolute", inset: -1, width: "calc(100% + 2px)", height: "calc(100% + 2px)", pointerEvents: "none", zIndex: 10, overflow: "visible", borderRadius: 14 }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <rect
            x="1" y="1" width="98" height="98"
            rx="12" ry="12"
            fill="none"
            stroke="url(#glowGrad)"
            strokeWidth="2.5"
            strokeDasharray="400"
            strokeDashoffset="400"
            strokeLinecap="round"
            style={{ animation: "borderFlow 1.4s cubic-bezier(0.4,0,0.2,1) forwards" }}
          />
          <defs>
            <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a68dd1" stopOpacity="0" />
              <stop offset="50%" stopColor="#6f3fd3" stopOpacity="1" />
              <stop offset="100%" stopColor="#a68dd1" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      )}
      {/* Glow filter */}
      {isActive && (
        <div style={{
          position: "absolute", inset: -2, borderRadius: 15, pointerEvents: "none", zIndex: 9,
          boxShadow: `0 0 18px 4px ${COLORS.primary}50, 0 0 40px 8px ${COLORS.primary}20`,
          animation: "borderFlow 1.4s cubic-bezier(0.4,0,0.2,1) forwards",
        }} />
      )}
      {children}
    </div>
  );
}

function Workflow() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % WORKFLOW_STEPS.length);
    }, 1600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="workflow" className="section-pad" style={{ background: COLORS.surface }}>
      <div className="container">
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ display: "inline-block", padding: "4px 13px", borderRadius: 999, background: COLORS.primaryLight, color: COLORS.primary, fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14, border: `1px solid ${COLORS.primaryBorder}` }}>Recruitment</span>
            <h2 style={{ fontSize: "clamp(22px, 4vw, 42px)", fontWeight: 900, color: COLORS.text, letterSpacing: "-0.8px", margin: "0 0 10px", fontFamily: "var(--font-heading)" }}>From job post to first day</h2>
            <p style={{ fontSize: "clamp(14px, 1.8vw, 16px)", color: COLORS.muted, fontFamily: "var(--font-body)" }}>The entire hiring pipeline, automated end-to-end.</p>
          </div>
        </FadeIn>

        <div className="workflow-steps">
          {WORKFLOW_STEPS.map((step, i) => {
            const isActive = activeStep === i;
            const isPast = i < activeStep;
            return (
              <FadeIn key={step.label} delay={i * 0.07} direction="up" style={{ flex: "1 0 auto", marginTop: 15,minWidth: "100px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center",marginTop: 15, width: "100%" }}>
                  <div style={{ flex: 1, height: 2, marginTop: 8,background: i === 0 ? "transparent" : isPast || isActive ? G.primary : `${COLORS.primaryBorder}`, transition: "background 0.5s ease" }} />

                  <GlowingBorderCard isActive={isActive}>
                    <motion.div
                      animate={isActive ? { scale: 1.15, boxShadow: `0 0 0 6px ${COLORS.primary}25` } : isPast ? { scale: 1.0 } : { scale: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      style={{
                        width: 48, height: 48, borderRadius: 13, flexShrink: 0,marginTop: 1,
                        background: isActive ? G.primary : isPast ? COLORS.primaryLight : COLORS.primaryLight,
                        border: `2px solid ${isActive ? "transparent" : COLORS.primaryBorder}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        zIndex: 1, cursor: "default", position: "relative",
                      }}
                    >
                      <step.icon size={20} style={{ color: isActive ? "white" : COLORS.primary }} />
                    </motion.div>
                  </GlowingBorderCard>

                  <div style={{ flex: 1, height: 2,marginTop: 8, background: i === WORKFLOW_STEPS.length - 1 ? "transparent" : isPast ? G.primary : `${COLORS.primaryBorder}`, transition: "background 0.5s ease" }} />
                </div>
                <div style={{ marginTop: 10, textAlign: "center", padding: "0 4px" }}>
                  <div style={{ fontWeight: 700, color: isActive ? COLORS.primaryDark : COLORS.text, fontSize: 11.5, transition: "color 0.3s", fontFamily: "var(--font-heading)" }}>{step.label}</div>
                  <div style={{ fontSize: 10.5, color: COLORS.muted, marginTop: 2, fontFamily: "var(--font-body)" }}>{step.desc}</div>
                </div>
                <motion.div
                  animate={isActive ? { scale: 1.2, background: G.primary, color: "white" } : {}}
                  style={{ marginTop: 6, width: 18, height: 18, borderRadius: "50%", background: isPast ? G.primary : COLORS.primaryLight, color: isPast ? "white" : COLORS.primary, fontSize: 9, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${COLORS.primaryBorder}`, transition: "all 0.3s" }}>
                  {isPast ? <Check size={10} /> : i + 1}
                </motion.div>
              </FadeIn>
            );
          })}
        </div>

        {/* Active step description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            style={{ textAlign: "center", marginTop: 24, padding: "12px 20px", background: COLORS.primaryLight, borderRadius: 12, border: `1px solid ${COLORS.primaryBorder}`, maxWidth: 380, margin: "20px auto 0", display: "inline-block" }}
          >
            <span style={{ fontSize: 12.5, color: COLORS.primaryDark, fontWeight: 600, fontFamily: "var(--font-body)" }}>
              Step {activeStep + 1}: <strong>{WORKFLOW_STEPS[activeStep].label}</strong> — {WORKFLOW_STEPS[activeStep].desc}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─────────────────────────── EMPLOYEE MGMT ───────────────────────────
function EmployeeManagement() {
  const features = [
    { icon: Users,     title: "Unified Profiles",    desc: "Every employee's employment history, documents, and performance in one place." },
    { icon: GitBranch, title: "Org Chart",           desc: "Visual hierarchy with drill-down from CEO to individual contributors." },
    { icon: Award,     title: "Performance Reviews", desc: "Structured appraisal cycles with 360° feedback and goal alignment." },
    { icon: Database,  title: "Document Vault",      desc: "Contracts, IDs, certificates — stored, versioned, and access-controlled." },
  ];

  return (
    <section className="section-pad" style={{ background: `linear-gradient(to bottom, ${COLORS.primaryLight}44, ${COLORS.surface})` }}>
      <div className="container">
        <div className="two-col-grid">
          <FadeIn direction="right">
            <span style={{ display: "inline-block", padding: "4px 13px", borderRadius: 999, background: COLORS.primaryLight, color: COLORS.primary, fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14, border: `1px solid ${COLORS.primaryBorder}` }}>Employee Management</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 38px)", fontWeight: 900, color: COLORS.text, letterSpacing: "-0.6px", margin: "0 0 14px", fontFamily: "var(--font-heading)" }}>Your people, perfectly organized</h2>
            <p style={{ fontSize: "clamp(13px, 1.6vw, 15px)", color: COLORS.muted, marginBottom: 24, lineHeight: 1.8, fontFamily: "var(--font-body)" }}>
              Replace scattered spreadsheets with a real-time employee database that keeps everyone's records accurate and accessible.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {features.map((f, i) => (
                <FadeIn key={f.title} delay={i * 0.1} direction="right">
                  <motion.div
                    whileHover={{ x: 4, backgroundColor: COLORS.primaryLight }}
                    style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 12px", borderRadius: 12, transition: "background 0.2s", cursor: "default" }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      style={{ width: 36, height: 36, borderRadius: 10, background: COLORS.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `1px solid ${COLORS.primaryBorder}` }}
                    >
                      <f.icon size={16} style={{ color: COLORS.primary }} />
                    </motion.div>
                    <div>
                      <div style={{ fontWeight: 700, color: COLORS.text, fontSize: 13.5, fontFamily: "var(--font-heading)" }}>{f.title}</div>
                      <div style={{ fontSize: 12.5, color: COLORS.muted, marginTop: 2, lineHeight: 1.65, fontFamily: "var(--font-body)" }}>{f.desc}</div>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.15}>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, background: `${COLORS.primary}18`, borderRadius: 28, filter: "blur(32px)" }} />
              <div className="emp-dir-card">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14, flexWrap: "wrap", gap: 8 }}>
                  <div style={{ fontWeight: 700, color: COLORS.text, fontSize: 14, fontFamily: "var(--font-heading)" }}>Employee Directory</div>
                  <div style={{ fontSize: 11.5, color: COLORS.primary, background: COLORS.primaryLight, padding: "3px 10px", borderRadius: 999, fontWeight: 600 }}>248 employees</div>
                </div>
                {[
                  { name: "Priya Sharma", role: "Senior Designer",  dept: "Product",     active: true  },
                  { name: "Arjun Nair",   role: "Backend Engineer", dept: "Engineering", active: true  },
                  { name: "Kiran Mehta",  role: "HR Manager",       dept: "HR",          active: false },
                  { name: "Divya Raj",    role: "Sales Lead",       dept: "Sales",       active: true  },
                ].map((emp, i) => (
                  <motion.div key={emp.name}
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                    whileHover={{ backgroundColor: COLORS.bg, borderRadius: 10, paddingLeft: 6 }}
                    style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: i < 3 ? `1px solid ${COLORS.border}` : "none", flexWrap: "wrap", transition: "all 0.2s", cursor: "default" }}
                  >
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: G.primary, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{emp.name[0]}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 600, fontSize: 12.5, color: COLORS.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: "var(--font-heading)" }}>{emp.name}</div>
                      <div style={{ fontSize: 11, color: COLORS.muted, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: "var(--font-body)" }}>{emp.role} · {emp.dept}</div>
                    </div>
                    <span style={{ fontSize: 10.5, padding: "2px 9px", borderRadius: 999, fontWeight: 600, background: emp.active ? "#e6f8f0" : "#fff4ec", color: emp.active ? COLORS.green : COLORS.amber, whiteSpace: "nowrap" }}>
                      {emp.active ? "Active" : "On Leave"}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────── ATTENDANCE & GPS (with real map) ───────────────────────────
function AttendanceGPS() {
  const items = [
    { icon: Clock,           title: "Normal Attendance",  desc: "Standard check-in/out with timestamped records and shift reports." },
    { icon: MapPin,          title: "GPS Attendance",     desc: "Verify employee location on check-in with live map visualization." },
    { icon: FileSpreadsheet, title: "Excel Upload",       desc: "Bulk import historical attendance from any spreadsheet format." },
    { icon: BarChart2,       title: "Attendance Reports", desc: "Daily, weekly, and monthly reports exported in one click." },
    { icon: Bell,            title: "Late Alerts",        desc: "Automated notifications for late arrivals and missed check-outs." },
  ];

  return (
    <section id="attendance" className="section-pad" style={{ background: COLORS.surface }}>
      <div className="container">
        <div className="two-col-grid">
          <FadeIn direction="right" delay={0.1}>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, background: `${COLORS.primary}14`, borderRadius: 28, filter: "blur(32px)" }} />
              <div style={{ position: "relative", background: COLORS.surface, borderRadius: 18, border: `1px solid ${COLORS.primaryBorder}`, boxShadow: `0 16px 48px ${COLORS.primary}18`, overflow: "hidden", display: "flex", flexDirection: "column" }}>

                {/* Google Maps embed */}
                <div style={{ position: "relative", flex: 1, minHeight: 320, overflow: "hidden" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31328.897!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin&style=feature:all%7Celement:labels.text.fill%7Ccolor:0x${COLORS.text.replace('#','')}%7C&style=feature:road%7Celement:geometry%7Ccolor:0xfafafa"
                    width="100%"
                    height="280"
                    style={{ border: 0, display: "block", filter: "saturate(0.7) hue-rotate(220deg) brightness(0.95)" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                  {/* Overlay UI on map */}
                  <div style={{ position: "absolute", top: 10, left: 10, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(10px)", borderRadius: 8, padding: "5px 10px", fontSize: 11, fontWeight: 700, color: COLORS.text, display: "flex", alignItems: "center", gap: 5, boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block", animation: "pulse 1.5s infinite" }} />
                    Geofence Active
                  </div>
                  {/* Animated pin */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 5 }}
                  >
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: COLORS.primary, border: "3px solid white", boxShadow: `0 4px 16px ${COLORS.primary}80`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <MapPin size={14} style={{ color: "white" }} />
                    </div>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: `${COLORS.primary}30`, margin: "2px auto 0", filter: "blur(2px)" }} />
                  </motion.div>
                  {/* Pulse ring */}
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 80, height: 80, borderRadius: "50%", border: `2px solid ${COLORS.primary}40`, animation: "pulse 2s infinite" }} />
                </div>

                <div className="att-stats-grid">
                  {[
                    { label: "Present", value: "231", color: COLORS.green },
                    { label: "Late",    value: "11",  color: COLORS.amber },
                    { label: "Absent",  value: "6",   color: "#ef4444" },
                  ].map((s) => (
                    <motion.div key={s.label} whileHover={{ scale: 1.05 }} style={{ textAlign: "center", padding: "8px", borderRadius: 10, background: COLORS.bg, transition: "all 0.2s" }}>
                      <div style={{ fontSize: "clamp(18px, 3vw, 22px)", fontWeight: 800, color: s.color, fontFamily: "var(--font-heading)" }}>{s.value}</div>
                      <div style={{ fontSize: 10.5, color: COLORS.muted, marginTop: 2, fontFamily: "var(--font-body)" }}>{s.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <span style={{ display: "inline-block", padding: "4px 13px", borderRadius: 999, background: COLORS.primaryLight, color: COLORS.primary, fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14, border: `1px solid ${COLORS.primaryBorder}` }}>Attendance & GPS</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 38px)", fontWeight: 900, color: COLORS.text, letterSpacing: "-0.6px", margin: "0 0 14px", fontFamily: "var(--font-heading)" }}>Know where your team is, always</h2>
            <p style={{ fontSize: "clamp(13px, 1.6vw, 15px)", color: COLORS.muted, marginBottom: 22, lineHeight: 1.8, fontFamily: "var(--font-body)" }}>
              GPS-verified check-ins, geofencing, and photo capture give you unmatched attendance accuracy.
            </p>
            <div className="att-items-grid">
              {items.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.08} direction="up">
                  <motion.div
                    whileHover={{ y: -3, boxShadow: `0 8px 20px ${COLORS.primary}15`, borderColor: COLORS.primaryBorder }}
                    style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "10px", borderRadius: 12, border: `1px solid transparent`, transition: "all 0.25s", cursor: "default", background: COLORS.surface }}
                  >
                    <div style={{ width: 30, height: 30, borderRadius: 8, background: COLORS.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <item.icon size={14} style={{ color: COLORS.primary }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 12.5, color: COLORS.text, fontFamily: "var(--font-heading)" }}>{item.title}</div>
                      <div style={{ fontSize: 11.5, color: COLORS.muted, marginTop: 2, lineHeight: 1.55, fontFamily: "var(--font-body)" }}>{item.desc}</div>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────── COMMUNICATION HUB ───────────────────────────
function CommunicationHub() {
  const features = [
    { icon: MessageSquare, label: "Private Chat",  desc: "1-to-1 encrypted messages" },
    { icon: Users,         label: "Group Rooms",   desc: "Department & project channels" },
    { icon: Phone,         label: "Audio Calls",   desc: "High-quality voice calls" },
    { icon: Bell,          label: "Smart Alerts",  desc: "Push + in-app notifications" },
    { icon: Download,      label: "File Sharing",  desc: "Docs, images, and more" },
  ];

  const messages = [
    { name: "Arjun", msg: "Design review at 3pm today?",           time: "2:41 PM", self: false },
    { name: "Priya", msg: "Works for me 👍",                        time: "2:42 PM", self: false },
    { name: "You",   msg: "Confirmed. Sending calendar invite now.", time: "2:43 PM", self: true  },
  ];

  return (
    <section id="communication" className="section-pad" style={{ background: G.dark, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div key={i}
            animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
            transition={{ repeat: Infinity, duration: 3 + Math.random() * 4, delay: Math.random() * 5 }}
            style={{ position: "absolute", borderRadius: "50%", background: COLORS.primary, width: (Math.random() * 3 + 1) + "px", height: (Math.random() * 3 + 1) + "px", top: (Math.random() * 100) + "%", left: (Math.random() * 100) + "%" }}
          />
        ))}
        <div style={{ position: "absolute", top: "30%", left: "20%", width: 250, height: 250, background: `${COLORS.primary}12`, borderRadius: "50%", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", bottom: "20%", right: "15%", width: 180, height: 180, background: `${COLORS.primaryDark}10`, borderRadius: "50%", filter: "blur(40px)" }} />
      </div>

      <div className="container" style={{ position: "relative" }}>
        <div className="two-col-grid">
          <FadeIn direction="right">
            <span style={{ display: "inline-block", padding: "4px 13px", borderRadius: 999, background: `${COLORS.primary}22`, color: COLORS.primary, fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14, border: `1px solid ${COLORS.primary}44` }}>Communication Hub</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 38px)", fontWeight: 900, color: "white", letterSpacing: "-0.6px", margin: "0 0 12px", fontFamily: "var(--font-heading)" }}>Your team's command center</h2>
            <p style={{ fontSize: "clamp(13px, 1.6vw, 15px)", color: COLORS.darkText, marginBottom: 24, lineHeight: 1.8, fontFamily: "var(--font-body)" }}>
              Real-time chat, calls, and notifications — purpose-built for your workforce.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {features.map((f, i) => (
                <FadeIn key={f.label} delay={i * 0.08} direction="right">
                  <motion.div
                    whileHover={{ x: 5, backgroundColor: `${COLORS.primary}22` }}
                    style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 12px", borderRadius: 12, border: `1px solid ${COLORS.darkBorder}`, background: `${COLORS.primary}0d`, transition: "all 0.25s", cursor: "default" }}
                  >
                    <div style={{ width: 32, height: 32, borderRadius: 9, background: `${COLORS.primary}22`, border: `1px solid ${COLORS.primary}33`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <f.icon size={15} style={{ color: COLORS.primary }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: "white", fontSize: 13, fontFamily: "var(--font-heading)" }}>{f.label}</div>
                      <div style={{ fontSize: 12, color: COLORS.darkText, marginTop: 2, fontFamily: "var(--font-body)" }}>{f.desc}</div>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.15}>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, background: `${COLORS.primary}18`, borderRadius: 28, filter: "blur(32px)" }} />
              <div style={{ position: "relative", background: `${COLORS.primary}10`, border: `1px solid ${COLORS.darkBorder}`, borderRadius: 18, overflow: "hidden", backdropFilter: "blur(8px)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderBottom: `1px solid ${COLORS.darkBorder}` }}>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", background: G.primary, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 12, flexShrink: 0 }}>P</div>
                  <div>
                    <div style={{ color: "white", fontSize: 12.5, fontWeight: 700, fontFamily: "var(--font-heading)" }}>Product Team</div>
                    <div style={{ color: COLORS.darkText, fontSize: 10.5, fontFamily: "var(--font-body)" }}>12 members · 3 online</div>
                  </div>
                  <div style={{ marginLeft: "auto", display: "flex", gap: 10 }}>
                    <motion.div whileHover={{ scale: 1.2 }}><Phone size={14} style={{ color: COLORS.primary, cursor: "pointer" }} /></motion.div>
                    <motion.div whileHover={{ scale: 1.2 }}><Video size={14} style={{ color: COLORS.primary, cursor: "pointer" }} /></motion.div>
                  </div>
                </div>

                <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {messages.map((m, i) => (
                    <motion.div key={m.time}
                      initial={{ opacity: 0, x: m.self ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15, duration: 0.4 }}
                      style={{ display: "flex", gap: 8, flexDirection: m.self ? "row-reverse" : "row" }}
                    >
                      {!m.self && (
                        <div style={{ width: 26, height: 26, borderRadius: "50%", background: `${COLORS.primary}55`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>
                          {m.name[0]}
                        </div>
                      )}
                      <div style={{ padding: "8px 12px", borderRadius: 10, fontSize: 12.5, maxWidth: "80%", background: m.self ? COLORS.primary : `${COLORS.primary}22`, color: "white", fontFamily: "var(--font-body)" }}>
                        {m.msg}
                        <div style={{ fontSize: 9.5, marginTop: 3, opacity: 0.55 }}>{m.time}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div style={{ padding: "8px 14px", borderTop: `1px solid ${COLORS.darkBorder}`, borderBottom: `1px solid ${COLORS.darkBorder}`, display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ fontSize: 10.5, color: COLORS.darkText, fontWeight: 500 }}>Online:</div>
                  {["A", "P", "K"].map((initial, i) => (
                    <div key={i} style={{ width: 22, height: 22, borderRadius: "50%", background: G.primary, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 9, fontWeight: 700, border: `2px solid ${COLORS.dark}` }}>
                      {initial}
                    </div>
                  ))}
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: COLORS.green, marginLeft: "auto" }} className="pulse-dot" />
                  <span style={{ fontSize: 10.5, color: COLORS.green, fontWeight: 600 }}>3 active</span>
                </div>

                <div style={{ padding: "10px 14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, background: `${COLORS.primary}15`, border: `1px solid ${COLORS.darkBorder}`, borderRadius: 10, padding: "8px 12px" }}>
                    <input style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 12.5, color: "white", minWidth: 0, fontFamily: "var(--font-body)" }} placeholder="Type a message..." readOnly />
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                      <Send size={14} style={{ color: COLORS.primary, flexShrink: 0, cursor: "pointer" }} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────── ANALYTICS ───────────────────────────
function Analytics() {
  return (
    <section className="section-pad" style={{ background: COLORS.surface }}>
      <div className="container">
        <div className="two-col-grid">
          <FadeIn direction="right">
            <span style={{ display: "inline-block", padding: "4px 13px", borderRadius: 999, background: COLORS.primaryLight, color: COLORS.primary, fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14, border: `1px solid ${COLORS.primaryBorder}` }}>Analytics</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 38px)", fontWeight: 900, color: COLORS.text, letterSpacing: "-0.6px", margin: "0 0 14px", fontFamily: "var(--font-heading)" }}>Data that drives better decisions</h2>
            <p style={{ fontSize: "clamp(13px, 1.6vw, 15px)", color: COLORS.muted, marginBottom: 24, lineHeight: 1.8, fontFamily: "var(--font-body)" }}>
              Live dashboards for every HR metric that matters — from hiring velocity to attrition risk.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { label: "Headcount Growth",     value: 78, color: COLORS.primary },
                { label: "Attendance Rate",       value: 94, color: COLORS.blue },
                { label: "Offer Acceptance",      value: 86, color: COLORS.amber },
                { label: "Onboarding Completion", value: 91, color: COLORS.primaryDark },
              ].map((m, i) => (
                <FadeIn key={m.label} delay={i * 0.1} direction="right">
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, marginBottom: 5 }}>
                      <span style={{ color: COLORS.muted, fontWeight: 500, fontFamily: "var(--font-body)" }}>{m.label}</span>
                      <span style={{ color: COLORS.text, fontWeight: 800, fontFamily: "var(--font-heading)" }}>{m.value}%</span>
                    </div>
                    <div style={{ height: 8, background: COLORS.border, borderRadius: 999, overflow: "hidden" }}>
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${m.value}%` }} transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.1 }}
                        style={{ height: "100%", borderRadius: 999, background: m.color }} />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <motion.div whileHover={{ y: -4, boxShadow: `0 20px 48px ${COLORS.primary}18` }}
              style={{ background: COLORS.surface, borderRadius: 18, border: `1px solid ${COLORS.border}`, boxShadow: `0 8px 32px ${COLORS.primary}10`, padding: 18, transition: "all 0.3s" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <div style={{ fontWeight: 700, color: COLORS.text, fontSize: 14, fontFamily: "var(--font-heading)" }}>Hiring Funnel</div>
                <Filter size={15} style={{ color: COLORS.muted }} />
              </div>
              {[
                { stage: "Applied",     count: 342, pct: 100 },
                { stage: "Screened",    count: 218, pct: 63 },
                { stage: "Interviewed", count: 104, pct: 30 },
                { stage: "Offered",     count: 42,  pct: 12 },
                { stage: "Joined",      count: 36,  pct: 10 },
              ].map((s, i) => (
                <div key={s.stage} style={{ marginBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 3 }}>
                    <span style={{ color: COLORS.muted, fontFamily: "var(--font-body)" }}>{s.stage}</span>
                    <span style={{ fontWeight: 700, color: COLORS.text, fontFamily: "var(--font-heading)" }}>{s.count}</span>
                  </div>
                  <div style={{ height: 18, background: COLORS.bg, borderRadius: 8, overflow: "hidden" }}>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.pct}%` }} transition={{ duration: 0.9, ease: "easeOut", delay: i * 0.1 }}
                      style={{ height: "100%", borderRadius: 8, background: `linear-gradient(to right, ${COLORS.primaryLight}, ${COLORS.primary}88)`, display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 8 }}>
                      <span style={{ fontSize: 9.5, color: COLORS.primaryDark, fontWeight: 700 }}>{s.pct}%</span>
                    </motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────── PRICING ───────────────────────────
const PLANS = [
  {
    name: "Starter", price: "₹999", period: "/month",
    desc: "Perfect for small teams just getting started.",
    features: ["Up to 25 employees","Recruitment & Onboarding","Basic Attendance","Employee Profiles","Email Support"],
    cta: "Get started", highlight: false,
  },
  {
    name: "Professional", price: "₹2,499", period: "/month",
    desc: "The full platform for growing companies.",
    features: ["Up to 200 employees","Everything in Starter","GPS Attendance","Payroll & Leave","Chat & Calling","Analytics Dashboard","Priority Support"],
    cta: "Start free trial", highlight: true,
  },
  {
    name: "Enterprise", price: "Custom", period: "",
    desc: "Tailored solutions for large organisations.",
    features: ["Unlimited employees","Everything in Professional","Custom Integrations","Dedicated Account Manager","SLA & 24/7 Support","On-premise option"],
    cta: "Contact sales", highlight: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="section-pad" style={{ background: `linear-gradient(to bottom, ${COLORS.primaryLight}44, ${COLORS.surface})` }}>
      <div className="container">
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span style={{ display: "inline-block", padding: "4px 13px", borderRadius: 999, background: COLORS.primaryLight, color: COLORS.primary, fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14, border: `1px solid ${COLORS.primaryBorder}` }}>Pricing</span>
            <h2 style={{ fontSize: "clamp(22px, 4vw, 42px)", fontWeight: 900, color: COLORS.text, letterSpacing: "-0.8px", margin: "0 0 10px", fontFamily: "var(--font-heading)" }}>Simple, transparent pricing</h2>
            <p style={{ fontSize: "clamp(14px, 1.8vw, 16px)", color: COLORS.muted, fontFamily: "var(--font-body)" }}>No hidden fees. Cancel anytime.</p>
          </div>
        </FadeIn>

        <div className="pricing-grid">
          {PLANS.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, boxShadow: plan.highlight ? `0 28px 64px ${COLORS.primary}60` : `0 16px 40px rgba(0,0,0,0.12)` }}
                style={{
                  position: "relative", padding: "22px 22px", borderRadius: 20,
                  display: "flex", flexDirection: "column", height: "100%",
                  ...(plan.highlight ? {
                    background: G.primary, color: "white",
                    boxShadow: `0 20px 60px ${COLORS.primary}50`, border: "none",
                  } : {
                    background: COLORS.surface, border: `1px solid ${COLORS.border}`,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  }),
                  transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                }}
              >
                {plan.highlight && (
                  <motion.div
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: COLORS.amber, color: "white", fontSize: 10.5, fontWeight: 800, padding: "4px 14px", borderRadius: 999, boxShadow: `0 4px 12px ${COLORS.amber}55`, whiteSpace: "nowrap" }}
                  >Most Popular</motion.div>
                )}
                <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 8, color: plan.highlight ? "rgba(255,255,255,0.7)" : COLORS.primary, fontFamily: "var(--font-heading)" }}>{plan.name}</div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 5 }}>
                  <span style={{ fontSize: "clamp(26px, 4vw, 34px)", fontWeight: 900, color: plan.highlight ? "white" : COLORS.text, fontFamily: "var(--font-heading)" }}>{plan.price}</span>
                  <span style={{ fontSize: 12, marginBottom: 5, color: plan.highlight ? "rgba(255,255,255,0.55)" : COLORS.muted, fontFamily: "var(--font-body)" }}>{plan.period}</span>
                </div>
                <p style={{ fontSize: 12.5, marginBottom: 18, color: plan.highlight ? "rgba(255,255,255,0.7)" : COLORS.muted, fontFamily: "var(--font-body)" }}>{plan.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 9, flex: 1 }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 12.5 }}>
                      <CheckCircle2 size={14} style={{ color: plan.highlight ? "rgba(255,255,255,0.8)" : COLORS.primary, flexShrink: 0 }} />
                      <span style={{ color: plan.highlight ? "rgba(255,255,255,0.85)" : COLORS.muted, fontFamily: "var(--font-body)" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <motion.a href="/register"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ display: "block", textAlign: "center", padding: "11px", borderRadius: 11, fontSize: 13, fontWeight: 700, textDecoration: "none", transition: "all 0.2s", fontFamily: "var(--font-heading)", ...(plan.highlight ? { background: "white", color: COLORS.primaryDark } : { background: COLORS.primary, color: "white", boxShadow: `0 4px 14px ${COLORS.primary}44` }) }}
                >
                  {plan.cta}
                </motion.a>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────── FAQ ───────────────────────────
const FAQS = [
  { q: "How long does setup take?", a: "Most teams are fully onboarded within a day. Our setup wizard walks you through company configuration, employee import, and role assignment step by step." },
  { q: "Can I import our existing employee data?", a: "Yes. Info HRM accepts Excel and CSV imports for employees, attendance records, and leave balances. We provide a template with all required columns." },
  { q: "Is GPS attendance accurate indoors?", a: "GPS accuracy varies indoors but is highly reliable outdoors. For indoor environments we support Wi-Fi and beacon-based check-ins as a complement." },
  { q: "Does it work on mobile?", a: "Yes — our Flutter app for Android and iOS covers all core features including check-ins, chat, leave requests, and notifications." },
  { q: "Is there a free trial?", a: "The Professional plan includes a 14-day free trial with no credit card required. Starter is free for up to 25 employees permanently." },
];

function FAQ() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const integrationIcons = {
    Excel:        FileSpreadsheet,
    CSV:          FileBarChart,
    HRMS:         Building2,
    Email:        Mail,
    Slack:        MessageSquare,
    Drive:        Database,
    Zapier:       Zap,
    Zoom:         Video,
    GPS:          MapPin,
    "Wi-Fi":      Globe,
    Beacon:       Activity,
    Maps:         MapPinned,
    Location:     MapPin,
    Geofence:     Shield,
    Android:      Phone,
    iOS:          Phone,
    Flutter:      Layers,
    PWA:          Globe,
    Push:         Bell,
    Starter:      Star,
    Pro:          TrendingUp,
    Enterprise:   Building2,
    Trial:        Calendar,
    Free:         Check,
    Billing:      DollarSign,
    SSL:          Lock,
    RBAC:         Shield,
    Audit:        ClipboardList,
    Backup:       Database,
    "2FA":        Lock,
    Chat:         MessageSquare,
    Phone:        Phone,
    Docs:         FileSpreadsheet,
    Video:        Video,
    Support:      HelpCircle,
    Reports:      BarChart2,
    Analytics:    BarChart2,
    Roles:        Users,
    Import:       Download,
    Export:       Download,
    Notify:       Bell,
    Invite:       Mail,
    Schedule:     Calendar,
    Track:        Activity,
    Search:       Search,
    Filter:       Filter,
  };

  const FAQS_CAROUSEL = [
    {
      q: "How long does setup take?",
      a: "Most teams are fully onboarded within a day. Our setup wizard walks you through company configuration, employee import, and role assignment step by step.",
      integrations: ["Excel", "CSV", "Email", "HRMS"],
    },
    {
      q: "Can I import our existing employee data?",
      a: "Yes. Info HRM accepts Excel and CSV imports for employees, attendance records, and leave balances. We provide a template with all required columns.",
      integrations: ["Excel", "CSV", "Import", "Export", "Filter", "Search", "Reports", "Analytics"],
    },
    {
      q: "Is GPS attendance accurate indoors?",
      a: "GPS accuracy varies indoors but is highly reliable outdoors.",
      integrations: ["GPS",  "Maps", "Location", "Geofence",  ],
    },
    {
      q: "Does it work on mobile?",
      a: "Yes — our Flutter app for Android and iOS covers all core features including check-ins, chat, leave requests, and notifications.",
      integrations: ["Android", "iOS", "Flutter", "PWA", "Push", "Chat", "Notify", "Schedule"],
    },
    {
      q: "Is there a free trial?",
      a: "The Professional plan includes a 14-day free trial with no credit card required. Starter is free for up to 25 employees permanently.",
      integrations: ["Starter", "Pro", "Enterprise", "Trial", "Free", "Billing", "Invite", "Email"],
    },
    {
      q: "What kind of support do you offer?",
      a: "We offer email support on Starter, priority support on Professional, and a dedicated account manager plus 24/7 SLA on Enterprise plans.",
      integrations: ["Email", "Chat", "Video", "Docs", "Support", "Zoom", "Schedule", "Notify"],
    },
    {
      q: "Is our data secure?",
      a: "Yes. All data is encrypted in transit and at rest. We use role-based access controls, audit logs, and comply with Indian data protection norms.",
      integrations: ["SSL", "RBAC", "Audit", "Backup", "2FA", "Shield", "Roles", "Track"],
    },
  ];

  const total = FAQS_CAROUSEL.length;
  const item = FAQS_CAROUSEL[current];

  const navigate = (dir) => {
    setDirection(dir);
    setCurrent(prev => (prev + dir + total) % total);
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <section id="faq" className="section-pad" style={{ background: `linear-gradient(to bottom, ${COLORS.primaryLight}44, ${COLORS.surface})` }}>
      <style>{`
        .faq-carousel-wrap {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 60px;
        }
        @media (max-width: 600px) { .faq-carousel-wrap { padding: 0 44px; } }

        .faq-slide-grid {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 48px;
          align-items: start;
          min-height: 260px;
        }
        @media (max-width: 768px) {
          .faq-slide-grid { grid-template-columns: 1fr; gap: 24px; min-height: unset; }
        }

        .faq-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 38px; height: 38px;
          border-radius: 50%;
          background: ${COLORS.surface};
          border: 1.5px solid ${COLORS.border};
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: ${COLORS.muted};
          box-shadow: 0 2px 10px rgba(0,0,0,0.07);
          transition: all 0.22s;
          z-index: 10;
        }
        .faq-arrow:hover {
          border-color: ${COLORS.primaryBorder};
          color: ${COLORS.primaryDark};
          box-shadow: 0 4px 18px ${COLORS.primary}25;
          transform: translateY(-50%) scale(1.08);
        }
        .faq-arrow.left  { left: 0; }
        .faq-arrow.right { right: 0; }

        .faq-chip {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 8px;
          border-radius: 12px;
          background: ${COLORS.surface};
          border: 1.5px solid ${COLORS.border};
          font-size: 11px;
          font-weight: 600;
          color: ${COLORS.muted};
          transition: all 0.22s;
          cursor: default;
          text-align: center;
        }
        .faq-chip:hover {
          border-color: ${COLORS.primaryBorder};
          background: ${COLORS.primaryLight};
          color: ${COLORS.primaryDark};
          transform: translateY(-3px);
          box-shadow: 0 6px 16px ${COLORS.primary}20;
        }

        .faq-dots {
          display: flex;
          justify-content: center;
          gap: 7px;
          margin-top: 32px;
        }
        .faq-dot {
          width: 7px; height: 7px;
          border-radius: 999px;
          background: ${COLORS.border};
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          border: none; padding: 0;
        }
        .faq-dot.active {
          background: ${COLORS.primary};
          width: 22px;
          box-shadow: 0 0 8px ${COLORS.primary}55;
        }
      `}</style>

      <div className="container">
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ display: "inline-block", padding: "4px 13px", borderRadius: 999, background: COLORS.primaryLight, color: COLORS.primary, fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14, border: `1px solid ${COLORS.primaryBorder}` }}>FAQ</span>
            <h2 style={{ fontSize: "clamp(22px, 4vw, 40px)", fontWeight: 900, color: COLORS.text, letterSpacing: "-0.8px", margin: 0, fontFamily: "var(--font-heading)" }}>
              Frequently Asked Questions
            </h2>
          </div>
        </FadeIn>

        <div className="faq-carousel-wrap">
          {/* Left arrow */}
          <motion.button className="faq-arrow left" onClick={() => navigate(-1)} whileTap={{ scale: 0.88 }}>
            <ChevronDown size={17} style={{ transform: "rotate(90deg)" }} />
          </motion.button>

          {/* Slide */}
          <div style={{ overflow: "hidden" }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="faq-slide-grid">
                  {/* LEFT: Question + Answer */}
                  <div>
                    <div style={{
                      fontSize: "clamp(17px, 2.6vw, 22px)",
                      fontWeight: 800,
                      color: COLORS.text,
                      lineHeight: 1.38,
                      marginBottom: 14,
                      fontFamily: "var(--font-heading)",
                      letterSpacing: "-0.4px",
                    }}>
                      {item.q}
                    </div>
                    <p style={{
                      fontSize: 13.5,
                      color: COLORS.muted,
                      lineHeight: 1.8,
                      margin: 0,
                      fontFamily: "var(--font-body)",
                    }}>
                      {item.a}
                    </p>
                  </div>

                  {/* RIGHT: Icon chips grid */}
                  <div>
                    <div style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: COLORS.mutedLight,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: 12,
                      fontFamily: "var(--font-body)",
                    }}>
                      Related features
                    </div>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(4, 1fr)",
                      gap: 8,
                    }}>
                      {item.integrations.map((name, idx) => {
                        const IconComp = integrationIcons[name] || HelpCircle;
                        return (
                          <motion.div
                            key={name}
                            className="faq-chip"
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: idx * 0.05, duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
                            whileHover={{ y: -3, boxShadow: `0 6px 16px ${COLORS.primary}20`, borderColor: COLORS.primaryBorder, backgroundColor: COLORS.primaryLight }}
                          >
                            <div style={{
                              width: 32, height: 32,
                              borderRadius: 9,
                              background: COLORS.primaryLight,
                              border: `1px solid ${COLORS.primaryBorder}`,
                              display: "flex", alignItems: "center", justifyContent: "center",
                              transition: "all 0.22s",
                            }}>
                              <IconComp size={15} style={{ color: COLORS.primary }} />
                            </div>
                            <span style={{ fontFamily: "var(--font-body)", fontSize: 10.5, color: COLORS.muted, fontWeight: 600, lineHeight: 1.2 }}>{name}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right arrow */}
          <motion.button className="faq-arrow right" onClick={() => navigate(1)} whileTap={{ scale: 0.88 }}>
            <ChevronDown size={17} style={{ transform: "rotate(-90deg)" }} />
          </motion.button>
        </div>

        {/* Dot indicators */}
        <div className="faq-dots">
          {FAQS_CAROUSEL.map((_, i) => (
            <motion.button
              key={i}
              className={`faq-dot${i === current ? " active" : ""}`}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              whileTap={{ scale: 0.85 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────── CONTACT ───────────────────────────
function Contact() {
  const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";
  const INITIAL = { name: "", last_name: "", work_email: "", company_size: "1-25 employees", message: "" };
  const [form, setForm]       = useState(INITIAL);
  const [status, setStatus]   = useState("idle");
  const [errors, setErrors]   = useState({});
  const [apiError, setApiError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim())       errs.name       = "First name is required";
    if (!form.last_name.trim())  errs.last_name  = "Last name is required";
    if (!form.work_email.trim()) errs.work_email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.work_email)) errs.work_email = "Enter a valid email";
    if (!form.message.trim())    errs.message    = "Message is required";
    return errs;
  };

  const handleSubmit = async () => {
    setApiError("");
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("loading");
    try {
      const res = await fetch(`${API_BASE}/contact/`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.status === 201) { setStatus("success"); setForm(INITIAL); setErrors({}); }
      else {
        const data = await res.json();
        const serverErrs = {};
        Object.entries(data).forEach(([key, val]) => { serverErrs[key] = Array.isArray(val) ? val[0] : val; });
        setErrors(serverErrs); setApiError("Please fix the errors below and try again."); setStatus("error");
      }
    } catch { setApiError("Network error — please check your connection and try again."); setStatus("error"); }
  };

  const inputStyle = (field) => ({
    width: "100%", padding: "10px 12px", borderRadius: 9,
    border: `1px solid ${errors[field] ? "#ef4444" : COLORS.border}`,
    fontSize: 13, color: COLORS.text, outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s", background: COLORS.surface, boxSizing: "border-box",
    fontFamily: "var(--font-body)",
  });
  const labelStyle = { display: "block", fontSize: 10.5, fontWeight: 700, color: COLORS.muted, marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "var(--font-body)" };
  const errorStyle = { fontSize: 10.5, color: "#ef4444", marginTop: 3, display: "block", fontFamily: "var(--font-body)" };

  return (
    <section id="contact" className="section-pad" style={{ background: COLORS.surface }}>
      <div className="container">
        <div className="two-col-grid">
          <FadeIn direction="right">
            <span style={{ display: "inline-block", padding: "4px 13px", borderRadius: 999, background: COLORS.primaryLight, color: COLORS.primary, fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14, border: `1px solid ${COLORS.primaryBorder}` }}>Contact</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 38px)", fontWeight: 900, color: COLORS.text, letterSpacing: "-0.6px", margin: "0 0 12px", fontFamily: "var(--font-heading)" }}>Let's talk about your team</h2>
            <p style={{ fontSize: "clamp(13px, 1.6vw, 15px)", color: COLORS.muted, marginBottom: 24, lineHeight: 1.8, fontFamily: "var(--font-body)" }}>
              Whether you're evaluating, migrating, or just curious — we're happy to help.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: Mail,   label: "hello@hrm.com" },
                { icon: Phone,  label: "+91 00000 00000" },
                { icon: MapPin, label: "Coimbatore, Tamil Nadu, India" },
              ].map((c) => (
                <motion.div key={c.label} whileHover={{ x: 4 }}
                  style={{ display: "flex", alignItems: "center", gap: 12, color: COLORS.muted, fontSize: 13.5, cursor: "default", transition: "all 0.2s" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 9, background: COLORS.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${COLORS.primaryBorder}`, flexShrink: 0 }}>
                    <c.icon size={14} style={{ color: COLORS.primary }} />
                  </div>
                  <span style={{ fontFamily: "var(--font-body)" }}>{c.label}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <div style={{ background: COLORS.surface, borderRadius: 20, border: `1px solid ${COLORS.border}`, boxShadow: `0 8px 32px ${COLORS.primary}10`, padding: "24px" }}>
              <AnimatePresence>
                {status === "success" && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    style={{ textAlign: "center", padding: "28px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                    <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 0.5 }}
                      style={{ width: 52, height: 52, borderRadius: "50%", background: "#e6f8f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <CheckCircle2 size={26} style={{ color: COLORS.green }} />
                    </motion.div>
                    <div style={{ fontWeight: 800, fontSize: 17, color: COLORS.text, fontFamily: "var(--font-heading)" }}>Message sent!</div>
                    <p style={{ fontSize: 13, color: COLORS.muted, lineHeight: 1.65, maxWidth: 260, fontFamily: "var(--font-body)" }}>Thanks for reaching out. Our team will get back to you within 24 hours.</p>
                    <button onClick={() => setStatus("idle")} style={{ marginTop: 6, padding: "9px 22px", borderRadius: 10, border: `1px solid ${COLORS.primaryBorder}`, background: COLORS.primaryLight, color: COLORS.primary, fontWeight: 700, fontSize: 12.5, cursor: "pointer", fontFamily: "var(--font-heading)" }}>
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {status !== "success" && (
                <>
                  {apiError && (
                    <div style={{ marginBottom: 14, padding: "9px 13px", borderRadius: 9, background: "#fef2f2", border: "1px solid #fecaca", fontSize: 12.5, color: "#dc2626", fontFamily: "var(--font-body)" }}>{apiError}</div>
                  )}
                  <div className="contact-name-grid">
                    <div>
                      <label style={labelStyle}>First name</label>
                      <input name="name" value={form.name} onChange={handleChange} style={inputStyle("name")} placeholder="Name"
                        onFocus={e => { e.target.style.borderColor = COLORS.primary; e.target.style.boxShadow = `0 0 0 3px ${COLORS.primary}18`; }}
                        onBlur={e => { e.target.style.borderColor = errors.name ? "#ef4444" : COLORS.border; e.target.style.boxShadow = ""; }} />
                      {errors.name && <span style={errorStyle}>{errors.name}</span>}
                    </div>
                    <div>
                      <label style={labelStyle}>Last name</label>
                      <input name="last_name" value={form.last_name} onChange={handleChange} style={inputStyle("last_name")} placeholder="LastName"
                        onFocus={e => { e.target.style.borderColor = COLORS.primary; e.target.style.boxShadow = `0 0 0 3px ${COLORS.primary}18`; }}
                        onBlur={e => { e.target.style.borderColor = errors.last_name ? "#ef4444" : COLORS.border; e.target.style.boxShadow = ""; }} />
                      {errors.last_name && <span style={errorStyle}>{errors.last_name}</span>}
                    </div>
                  </div>
                  <div style={{ marginBottom: 13 }}>
                    <label style={labelStyle}>Work email</label>
                    <input type="email" name="work_email" value={form.work_email} onChange={handleChange} style={inputStyle("work_email")} placeholder="name@company.com"
                      onFocus={e => { e.target.style.borderColor = COLORS.primary; e.target.style.boxShadow = `0 0 0 3px ${COLORS.primary}18`; }}
                      onBlur={e => { e.target.style.borderColor = errors.work_email ? "#ef4444" : COLORS.border; e.target.style.boxShadow = ""; }} />
                    {errors.work_email && <span style={errorStyle}>{errors.work_email}</span>}
                  </div>
                  <div style={{ marginBottom: 13 }}>
                    <label style={labelStyle}>Company size</label>
                    <select name="company_size" value={form.company_size} onChange={handleChange} style={{ ...inputStyle("company_size"), cursor: "pointer" }}>
                      <option value="1-25 employees">1–25 employees</option>
                      <option value="26-100 employees">26–100 employees</option>
                      <option value="101-500 employees">101–500 employees</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: 18 }}>
                    <label style={labelStyle}>Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={3} style={{ ...inputStyle("message"), resize: "none" }} placeholder="Tell us about your HR challenges..."
                      onFocus={e => { e.target.style.borderColor = COLORS.primary; e.target.style.boxShadow = `0 0 0 3px ${COLORS.primary}18`; }}
                      onBlur={e => { e.target.style.borderColor = errors.message ? "#ef4444" : COLORS.border; e.target.style.boxShadow = ""; }} />
                    {errors.message && <span style={errorStyle}>{errors.message}</span>}
                  </div>
                  <motion.button onClick={handleSubmit} disabled={status === "loading"}
                    whileHover={status !== "loading" ? { y: -2, boxShadow: `0 10px 28px ${COLORS.primary}55` } : {}}
                    whileTap={{ scale: 0.98 }}
                    style={{ width: "100%", padding: 12, borderRadius: 12, fontSize: 13.5, fontWeight: 700, color: "white", background: status === "loading" ? `${COLORS.primary}99` : G.primary, border: "none", cursor: status === "loading" ? "not-allowed" : "pointer", boxShadow: `0 4px 14px ${COLORS.primary}44`, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "var(--font-heading)" }}>
                    {status === "loading" ? (
                      <><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animation: "spin 0.8s linear infinite" }}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>Sending…</>
                    ) : (
                      <><Send size={14} /> Send message</>
                    )}
                  </motion.button>
                </>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────── CTA BANNER ───────────────────────────
function CTABanner() {
  return (
<>
</>
  );
}

// ─────────────────────────── FOOTER (compact) ───────────────────────────
function EmailPill({ email }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(email).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1800); });
  };
  return (
    <div onClick={copy} title="Click to copy" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: 999, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", fontSize: 13, color: "rgba(220,210,255,0.85)", cursor: "pointer", transition: "background 0.2s" }}
      onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
      onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.07)"}
    >
      <span style={{ fontFamily: "var(--font-body)" }}>{email}</span>
      <button style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: 5, padding: "2px 5px", cursor: "pointer", color: "rgba(200,190,230,0.7)", display: "flex", alignItems: "center" }}>
        {copied
          ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a68dd1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          : <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
        }
      </button>
    </div>
  );
}

function Footer() {
  const scrollTo = (href) => { const el = document.querySelector(href); if (el) el.scrollIntoView({ behavior: "smooth" }); };
  const navLinks = [
    { label: "Features",  href: "#features" },
    { label: "Pricing",   href: "#pricing" },
    { label: "FAQ",       href: "#faq" },
    { label: "Contact",   href: "#contact" },
  ];
  const legalLinks = ["Privacy", "Terms", "Cookies"];
  const socials = [
    { label: "LinkedIn",  path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
    { label: "Twitter",   path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
    { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  ];

  return (
    <footer style={{ background: "#0d0b1e", color: "white", fontFamily: "var(--font-body)" }}>
      <style>{`
        .ft-main { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 40px; padding: 48px 0 36px; align-items: start; }
        @media (max-width: 768px) { .ft-main { grid-template-columns: 1fr 1fr; gap: 28px; padding: 36px 0 24px; } .ft-brand { grid-column: 1/-1; } }
        @media (max-width: 480px) { .ft-main { grid-template-columns: 1fr; } }
        .ft-nav-link { display: block; font-size: 12.5px; color: rgba(200,190,230,0.55); text-decoration: none; margin-bottom: 10px; transition: color 0.2s; font-weight: 500; }
        .ft-nav-link:hover { color: white; }
        .ft-social-btn { width: 30px; height: 30px; border-radius: 7px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09); display: flex; align-items: center; justify-content: center; color: rgba(200,190,230,0.5); text-decoration: none; transition: all 0.2s; cursor: pointer; }
        .ft-social-btn:hover { background: rgba(166,141,209,0.18); color: #a68dd1; border-color: rgba(166,141,209,0.3); }
        .ft-bottom { display: flex; justify-content: space-between; align-items: center; padding: 16px 0 24px; border-top: 1px solid rgba(166,141,209,0.12); flex-wrap: wrap; gap: 10px; }
        @media (max-width: 480px) { .ft-bottom { flex-direction: column; align-items: flex-start; } }
      `}</style>

      <div className="container">
        <div className="ft-main">

          {/* Brand */}
          <div className="ft-brand">
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", marginBottom: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src="./Wowelse2.png" alt="HRM" style={{ width: 34, height: 34 }} />
              </div>
              <span style={{ fontSize: 10, color: "#a68dd1", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "var(--font-heading)" }}>HR Management</span>
            </a>
            <p style={{ fontSize: 12.5, color: "rgba(200,190,230,0.45)", lineHeight: 1.7, maxWidth: 230, marginBottom: 14, fontFamily: "var(--font-body)" }}>
              All-in-one HR platform built for modern Indian businesses.
            </p>
            <EmailPill email="hello@hrm.com" />
            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
              {socials.map(({ label, path }) => (
                <a key={label} href="#" className="ft-social-btn" title={label}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={path}/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <div style={{ fontSize: 9.5, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(200,190,230,0.35)", marginBottom: 16, fontFamily: "var(--font-heading)" }}>Navigation</div>
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} className="ft-nav-link" onClick={e => { e.preventDefault(); scrollTo(href); }}>{label}</a>
            ))}
          </div>

          {/* Legal */}
          <div>
            <div style={{ fontSize: 9.5, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(200,190,230,0.35)", marginBottom: 16, fontFamily: "var(--font-heading)" }}>Legal</div>
            {["Terms of Service", "Privacy Policy", "Cookie Settings", "Security"].map(l => (
              <a key={l} href="#" className="ft-nav-link">{l}</a>
            ))}

            {/* Google Play badge - real logo */}
            <a
              href="#"
              style={{ display: "inline-flex", alignItems: "center", padding: "6px 10px", borderRadius: 10, background: "#1a1530", border: "1.5px solid rgba(255,255,255,0.1)", textDecoration: "none", marginTop: 14, transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(166,141,209,0.45)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = ""; }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                style={{ height: 36 }}
              />
            </a>

            {/* Design & Development credit */}
            <div style={{ marginTop: 4, padding: "1px 52px", borderRadius: 8, background: "rgba(166,141,209,0.07)", border: "1px solid rgba(166,141,209,0.12)", display: "inline-block" }}>
              <div style={{ fontSize: 9, color: "rgba(200,190,230,0.35)", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--font-heading)", marginBottom: 3 }}>Design & Development</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(200,190,230,0.7)", fontFamily: "var(--font-heading)" }}>DataX Technologies</div>
            </div>
          </div>

        </div>

        <div className="ft-bottom">
          <p style={{ fontSize: 11.5, color: "rgba(200,190,230,0.35)", margin: 0, fontFamily: "var(--font-body)" }}>© 2026 HRM. All rights reserved. Built with ♥ in Coimbatore.</p>
          <div style={{ display: "flex", gap: 16 }}>
            {legalLinks.map(l => (
              <a key={l} href="#" style={{ fontSize: 11.5, color: "rgba(200,190,230,0.35)", textDecoration: "none", transition: "color 0.2s", fontFamily: "var(--font-body)" }}
                onMouseEnter={e => e.currentTarget.style.color = "white"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(200,190,230,0.35)"}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
// ─────────────────────────── ROOT ───────────────────────────
export default function LandingPage() {
  return (
    <div style={{ fontFamily: "var(--font-body)", WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }}>
      <style>{GLOBAL_STYLES}</style>
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
      <EmployeeManagement />
      <AttendanceGPS />
      <CommunicationHub />
      <Analytics />
      <Pricing />
      <FAQ />
      <Contact />
      <CTABanner />
      <Footer />
    </div>
  );
}