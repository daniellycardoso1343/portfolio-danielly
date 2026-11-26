import { createCompetenciaCard } from "./competencia-card";
import type { Competencia } from "../types/competencia";

const competencias: Competencia[] = [
  {
    titulo: 'Desenvolvimento Web',
    descricao: 'Criação de páginas e interfaces web responsivas, organizadas e acessíveis.',
    conhecimentos: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS'
    ],
    icone: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
        viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="m8 8-4 4 4 4"/>
        <path d="m16 8 4 4-4 4"/>
        <path d="m14 4-4 16"/>
      </svg>
    `
  },
  {
    titulo: 'UI/UX e usabilidade',
    descricao: 'Aplicação de princípios de organização visual, hierarquia de informações e experiência do usuário.',
    conhecimentos: [
      'Design de interfaces',
      'Usabilidade',
      'Responsividade',
      'Hierarquia visual'
    ],
    icone: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
        viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3a9 9 0 1 0 0 18h1.5a2 2 0 0 0 1.5-3.3 1.5 1.5 0 0 1 1.1-2.5H18a3 3 0 0 0 3-3c0-5.1-4-9.2-9-9.2Z"/>
        <circle cx="7.5" cy="10" r="1"/>
        <circle cx="12" cy="7" r="1"/>
        <circle cx="16.5" cy="10" r="1"/>
      </svg>
    `
  },
  {
    titulo: 'Desenvolvimento Back-end',
    descricao: 'Desenvolvimento de funcionalidades, lógica de programação e regras de negócio para aplicações.',
    conhecimentos: [
      'Python',
      'Flask',
      'Node.js'
    ],
    icone: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
        viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="8" rx="2"/>
        <rect x="3" y="13" width="18" height="8" rx="2"/>
        <path d="M7 7h.01M7 17h.01M11 7h6M11 17h6"/>
      </svg>
    `
  },
  {
    titulo: 'Banco de dados',
    descricao: 'Modelagem, organização de informações e consultas em bancos de dados relacionais.',
    conhecimentos: [
      'PostgreSQL',
      'SQL',
      'Modelagem de dados'
    ],
    icone: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
        viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/>
        <path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>
      </svg>
    `
  },
  {
    titulo: 'Ferramentas e versionamento',
    descricao: 'Organização do código, controle de versões e utilização de ferramentas de desenvolvimento.',
    conhecimentos: [
      'Git',
      'GitHub',
      'VS Code'
    ],
    icone: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
        viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="6" cy="3" r="2"/>
        <circle cx="18" cy="6" r="2"/>
        <circle cx="6" cy="21" r="2"/>
        <path d="M6 5v14"/>
        <path d="M18 8a6 6 0 0 1-6 6H8"/>
        <path d="M8 14a6 6 0 0 1-2-1"/>
      </svg>
    `
  }
]

export function createTechnologies(): string {
  return `
    <section id="tecnologias" class="py-16 md:py-24 bg-white">

      <div class="max-w-6xl mx-auto px-6">

        <!-- Cabeçalho -->
        <div class="text-center mb-12 md:mb-16">

          <span class="inline-block px-5 py-2 rounded-full
            bg-violet-100 text-violet-700
            text-sm font-semibold mb-5">
            O que eu desenvolvo
          </span>

          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Competências e conhecimentos
          </h2>

          <p class="text-gray-500 text-base md:text-lg
            max-w-2xl mx-auto leading-relaxed">
            Áreas em que aplico meus conhecimentos para criar
            soluções web e experiências digitais.
          </p>

        </div>

        <!-- Primeira linha: três cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-5 md:gap-6 mb-5 md:mb-6">

          ${competencias.slice(0, 3).map(createCompetenciaCard).join('')}

        </div>

        <!-- Segunda linha: dois cards centralizados -->
        <div class="grid grid-cols-1 sm:grid-cols-2
          gap-5 md:gap-6 max-w-4xl mx-auto">

          ${competencias.slice(3).map(createCompetenciaCard).join('')}

        </div>

      </div>

    </section>
  `
}