'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image' // Import adicionado
import { motion } from 'framer-motion'
import { TeamFilters } from '@/components/team-filters'
import { TeamCard } from '@/components/team-card'
import { Button } from '@/components/ui/button'
import { LoadingSpinner } from '@/components/loading-spinner'
import { AlertCircle, Trophy, Target, BookOpen, Video as VideoIcon, CheckCircle2, Banknote, Clapperboard } from 'lucide-react'
import type { Team, FilterOptions } from '@/lib/types'

export function VideoGallerySection() {
  const [allTeams, setAllTeams] = useState<Team[]>([])
  const [filteredTeams, setFilteredTeams] = useState<Team[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    category: 'all',
    state: 'all',
    city: 'all'
  })

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 24

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('/api/teams?limit=9999')
        if (!response.ok) throw new Error('Erro ao carregar equipes')
        const data = await response.json()
        setAllTeams(data.teams || [])
      } catch (err) {
        console.error(err)
        setError('Erro ao carregar equipes. Tente novamente.')
      } finally {
        setLoading(false)
      }
    }
    fetchTeams()
  }, [])

  useEffect(() => {
    if (!allTeams.length) return
    const term = filters.search.toLowerCase()

    const filtered = allTeams.filter((team) => {
      const matchSearch =
        (team?.name?.toLowerCase?.() || '').includes(term) ||
        (team?.city?.toLowerCase?.() || '').includes(term) ||
        (team?.state?.toLowerCase?.() || '').includes(term) ||
        (team?.mentorProfessor?.toLowerCase?.() || '').includes(term)

      const matchCategory =
        filters.category === 'all' ||
        team?.category?.toLowerCase?.() === filters.category.toLowerCase()

      const matchState =
        filters.state === 'all' ||
        team?.state?.toLowerCase?.() === filters.state.toLowerCase()

      const matchCity =
        filters.city === 'all' ||
        team?.city?.toLowerCase?.() === filters.city.toLowerCase()

      return matchSearch && matchCategory && matchState && matchCity
    })

    setFilteredTeams(filtered)
    setCurrentPage(1)
  }, [filters, allTeams])

  const totalPages = Math.ceil(filteredTeams.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedTeams = filteredTeams.slice(startIndex, startIndex + itemsPerPage)

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters)
  }

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
    const element = document.getElementById('gallery')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="gallery" className="py-24 bg-black relative scroll-mt-24">
      {/* Fundo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* --- BLOCO 1: A COMPETIÇÃO --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 border-b border-white/10 pb-16"
        >
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold tracking-wide mb-6">
              SUCESSO CONFIRMADO
            </span>
            
            {/* LOGO MANNA CHAMPION QUANTUM */}
            <div className="flex justify-center mb-8">
              <div className="relative w-[400px] h-[150px] md:w-[500px] md:h-[180px]">
                <Image 
                  src="/logos/logo-manna-champion.png" 
                  alt="Manna Champion Quantum" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              A competição que desvendou o Mundo Quântico nas escolas do Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <div className="space-y-8">
              <div className="space-y-6 text-gray-300 text-lg">
                <p>
                  O Manna Champion Quantum 2025 <strong>teve</strong> como finalidade estimular a aproximação da comunidade escolar com os conceitos e aplicações da computação quântica, valorizando a criatividade e o protagonismo estudantil.
                </p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start">
                    <Target className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Incentivou</strong> a exploração criativa e acessível dos conceitos quânticos.</span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="w-6 h-6 text-pink-400 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Promoveu</strong> a popularização da ciência em ambientes educacionais.</span>
                  </li>
                  <li className="flex items-start">
                    <Trophy className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Estimulou</strong> a aplicação prática em sala de aula.</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                   <div className="flex items-center mb-2 text-cyan-300">
                     <Clapperboard className="w-5 h-5 mr-2" />
                     <span className="font-bold">2 Modalidades</span>
                   </div>
                   <p className="text-sm text-gray-400">
                     As equipes produziram vídeos pitchs em dois formatos distintos, demonstrando poder de síntese e criatividade.
                   </p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                   <div className="flex items-center mb-2 text-green-400">
                     <Banknote className="w-5 h-5 mr-2" />
                     <span className="font-bold">Premiação em Dinheiro</span>
                   </div>
                   <p className="text-sm text-gray-400">
                     Como reconhecimento à excelência, o festival distribuiu premiações em dinheiro para os projetos de destaque.
                   </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-3xl p-8 border border-white/10 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <CheckCircle2 className="w-6 h-6 text-green-400 mr-3" />
                Rigor na Avaliação
              </h3>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-400">Equipes Avaliadas</span>
                    <span className="text-2xl font-bold text-white">113</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-400">Total de Avaliações</span>
                    <span className="text-2xl font-bold text-white">1.356</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-pink-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Realizadas por 12 avaliadores especialistas</p>
                </div>

                <div className="pt-6 border-t border-white/10">
                   <p className="text-lg text-white">
                     <span className="text-4xl font-bold text-orange-400 mr-2">+225</span>
                     Horas de dedicação
                   </p>
                   <p className="text-sm text-gray-400 mt-2">
                     A banca dedicou mais de 225 horas assistindo e reavaliando os vídeos, garantindo um julgamento justo e criterioso.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- BLOCO 2: A GALERIA --- */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
            <VideoIcon className="w-8 h-8 text-cyan-400 mr-3" />
            Galeria de Projetos
          </h3>
          <p className="text-gray-400">
            Explore os vídeos pitchs criativos produzidos pelas equipes finalistas.
          </p>
        </div>

        <TeamFilters onFilterChange={handleFilterChange} filters={filters} />

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 mb-8 flex items-center justify-center text-red-400 backdrop-blur-sm">
            <AlertCircle className="w-5 h-5 mr-2" />
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-12">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            <div className="mb-8 text-center">
              <p className="text-gray-300">
                Mostrando{' '}
                <span className="font-semibold text-cyan-400">{paginatedTeams.length}</span> de{' '}
                <span className="font-semibold text-pink-400">{filteredTeams.length}</span> equipes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {paginatedTeams.map((team, index) => (
                <motion.div
                  key={team.id || index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <TeamCard team={team} />
                </motion.div>
              ))}
            </div>

            {!paginatedTeams.length && !loading && (
              <p className="text-center text-gray-400 mt-8">
                Nenhuma equipe encontrada com os filtros aplicados.
              </p>
            )}

            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                <Button
                  variant="outline"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage <= 1}
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 disabled:opacity-50"
                >
                  Anterior
                </Button>

                {[...Array(totalPages)].map((_, i) => {
                  const pageNum = i + 1
                  if (
                    totalPages > 7 &&
                    Math.abs(currentPage - pageNum) > 2 &&
                    pageNum !== 1 &&
                    pageNum !== totalPages
                  )
                    return null

                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? 'default' : 'outline'}
                      onClick={() => handlePageChange(pageNum)}
                      className={
                        currentPage === pageNum
                          ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white border-0'
                          : 'border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20'
                      }
                    >
                      {pageNum}
                    </Button>
                  )
                })}

                <Button
                  variant="outline"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 disabled:opacity-50"
                >
                  Próxima
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}