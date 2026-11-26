import { createExperienceCard } from './experience-card'
import type { Experiencia } from '../types/experiencia'

const experiencias: Experiencia[] = [
  {
    periodo: '2026 - atual',
    cargo: 'Tecnologia da Informação - Projetos',
    empresa: 'Mundialmix Comércio de Alimentos Ltda. | Contexto de atuação: Unixcard',
    descricao: 'Atuação em atividades de suporte técnico e apoio a projetos de tecnologia, incluindo atendimento a usuários, configuração de acessos em sistemas e participação no desenvolvimento de soluções e interfaces web.',
    tecnologias: [
      'HTML',
      'Tailwind CSS',
      'TypeScript',
      'UI/UX Design',
      'Suporte técnico'
    ],
    atual: true
  },
  {
    periodo: '2026',
    cargo: 'Tecnologia da Informação',
    empresa: 'Dígitro Tecnologia',
    descricao: 'Atuação em atividades de suporte técnico, incluindo atendimento a usuários, gerenciamento de chamados, configuração de acessos em sistemas e participação no desenvolvimento web.',
    tecnologias: [
      'HTML',
      'Tailwind CSS',
      'JavaScript',
      'Suporte técnico'
    ],
  },
]

export function createExperience(): string {
  return `
    <section id="experiencia" class="py-16 md:py-24 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6">

        <!-- Cabeçalho -->
        <div class="mb-10 md:mb-12">
          <p class="text-violet-600 font-semibold mb-3">
            Minha trajetória
          </p>

          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experiência profissional
          </h2>

          <p class="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed">
            Minha trajetória profissional e experiências
            que contribuem para meu desenvolvimento na tecnologia.
          </p>
        </div>

        <!-- Linha do tempo -->
        <div class="max-w-3xl border-l-2 border-violet-200 pl-6 sm:pl-8 ml-2">

          ${experiencias.map(createExperienceCard).join('')}

        </div>

      </div>
    </section>
  `
}