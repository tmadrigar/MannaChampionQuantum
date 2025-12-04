'use client'

import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import type { Team } from '@/lib/types'

// Configura o ícone padrão do Leaflet (senão pode não aparecer no bundle do Next)
const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

L.Marker.prototype.options.icon = defaultIcon

// Tabela simples de coordenadas. Você pode ir expandindo conforme sua base.
// chave: `${cidade}-${estado}` tudo minúsculo, sem acento de preferência
const cityCoords: Record<string, { lat: number; lng: number }> = {
  'japeri-rj': { lat: -22.6435, lng: -43.6536 },
  'rio de janeiro-rj': { lat: -22.9068, lng: -43.1729 },
  'são paulo-sp': { lat: -23.5505, lng: -46.6333 },
  'guarapuava-pr': { lat: -25.3902, lng: -51.4623 },
  // adicione aqui as principais cidades das equipes
}

// Função para normalizar chave cidade-estado
function makeCityKey(city?: string | null, state?: string | null) {
  const c = (city || '').trim().toLowerCase()
  const s = (state || '').trim().toLowerCase()
  if (!c || !s) return ''
  return `${c}-${s}`
}

type BrazilMapProps = {
  teams: Team[]
}

export function BrazilMap({ teams }: BrazilMapProps) {
  // Filtra times que têm coordenadas: ou direto na entidade, ou via cityCoords
  const teamsWithCoords = teams
    .map((team) => {
      // se Team já tiver lat/lng, use direto
      const lat = (team as any).lat as number | undefined
      const lng = (team as any).lng as number | undefined

      if (typeof lat === 'number' && typeof lng === 'number') {
        return { team, lat, lng }
      }

      // se não tiver, tenta tabela por cidade/estado
      const key = makeCityKey(team.city, team.state)
      const coords = cityCoords[key]
      if (!coords) return null

      return { team, lat: coords.lat, lng: coords.lng }
    })
    .filter(Boolean) as { team: Team; lat: number; lng: number }[]

  return (
    <div className="w-full h-[500px] rounded-3xl overflow-hidden border border-white/10">
      <MapContainer
        center={[-14.235, -51.9253]} // centro aproximado do Brasil
        zoom={4}
        minZoom={3}
        maxZoom={8}
        className="w-full h-full"
        scrollWheelZoom={true}
        style={{ backgroundColor: '#020817' }} // matching vibe dark
      >
        <TileLayer
          // OpenStreetMap padrão. Se quiser outro estilo, troque a URL.
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        />

        {teamsWithCoords.map(({ team, lat, lng }) => (
          <Marker key={team.id} position={[lat, lng]}>
            <Tooltip direction="top" offset={[0, -10]} opacity={1}>
              <div style={{ maxWidth: 180 }}>
                <div style={{ fontSize: 12, fontWeight: 600 }}>
                  {team.mentorProfessor || 'Professor(a)'}
                </div>
                <div style={{ fontSize: 10, opacity: 0.8 }}>
                  {((team as any).schoolName as string) ||
                    `${team.city || ''} - ${team.state || ''}`}
 </div>
                {team.name && (
                  <div style={{ marginTop: 4, fontSize: 10 }}>
                    Equipe: <span style={{ fontWeight: 500 }}>{team.name}</span>
                  </div>
                )}
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
