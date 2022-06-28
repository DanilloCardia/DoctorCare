window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showBackToTopButtonOnScroll()
  activeMenuAtCurrentSection(home)
  activeMenuAtCurrentSection(services)
  activeMenuAtCurrentSection(about)
  activeMenuAtCurrentSection(contact)
}

function activeMenuAtCurrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2
  // verificar se a seção passou da targeLine
  // quais dados vou precisar?
  // topo da seção
  const sectionTop = section.offsetTop
  // altura da seção
  const sectionHeight = section.offsetHeight
  // o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  // informações dos dados e da lógica
  /*console.log(
    'O topo da seção chegou ou passou da linha?',
    sectionTopReachOrPassedTargetLine
  )*/
  // verificar se a base está abaixo da linha imaginária/alvo
  // quais dados vou precisar?
  // a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight
  //console.log(sectionEndsAt)
  // o final da seção passou da linha alvo?
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  //console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)
  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
  menuElement.classList.remove('active')
  //console.log(sectionBoundaries)
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}
const navigation = document.getElementById('navigation')
function showNavOnScroll() {
  window.addEventListener('scroll', showNavOnScroll)
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
showNavOnScroll()
function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about header,
  #about img,
  #contact header,
  #contact .content,
  #contact img,
  #footer a,
  #footer p`)
