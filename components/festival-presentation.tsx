'use client'

import { motion } from 'framer-motion'
// import { Play } from 'lucide-react' // Play não está sendo usado, pode remover ou manter se preferir

export function FestivalPresentation() {
  return (
    <section id="documentary" className="py-24 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Coluna de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold tracking-wide mb-4">
              DOCUMENTÁRIO OFICIAL
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              O maior movimento de <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                ensino de Quântica no Brasil
              </span> 🇧🇷
            </h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                O Festival surgiu como um projeto aprovado pelo CNPq para celebrar o <strong className="text-pink-400 font-bold">Ano Internacional da Ciência e Tecnologia Quântica</strong>, uma iniciativa global liderada pela UNESCO.
              </p>
              <p>
                De fevereiro a novembro, o Manna Team <strong className="text-white">capacitou</strong> professores e estudantes de todo o país em uma <strong className="text-yellow-400 font-bold">jornada de 300 horas de ciência, criatividade e inovação.</strong>
              </p>

              <div className="bg-gray-900/80 p-6 rounded-2xl border-l-4 border-green-500 italic text-gray-400 shadow-lg">
                "Que orgulho para o Brasil! <strong className="text-white">Celebramos</strong> o Ano Internacional da Quântica diretamente nas escolas e universidades."
              </div>

              <p className="text-sm text-gray-500 mt-4">
                A formatura da trilha aconteceu no dia 24 de novembro de 2025, em Curitiba-PR.
              </p>
            </div>
          </motion.div>

          {/* Coluna do Vídeo (VERTICAL / STORIES) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            {/* MOCKUP DE CELULAR */}
            <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[40px] border-[8px] border-gray-800 shadow-2xl shadow-cyan-500/20 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>

              {/* SUBSTITUIÇÃO: iframe do YouTube ao invés de video local */}
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/AzA6tqfu3Xs?rel=0"
                title="Documentário Oficial Manna Team"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <div className="absolute -inset-1 bg-gradient-to-b from-cyan-500/20 to-purple-500/20 blur-xl -z-10"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}