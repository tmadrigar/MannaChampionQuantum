
'use client'

import { motion } from 'framer-motion'
import { Atom } from 'lucide-react'

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="mb-4"
      >
        <Atom className="w-8 h-8 text-blue-600" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="text-gray-500"
      >
        Carregando equipes...
      </motion.div>
    </div>
  )
}
