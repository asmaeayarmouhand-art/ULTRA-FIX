import { motion, AnimatePresence } from "motion/react";
import { 
  Zap, 
  Sun, 
  Wrench, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Menu,
  X,
  User as UserIcon,
  LogOut,
  Globe
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { signUp, login, logout, subscribeToAuth } from "./services/authService";
import { User } from "firebase/auth";
import CookiePolicy from "./components/CookiePolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import LegalNotice from "./components/LegalNotice";

// --- Components ---

const AuthModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signUp(email, password, name);
      }
      onClose();
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-display">{isLogin ? t('nav.login') : t('nav.signup')}</h2>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {error && <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm font-medium">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-700">{t('contact.form.name')}</label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                />
              </div>
            )}
            <div className="space-y-1">
              <label className="text-sm font-bold text-slate-700">Email</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-bold text-slate-700">Password</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
              />
            </div>
            <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-lg shadow-primary/20">
              {isLogin ? t('nav.login') : t('nav.signup')}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-slate-500 hover:text-primary font-medium transition-colors"
            >
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Navbar = ({ onHomeClick }: { onHomeClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    const unsubscribe = subscribeToAuth((u) => setUser(u));
    return () => {
      window.removeEventListener("scroll", handleScroll);
      unsubscribe();
    };
  }, []);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={onHomeClick}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Zap className={`w-8 h-8 ${isScrolled ? "text-primary" : "text-white"}`} fill="currentColor" />
            <span className={`text-2xl font-display font-bold ${isScrolled ? "text-slate-900" : "text-white"}`}>
              ULTRA<span className="text-secondary">FIX</span>
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {["Home", "Services", "Solar", "Projects", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => {
                  if (item === "Home") {
                    e.preventDefault();
                    onHomeClick();
                  }
                }}
                className={`font-medium hover:text-secondary transition-colors ${isScrolled ? "text-slate-700" : "text-white"}`}
              >
                {t(`nav.${item.toLowerCase()}`)}
              </a>
            ))}
            
            <div className="h-6 w-px bg-slate-300/30 mx-2" />

            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-2 font-bold uppercase text-xs px-3 py-1 rounded-full border transition-all ${isScrolled ? "border-slate-200 text-slate-600 hover:bg-slate-50" : "border-white/30 text-white hover:bg-white/10"}`}
            >
              <Globe className="w-3 h-3" />
              {i18n.language}
            </button>

            {user ? (
              <div className="flex items-center gap-4">
                <div className={`flex items-center gap-2 font-medium ${isScrolled ? "text-slate-700" : "text-white"}`}>
                  <UserIcon className="w-4 h-4" />
                  <span className="max-w-[100px] truncate">{user.displayName || user.email}</span>
                </div>
                <button onClick={() => logout()} className="text-secondary hover:text-orange-600 transition-colors">
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className={`font-bold hover:text-secondary transition-colors ${isScrolled ? "text-slate-700" : "text-white"}`}
              >
                {t('nav.login')}
              </button>
            )}

            <a 
              href="#contact" 
              className="bg-secondary hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all"
            >
              {t('nav.getQuote')}
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button onClick={toggleLanguage} className={`${isScrolled ? "text-slate-700" : "text-white"}`}>
              <Globe className="w-5 h-5" />
            </button>
            <button className={isScrolled ? "text-slate-900" : "text-white"} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden overflow-hidden"
            >
              {["Home", "Services", "Solar", "Projects", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-slate-700 font-medium text-lg border-b border-slate-100 pb-2"
                  onClick={(e) => {
                    if (item === "Home") {
                      e.preventDefault();
                      onHomeClick();
                    }
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {t(`nav.${item.toLowerCase()}`)}
                </a>
              ))}
              {user ? (
                <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="text-left text-secondary font-bold py-2">
                  {t('nav.logout')}
                </button>
              ) : (
                <button onClick={() => { setIsAuthModalOpen(true); setIsMobileMenuOpen(false); }} className="text-left text-primary font-bold py-2">
                  {t('nav.login')}
                </button>
              )}
              <a 
                href="#contact" 
                className="bg-secondary text-white text-center py-3 rounded-lg font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.getQuote')}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2000" 
          alt="Electrician working" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
            {t('hero.title').split('&')[0]} <span className="text-secondary">&</span> {t('hero.title').split('&')[1]}
          </h1>
          <p className="text-xl text-slate-200 mb-8 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center gap-2">
              {t('hero.cta1')} <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-bold transition-all">
              {t('hero.cta2')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 hover:-translate-y-2"
  >
    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-2xl mb-4 group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-slate-600 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const Services = () => {
  const { t } = useTranslation();
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl mb-4">{t('services.title')}</h2>
          <p className="text-slate-600">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={Zap}
            title={t('services.installations.title')}
            description={t('services.installations.desc')}
            delay={0.1}
          />
          <ServiceCard 
            icon={Sun}
            title={t('services.solar.title')}
            description={t('services.solar.desc')}
            delay={0.2}
          />
          <ServiceCard 
            icon={Wrench}
            title={t('services.repairs.title')}
            description={t('services.repairs.desc')}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

const SolarSection = () => {
  const { t } = useTranslation();
  return (
    <section id="solar" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200" 
                alt="Solar panels on roof" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-8 rounded-2xl shadow-xl hidden lg:block">
              <p className="text-4xl font-bold mb-1">30%</p>
              <p className="text-sm font-semibold uppercase tracking-wider">Average Savings</p>
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-4xl mb-6">{t('solar.title')}</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {t('solar.subtitle')}
            </p>
            <ul className="space-y-4 mb-10">
              {(t('solar.features', { returnObjects: true }) as string[]).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 transition-all">
              {t('solar.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Years Experience", value: "15+" },
            { label: "Projects Completed", value: "2.5k+" },
            { label: "Happy Clients", value: "1.8k+" },
            { label: "Solar Panels Installed", value: "12k+" }
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-4xl md:text-5xl font-bold mb-2 text-secondary">{stat.value}</p>
              <p className="text-slate-300 font-medium uppercase tracking-wide text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const projects = [
    { id: "p1", img: "https://miletoinstalaciones.com/wp-content/uploads/2022/10/img2.jpg" },
    { id: "p2", img: "https://miletoinstalaciones.com/wp-content/uploads/2022/10/img4.jpg" },
    { id: "p3", img: "https://miletoinstalaciones.com/wp-content/uploads/2022/10/img1.jpg" },
    { id: "p4", img: "https://miletoinstalaciones.com/wp-content/uploads/2022/11/instalador-electricista-autorizado-malaga.jpeg" },
    { id: "p5", img: "https://miletoinstalaciones.com/wp-content/uploads/2022/11/20221108_083126.jpg" },
    { id: "p6", img: "https://miletoinstalaciones.com/wp-content/uploads/2022/10/img6.jpg" }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Portfolio</span>
          <h2 className="text-4xl font-display">{t('projects.title')}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-lg"
            >
              <img 
                src={p.img} 
                alt={t(`projects.items.${p.id}.title`)} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h4 className="text-white text-xl font-bold mb-2">{t(`projects.items.${p.id}.title`)}</h4>
                <p className="text-slate-200 text-sm">{t(`projects.items.${p.id}.desc`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-primary p-12 text-white">
            <h2 className="text-3xl mb-8">{t('contact.title')}</h2>
            <p className="text-slate-300 mb-12">
              {t('contact.subtitle')}
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Call Us 24/7</p>
                  <p className="text-lg font-bold">+34 650 413 267</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email Us</p>
                  <p className="text-lg font-bold">info@ultrafix.site</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Our Location</p>
                  <p className="text-lg font-bold">128 Carrer de Floridablanca, Barcelona</p>
                </div>
              </div>
            </div>
            

          </div>
          
          <div className="lg:w-2/3 p-12">
            <h3 className="text-2xl mb-8">{t('contact.form.title')}</h3>
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{t('contact.form.name')}</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{t('contact.form.phone')}</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="+34 650 413 267" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700">{t('contact.form.service')}</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                  <option>Electrical Installation</option>
                  <option>Solar Panel System</option>
                  <option>Emergency Repair</option>
                  <option>Maintenance</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700">{t('contact.form.message')}</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Tell us about your project..." />
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-secondary hover:bg-orange-600 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-secondary/20">
                  {t('contact.form.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onCookiePolicyClick, onPrivacyPolicyClick, onLegalNoticeClick }: { onCookiePolicyClick: () => void; onPrivacyPolicyClick: () => void; onLegalNoticeClick: () => void }) => (
  <footer className="bg-slate-900 text-white py-12 border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-secondary" fill="currentColor" />
          <span className="text-xl font-display font-bold">
            ULTRA<span className="text-secondary">FIX</span>
          </span>
        </div>
        
        <div className="flex gap-8 text-slate-400 text-sm">
          <button 
            onClick={(e) => {
              e.preventDefault();
              onPrivacyPolicyClick();
            }}
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </button>
          <button 
            onClick={(e) => {
              e.preventDefault();
              onLegalNoticeClick();
            }}
            className="hover:text-white transition-colors"
          >
            Legal Notice
          </button>
          <button 
            onClick={(e) => {
              e.preventDefault();
              onCookiePolicyClick();
            }}
            className="hover:text-white transition-colors"
          >
            Cookie Policy
          </button>
        </div>
        
        <p className="text-slate-500 text-sm">
          © 2026 ULTRA FIX. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "cookie-policy" | "privacy-policy" | "legal-notice">("home");

  const navigateTo = (page: "home" | "cookie-policy" | "privacy-policy" | "legal-notice") => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      <Navbar onHomeClick={() => navigateTo("home")} />
      <main>
        {currentPage === "home" ? (
          <>
            <Hero />
            <Services />
            <SolarSection />
            <Stats />
            <Projects />
            <Contact />
          </>
        ) : currentPage === "cookie-policy" ? (
          <CookiePolicy onBack={() => navigateTo("home")} />
        ) : currentPage === "privacy-policy" ? (
          <PrivacyPolicy onBack={() => navigateTo("home")} />
        ) : (
          <LegalNotice onBack={() => navigateTo("home")} />
        )}
      </main>
      <Footer 
        onCookiePolicyClick={() => navigateTo("cookie-policy")} 
        onPrivacyPolicyClick={() => navigateTo("privacy-policy")}
        onLegalNoticeClick={() => navigateTo("legal-notice")}
      />
    </div>
  );
}
