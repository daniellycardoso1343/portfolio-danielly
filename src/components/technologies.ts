export function createTechnologies(): string {
  return `
    <section id="tecnologias" class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">

        <!-- Cabeçalho -->
        <div class="mb-10 md:mb-12">
          <p class="text-violet-600 font-semibold mb-3">
            Conhecimentos técnicos
          </p>

          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tecnologias
          </h2>

          <p class="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed">
            Ferramentas e tecnologias que utilizo e estudo
            para desenvolver soluções e aplicações.
          </p>
        </div>

        <!-- Cards de tecnologias -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

          <!-- Front-end -->
          <div class="p-5 sm:p-6 rounded-xl border border-gray-200">
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-5">
              Front-end
            </h3>

            <div class="flex flex-wrap gap-2 sm:gap-3">
              <span class="tech-badge">HTML5</span>
              <span class="tech-badge">CSS3</span>
              <span class="tech-badge">JavaScript</span>
              <span class="tech-badge">TypeScript</span>
              <span class="tech-badge">Tailwind CSS</span>
            </div>
          </div>

          <!-- Back-end -->
          <div class="p-5 sm:p-6 rounded-xl border border-gray-200">
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-5">
              Back-end
            </h3>

            <div class="flex flex-wrap gap-2 sm:gap-3">
              <span class="tech-badge">Python</span>
              <span class="tech-badge">Flask</span>
              <span class="tech-badge">Java</span>
              <span class="tech-badge">Node.js</span>
            </div>
          </div>

          <!-- Banco de dados -->
          <div class="p-5 sm:p-6 rounded-xl border border-gray-200">
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-5">
              Banco de dados
            </h3>

            <div class="flex flex-wrap gap-2 sm:gap-3">
              <span class="tech-badge">PostgreSQL</span>
              <span class="tech-badge">SQL</span>
              <span class="tech-badge">Modelagem de dados</span>
            </div>
          </div>

          <!-- Ferramentas -->
          <div class="p-5 sm:p-6 rounded-xl border border-gray-200">
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-5">
              Ferramentas
            </h3>

            <div class="flex flex-wrap gap-2 sm:gap-3">
              <span class="tech-badge">Git</span>
              <span class="tech-badge">GitHub</span>
              <span class="tech-badge">VS Code</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
}