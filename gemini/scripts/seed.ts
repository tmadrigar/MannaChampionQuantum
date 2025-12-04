import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'
import * as path from 'path'
import { parse } from 'csv-parse/sync'

const prisma = new PrismaClient()

// Lista de prioridade (Top 62)
const PRIORITY_TEAMS = [
  "Big Bangers",
  "Sertão Quântico",
  "The Horizon",
  "Quantum Girls", // Será validado para ser apenas a da Regiane
  "The Qubits",
  "Óculos Quantum",
  "Mini Mentes Quânticas",
  "Manna Ms",
  "Quantumania",
  "Master Team",
  "Manna Eclipse",
  "Mentes Quânticas",
  "Capitão átomo e gangue bazinga",
  "Seungin",
  "Hunters Quânticos",
  "SuperQuântica",
  "Manna Wave Science",
  "FIOS DO INFINITO",
  "Hypper Tech Manna",
  "Manna Tucuju team2",
  "Manna Tucuju team3",
  "Os Mídia",
  "Manna Tucuju team4",
  "Schooldinger",
  "Mquantum",
  "MannaProtagonist",
  "Team Fóton",
  "QUANTUM SQUAD",
  "Led Quântico",
  "AraQuantum",
  "Costão Quantum",
  "Quântica Fantástica",
  "Equipe Quântica do Sisal",
  "Observador",
  "Viagem Quântica",
  "Manna QuantaMassa",
  "Os quânticos",
  "Quantuino",
  "EQUIPE DURA NA QUEDA",
  "Rosa de Schrödinger",
  "Manna: Manos + Manas",
  "Atomics Girls",
  "PARTÍCULAS DE SUCESSO",
  "Quantum Time",
  "Gincana Manna Estância",
  "UNIVERSO QUÂNTICO",
  "The Quantum Manna Girls",
  "SUPER EXPONENCIAIS",
  "Capitão quântico",
  "Os Sinalizadores Quânticos",
  "Onda do Silêncio",
  "A DUPLA QUÂNTICA",
  "Capitão Wagner",
  "FOFURAS QUÂNTICAS",
  "TIGRINHOS QUANTICOS",
  "TIGRES RELAMPAGOS DO UNIVERSO",
  "KATCHAU",
  "Explorando o Mundo Quântico",
  "Sol",
  "Lua",
  "Pequenos guardiões do Planeta"
]

function getCustomOrder(teamName: string, category: string, mentor: string): number | null {
  const normalizedName = teamName.toLowerCase().trim()
  const normalizedMentor = mentor.toLowerCase().trim()
  
  // --- REGRA ESPECIAL: QUANTUM GIRLS ---
  // Apenas a equipe da professora "Regiane" entra no ranking de destaques.
  if (normalizedName === 'quantum girls') {
    if (normalizedMentor.includes('regiane')) {
      const index = PRIORITY_TEAMS.findIndex(p => p.toLowerCase().trim() === normalizedName)
      return index !== -1 ? index + 1 : null
    } else {
      return null // A da Luciane fica fora dos destaques (mas com o link corrigido abaixo)
    }
  }

  // --- REGRA ESPECIAL: SOL / LUA ---
  if (normalizedName === 'sol' || normalizedName === 'lua') {
    if (category.toLowerCase().includes('especial') || category.toLowerCase().includes('eja')) {
      const index = PRIORITY_TEAMS.findIndex(p => p.toLowerCase().startsWith(normalizedName))
      return index !== -1 ? index + 1 : null
    }
    return null 
  }

  // Busca normal
  const index = PRIORITY_TEAMS.findIndex(p => p.toLowerCase().trim() === normalizedName)
  return index !== -1 ? index + 1 : null
}

async function main() {
  console.log('🌱 Seeding database...')
  
  try {
    const csvPath = path.join(process.cwd(), 'public', 'data', 'videos.csv')
    const csvContent = fs.readFileSync(csvPath, 'utf-8')
    
    const records = parse(csvContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true
    })
    
    console.log(`📊 Found ${records.length} teams in CSV`)
    
    await prisma.team.deleteMany()
    console.log('🗑️ Cleared existing teams')
    
    let processedCount = 0
    for (const record of records) {
      try {
        const studentCount = parseInt(record.qtd_alunos?.toString() || '0')
        const averageScore = parseFloat(record.nota_media?.toString() || '0')
        const teamName = record.equipe || ''
        const category = record.categoria || ''
        const mentor = record.professor_mentor || ''

        // 1. Define a ordem/ranking
        const order = getCustomOrder(teamName, category, mentor)
        const customOrder = order !== null ? order : 10000 
        const isHighlighted = averageScore >= 85 || order !== null

        // 2. CORREÇÃO DE LINKS (Regiane e Luciane)
        let videoUrl = record.video_url || ''
        const normName = teamName.toLowerCase().trim()
        const normMentor = mentor.toLowerCase().trim()

        if (normName === 'quantum girls') {
            if (normMentor.includes('regiane')) {
                console.log('🔧 Fixing URL for Quantum Girls (Regiane)')
                videoUrl = 'https://youtu.be/_gBQ8zaJJCM'
            } else if (normMentor.includes('luciane')) {
                console.log('🔧 Fixing URL for Quantum Girls (Luciane)')
                videoUrl = 'https://youtu.be/G4xbsiYKIA0'
            }
        }

        await prisma.team.create({
          data: {
            name: teamName,
            videoUrl: videoUrl,
            category: category,
            city: record.cidade || '',
            state: record.estado || '',
            mentorProfessor: mentor,
            companion: record.acompanhante || null,
            student1: record.estudante_1 || null,
            student2: record.estudante_2 || null,
            student3: record.estudante_3 || null,
            student4: record.estudante_4 || null,
            studentCount: studentCount,
            averageScore: averageScore,
            isHighlighted: isHighlighted,
            customOrder: customOrder
          }
        })
        
        processedCount++
      } catch (error) {
        console.error(`❌ Error processing team ${record.equipe}:`, error)
      }
    }
    
    console.log(`✅ Successfully seeded ${processedCount} teams`)
    
  } catch (error) {
    console.error('❌ Error during seeding:', error)
    throw error
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })