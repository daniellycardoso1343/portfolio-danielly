export function createAbout(): string {
  return `
    <section id="sobre" class="bg-gray-50 py-16 md:py-24">
      <div class="max-w-6xl mx-auto px-6">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          <!-- Texto -->
          <div>
            <p class="text-violet-600 font-semibold mb-3">
              Conheça um pouco da minha trajetória
            </p>

            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Sobre mim
            </h2>

            <p class="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
              Sou estudante de Análise e Desenvolvimento de Sistemas e
              desenvolvedora em constante evolução. Tenho interesse em
              construir aplicações web, desenvolver soluções eficientes
              e compreender como a tecnologia pode resolver problemas reais.
            </p>

            <p class="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
              Venho desenvolvendo projetos práticos para aprimorar meus
              conhecimentos em programação, estruturação de sistemas,
              bancos de dados e desenvolvimento de interfaces.
            </p>

          </div>

          <!-- Imagem -->
          <div class="flex justify-center md:justify-end">
            <img
              src="/images/foto-danielly.png"
              alt="Ilustração gráfica de Danielly Cardoso"
              class="w-full max-w-xs sm:max-w-sm aspect-[4/5] object-cover rounded-2xl"
            >
          </div>

        </div>

      </div>
    </section>
  `
}