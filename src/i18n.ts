import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        services: "Services",
        solar: "Solar",
        projects: "Projects",
        contact: "Contact",
        login: "Login",
        logout: "Logout",
        signup: "Sign Up",
        getQuote: "Get a Quote"
      },
      hero: {
        title: "Professional Electrical & Solar Solutions",
        subtitle: "Over 15 years of experience providing reliable electrical installations, maintenance, and sustainable solar energy systems for homes and businesses.",
        cta1: "Free Consultation",
        cta2: "Our Services"
      },
      services: {
        title: "Our Core Services",
        subtitle: "We offer a comprehensive range of electrical services tailored to meet the specific needs of residential and commercial clients.",
        installations: {
          title: "Electrical Installations",
          desc: "From new builds to complete rewiring, we handle all aspects of electrical installation with precision and safety."
        },
        solar: {
          title: "Solar Panel Systems",
          desc: "Harness the power of the sun. We design and install high-efficiency solar systems to reduce your energy bills."
        },
        repairs: {
          title: "Emergency Repairs",
          desc: "Electrical fault? Our 24/7 emergency team is ready to diagnose and fix any issues quickly and safely."
        }
      },
      solar: {
        title: "Switch to Clean, Renewable Energy",
        subtitle: "Investing in solar panels is not just about the environment—it's a smart financial decision. Our experts provide a full assessment to ensure you get the best return on investment.",
        features: [
          "Custom system design for maximum efficiency",
          "High-quality Tier 1 solar panels and inverters",
          "Professional installation by certified technicians",
          "Full assistance with grants and incentives",
          "Real-time monitoring via mobile app"
        ],
        cta: "Get a Free Solar Quote"
      },
      contact: {
        title: "Contact Information",
        subtitle: "Ready to start your project or need an emergency repair? Reach out to us today.",
        form: {
          title: "Send us a Message",
          name: "Full Name",
          phone: "Phone Number",
          service: "Service Required",
          message: "Message",
          submit: "Send Message"
        }
      },
      footer: {
        privacy: "Privacy Policy",
        legal: "Legal Notice",
        cookie: "Cookie Policy",
        rights: "© 2026 Volt & Sun Electrical Solutions. All rights reserved."
      },
      projects: {
        title: "A Sample of Our Work",
        items: {
          p1: { title: "D'Lorenzo Ice Cream Shop", desc: "Integral electrical and lighting installation and maintenance." },
          p2: { title: "Solar Panels (Residential)", desc: "Solar panel installation in a private home in Alhaurín de la Torre." },
          p3: { title: "Airport of Málaga", desc: "Lighting and video surveillance cameras at Málaga Airport." },
          p4: { title: "Construction Company", desc: "Integral electrical supply installation in a housing block in Málaga." },
          p5: { title: "Industrial Warehouse", desc: "Lighting upgrade in two industrial warehouses in Marbella." },
          p6: { title: "Private Residence", desc: "Low voltage electrical network and supply point assembly in a rural house." }
        }
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        services: "Servicios",
        solar: "Solar",
        projects: "Proyectos",
        contact: "Contacto",
        login: "Iniciar Sesión",
        logout: "Cerrar Sesión",
        signup: "Registrarse",
        getQuote: "Presupuesto"
      },
      hero: {
        title: "Soluciones Eléctricas y Solares Profesionales",
        subtitle: "Más de 15 años de experiencia brindando instalaciones eléctricas confiables, mantenimiento y sistemas de energía solar sostenibles para hogares y empresas.",
        cta1: "Consulta Gratuita",
        cta2: "Nuestros Servicios"
      },
      services: {
        title: "Nuestros Servicios Principales",
        subtitle: "Ofrecemos una amplia gama de servicios eléctricos adaptados a las necesidades específicas de clientes residenciales y comerciales.",
        installations: {
          title: "Instalaciones Eléctricas",
          desc: "Desde nuevas construcciones hasta cableado completo, manejamos todos los aspectos de la instalación eléctrica con precisión y seguridad."
        },
        solar: {
          title: "Sistemas de Paneles Solares",
          desc: "Aprovecha el poder del sol. Diseñamos e instalamos sistemas solares de alta eficiencia para reducir tus facturas de energía."
        },
        repairs: {
          title: "Reparaciones de Emergencia",
          desc: "¿Fallo eléctrico? Nuestro equipo de emergencia 24/7 está listo para diagnosticar y solucionar cualquier problema de forma rápida y segura."
        }
      },
      solar: {
        title: "Cambia a Energía Limpia y Renovable",
        subtitle: "Invertir en paneles solares no se trata solo del medio ambiente, es una decisión financiera inteligente. Nuestros expertos brindan una evaluación completa.",
        features: [
          "Diseño de sistema personalizado para máxima eficiencia",
          "Paneles solares e inversores de Nivel 1 de alta calidad",
          "Instalación profesional por técnicos certificados",
          "Asistencia completa con subvenciones e incentivos",
          "Monitoreo en tiempo real a través de aplicación móvil"
        ],
        cta: "Obtener Presupuesto Solar Gratis"
      },
      contact: {
        title: "Información de Contacto",
        subtitle: "¿Listo para comenzar tu proyecto o necesitas una reparación de emergencia? Contáctanos hoy.",
        form: {
          title: "Envíanos un Mensaje",
          name: "Nombre Completo",
          phone: "Número de Teléfono",
          service: "Servicio Requerido",
          message: "Mensaje",
          submit: "Enviar Mensaje"
        }
      },
      footer: {
        privacy: "Política de Privacidad",
        legal: "Aviso Legal",
        cookie: "Política de Cookies",
        rights: "© 2026 Volt & Sun Soluciones Eléctricas. Todos los derechos reservados."
      },
      projects: {
        title: "Una muestra de nuestros trabajos",
        items: {
          p1: { title: "Heladería D'Lorenzo", desc: "Instalación y mantenimiento integral eléctrico y luminaria de Heladería." },
          p2: { title: "Placas solares (Particular)", desc: "Instalación de placas solares en casa particular de Alhaurín de la Torre." },
          p3: { title: "Aeropuerto de Málaga", desc: "Iluminación y cámaras videovigilancia en el Aeropuerto de Málaga." },
          p4: { title: "Constructora", desc: "Instalación del suministro eléctrico integral en bloque de viviendas en Málaga." },
          p5: { title: "Nave industrial", desc: "Cambio de iluminación en dos naves industriales en Marbella." },
          p6: { title: "Particular", desc: "Montaje de red eléctrica de baja tensión y punto de suministro en casa rural." }
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
