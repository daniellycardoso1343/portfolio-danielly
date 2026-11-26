import type { Projeto } from "../types/projeto"

export function createProjectCard(projeto: Projeto): string {
    return `
     <article class="flex flex-col bg-gray-900 border border-gray-800 rounded-xl p-5 sm:p-6 hover:border-violet-500 transition-colors">

      <span class="text-violet-400 text-sm font-medium">
        ${projeto.categoria}
      </span>

      <h3 class="text-xl font-bold text-white mt-4 mb-3">
        ${projeto.nome}
      </h3>

      <p class="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
        ${projeto.descricao}
      </p>

      <div class="flex flex-wrap gap-2 mb-6">
        ${projeto.tecnologias
          .map((tecnologia) => `<span class="project-badge">${tecnologia}</span>`)
          .join('')}
      </div>

      <a
        href="${projeto.link}"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-auto text-violet-400 font-medium hover:text-violet-300 transition-colors"
      >
        Ver projeto →
      </a>

    </article>
    `
}