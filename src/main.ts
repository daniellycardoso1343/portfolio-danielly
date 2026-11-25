import './style.css'
import { createNavbar } from './components/navbar'
import { createHero } from './components/hero'
import { createAbout } from './components/about'
import { createTechnologies } from './components/technologies'
import { createProjects } from './components/projects'
import { createExperience } from './components/experience'
import { createContact } from './components/contact'
import { createFooter } from './components/footer'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${createNavbar()}
  ${createHero()}
  ${createAbout()}
  ${createTechnologies()}
  ${createProjects()}
  ${createExperience()}
  ${createContact()}
  ${createFooter()}

`
const menuToggle = document.querySelector<HTMLButtonElement>('#menu-toggle')
const menuLinks = document.querySelector<HTMLUListElement>('#menu-links')

menuToggle?.addEventListener('click', () => {
  menuLinks?.classList.toggle('hidden')

  const menuAberto = !menuLinks?.classList.contains('hidden')

  menuToggle.setAttribute('aria-expanded', String(menuAberto))
  menuToggle.setAttribute(
    'aria-label',
    menuAberto ? 'Fechar menu' : 'Abrir menu'
  )
})

menuLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuLinks.classList.add('hidden')
    menuToggle?.setAttribute('aria-expanded', 'false')
    menuToggle?.setAttribute('aria-label', 'Abrir menu')
  })
})
