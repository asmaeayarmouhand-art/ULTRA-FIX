import React from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

interface LegalNoticeProps {
  onBack: () => void;
}

const LegalNotice: React.FC<LegalNoticeProps> = ({ onBack }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 pb-24 bg-white min-h-screen"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-primary hover:text-blue-800 font-bold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al inicio
        </button>

        <h1 className="text-4xl font-display font-bold mb-8">Aviso Legal</h1>
        
        <div className="prose prose-slate max-w-none space-y-8 text-slate-700">
          <p>
            En cumplimiento con el deber de información establecido en la Ley 34/2002 de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se facilitan a continuación los datos identificativos del titular del sitio web.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Datos identificativos</h2>
            <ul className="list-none space-y-1">
              <li><strong>Titular:</strong> ULTRA FIX</li>
              <li><strong>Dirección:</strong> Barcelona, España</li>
              <li><strong>Teléfono:</strong> +34 650 413 267</li>
              <li><strong>Correo electrónico:</strong> info@ultrafix.site</li>
            </ul>
            <p className="mt-4">
              El presente sitio web tiene como finalidad ofrecer información sobre los servicios de mecánica a domicilio ofrecidos por ULTRA FIX.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Condiciones de uso</h2>
            <p>
              El acceso y uso del sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
            </p>
            <p>
              El usuario se compromete a utilizar el sitio web de conformidad con la ley, la buena fe, el orden público y el presente Aviso Legal.
            </p>
            <p>
              Queda prohibido el uso del sitio web con fines ilícitos o que puedan causar perjuicios a ULTRA FIX o a terceros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos, diseños, estructura, código fuente y demás elementos, están protegidos por la normativa de propiedad intelectual e industrial.
            </p>
            <p>
              Queda prohibida su reproducción, distribución o modificación sin la autorización previa y expresa del titular del sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Responsabilidad</h2>
            <p>
              ULTRA FIX no se responsabiliza de los daños o perjuicios derivados del uso de la información contenida en este sitio web ni de posibles errores u omisiones en los contenidos.
            </p>
            <p>
              Asimismo, ULTRA FIX no garantiza la disponibilidad permanente del sitio web ni se hace responsable de posibles interrupciones del servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Enlaces externos</h2>
            <p>
              Este sitio web puede contener enlaces a sitios web de terceros. ULTRA FIX no se responsabiliza del contenido, políticas o prácticas de dichos sitios externos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Protección de datos personales</h2>
            <p>
              Los datos personales que el usuario facilite a través del sitio web serán tratados de conformidad con lo establecido en el General Data Protection Regulation y la Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
            </p>
            <p>
              Para más información sobre el tratamiento de los datos personales, el usuario puede consultar la correspondiente Política de Privacidad del sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Legislación aplicable y jurisdicción</h2>
            <p>
              La relación entre ULTRA FIX and el usuario se regirá por la normativa vigente en Spain.
            </p>
            <p>
              Para la resolución de cualquier controversia que pudiera surgir en relación con el acceso o uso del sitio web, las partes se someterán a los juzgados y tribunales de Málaga, salvo que la legislación aplicable disponga otra cosa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Resolución de conflictos en línea</h2>
            <p>
              De acuerdo con la normativa europea de protección al consumidor, los usuarios tienen la posibilidad de acudir a la plataforma de resolución de litigios en línea facilitada por la European Commission.
            </p>
            <p>
              La plataforma está disponible en el siguiente enlace: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default LegalNotice;
