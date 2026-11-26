export function createFooter(): string {
  return `
    <footer class="bg-gray-950 text-white pt-14 pb-8">

      <div class="max-w-6xl mx-auto px-6">

        <!-- Conteúdo principal -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pb-12">

          <!-- Apresentação -->
          <div>

            <a href="#inicio" class="text-2xl font-bold">
              Danielly Cardoso<span class="text-violet-500">.</span>
            </a>

            <p class="text-gray-400 text-sm sm:text-base leading-relaxed mt-5 max-w-md">
              Desenvolvedora em constante evolução.
              Transformando conhecimentos em soluções digitais
              e buscando novos desafios na tecnologia.
            </p>

            <!-- Redes sociais -->
            <div class="flex items-center gap-4 mt-6">

              <!-- GitHub -->
              <a
                href="https://github.com/daniellycardoso1343"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                class="w-10 h-10 rounded-full bg-gray-800
                flex items-center justify-center
                text-gray-300 hover:bg-violet-600
                hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="20" height="20" viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.23-1.65-1.23-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.53.23 2.67.11 2.95.72.78 1.15 1.78 1.15 3 0 4.29-2.62 5.24-5.11 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z"/>
                </svg>
              </a>

              <!-- LinkedIn -->
              <a
                href="https://www.linkedin.com/in/danielly-cardoso-786612235/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                class="w-10 h-10 rounded-full bg-gray-800
                flex items-center justify-center
                text-gray-300 hover:bg-violet-600
                hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="20" height="20" viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.1 18.5H5.15V9h2.95v9.5ZM6.62 7.7a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42ZM18.5 18.5h-2.94v-4.62c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.76 1.2-1.76 2.43v4.7H9.33V9h2.82v1.3h.04c.39-.74 1.35-1.53 2.78-1.53 2.97 0 3.53 1.96 3.53 4.5v5.23Z"/>
                </svg>
              </a>

            </div>
          </div>

          <!-- Contato -->
          <div>

            <h3 class="text-lg font-bold text-white mb-6">
              Entre em contato
            </h3>

            <div class="flex flex-col gap-5">

              <!-- E-mail -->
              <a
                href="mailto:danicardoso0996@gmail.com"
                class="flex items-center gap-3 text-gray-400
                hover:text-violet-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="20" height="20" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor"
                  stroke-width="1.7" stroke-linecap="round"
                  stroke-linejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <path d="m3 7 9 6 9-6"/>
                </svg>

                <span class="text-sm sm:text-base">
                  danicardoso0996@gmail.com
                </span>
              </a>

              <!-- LinkedIn -->
              <a
                href="https://www.linkedin.com/in/danielly-cardoso-786612235/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 text-gray-400
                hover:text-violet-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="20" height="20" viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.1 18.5H5.15V9h2.95v9.5ZM6.62 7.7a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42ZM18.5 18.5h-2.94v-4.62c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.76 1.2-1.76 2.43v4.7H9.33V9h2.82v1.3h.04c.39-.74 1.35-1.53 2.78-1.53 2.97 0 3.53 1.96 3.53 4.5v5.23Z"/>
                </svg>

                <span class="text-sm sm:text-base">
                  Meu perfil no LinkedIn
                </span>
              </a>

            </div>
          </div>

        </div>

        <!-- Divisor -->
        <div class="border-t border-gray-800 pt-7">

          <p class="text-gray-500 text-sm text-center">
            © ${new Date().getFullYear()} Danielly Cardoso.
            Todos os direitos reservados.
          </p>

        </div>

      </div>

    </footer>
  `
}