import React from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

interface CookiePolicyProps {
  onBack: () => void;
}

const CookiePolicy: React.FC<CookiePolicyProps> = ({ onBack }) => {
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

        <h1 className="text-4xl font-display font-bold mb-8">Cookies</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario cuando visita un sitio web. Su finalidad es recordar información sobre la visita del usuario para mejorar la experiencia de navegación.
            </p>
            <p>
              El sitio web de ULTRA FIX utiliza cookies propias y de terceros con el objetivo de mejorar la navegación del usuario, analizar el uso del sitio web y ofrecer contenidos adaptados a los intereses de los usuarios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">¿Qué tipos de cookies utilizamos?</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-800">Cookies técnicas</h3>
                <p>Son aquellas necesarias para el funcionamiento básico del sitio web y permiten la navegación y el uso de sus diferentes opciones o servicios.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">Cookies de análisis</h3>
                <p>Estas cookies permiten analizar el comportamiento de los usuarios en el sitio web con el fin de mejorar el funcionamiento del mismo.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">Cookies de personalización</h3>
                <p>Permiten recordar información para que el usuario acceda al servicio con determinadas características que pueden diferenciar su experiencia de la de otros usuarios.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">Cookies de terceros</h3>
                <p>Este sitio web puede utilizar servicios de terceros que recopilarán información con fines estadísticos y de uso del sitio web.</p>
                <p className="mt-2">Entre ellos pueden incluirse herramientas como:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Google Analytics para el análisis del tráfico web.</li>
                  <li>Integraciones de WhatsApp para facilitar el contacto con los usuarios.</li>
                </ul>
                <p className="mt-2">Estas herramientas pueden utilizar cookies para recopilar información anónima sobre el uso del sitio web.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">¿Cómo gestionar o desactivar las cookies?</h2>
            <p>El usuario puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo mediante la configuración de las opciones del navegador utilizado.</p>
            <p className="mt-4">A continuación se proporcionan enlaces con información sobre cómo gestionar las cookies en los navegadores más utilizados:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            </ul>
            <p className="mt-4 italic">La desactivación de cookies puede afectar al funcionamiento correcto del sitio web.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Aceptación de la política de cookies</h2>
            <p>Al acceder a este sitio web, el usuario verá un aviso o banner de cookies. Al continuar navegando o aceptar el aviso, el usuario consiente el uso de cookies conforme a esta política.</p>
            <p>El usuario puede modificar su consentimiento en cualquier momento a través de la configuración de su navegador.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Cambios en la política de cookies</h2>
            <p>ULTRA FIX se reserva el derecho a modificar la presente política de cookies para adaptarla a cambios legislativos o técnicos. Se recomienda a los usuarios revisar esta página periódicamente.</p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default CookiePolicy;
