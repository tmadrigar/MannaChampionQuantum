'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Play, User, MapPin, GraduationCap, Users, MonitorPlay } from 'lucide-react'
import type { Team } from '@/lib/types'

interface TeamCardProps {
  team: Team
  isHighlighted?: boolean
}

// Função auxiliar para extrair o ID do vídeo do YouTube
const getYouTubeId = (url: string) => {
  if (!url) return null
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return (match && match[2].length === 11) ? match[2] : null
}

export function TeamCard({ team, isHighlighted = false }: TeamCardProps) {
  // 1. Extrai o ID do vídeo do YouTube
  const youtubeId = getYouTubeId(team.videoUrl)

  // 2. Gera a URL da thumbnail do YouTube (se houver ID)
  const youtubeThumbUrl = youtubeId ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : ''

  // Estado para controlar se houve erro ao carregar a imagem do YouTube
  const [imgError, setImgError] = useState(false)

  const getStudents = () => {
    const students = [team?.student1, team?.student2, team?.student3, team?.student4]
      .filter(Boolean)
      .filter((s) => s && s.trim() !== '')
    return students
  }

  // Se a imagem do YouTube falhar, ativa o fallback
  const handleError = () => {
    setImgError(true)
  }

  return (
    <Dialog>
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <Card
          className={`h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
            isHighlighted
              ? 'bg-gradient-to-br from-orange-500/20 to-pink-500/20 ring-2 ring-orange-400 border border-orange-500/50'
              : 'bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-cyan-500/30 hover:shadow-cyan-500/20 hover:border-cyan-500/50'
          }`}
        >
          <DialogTrigger asChild>
            <div className="relative aspect-video bg-gray-950 overflow-hidden group cursor-pointer">

              {/* 3. Mostra a imagem do YouTube se a URL existir e não tiver dado erro */}
              {youtubeThumbUrl && !imgError ? (
                <Image
                  src={youtubeThumbUrl}
                  alt={`Thumbnail do projeto ${team?.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={handleError}
                  unoptimized // Necessário para imagens externas do YouTube
                />
              ) : (
                // Fallback bonito caso não tenha imagem ou dê erro
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-center p-4">
                  <MonitorPlay className="w-12 h-12 text-cyan-500/50 mb-2" />
                  <span className="text-xs text-cyan-400/70 font-medium uppercase tracking-wider">
                    {team?.name}
                  </span>
                </div>
              )}

              <div className="absolute inset-0 bg-black/10 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white rounded-full w-14 h-14 p-0 shadow-lg scale-90 group-hover:scale-110 transition-all duration-300"
                >
                  <Play className="w-6 h-6 ml-1" />
                </Button>
              </div>

              <div className="absolute top-3 left-3">
                <Badge
                  variant="secondary"
                  className="bg-black/70 backdrop-blur-sm text-cyan-400 text-xs border border-cyan-500/50"
                >
                  {team?.category}
                </Badge>
              </div>
            </div>
          </DialogTrigger>

          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 min-h-[3.5rem]">
              {team?.name}
            </h3>

            <div className="flex items-center text-gray-300 mb-3">
              <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
              <span className="text-sm">
                {team?.city}, {team?.state}
              </span>
            </div>

            <div className="flex items-center text-gray-300 mb-3">
              <GraduationCap className="w-4 h-4 mr-2 text-green-400" />
              <span className="text-sm line-clamp-1">{team?.mentorProfessor}</span>
            </div>

            <div className="flex items-center text-gray-300 mb-4">
              <Users className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-sm">
                {team?.studentCount} estudante{(team?.studentCount || 0) !== 1 ? 's' : ''}
              </span>
            </div>

            {getStudents().length > 0 && (
              <div className="mb-4">
                <p className="text-xs text-gray-400 mb-2">Integrantes:</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {getStudents().map((student, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-300">
                      <User className="w-3 h-3 mr-2 text-gray-500 flex-shrink-0" />
                      <span className="line-clamp-1">{student}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <DialogTrigger asChild>
              <Button className="w-full bg-gradient-to-r from-cyan-500 via-pink-500 to-orange-500 hover:from-cyan-600 hover:via-pink-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all">
                <MonitorPlay className="w-4 h-4 mr-2" />
                Assistir Vídeo
              </Button>
            </DialogTrigger>
          </CardContent>
        </Card>
      </motion.div>

      <DialogContent className="sm:max-w-[900px] bg-black border-cyan-500/30 p-0 overflow-hidden">
        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
          {/* 4. Player do YouTube */}
          {youtubeId ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
              title={team.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            // Fallback para caso não tenha ID do YouTube
            <div className="flex items-center justify-center h-full text-gray-400">
              Vídeo não disponível
            </div>
          )}
        </div>
        <div className="p-4 bg-gray-900">
          <h2 className="text-xl font-bold text-white">{team?.name}</h2>
          <p className="text-gray-400 text-sm mt-1">{team?.city} - {team?.state}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}