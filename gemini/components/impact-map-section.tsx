'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Info, School, User, ChevronRight } from 'lucide-react'

// --- Tipos de Dados ---
type MentorData = {
  name: string
  institution: string
}

type CityData = {
  name: string
  details?: MentorData[]
}

// --- Base de Dados Completa (GeoData) ---
const geoData: Record<string, CityData[]> = {
  "AL": [
    { name: "Arapiraca", details: [{ name: "Renata Imaculada Soares Pereira", institution: "IFAL - Campus Arapiraca" }] },
    { name: "Delmiro Gouveia", details: [{ name: "Clécio dos Santos Lima", institution: "Escola Estadual Luiz Augusto Azevedo de Menezes" }] },
    { name: "Maragogi", details: [{ name: "Cassiano Henrique de Albuquerque", institution: "IFAL - Campus Maragogi" }] },
    { name: "Maceió", details: [{ name: "Sandra Lira Cavalcante", institution: "Escola Estadual Professora Adeilza Maria Oliveira" }] }
  ],
  "AM": [
    { name: "Coari", details: [{ name: "Fabio Cano Carnielo", institution: "Escola Municipal Raimundo Bezerra" }] },
    { name: "Manaus", details: [{ name: "Mary Luci Souza Castro Florencio", institution: "Escola Estadual Almirante Ernesto de Mello Baptista" }] }
  ],
  "AP": [
    { name: "Macapá", details: [{ name: "Inara Furtado Salgado de Moura", institution: "Escola Estadual Barão do Rio Branco" }] }
  ],
  "BA": [
    { name: "Abaré", details: [] },
    { name: "Araci", details: [{ name: "Diego Cristiano de Jesus Chaves", institution: "Centro Territorial de Educação Profissional de Araci" }] },
    { name: "Ilhéus", details: [{ name: "Janille da Costa Pinto", institution: "Colégio Estadual do Iguape - Tempo Integral" }] },
    { name: "Juazeiro", details: [{ name: "Lino Marcos da Silva", institution: "Escola Municipal Profa. Edualdina Damásio" }] },
    { name: "Remanso", details: [{ name: "Eduardo Cesar Santos", institution: "Colégio Estadual Reitor Edgard Santos" }] }
  ],
  "CE": [
    { name: "Crato", details: [{ name: "Nustenil Segundo de Moraes Lima Marinus", institution: "IFCE - Campus Crato" }] }
  ],
  "DF": [
    { name: "Brasília", details: [{ name: "Adriano Lázaro Lourenço dos Reis", institution: "Centro Educacional Casa Grande" }] }
  ],
  "GO": [
    { name: "Aparecida de Goiânia", details: [{ name: "Rubio Dorneles De Bessa", institution: "Colégio Estadual Dom Pedro I" }] },
    { name: "Luziânia", details: [
      { name: "Alinne de Araújo Moreira da Silva", institution: "Escola Espírita Gilson de Mendonça Henriques" },
      { name: "Samara de Sousa Fernandes", institution: "CMEB Professor Belim" }
    ]}
  ],
  "MA": [
    { name: "São Luís", details: [{ name: "Edson Verde de Sousa", institution: "Centro Educa Mais Coelho Neto" }] }
  ],
  "MS": [
    { name: "Aquidauana", details: [{ name: "Michele Gavino Dantas Coutinho", institution: "Escola Municipal Erso Gomes" }] }
  ],
  "PA": [
    { name: "Belterra", details: [{ name: "Flávia Daiane Damasceno Noronha", institution: "EMEF São Pedro" }] },
    { name: "Oriximiná", details: [
      { name: "Alfredo Barreto Dos Anjos Sobrinho", institution: "EMEF Santa Maria Goretti" },
      { name: "Maria Jocinete Batista Viana", institution: "EMEF Professora Adélia Figueira" }
    ]},
    { name: "Santarém", details: [
      { name: "Graciana Dos Santos De Sousa", institution: "IFPA - Campus Santarém" },
      { name: "Lizandra Bonfim De Melo", institution: "EEEFM Plácido de Castro" },
      { name: "Nara Roberta De Pádua Andrade", institution: "EEEFM Antonio Batista Belo De Carvalho" }
    ]}
  ],
  "PB": [
    { name: "Campina Grande", details: [{ name: "Cinthia Gonçalves Irineu", institution: "Escola Cidadã Integral Técnica Professor Bráulio Maia Júnior" }] },
    { name: "Livramento", details: [{ name: "Gildivan Germeson Ferreira Da Silva", institution: "EMEF Prefeito Rivaldo Vilar de Carvalho" }] }
  ],
  "PE": [
    { name: "Arcoverde", details: [{ name: "Daniel dos Santos Rocha", institution: "Escola Técnica Estadual Jornalista Cyl Galindo" }] },
    { name: "Belém do São Francisco", details: [{ name: "José Luanderson Santos Andrade", institution: "ETE Maria Emilia Cantarelli" }] },
    { name: "Bezerros", details: [{ name: "Willams Maciel Silva", institution: "ETE Maria José Vasconcelos" }] },
    { name: "Cabo de Santo Agostinho", details: [{ name: "Davidson Alves Santos de Santana", institution: "ETE Luiz Alves Lacerda" }] },
    { name: "Cabrobó", details: [{ name: "Maria Cilane Gonçalves Da Silva", institution: "EREM Senador Paulo Guerra" }] },
    { name: "Carnaíba", details: [{ name: "Gustavo Santos Bezerra", institution: "ETE Professor Paulo Freire" }] },
    { name: "Jaboatão dos Guararapes", details: [{ name: "Daniel Carlos Nunes", institution: "ETE Advogado José David Gil Rodrigues" }] },
    { name: "Moreno", details: [{ name: "Felipe Alexandre de Lima Lira", institution: "Escola Municipal Maria do Carmo Arcoverde" }] },
    { name: "Petrolândia", details: [
      { name: "Kaline Catiely Campos Silva", institution: "EREM de Jatobá" },
      { name: "Leonardo Da Silva Santos", institution: "Escola Municipal 07 de Setembro" }
    ]},
    { name: "Recife", details: [
      { name: "Erinaldo Henrique Barbosa Da Silva", institution: "EREM Engenheiro Lauro Diniz" },
      { name: "Tiago Ferreira de Azevedo", institution: "Escola Municipal Maria da Paz Brandão Alves" }
    ]},
    { name: "Toritama", details: [{ name: "Alex Gustavo Barros Costa", institution: "Escola Estelita Timóteo" }] }
  ],
  "PR": [
    { name: "Campina Grande do Sul", details: [
      { name: "Andreia Vasconcelos Farias", institution: "C.E. Cívico-Militar Ivan Ferreira do Amaral Filho" },
      { name: "Fabrício Salvador Vidal", institution: "Colégio Estadual Timbu Velho" }
    ]},
    { name: "Cantagalo", details: [
      { name: "Adriane Cristina Veigantes Grein", institution: "C.E. Professora Elenir Linke" },
      { name: "Luciana Kelnihar", institution: "C.E. Professora Elenir Linke" }
    ]},
    { name: "Cianorte", details: [{ name: "Thaís Silva Pinheiro", institution: "Assoc. Rainha da Paz" }] },
    { name: "Cidade Gaúcha", details: [
      { name: "Amanda Spontão Lima", institution: "C.E. Marechal Costa e Silva" },
      { name: "Arinete José Da Silva", institution: "Escola Municipal Dom Bosco" },
      { name: "Aurineide Maria Moreno Hauth", institution: "C.E. Marechal Costa e Silva" },
      { name: "Beatriz Jacinto De Almeida", institution: "C.E. Marechal Costa e Silva / Lar Sagrada Família" },
      { name: "Cassiana Meyer de Matos", institution: "C.E. Marechal Costa e Silva" },
      { name: "Danielly De Souza Dos Santos", institution: "C.E. Marechal Costa e Silva" },
      { name: "Franciele Assunção Pereira", institution: "C.E. Marechal Costa e Silva" }
    ]},
    { name: "Curitiba", details: [{ name: "Viviane Dziubate Pittner", institution: "SEED - Secretaria Estadual de Educação" }] },
    { name: "Guarapuava", details: [
      { name: "Adenice Maria Machado", institution: "E.M. Prof Ruy Virmond Marques" },
      { name: "Analisa Caroline De Campos", institution: "E.M. Capitão Wagner" },
      { name: "Arine Prestes de Almeida", institution: "CMEI Elizabeth Mayer Leh" },
      { name: "Daiane Caroline Gonçalves", institution: "Centro Municipal de Educação Infantil Retiro Feliz" },
      { name: "Danise Machado Sczepanovski", institution: "E.M. Bilíngue Profa. Jaqueline F. Santos" },
      { name: "Elaine dos Santos Lima", institution: "Escola Municipal Hildegard Burjan" },
      { name: "Jéssica Tonete dos Santos Ribas", institution: "Escola Municipal Hildegard Burjan" },
      { name: "Joselia Domareska De Oliveira", institution: "E.M. Prof Dionísio Kloster Sampaio" },
      { name: "Joselma Caldas Santos Pires", institution: "Escola Municipal Hipólyta Nunes de Oliveira" },
      { name: "Josiane De Fatima Toebe", institution: "CMEI Xarquinho Paulo Freire" },
      { name: "Leonardo Primak Kaminski", institution: "Escola Rural Municipal Domingos de Moraes" },
      { name: "Letícia Aparecida Fabiane", institution: "Escola Municipal Abílio Fabriciano de Oliveira" },
      { name: "Mônica Cristina De Campos", institution: "E.M. Capitão Wagner" },
      { name: "Naudiele Aparecida Ferreira", institution: "E.M. Prof Ruy Virmond Marques" },
      { name: "Raphaeli Feld Chaves", institution: "Escola Municipal Iná Ribas Carli" },
      { name: "Raryanne Jeannette Lima Holmann", institution: "Escola Municipal Professora Carlita Guimarães Pupo" },
      { name: "Vania Aparecida Brugge", institution: "CMEI Jeorling Joely Cordeiro Cleve" }
    ]},
    { name: "Londrina", details: [{ name: "Fabiana Maria Ruiz Lopes Mori", institution: "2º Colégio da Polícia Militar do Paraná" }] },
    { name: "Marialva", details: [
      { name: "Hellen Jéssica Lima Dos Santos", institution: "C.E. Romário Martins" },
      { name: "Maria Aparecida Da Silva", institution: "C.E. Romário Martins" },
      { name: "Maria Inez Benites Bria", institution: "E.M. Prof. Eurico Jardim Dornellas de Barros" },
      { name: "Patricia Alvarenga Dalle Mole Da Silva", institution: "E.M. Prof. Eurico Jardim Dornellas de Barros" }
    ]},
    { name: "Maringá", details: [
      { name: "Cláudia Mikie Kato", institution: "C.E. Adaile Maria Leite" },
      { name: "Elisangela De Paula Baqueta", institution: "Instituto de Educação Estadual de Maringá" },
      { name: "Jhony Maicon Wilkos", institution: "Colégio Estadual João de Faria Pioli" },
      { name: "Luciane Ferrera Da Silva", institution: "C.E. Dr. Gastão Vidigal" },
      { name: "Regiane Ribeiro Leite Zanoti", institution: "C.E. Dr. Gastão Vidigal" },
      { name: "Renata Silva", institution: "Colégio de Aplicação Pedagógica UEM" },
      { name: "Rosemary Margarida Campos Parizotto", institution: "Colégio de Aplicação Pedagógica UEM" },
      { name: "Rosemeire Aparecida Ferreira Da Costa", institution: "C.E. Dr. Gastão Vidigal" },
      { name: "Taciana Issao Komadaki Lorenzzi Da Silva", institution: "Colégio Dirce de Aguiar Maia" }
    ]},
    { name: "Paiçandu", details: [{ name: "Ana Claudia Bonilha de Almeida Bauli", institution: "Escola Terezinha Meneguetti Seghezzi" }] },
    { name: "Pato Branco", details: [
      { name: "Claudete Adriana Pinheiro Kuhl", institution: "Colégio Estadual de Pato Branco" },
      { name: "Marcelo Guilherme Kuhl", institution: "Colégio Estadual de Pato Branco" }
    ]},
    { name: "Pitanga", details: [{ name: "Veridiane Cristina Martins", institution: "Colégio Estadual Rio do Meio" }] },
    { name: "Sarandi", details: [{ name: "Adriana do Rocio Alves", institution: "Colégio Estadual Helena Kolody" }] }
  ],
  "RJ": [
    { name: "Japeri", details: [{ name: "Rita De Cassia Neves Da Silva Souza", institution: "Escola Municipal Rio D'Ouro" }] }
  ],
  "RO": [
    { name: "Porto Velho", details: [{ name: "Deise Silva Lima", institution: "E.E. Gov. Paulo Nunes Leal" }] }
  ],
  "SE": [
    { name: "Aracaju", details: [
      { name: "Eduardo Conceição Fortaleza", institution: "Centro de Excelência Professor João Costa" },
      { name: "Tiago Viana do Nascimento", institution: "Centro de Excelência Dom Luciano José Cabral Duarte" }
    ]},
    { name: "Canindé de São Francisco", details: [{ name: "Alex Alves Cordeiro", institution: "Centro de Excelência Dom Juvêncio de Brito" }] },
    { name: "Capela", details: [{ name: "Adriana Andrade de Jesus", institution: "Centro de Excelência Edélzio Vieira de Melo" }] },
    { name: "Estância", details: [{ name: "Roberto Da Silva Macena", institution: "Instituto Federal de Sergipe" }] },
    { name: "Itabi", details: [{ name: "Bruno Da Silva Cabral", institution: "Centro de Excelência Maria das Graças Menezes Moura" }] },
    { name: "Japoatã", details: [{ name: "José Carlos Silva Barbosa", institution: "Centro de Excelência Josino Menezes" }] },
    { name: "Nossa Senhora das Dores", details: [{ name: "Luiz Henrique Telemaco de Lima", institution: "Centro de Excelência Berila Alves de Almeida" }] },
    { name: "Nossa Senhora do Socorro", details: [
      { name: "Gêneses Costa Correia Dos Santos", institution: "Centro de Excelência Gov. Seixas Dória" },
      { name: "José Jackson Bispo Cruz Junior", institution: "Centro de Excelência Gov. Seixas Dória" }
    ]},
    { name: "Salgado", details: [{ name: "Davis Fraga da Silveira", institution: "Centro de Excelência Deputado Joaldo Vieira Barbosa" }] }
  ],
  "SP": [
    { name: "Irapuru", details: [
      { name: "Elena Da Silva Lima", institution: "E.E. Professor José Edson Moysés" },
      { name: "Vanessa Scrocaro Cunha", institution: "Escola Estadual Prof. José Edson Moysés" }
    ]}
  ],
  "TO": [
    { name: "Axixá", details: [{ name: "Diego Carvalho Viana", institution: "Colégio Estadual Marechal Ribas Junior" }] }
  ]
}

const stateNames: Record<string, string> = {
  "AL": "Alagoas", "AM": "Amazonas", "AP": "Amapá", "BA": "Bahia", "DF": "Distrito Federal",
  "GO": "Goiás", "MA": "Maranhão", "MS": "Mato Grosso do Sul", "PA": "Pará", "CE": "Ceará",
  "PB": "Paraíba", "PE": "Pernambuco", "PR": "Paraná", "RJ": "Rio de Janeiro", "RO": "Rondônia",
  "SE": "Sergipe", "SP": "São Paulo", "TO": "Tocantins"
}

const sortedStates = Object.keys(stateNames).sort()

export function ImpactMapSection() {
  const [activeState, setActiveState] = useState<string | null>("PR")

  return (
    <section id="map" className="pt-24 pb-12 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Impacto <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Geográfico</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            O Manna Quantum Festival impactou <strong className="text-cyan-400 text-2xl">60 municípios</strong> em <strong className="text-green-400 text-2xl">18 estados</strong> do Brasil, levando a ciência quântica a escolas públicas e institutos federais.
          </p>
        </motion.div>

        {/* CONTAINER PRINCIPAL: GRADE DUPLA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch h-[600px]">

          {/* ESQUERDA: Lista de Estados (com Scroll) */}
          <div className="lg:col-span-4 bg-gray-900/30 rounded-3xl border border-white/10 flex flex-col overflow-hidden">
            <div className="p-4 border-b border-white/10 bg-black/20 flex-shrink-0">
              <h3 className="text-lg font-bold text-white flex items-center">
                <MapPin className="w-5 h-5 text-cyan-400 mr-2" />
                Selecione um Estado
              </h3>
            </div>

            {/* Área de Rolagem para Estados */}
            <div className="flex-1 overflow-y-auto p-3 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
              <div className="space-y-2">
                {sortedStates.map((uf) => (
                  <button
                    key={uf}
                    onClick={() => setActiveState(uf)}
                    className={`
                      w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 text-left group
                      ${activeState === uf
                        ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.15)]'
                        : 'bg-white/5 border border-white/5 hover:bg-white/10 hover:border-cyan-500/30'}
                    `}
                  >
                    <div className="flex items-center">
                      <span className={`
                        w-10 h-10 flex items-center justify-center rounded-lg font-bold text-base mr-4 transition-colors
                        ${activeState === uf ? 'bg-cyan-500 text-white' : 'bg-gray-800 text-gray-400 group-hover:text-white'}
                      `}>
                        {uf}
                      </span>
                      <div>
                        <span className={`block font-bold text-lg ${activeState === uf ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                          {stateNames[uf]}
                        </span>
                        <span className="text-xs text-gray-500">
                          {geoData[uf]?.length || 0} Municípios
                        </span>
                      </div>
                    </div>

                    {activeState === uf && (
                      <ChevronRight className="w-5 h-5 text-cyan-400" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* DIREITA: Detalhes do Estado (com Scroll) */}
          <div className="lg:col-span-8 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl flex flex-col shadow-2xl shadow-black/50 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            {activeState && geoData[activeState] ? (
              <>
                {/* Cabeçalho do Estado */}
                <div className="p-6 md:p-8 border-b border-white/10 bg-black/20 relative z-10 flex-shrink-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center">
                      <div className="w-2 h-10 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-4"></div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white">
                        {stateNames[activeState]}
                      </h3>
                    </div>
                    <div className="flex items-center bg-black/40 px-5 py-2 rounded-full border border-white/10 self-start md:self-auto">
                      <span className="text-green-400 font-bold text-2xl mr-2">{geoData[activeState].length}</span>
                      <span className="text-gray-400 text-sm uppercase tracking-wider font-medium">Municípios</span>
                    </div>
                  </div>
                </div>

                {/* Área de Rolagem para Cidades e Mentores */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-black/20 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {geoData[activeState].map((city, index) => (
                      <motion.div
                        key={city.name + index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                        className="bg-black/40 border border-white/10 rounded-2xl p-5 hover:bg-white/5 hover:border-cyan-500/30 transition-all duration-300 flex flex-col h-full"
                      >
                        <div className="flex items-center mb-4 border-b border-white/5 pb-3">
                          <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3 shadow-[0_0_8px_rgba(34,211,238,0.8)] flex-shrink-0"></div>
                          <h4 className="font-bold text-lg text-white leading-tight">
                            {city.name}
                          </h4>
                        </div>

                        <div className="space-y-3 flex-1">
                          {city.details && city.details.length > 0 ? (
                            city.details.map((mentor, idx) => (
                              <div key={idx} className="bg-white/5 rounded-xl p-3 border border-white/5">
                                <div className="flex items-start mb-2">
                                  <User className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm font-semibold text-gray-200 leading-tight">
                                    {mentor.name}
                                  </span>
                                </div>
                                <div className="flex items-start">
                                  <School className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-xs text-gray-400 leading-snug">
                                    {mentor.institution}
                                  </span>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="flex items-center text-xs text-gray-500 italic bg-white/5 p-3 rounded-xl">
                              <Info className="w-3 h-3 mr-2" />
                              Dados do residente não detalhados no relatório.
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-gray-500 opacity-50">
                <MapPin className="w-24 h-24 mb-4 text-gray-600" />
                <p className="text-xl font-medium text-center px-4">Selecione um estado na lista ao lado.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}