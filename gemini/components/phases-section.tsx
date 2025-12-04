'use client'

import { motion } from 'framer-motion'
import { Users, Map, Video, Award, School, Clock, FileText } from 'lucide-react'

export function PhasesSection() {
  // Estilo de gradiente compartilhado para os títulos
  const gradientTitleStyle = "text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400";

  return (
    <section id="phases" className="py-20 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Jornada do <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">Manna Quantum Festival</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Um movimento nacional dividido em três fases estratégicas de impacto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* --- FASE 1: Inscrição --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/40 border border-cyan-500/30 rounded-3xl p-6 relative overflow-hidden hover:border-cyan-500/50 transition-colors"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30 text-cyan-400 font-bold text-xl mr-4">1</div>
              <h3 className={gradientTitleStyle}>Manna Quantum no Museu</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <Users className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-white font-bold text-lg">344 Professores</span>
                  <span className="text-gray-400 text-sm">Participantes</span>
                </div>
              </li>

              <li className="flex items-start">
                <Map className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-white font-bold text-lg">108 Cidades / 22 Estados</span>
                  <span className="text-gray-400 text-sm">Abrangência Nacional</span>
                </div>
              </li>

              <li className="flex items-start">
                <Clock className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-white font-bold text-lg">40 horas no Museu</span>
                  <span className="text-gray-400 text-sm">Oscar Niemeyer</span>
                </div>
              </li>
              
              <li className="pt-2 border-t border-cyan-500/20 mt-2 flex items-center"> 
                 <FileText className="w-4 h-4 text-cyan-400 mr-2" />
                 <span className="text-cyan-300 font-semibold text-sm">Processo seletivo nacional</span>
              </li>
            </ul>
          </motion.div>

          {/* --- FASE 2: Formação --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900/40 border border-pink-500/30 rounded-3xl p-6 relative overflow-hidden hover:border-pink-500/50 transition-colors"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center border border-pink-500/30 text-pink-400 font-bold text-xl mr-4">2</div>
              <h3 className={gradientTitleStyle}>Manna Quantum Bootcamps</h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start">
                <Users className="w-5 h-5 text-pink-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-white font-bold text-lg">3.280 Estudantes</span>
                  <span className="text-gray-400 text-sm">Impacto Direto</span>
                </div>
              </li>
              
              <li className="flex items-start">
                <School className="w-5 h-5 text-pink-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-white font-bold text-lg">91 Instituições</span>
                  <span className="text-gray-400 text-sm">Envolvidas (60 Cidades / 18 UFs)</span>
                </div>
              </li>

              <li className="flex items-start">
                <Award className="w-5 h-5 text-pink-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-white font-bold text-lg">80 Professores</span>
                  <span className="text-gray-400 text-sm">Residentes Concluintes</span>
                </div>
              </li>

              <li className="pt-2 border-t border-pink-500/20 mt-2 flex items-center"> 
                 <Clock className="w-4 h-4 text-pink-400 mr-2" />
                 <span className="text-pink-300 font-semibold">+300 horas de formação</span>
              </li>
            </ul>
          </motion.div>

          {/* --- FASE 3: Champion --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-900/40 border border-orange-500/30 rounded-3xl p-6 relative overflow-hidden hover:border-orange-500/50 transition-colors"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/30 text-orange-400 font-bold text-xl mr-4">3</div>
              <h3 className={gradientTitleStyle}>Manna Champion Quantum</h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start">
                <Users className="w-5 h-5 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-white font-bold text-lg">+300 Estudantes</span>
                  <span className="text-gray-400 text-sm">Finalistas Nacionais</span>
                </div>
              </li>

              <li className="flex items-start">
                <Video className="w-5 h-5 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-white font-bold text-lg">113 Equipes</span>
                  <span className="text-gray-400 text-sm">No Desafio Final</span>
                </div>
              </li>
              
              <li className="flex items-start">
                <School className="w-5 h-5 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-white font-bold text-lg">44 Instituições</span>
                  <span className="text-gray-400 text-sm">Finalistas</span>
                </div>
              </li>

              <li className="pt-2 border-t border-orange-500/20 mt-2 flex items-center"> 
                 <Clock className="w-4 h-4 text-orange-400 mr-2" />
                 <span className="text-orange-300 font-semibold">+225 horas de avaliação</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}