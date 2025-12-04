import { StickyHeader } from '@/components/sticky-header'
import { HeroSection } from '@/components/hero-section'
import { PhasesSection } from '@/components/phases-section' // NOVO
import { HighlightsSection } from '@/components/highlights-section'
import { ImpactMapSection } from '@/components/impact-map-section'
import { FestivalPresentation } from '@/components/festival-presentation'
import { VideoGallerySection } from '@/components/video-gallery-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <StickyHeader />

      {/* 1. Hero: Impacto Macro */}
      <HeroSection />

      {/* 2. Resumo Executivo: As 3 Fases (NOVO) */}
      <PhasesSection />

      {/* 3. Destaques: Ambientes de Residência */}
      <HighlightsSection />

      {/* 4. Mapa: Impacto Geográfico */}
      <ImpactMapSection />

      {/* 5. Vídeo: Apresentação Geral (Vertical) */}
      <FestivalPresentation />

      {/* 6. Galeria: O Desafio Final */}
      <VideoGallerySection />

      <Footer />
    </main>
  )
}