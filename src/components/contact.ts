export function createContact(): string {
  return `
    <section id="contato" class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 text-center">

        <p class="text-violet-600 font-semibold mb-3">
          Vamos conversar?
        </p>

        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Entre em contato
        </h2>

        <p class="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10">
          Estou aberta a oportunidades profissionais, projetos
          e conexões na área de tecnologia.
        </p>

        <!-- Redes sociais -->
        <div class="flex justify-center items-center gap-6">

          <!-- GitHub -->
          <a
            href="https://github.com/daniellycardoso1343"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            class="text-gray-500 hover:text-violet-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-7 h-7"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.42 7.87 10.95.58.1.79-.25.79-.56v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.06.78 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
            </svg>
          </a>

          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/danielly-cardoso-786612235/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            class="text-gray-500 hover:text-violet-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-7 h-7"
              aria-hidden="true"
            >
              <path d="M20.45 2H3.55C2.69 2 2 2.69 2 3.55v16.9c0 .86.69 1.55 1.55 1.55h16.9c.86 0 1.55-.69 1.55-1.55V3.55C22 2.69 21.31 2 20.45 2ZM8 19H5V9h3v10ZM6.5 7.73a1.74 1.74 0 1 1 0-3.48 1.74 1.74 0 0 1 0 3.48ZM19 19h-3v-4.87c0-1.16-.02-2.65-1.62-2.65-1.62 0-1.87 1.27-1.87 2.57V19h-3V9h2.88v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.61 2 3.61 4.6V19Z"/>
            </svg>
          </a>

          <!-- E-mail -->
          <a
            href="mailto:danicardoso0996@gmail.com"
            aria-label="E-mail"
            class="text-gray-500 hover:text-violet-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-7 h-7"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2"/>
              <path d="m3 7 9 6 9-6"/>
            </svg>
          </a>

        </div>

      </div>
    </section>
  `
}