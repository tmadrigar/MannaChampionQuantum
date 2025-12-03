
export interface Team {
  id: string
  name: string
  videoUrl: string
  category: string
  city: string
  state: string
  mentorProfessor: string
  companion: string | null
  student1: string | null
  student2: string | null
  student3: string | null
  student4: string | null
  studentCount: number
  averageScore: number
  isHighlighted: boolean
  createdAt: Date
  updatedAt: Date
}

export interface FilterOptions {
  search: string
  category: string
  state: string
  city: string
}
