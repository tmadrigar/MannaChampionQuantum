'use client'

import { motion } from 'framer-motion'
import { MapPin, School, UserCheck, Users, Clock, Star, Globe } from 'lucide-react'

export function HighlightsSection() {
  return (
    <section id="highlights" className="py-24 bg-black relative border-t border-white/5">
      {/* Elementos de fundo */}
      <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-pink-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ecossistema de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">Impacto Real</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Números consolidados das fases de formação e aplicação prática nas escolas.
          </p>
        </motion.div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">

          {/* CARD 1: Estudantes - Ocupa 2 colunas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-gradient-to-br from-gray-900 to-gray-900/50 p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity"><Users className="w-16 h-16 text-white" /></div>
            <h3 className="text-gray-400 font-medium mb-2 uppercase tracking-wider">Impacto Direto</h3>
            <div className="text-5xl md:text-7xl font-bold text-white mb-2">3.280</div>
            <p className="text-cyan-400 font-semibold text-lg">Estudantes Participantes</p>
            <p className="text-gray-500 text-sm mt-2">Engajados em bootcamps e atividades práticas.</p>
          </motion.div>

          {/* CARD 2: Meninas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-gray-900/50 p-6 rounded-3xl border border-pink-500/30 hover:border-pink-500/50 transition-colors relative overflow-hidden group"
          >
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity"><Star className="w-12 h-12 text-pink-400" /></div>
            <div>
              <div className="text-4xl font-bold text-white mb-1">1.588</div>
              <div className="text-pink-400 font-semibold">Meninas Impactadas</div>
              <p className="text-gray-500 text-xs mt-1">48% do total de participantes.</p>
            </div>
          </motion.div>

          {/* CARD 3: Residentes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-gray-900/50 p-6 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-colors relative overflow-hidden group"
          >
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity"><UserCheck className="w-12 h-12 text-orange-400" /></div>
            <div>
              <div className="text-4xl font-bold text-white mb-1">104</div>
              <div className="text-orange-400 font-semibold">Professores Residentes</div>
              <p className="text-gray-500 text-xs mt-1">Educadores capacitados em todo o país.</p>
            </div>
          </motion.div>

          {/* CARD 4: Instituições */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-gray-900/50 p-6 rounded-3xl border border-white/10 hover:border-green-500/30 transition-colors relative overflow-hidden group"
          >
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity"><School className="w-12 h-12 text-green-400" /></div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">91</div>
              <div className="text-green-400 font-semibold text-sm">Instituições de Ensino</div>
              <p className="text-gray-500 text-xs mt-1">Colégios, escolas e instituições públicas.</p>
            </div>
          </motion.div>

          {/* CARD 5: CIDADES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-gray-900/50 p-6 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-colors relative overflow-hidden group"
          >
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity"><MapPin className="w-12 h-12 text-blue-400" /></div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">60</div>
              <div className="text-blue-400 font-semibold text-sm">Cidades Alcançadas</div>
              <p className="text-gray-500 text-xs mt-1">Com forte atuação no interior do Brasil.</p>
            </div>
          </motion.div>

          {/* CARD 6: ESTADOS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-gray-900/50 p-6 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-colors relative overflow-hidden group"
          >
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity"><Globe className="w-12 h-12 text-blue-400" /></div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">18</div>
              <div className="text-blue-400 font-semibold text-sm">Estados Brasileiros</div>
              <p className="text-gray-500 text-xs mt-1">Abrangendo todas as 5 regiões.</p>
            </div>
          </motion.div>

          {/* CARD 7: Formação */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6 }}
             viewport={{ once: true }}
             className="md:col-span-1 bg-gray-900/50 p-6 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-colors relative overflow-hidden group"
          >
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity"><Clock className="w-12 h-12 text-purple-400" /></div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">+300h</div>
              <div className="text-purple-400 font-semibold text-sm">Jornada de Formação</div>
              <p className="text-gray-500 text-xs mt-1">Bootcamps formativos com uso dos KDTs.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}