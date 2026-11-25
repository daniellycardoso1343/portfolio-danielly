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

          <!-- Projeto 1 -->
          <article class="flex flex-col bg-gray-900 border border-gray-800 rounded-xl p-5 sm:p-6 hover:border-violet-500 transition-colors">

            <span class="text-violet-400 text-sm font-medium">
              Desenvolvimento Full Stack
            </span>

            <h3 class="text-xl font-bold text-white mt-4 mb-3">
              Sistema de Chamados
            </h3>

            <p class="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Sistema de gerenciamento de solicitações de suporte
              técnico, com controle de usuários, prioridades,
              atribuições e acompanhamento de chamados.
            </p>

            <div class="flex flex-wrap gap-2 mb-6">
              <span class="project-badge">Python</span>
              <span class="project-badge">Flask</span>
              <span class="project-badge">PostgreSQL</span>
            </div>

            <a href="https://github.com/daniellycardoso1343/Sistema_de_chamados_TI" class="mt-auto text-violet-400 font-medium hover:text-violet-300 transition-colors">
              Ver projeto →
            </a>

          </article>

          <!-- Projeto 2 -->
          <article class="flex flex-col bg-gray-900 border border-gray-800 rounded-xl p-5 sm:p-6 hover:border-violet-500 transition-colors">

            <span class="text-violet-400 text-sm font-medium">
              Prática de lógica
            </span>

            <h3 class="text-xl font-bold text-white mt-4 mb-3">
              Exercícios em Python
            </h3>

            <p class="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Desenvolvimento de algoritmos para praticar lógica de programação em Python.
            </p>

            <div class="flex flex-wrap gap-2 mb-6">
              <span class="project-badge">Python</span>
              <span class="project-badge">Lógica</span>
              <span class="project-badge">Algoritmo</span>
            </div>

            <a href="https://github.com/daniellycardoso1343/pratica-programacao-python-16-03" class="mt-auto text-violet-400 font-medium hover:text-violet-300 transition-colors">
              Ver projeto →
            </a>

          </article>

          <!-- Projeto 3 -->
          <article class="flex flex-col bg-gray-900 border border-gray-800 rounded-xl p-5 sm:p-6 hover:border-violet-500 transition-colors">

            <span class="text-violet-400 text-sm font-medium">
              Programação
            </span>

            <h3 class="text-xl font-bold text-white mt-4 mb-3">
              Projetos em Java
            </h3>

            <p class="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Exercícios e aplicações desenvolvidos para praticar
              Programação Orientada a Objetos, estruturas de seleção
              e conceitos fundamentais da linguagem Java.
            </p>

            <div class="flex flex-wrap gap-2 mb-6">
              <span class="project-badge">Java</span>
              <span class="project-badge">POO</span>
              <span class="project-badge">Lógica</span>
            </div>

            <a href="https://github.com/daniellycardoso1343/pratica_polimorfismo-main" class="mt-auto text-violet-400 font-medium hover:text-violet-300 transition-colors">
              Ver projeto →
            </a>

          </article>

        </div>
      </div>
    </section>
  `
}