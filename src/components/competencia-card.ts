import type { Competencia } from "../types/competencia";

export function createCompetenciaCard(competencia: Competencia): string {
    return `
        <article class="group bg-violet-50/70 border border-violet-100
      rounded-2xl p-6 sm:p-7 flex flex-col
      hover:border-violet-400 hover:shadow-lg
      hover:shadow-violet-100 transition-all duration-300">

      <!-- Ícone e título -->
      <div class="flex items-center gap-4 mb-5">

        <div class="w-14 h-14 shrink-0 rounded-xl bg-violet-100
          text-violet-700 flex items-center justify-center
          group-hover:bg-violet-600 group-hover:text-white
          transition-colors duration-300">

          ${competencia.icone}

        </div>

        <h3 class="text-lg sm:text-xl font-bold text-gray-900">
          ${competencia.titulo}
        </h3>

      </div>

      <!-- Descrição -->
      <p class="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
        ${competencia.descricao}
      </p>

      <!-- Conhecimentos -->
      <div class="flex flex-wrap gap-2 mt-auto">
        ${competencia.conhecimentos.map(conhecimento => `
          <span class="px-3 py-1.5 rounded-full bg-white
            border border-violet-100 text-violet-700
            text-xs sm:text-sm font-medium">
            ${conhecimento}
          </span>
        `).join('')}
      </div>

    </article>
    `

}