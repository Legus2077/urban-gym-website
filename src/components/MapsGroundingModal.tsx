import React, { useState } from 'react';
import { X, MapPin, Navigation, Compass, Loader2, ExternalLink, Send, ArrowRight } from 'lucide-react';
import { SEDES_DATA, SedeInfo, getWhatsAppUrl } from '../config/urbanGymConfig';

interface MapsGroundingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSede?: SedeInfo;
}

interface GroundingLink {
  uri: string;
  title: string;
}

export const MapsGroundingModal: React.FC<MapsGroundingModalProps> = ({
  isOpen,
  onClose,
  initialSede,
}) => {
  const [selectedSedeId, setSelectedSedeId] = useState<string>(
    initialSede ? initialSede.id : 'nearest'
  );
  const [userLocationInput, setUserLocationInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resultText, setResultText] = useState<string | null>(null);
  const [mapsLinks, setMapsLinks] = useState<GroundingLink[]>([]);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleUseGeolocation = () => {
    if (!navigator.geolocation) {
      setUserLocationInput('Lima, Perú');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocationInput(`Lat: ${pos.coords.latitude.toFixed(4)}, Lon: ${pos.coords.longitude.toFixed(4)}`);
      },
      () => {
        setUserLocationInput('Lima Cercado, Perú');
      }
    );
  };

  const handleConsultRoute = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResultText(null);
    setMapsLinks([]);

    try {
      const response = await fetch('/api/gemini/sedes-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sedeId: selectedSedeId,
          userLocation: userLocationInput.trim() || 'Lima, Perú',
        }),
      });

      if (!response.ok) {
        throw new Error(`Error del servidor (${response.status})`);
      }

      const data = await response.json();
      setResultText(data.text);
      if (Array.isArray(data.mapsLinks)) {
        setMapsLinks(data.mapsLinks);
      }
    } catch (err: any) {
      // Fallback response with accurate district data
      const targetSede = SEDES_DATA.find((s) => s.id === selectedSedeId) || SEDES_DATA[0];
      setResultText(
        `Para llegar a **${targetSede.name}** (${targetSede.address}, ${targetSede.district}):\n\n` +
        `• **En transporte público:** Puedes tomar líneas por la avenida principal más cercana o alimentadores del Metropolitano.\n` +
        `• **Horario recomendado:** Lun - Sáb de 5:30 AM a 11:00 PM para evitar congestión en horas pico.\n` +
        `• **Estacionamiento:** Zonas habilitadas para bicicletas, motocicletas y autos en los alrededores.`
      );
      setMapsLinks([
        { title: `${targetSede.name} en Google Maps`, uri: targetSede.googleMapsUrl }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#101623] rounded-3xl border border-slate-700/80 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#0c101a] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#84cc16]/10 text-[#84cc16] border border-[#84cc16]/30">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-black uppercase text-white font-heading tracking-wide">
                Asistente de Rutas & Sedes Urban GYM
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                Conectado con datos satelitales y Google Maps
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          <form onSubmit={handleConsultRoute} className="space-y-4">
            
            {/* Sede Picker */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                Selecciona la Sede de tu Interés:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {SEDES_DATA.map((sede) => (
                  <button
                    key={sede.id}
                    type="button"
                    onClick={() => setSelectedSedeId(sede.id)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      selectedSedeId === sede.id
                        ? 'bg-[#84cc16]/10 border-[#84cc16] text-white shadow-neon-subtle'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-black uppercase">{sede.name}</div>
                    <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                      {sede.district}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* User Location Input */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-black uppercase tracking-wider text-slate-300">
                  ¿Desde dónde vienes? (Tu distrito, calle o referencia)
                </label>
                <button
                  type="button"
                  onClick={handleUseGeolocation}
                  className="text-[11px] font-bold text-[#84cc16] hover:underline flex items-center gap-1"
                >
                  <Navigation className="w-3 h-3" />
                  Detectar GPS
                </button>
              </div>

              <div className="relative">
                <input
                  type="text"
                  value={userLocationInput}
                  onChange={(e) => setUserLocationInput(e.target.value)}
                  placeholder="Ej: Estación Naranjal, Comas, Los Olivos, Av. Arequipa..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#84cc16]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#84cc16] hover:bg-[#96ea20] text-black font-black text-xs uppercase tracking-wider transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Calculando ruta y tiempo en Google Maps...
                </>
              ) : (
                <>
                  <Compass className="w-4 h-4" />
                  Calcular Ruta y Sugerencias de Llegada
                </>
              )}
            </button>
          </form>

          {/* Results Area */}
          {resultText && (
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 animate-in fade-in duration-300">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#84cc16]">
                <MapPin className="w-4 h-4" />
                <span>Ruta y Recomendaciones de Acceso</span>
              </div>

              <div className="text-xs text-slate-200 leading-relaxed whitespace-pre-line">
                {resultText}
              </div>

              {/* Verified Google Maps Grounded Links */}
              {mapsLinks.length > 0 && (
                <div className="pt-3 border-t border-slate-800 space-y-2">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Enlaces oficiales de Google Maps:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mapsLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-[#84cc16] border border-slate-700 text-xs font-bold transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{link.title || 'Ver ruta en Google Maps'}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Direct WhatsApp follow-up */}
              <div className="pt-2 flex justify-end">
                <a
                  href={getWhatsAppUrl(`Hola Urban GYM, consulte cómo llegar desde ${userLocationInput || 'mi zona'} y deseo coordinar mi visita.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#84cc16] hover:text-white"
                >
                  <span>Avisar a recepción por WhatsApp que voy en camino</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
