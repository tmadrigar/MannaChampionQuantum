'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Search, Filter, X } from 'lucide-react'
import type { FilterOptions } from '@/lib/types'

interface TeamFiltersProps {
  onFilterChange: (filters: FilterOptions) => void
  filters: FilterOptions
}

// Interface original que corresponde à sua API
interface FilterOption {
  value: string
  count: number
}

export function TeamFilters({ onFilterChange, filters }: TeamFiltersProps) {
  const [categories, setCategories] = useState<FilterOption[]>([])
  const [states, setStates] = useState<FilterOption[]>([])
  const [cities, setCities] = useState<FilterOption[]>([])
  const [searchInput, setSearchInput] = useState(filters.search)

  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const response = await fetch('/api/teams/filters')
        if (response.ok) {
          const data = await response.json()
          // REVERTIDO PARA A LÓGICA ORIGINAL QUE FUNCIONAVA:
          // A API já entrega o formato { value, count }, não precisamos mapear de novo.
          setCategories(data.categories || [])
          setStates(data.states || [])
          setCities(data.cities || [])
        }
      } catch (error) {
        console.error('Error fetching filter options:', error)
      }
    }

    fetchFilterOptions()
  }, [])

  const handleSearchChange = (value: string) => {
    setSearchInput(value)
    onFilterChange({ ...filters, search: value })
  }

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    onFilterChange({ ...filters, [key]: value })
  }

  const clearFilters = () => {
    const clearedFilters = {
      search: '',
      category: 'all',
      state: 'all',
      city: 'all'
    }
    setSearchInput('')
    onFilterChange(clearedFilters)
  }

  const hasActiveFilters = 
    filters.search || 
    filters.category !== 'all' || 
    filters.state !== 'all' || 
    filters.city !== 'all'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-2xl shadow-2xl shadow-cyan-500/10 p-6 border border-cyan-500/30">
        <div className="flex items-center mb-6">
          <Filter className="w-5 h-5 text-cyan-400 mr-2" />
          <h3 className="text-lg font-semibold text-white">Filtros de Busca</h3>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="ml-auto text-pink-400 hover:text-pink-300 hover:bg-pink-500/20"
            >
              <X className="w-4 h-4 mr-1" />
              Limpar
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Buscar equipes..."
              value={searchInput}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 h-11"
            />
          </div>

          {/* Category Filter */}
          <Select
            value={filters.category || 'all'}
            onValueChange={(value) => handleFilterChange('category', value)}
          >
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as Categorias</SelectItem>
              {categories?.map((category) => (
                <SelectItem key={category?.value} value={category?.value || ''}>
                  {/* MUDANÇA AQUI: Removido o ({category?.count}) */}
                  {category?.value}
                </SelectItem>
              )) || []}
            </SelectContent>
          </Select>

          {/* State Filter */}
          <Select
            value={filters.state || 'all'}
            onValueChange={(value) => handleFilterChange('state', value)}
          >
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os Estados</SelectItem>
              {states?.map((state) => (
                <SelectItem key={state?.value} value={state?.value || ''}>
                  {state?.value} ({state?.count})
                </SelectItem>
              )) || []}
            </SelectContent>
          </Select>

          {/* City Filter */}
          <Select
            value={filters.city || 'all'}
            onValueChange={(value) => handleFilterChange('city', value)}
          >
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Cidade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as Cidades</SelectItem>
              {cities?.map((city) => (
                <SelectItem key={city?.value} value={city?.value || ''}>
                  {city?.value} ({city?.count})
                </SelectItem>
              )) || []}
            </SelectContent>
          </Select>
        </div>
      </div>
    </motion.div>
  )
}