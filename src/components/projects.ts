import { createProjectCard } from './project-card'
import type { Projeto } from '../types/projeto'

const projetos: Projeto[] = [
  {
    categoria: 'Desenvolvimento',
    nome: 'Sistema de Chamados',
    descricao: `
      Sistema de gerenciamento de solicitações de suporte
      técnico, com controle de usuários, prioridades,
      atribuições e acompanhamento de chamados.
    `,
    tecnologias: ['Python', 'Flask', 'PostgreSQL'],
    link: 'https://github.com/daniellycardoso1343/Sistema_de_chamados_TI'
  },
  {
    categoria: 'Prática de lógica',
    nome: 'Exercícios em Python',
    descricao: `
      Desenvolvimento de algoritmos para praticar lógica
      de programação em Python.
    `,
    tecnologias: ['Python', 'Lógica', 'Algoritmo'],
    link: 'https://github.com/daniellycardoso1343/pratica-programacao-python-16-03'
  },
  {
    categoria: 'Programação Orientada a Objetos',
    nome: 'Exercícios em Java',
    descricao: `
      Exercícios e aplicações desenvolvidos para praticar
      Programação Orientada a Objetos, estruturas de seleção
      e conceitos fundamentais da linguagem Java.
    `,
    tecnologias: ['Java', 'POO', 'Lógica'],
    link: 'https://github.com/daniellycardoso1343/pratica_polimorfismo-main'
  }
]

export function createProjects(): string {
  return `
    <section id="projetos" class="py-16 md:py-24 bg-gray-950">
      <div class="max-w-6xl mx-auto px-6">

        <!-- Cabeçalho -->
        <div class="mb-10 md:mb-12">
          <p class="text-violet-400 font-semibold mb-3">
            Meu trabalho
          </p>

          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Projetos em destaque
          </h2>

          <p class="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
            Alguns projetos que desenvolvi para colocar meus
            conhecimentos em prática e explorar novas tecnologias.
          </p>
        </div>

        <!-- Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          ${projetos.map(createProjectCard).join('')}
        </div>

      </div>
    </section>
  `
}