'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* <-- ATUALIZAÇÃO: Título da seção --> */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Objetivos do Manna Champions Quantum
            </h2>

            {/* <-- ATUALIZAÇÃO: Texto principal com objetivo geral --> */}
            <p className="text-lg text-gray-300 mb-6">
              O Manna Champions Quantum 2025 tem como finalidade estimular a
              aproximação da comunidade escolar com os conceitos e aplicações da
              computação quântica, valorizando a criatividade, a
              diversidade e o protagonismo estudantil.
            </p>

            {/* <-- ATUALIZAÇÃO: Lista de objetivos específicos --> */}
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  Incentivar professores e alunos a explorarem os conceitos da
                  computação quântica de forma criativa, acessível e conectada à
                  realidade escolar.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-pink-400 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  Promover a popularização da ciência quântica por meio de abordagens
                  contextualizadas ao ambiente educacional.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  Estimular a aplicação prática de conceitos quânticos em sala
                  de aula.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Coluna da Imagem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full aspect-square max-w-md mx-auto"
          >
            <Image
              src="/astronaut2.png"
              alt="Mascote astronauta flutuando"
              fill
              className="object-contain"
            />
            {/* Efeitos de blur no fundo da imagem */}
            <div className="absolute inset-16 bg-cyan-500 rounded-full blur-3xl opacity-20 -z-10"></div>
            <div className="absolute inset-24 bottom-0 bg-pink-500 rounded-full blur-3xl opacity-20 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}