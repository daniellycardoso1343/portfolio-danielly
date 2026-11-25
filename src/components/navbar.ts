export function createNavbar(): string {
  return `
    <header class="w-full bg-white border-b border-gray-100">
      <nav class="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        <!-- Logo -->
        <a href="#inicio" class="text-2xl font-bold text-gray-900">
          DC<span class="text-violet-600">.</span>
        </a>

        <!-- Botão Mobile -->
        <button id="menu-toggle" class="md:hidden text-gray-700 hover:text-violet-600" aria-label="Abrir menu" aria-expanded="false" aria-controls="menu-links">
         <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.8"
        stroke="currentColor"
        class="w-7 h-7"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      </button>

        <!-- Links de navegação -->
        <ul
      id="menu-links"
      class="hidden md:flex flex-col md:flex-row items-center gap-6
      absolute md:static top-[73px] left-0 w-full md:w-auto
      bg-white md:bg-transparent border-b md:border-0 border-gray-100
      px-6 py-6 md:p-0 text-sm font-medium text-gray-600 z-50"
    >
      <li><a href="#inicio" class="hover:text-violet-600 transition-colors">Início</a></li>
      <li><a href="#sobre" class="hover:text-violet-600 transition-colors">Sobre</a></li>
      <li><a href="#tecnologias" class="hover:text-violet-600 transition-colors">Tecnologias</a></li>
      <li><a href="#projetos" class="hover:text-violet-600 transition-colors">Projetos</a></li>
      <li><a href="#experiencia" class="hover:text-violet-600 transition-colors">Experiência</a></li>
      <li><a href="#contato" class="hover:text-violet-600 transition-colors">Contato</a></li>
    </ul>


      </nav>
    </header>
  `
}