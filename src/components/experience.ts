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

          <!-- Experiência 1 -->
          <article class="relative pb-10">

            <div class="absolute w-4 h-4 bg-violet-600 rounded-full -left-[33px] sm:-left-[41px] top-1"></div>

            <span class="text-sm text-violet-600 font-semibold">
              2026 — Atual
            </span>

            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mt-2">
              Atuação na área de Tecnologia da Informação
            </h3>

            <p class="text-gray-500 text-sm sm:text-base font-medium mt-1">
              Mundialmix Comércio de Alimentos Ltda. | Contexto de atuação: Unixcard
            </p>

            <p class="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
              Atuação em atividades de suporte técnico e apoio a projetos
              de tecnologia, incluindo atendimento a usuários, configuração
              de acessos em sistemas e participação no desenvolvimento
              de soluções e interfaces web.
            </p>

            <div class="flex flex-wrap gap-2 mt-5">
              <span class="tech-badge">HTML</span>
              <span class="tech-badge">Tailwind CSS</span>
              <span class="tech-badge">TypeScript</span>
              <span class="tech-badge">UI/UX Design</span>
              <span class="tech-badge">Suporte técnico</span>
            </div>

          </article>

          <!-- Experiência 2 -->
          <article class="relative">

            <div class="absolute w-4 h-4 bg-violet-600 rounded-full -left-[33px] sm:-left-[41px] top-1"></div>

            <span class="text-sm text-violet-600 font-semibold">
              2026
            </span>

            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mt-2">
              Jovem Aprendiz - Tecnologia da Informação
            </h3>

            <p class="text-gray-500 text-sm sm:text-base font-medium mt-1">
              Dígitro Tecnologia
            </p>

            <p class="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
              Atuação em atividades de suporte técnico, incluindo
              atendimento a usuários, gerenciamento de chamados,
              configuração de acessos em sistemas e participação
              no desenvolvimento web.
            </p>

            <div class="flex flex-wrap gap-2 mt-5">
              <span class="tech-badge">HTML</span>
              <span class="tech-badge">Tailwind CSS</span>
              <span class="tech-badge">JavaScript</span>
              <span class="tech-badge">Suporte técnico</span>
            </div>

          </article>

        </div>
      </div>
    </section>
  `
}