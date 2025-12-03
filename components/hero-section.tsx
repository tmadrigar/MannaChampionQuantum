'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center text-white px-4 overflow-hidden">
      
      {/* CAMADA 0: Fundo de estrelas ESTÁTICO */}
      <div className="absolute inset-0 bg-[url('/stars-bg.png')] bg-cover bg-center opacity-30 pointer-events-none z-0"></div>

      {/* CAMADA 10: Overlay escuro com blur */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"></div>

      {/* CAMADA 20: Elementos Decorativos (REPOSICIONADOS) */}
      <motion.img src="/rocket.png" alt="Foguete" className="absolute bottom-20 left-[5%] w-24 md:w-32 opacity-80 z-20" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, x: [0, 5, 0] }} transition={{ duration: 10, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} />
      <motion.img src="/planet1.png" alt="Planeta" className="absolute top-10 right-[5%] w-32 md:w-48 opacity-70 z-20" initial={{ scale: 0 }} animate={{ scale: 1, rotate: 360 }} transition={{ duration: 60, delay: 0.5, repeat: Infinity, ease: "linear" }} />
      <motion.img src="/planet2.png" alt="Planeta" className="absolute bottom-32 right-[10%] w-16 md:w-24 opacity-60 z-20" animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} />
      <motion.img src="/ufo-green.png" alt="UFO" className="absolute top-24 left-[10%] w-12 md:w-16 opacity-50 z-20" animate={{ x: [0, 20, 0], y: [0, -10, 0] }} transition={{ duration: 12, repeat: Infinity, delay: 1, ease: "easeInOut" }} />
      <motion.img src="/astronaut1.png" alt="Astronauta" className="absolute top-[25%] right-[8%] w-40 md:w-56 opacity-90 z-20" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5, delay: 0.7 }} />
      <motion.img src="/comet.png" alt="Cometa" className="absolute -top-10 right-1/3 w-48 md:w-64 rotate-12 opacity-80 z-20" initial={{ x: 100, y: -100, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 0.8 }} transition={{ duration: 1.5, delay: 1.2 }} />
      <motion.img src="/planet3.png" alt="Planeta" className="absolute top-[15%] left-[25%] w-24 md:w-32 opacity-70 z-20" initial={{ scale: 0 }} animate={{ scale: 1, rotate: 360 }} transition={{ duration: 70, delay: 0.9, repeat: Infinity, ease: "linear" }} />

      {/* CAMADA 30: Conteúdo Principal */}
      <div className="relative z-30 flex flex-col items-center justify-center max-w-5xl mx-auto mt-20 md:mt-0">
        {/* Logo central - NOME DO ARQUIVO ATUALIZADO */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} className="mb-8">
          <Image src="/logos/logo-manna-champion.png" alt="Logo Manna Champion Quantum" width={450} height={450} className="mx-auto object-contain drop-shadow-2xl" priority />
        </motion.div>

        {/* BLOCO DE ESTATÍSTICAS MACRO (BIG NUMBERS) */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1 }} className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12 w-full bg-black/40 p-8 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl">
          <div className="text-center flex-1 min-w-[200px]">
            <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block mb-2 drop-shadow-[0_2px_10px_rgba(34,211,238,0.3)]">3.280</span>
            <p className="text-gray-200 text-sm md:text-base uppercase tracking-widest font-bold">Estudantes Impactados</p>
          </div>
          <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          <div className="text-center flex-1 min-w-[200px]">
            <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent block mb-2 drop-shadow-[0_2px_10px_rgba(244,114,182,0.3)]">104</span>
            <p className="text-gray-200 text-sm md:text-base uppercase tracking-widest font-bold">Residentes Formados</p>
          </div>
          <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          <div className="text-center flex-1 min-w-[200px]">
            <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent block mb-2 drop-shadow-[0_2px_10px_rgba(251,146,60,0.3)]">113</span>
            <p className="text-gray-200 text-sm md:text-base uppercase tracking-widest font-bold">Equipes no Desafio</p>
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1 }} className="text-xl md:text-2xl text-white font-medium max-w-3xl mb-12 leading-relaxed drop-shadow-md bg-black/20 p-4 rounded-xl backdrop-blur-sm">
          Desvendando o Mundo Quântico na Escola: uma jornada pela ciência, tecnologia e protagonismo estudantil.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 1 }} className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg" onClick={scrollToGallery} className="bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 text-white font-bold text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300 z-30 relative">
            <ArrowDown className="w-5 h-5 mr-2" /> Explorar Projetos
          </Button>
          <Link href="#about" className="inline-flex items-center justify-center text-lg h-auto px-10 py-3 font-bold border-2 border-white/20 text-white rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm z-30 relative">
            Sobre o Festival
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
