export function createFooter(): string {
  return `
    <footer class="bg-gray-950 py-8">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <a href="#inicio" class="text-xl font-bold text-white">
          DC<span class="text-violet-500">.</span>
        </a>

        <p class="text-gray-400 text-sm text-center">
          Desenvolvido por Danielly Cardoso.
        </p>

        <p class="text-gray-500 text-sm">
          © 2026 — Todos os direitos reservados.
        </p>

      </div>
    </footer>
  `
}