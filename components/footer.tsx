import Image from 'next/image'
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Régua de Logos */}
        <div className="flex flex-col items-center mb-10">
          <h3 className="text-gray-500 text-sm uppercase tracking-widest mb-8 font-medium">
            Apoio e Fomento
          </h3>

          {/* Container das logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 w-full max-w-6xl mx-auto">

            {/* 1. Manna Team */}
            <a 
              href="https://manna.team" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative h-12 w-auto min-w-[100px] transition-all duration-500 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer"
            >
               <Image
                 src="/logos/logo-manna.png"
                 alt="Manna Team"
                 width={140}
                 height={70}
                 className="h-full w-auto object-contain"
               />
            </a>

            {/* 2. UEM */}
            <a 
              href="https://www.uem.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative h-14 w-auto transition-all duration-500 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer"
            >
              <Image
                src="/logos/1-uem.png"
                alt="UEM"
                width={120}
                height={60}
                className="h-full w-auto object-contain"
              />
            </a>

            {/* 3. Fundação Araucária */}
            <a 
              href="https://www.fappr.pr.gov.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative h-12 w-auto transition-all duration-500 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer"
            >
              <Image
                src="/logos/2-fundacao-araucaria.png"
                alt="Fundação Araucária"
                width={140}
                height={70}
                className="h-full w-auto object-contain"
              />
            </a>

            {/* 4. Governo do Paraná */}
            <a 
              href="https://www.parana.pr.gov.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative h-14 w-auto transition-all duration-500 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer"
            >
              <Image
                src="/logos/3-parana-governo.png"
                alt="Governo do Estado do Paraná"
                width={140}
                height={70}
                className="h-full w-auto object-contain"
              />
            </a>

            {/* 5. CNPq */}
            <a 
              href="https://www.gov.br/cnpq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative h-12 w-auto transition-all duration-500 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer"
            >
              <Image
                src="/logos/4-cnpq.png"
                alt="CNPq"
                width={140}
                height={70}
                className="h-full w-auto object-contain bg-white/10 rounded px-1" 
              />
            </a>

             {/* 6. Softex Campinas */}
             <a 
               href="https://softex.br" 
               target="_blank" 
               rel="noopener noreferrer"
               className="relative h-12 w-auto transition-all duration-500 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer"
             >
              <Image
                src="/logos/5-softex-campinas.png"
                alt="Softex Campinas"
                width={120}
                height={60}
                className="h-full w-auto object-contain"
              />
            </a>

             {/* 7. Softex */}
             <a 
               href="https://softex.br" 
               target="_blank" 
               rel="noopener noreferrer"
               className="relative h-10 w-auto transition-all duration-500 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer"
             >
              <Image
                src="/logos/6-softex.png"
                alt="Softex"
                width={120}
                height={60}
                className="h-full w-auto object-contain"
              />
            </a>

            {/* 8. MCTI */}
            <a 
              href="https://www.gov.br/mcti" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative h-12 w-auto transition-all duration-500 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer"
            >
              <Image
                src="/logos/7-mcti.png"
                alt="MCTI"
                width={140}
                height={70}
                className="h-full w-auto object-contain"
              />
            </a>

            {/* 9. Governo Federal */}
            <a 
              href="https://www.gov.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative h-12 w-auto transition-all duration-500 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer"
            >
              <Image
                src="/logos/8-governo-federal.png"
                alt="Governo Federal"
                width={140}
                height={70}
                className="h-full w-auto object-contain"
              />
            </a>

          </div>
        </div>

        {/* Redes Sociais */}
        <div className="flex justify-center space-x-8 mb-12">
          <a
            href="https://www.instagram.com/manna_team"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-colors transform hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/mannateam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@manna_team"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6" />
          </a>
          <a
            href="mailto:proj-manna@uem.br"
            className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright e Hashtags */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Manna Quantum Festival. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-gray-500 text-xs md:text-sm">
            <span className="hover:text-cyan-400 transition-colors cursor-default">#MannaQuantumFestival</span>
            <span className="hover:text-pink-400 transition-colors cursor-default">#AnoInternacionalDaQuântica</span>
            <span className="hover:text-green-400 transition-colors cursor-default">#BrasilQuântico</span>
          </div>
        </div>
      </div>
    </footer>
  )
}