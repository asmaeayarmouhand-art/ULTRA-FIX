import React from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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

        <h1 className="text-4xl font-display font-bold mb-8">Privacidad</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
          <p>
            De conformidad con lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 (GDPR) y la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), se informa a los usuarios del sitio web de la siguiente política de privacidad relativa al tratamiento de datos personales.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Responsable del tratamiento</h2>
            <ul className="list-none space-y-1">
              <li><strong>Razón social:</strong> ULTRA FIX</li>
              <li><strong>Dirección:</strong> Barcelona, España</li>
              <li><strong>Teléfono:</strong> +34 650 413 267</li>
              <li><strong>Correo electrónico:</strong> info@ultrafix.site</li>
            </ul>
            <p className="mt-4">
              ULTRA FIX es responsable del tratamiento de los datos personales recogidos a través de este sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Finalidad del tratamiento de los datos</h2>
            <p>Los datos personales que el usuario facilite a través de los formularios de contacto del sitio web serán tratados con las siguientes finalidades:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Gestionar solicitudes de información o presupuestos.</li>
              <li>Atender consultas o peticiones realizadas por los usuarios.</li>
              <li>Gestionar la prestación de servicios mecánicos a domicilio.</li>
              <li>Mantener la comunicación con los clientes y potenciales clientes.</li>
              <li>Elaborar, en su caso, un perfil comercial basado en la información facilitada para ofrecer servicios relacionados.</li>
            </ul>
            <p className="mt-4 italic">No se tomarán decisiones automatizadas basadas en perfiles.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Legitimación para el tratamiento de datos</h2>
            <p>La base legal para el tratamiento de los datos personales es:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>El consentimiento del interesado, otorgado al aceptar el formulario de contacto o al comunicarse con ULTRA FIX.</li>
              <li>El interés legítimo del responsable para atender solicitudes y prestar los servicios solicitados.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Conservación de los datos</h2>
            <p>
              Los datos personales se conservarán mientras exista una relación comercial o mientras el usuario no solicite su supresión. Cuando los datos ya no sean necesarios para los fines para los que fueron recogidos, serán eliminados aplicando las medidas de seguridad adecuadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Destinatarios de los datos</h2>
            <p>Los datos personales no se cederán a terceros, salvo en los siguientes casos:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Cuando exista una obligación legal.</li>
              <li>Cuando sea necesario para la prestación del servicio solicitado.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Derechos de los usuarios</h2>
            <p>Los usuarios tienen derecho a:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Solicitar el acceso a sus datos personales.</li>
              <li>Solicitar la rectificación de datos inexactos.</li>
              <li>Solicitar la supresión de sus datos (derecho al olvido).</li>
              <li>Solicitar la limitación del tratamiento.</li>
              <li>Oponerse al tratamiento de sus datos.</li>
              <li>Solicitar la portabilidad de los datos.</li>
              <li>Retirar el consentimiento en cualquier momento.</li>
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, el usuario puede contactar con el responsable a través del correo electrónico: <a href="mailto:info@ultrafix.site" className="text-primary hover:underline">info@ultrafix.site</a>
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
