import type { Experiencia } from "../types/experiencia"

export function createExperienceCard(experiencia: Experiencia): string {
  return `
    <article class="relative ${experiencia.atual ? 'pb-10' : ''}">

      <div class="absolute w-4 h-4 bg-violet-600 rounded-full -left-[33px] sm:-left-[41px] top-1"></div>

      <span class="text-sm text-violet-600 font-semibold">
        ${experiencia.periodo}
      </span>

      <h3 class="text-lg sm:text-xl font-bold text-gray-900 mt-2">
        ${experiencia.cargo}
      </h3>

      <p class="text-gray-500 text-sm sm:text-base font-medium mt-1">
        ${experiencia.empresa}
      </p>

      <p class="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
        ${experiencia.descricao}
      </p>

      <div class="flex flex-wrap gap-2 mt-5">
        ${experiencia.tecnologias
          .map((tecnologia) => `<span class="tech-badge">${tecnologia}</span>`)
          .join('')}
      </div>

    </article>
  `
}