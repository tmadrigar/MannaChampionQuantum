import Image from "next/image"

export function FooterSupport() {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">Apoio</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center">
        <Image
          src="/logos/1 - UEM.png"
          alt="UEM"
          width={160}
          height={60}
          className="object-contain opacity-80 hover:opacity-100 transition-transform duration-300 hover:scale-105"
        />
        <Image
          src="/logos/2 - Fundação Araucária.png"
          alt="Fundação Araucária"
          width={160}
          height={60}
          className="object-contain opacity-80 hover:opacity-100 transition-transform duration-300 hover:scale-105"
        />
        <Image
          src="/logos/3 - Paraná Governo do Estado.png"
          alt="Governo do Estado do Paraná"
          width={200}
          height={70}
          className="object-contain opacity-80 hover:opacity-100 transition-transform duration-300 hover:scale-105"
        />
        <Image
          src="/logos/4 - CNPQ.png"
          alt="CNPq"
          width={150}
          height={60}
          className="object-contain opacity-80 hover:opacity-100 transition-transform duration-300 hover:scale-105"
        />
        <Image
          src="/logos/5 - Softex Núcleo Campinas.png"
          alt="Softex Núcleo Campinas"
          width={170}
          height={60}
          className="object-contain opacity-80 hover:opacity-100 transition-transform duration-300 hover:scale-105"
        />
        <Image
          src="/logos/6 - Softex.png"
          alt="Softex"
          width={130}
          height={50}
          className="object-contain opacity-80 hover:opacity-100 transition-transform duration-300 hover:scale-105"
        />
        <Image
          src="/logos/7 - MCTI.png"
          alt="MCTI Futuro"
          width={180}
          height={60}
          className="object-contain opacity-80 hover:opacity-100 transition-transform duration-300 hover:scale-105"
        />
        <Image
          src="/logos/8 - Governo Federal.png"
          alt="Governo Federal do Brasil"
          width={220}
          height={70}
          className="object-contain opacity-80 hover:opacity-100 transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  )
}
