import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize GoogleGenAI SDK (reads GEMINI_API_KEY from environment)
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

// Sedes metadata for ground knowledge
const SEDES_REFERENCE: Record<string, { name: string; address: string; district: string; googleUrl: string }> = {
  belaunde: {
    name: 'Sede Belaúnde (Sede Norte Principal)',
    address: 'Av. Belaúnde Oeste 452',
    district: 'Comas, Lima, Perú',
    googleUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Belaunde+Oeste+452+Comas+Lima',
  },
  universitaria: {
    name: 'Sede Universitaria',
    address: 'Av. Universitaria Norte 1820',
    district: 'Lima Norte, Perú',
    googleUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Universitaria+Norte+1820+Lima',
  },
  mexico: {
    name: 'Sede Av. México (Sede Centro Urbano)',
    address: 'Av. México 890',
    district: 'La Victoria / Cercado, Lima, Perú',
    googleUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Mexico+890+Lima',
  },
};

// POST /api/gemini/sedes-advisor
// Grounded routing and sede guidance using Google Maps tool
app.post('/api/gemini/sedes-advisor', async (req: Request, res: Response) => {
  const { sedeId, userLocation } = req.body;
  const targetSede = SEDES_REFERENCE[sedeId] || SEDES_REFERENCE['belaunde'];

  if (!ai || !apiKey) {
    // Graceful offline fallback
    return res.json({
      text: `Para dirigirte hacia **${targetSede.name}** en **${targetSede.address}** (${targetSede.district}) desde ${userLocation || 'tu ubicación'}:\n\n` +
        `• **Vía de acceso recomendada:** Puedes tomar transporte público por la avenida principal más cercana o conectar mediante líneas troncales del Metropolitano.\n` +
        `• **Tiempo estimado:** 15 a 30 minutos dependiendo de la congestión y hora de salida.\n` +
        `• **Referencia:** Ubicado en zona de alto tránsito comercial con acceso seguro y señalización visible de Urban GYM.`,
      mapsLinks: [
        {
          title: `Ubicación de ${targetSede.name}`,
          uri: targetSede.googleUrl,
        },
      ],
    });
  }

  try {
    const prompt = `Actúa como asistente de movilidad de Urban GYM en Lima, Perú.
El usuario se encuentra en: "${userLocation || 'Lima'}" y desea llegar a la sede "${targetSede.name}" ubicada exactamente en: "${targetSede.address}, ${targetSede.district}".
Utiliza Google Maps para proporcionar:
1. La mejor ruta de tránsito (avenidas principales, líneas de transporte público o Metropolitano recomendadas).
2. Tiempo aproximado de traslado en auto y transporte público.
3. Recomendaciones prácticas para evitar tráfico en Lima y llegar con comodidad al gimnasio.
Sé conciso, dinámico, profesional y enfocado en deportistas.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        tools: [{ googleMaps: {} }],
      },
    });

    const text = response.text || '';
    const mapsLinks: { uri: string; title: string }[] = [];

    // Extract Google Maps grounded links
    const candidate = response.candidates?.[0];
    const groundingChunks = (candidate as any)?.groundingMetadata?.groundingChunks;
    if (Array.isArray(groundingChunks)) {
      for (const chunk of groundingChunks) {
        if (chunk.maps?.uri) {
          mapsLinks.push({
            uri: chunk.maps.uri,
            title: chunk.maps.title || targetSede.name,
          });
        }
      }
    }

    if (mapsLinks.length === 0) {
      mapsLinks.push({
        uri: targetSede.googleUrl,
        title: `Ver ${targetSede.name} en Google Maps`,
      });
    }

    return res.json({ text, mapsLinks });
  } catch (error: any) {
    console.error('Error with Gemini Google Maps Grounding:', error?.message || error);
    // Return structured fallback
    return res.json({
      text: `Ruta recomendada hacia **${targetSede.name}** en **${targetSede.address}** (${targetSede.district}):\n\n` +
        `• **Desde ${userLocation || 'tu ubicación'}:** Conéctate a las arterias viales principales hacia ${targetSede.district}.\n` +
        `• **Horarios sugeridos:** Evita horas pico entre 6:30 PM - 8:30 PM si vas en auto para optimizar tu tiempo de entrenamiento.\n` +
        `• **Servicio:** Contamos con estacionamiento vigilado y recepción lista para tu ingreso.`,
      mapsLinks: [
        {
          title: `Ruta a ${targetSede.name}`,
          uri: targetSede.googleUrl,
        },
      ],
    });
  }
});

// Setup Vite middlewares in development or serve static in production
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Urban GYM server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
