export function createHero(): string {
  return `
    <section id="inicio" class="relative min-h-[80vh] flex items-center overflow-hidden bg-white">

      <!-- Grade sutil no fundo -->
      <div
        class="absolute inset-0 opacity-[0.035]"
        style="
          background-image:
            linear-gradient(to right, #7c3aed 1px, transparent 5px),
            linear-gradient(to bottom, #7c3aed 1px, transparent 5px);
          background-size: 45px 45px;
        "
      ></div>

      <!-- Brilho roxo principal -->
      <div
        class="absolute w-[350px] h-[350px] sm:w-[500px] sm:h-[500px]
        bg-violet-400/20 rounded-full blur-[100px]
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></div>

      <!-- Brilho secundário -->
      <div
        class="absolute w-48 h-48 sm:w-72 sm:h-72
        bg-purple-300/20 rounded-full blur-[90px]
        top-10 right-0"
      ></div>

      <!-- Conteúdo -->
      <div class="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-20 w-full">

        <div class="max-w-3xl">

          <p class="text-violet-600 font-semibold mb-3">
            Olá, eu sou
          </p>

          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Danielly Cardoso
          </h1>

          <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Desenvolvedora
          </h2>

          <p class="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
            Desenvolvo soluções web e estou sempre em busca de novos conhecimentos.
            Tenho interesse em tecnologia, desenvolvimento de sistemas, criação
            de aplicações e suporte de usuários.
          </p>

          <div class="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">

            <a
              href="#projetos"
              class="w-full sm:w-auto text-center px-6 py-3 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition"
            >
              Ver projetos
            </a>

            <a
              href="/Curriculo_Danielly_Cardoso_.pdf"
              target="_blank"
              class="w-full sm:w-auto text-center px-6 py-3 border border-violet-600 text-violet-700 rounded-lg font-medium hover:bg-violet-50 transition"
            >
              Visualizar currículo
            </a>

            <a
              href="#contato"
              class="w-full sm:w-auto text-center px-6 py-3 border border-violet-600 text-violet-700 rounded-lg font-medium hover:bg-violet-50 transition"
            >
              Entre em contato
            </a>

          </div>
        </div>
      </div>
    </section>
  `
}