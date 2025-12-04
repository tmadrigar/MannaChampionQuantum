'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Image as ImageIcon, X, ZoomIn } from 'lucide-react'
import { eventPhotos } from '@/data/event-photos'

type Tab = 'day1' | 'day2';

export function EventGallery() {
  const [activeTab, setActiveTab] = useState<Tab>('day1');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // Seleciona o array correto baseado na aba
  const currentPhotos = activeTab === 'day1' ? eventPhotos.day1 : eventPhotos.day2;

  // Fecha o modal se apertar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPhoto(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section className="py-24 bg-gray-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <ImageIcon className="text-cyan-400" /> 
            Registros do Evento
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Confira os melhores momentos dos dois dias de imersão e celebração quântica em Curitiba.
          </p>
        </div>

        {/* Botões das Abas */}
        <div className="flex justify-center mb-10 gap-4">
          <button
            onClick={() => setActiveTab('day1')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'day1' 
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25 scale-105' 
                : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white border border-white/10'
            }`}
          >
            <Calendar className="w-4 h-4" />
            Dia 28/11
          </button>
          
          <button
            onClick={() => setActiveTab('day2')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'day2' 
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25 scale-105' 
                : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white border border-white/10'
            }`}
          >
            <Calendar className="w-4 h-4" />
            Dia 29/11
          </button>
        </div>

        {/* Grid de Fotos */}
        <div className="min-h-[400px]">
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {currentPhotos.length > 0 ? (
                currentPhotos.map((src, index) => (
                  <motion.div 
                    key={index}
                    layoutId={`photo-${src}`} // Animação mágica de transição
                    onClick={() => setSelectedPhoto(src)}
                    className="relative aspect-square rounded-xl overflow-hidden group bg-gray-900 border border-white/5 cursor-pointer"
                  >
                    <Image
                      src={src}
                      alt={`Foto do evento dia ${activeTab === 'day1' ? '28' : '29'} - ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                    {/* Overlay Hover com Ícone de Zoom */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                        <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 drop-shadow-lg" />
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-20 text-gray-500">
                  Nenhuma foto carregada para este dia ainda.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* --- LIGHTBOX (MODAL DE TELA CHEIA) --- */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)} // Clicar fora fecha
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
          >
            {/* Botão de Fechar */}
            <button 
              className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-[110] bg-black/50 rounded-full p-2"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Container da Imagem Grande */}
            <motion.div
              layoutId={`photo-${selectedPhoto}`} // Conecta a animação com o grid
              className="relative w-full h-full max-w-5xl max-h-[85vh] rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Clicar na imagem não fecha
            >
              <Image
                src={selectedPhoto}
                alt="Foto ampliada"
                fill
                className="object-contain" // Garante que a imagem inteira apareça sem cortes
                quality={100}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}