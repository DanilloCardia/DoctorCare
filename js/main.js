window.addEventListener('scroll', onScroll)
onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(document.getElementById('home'))
  activateMenuAtCurrentSection(document.getElementById('services'))
  activateMenuAtCurrentSection(document.getElementById('about'))
  activateMenuAtCurrentSection(document.getElementById('testimonials'))
  activateMenuAtCurrentSection(document.getElementById('contact'))
}
function activateMenuAtCurrentSection(section) {
  // Quais dados preciso?
  // Linha imaginária Checked
  const targetLine = scrollY + innerHeight / 2

  // Topo da seção Checked
  const sectionTop = section.offsetTop
  // Altura da seção Checked
  const sectionHeight = section.offsetHeight

  // Informações dos dados e da lógica
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  //console.log(
  //'O topo da seção chegou ou passou a linha? ',
  //sectionTopReachOrPassedTargetLine
  //)

  // Verificar se a base da seção está abaixo da linha alvo / imaginária
  // Quais dados vou precisar?

  // A seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  // Informações dos dados e da lógica
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  // console.log('A seção passou da linha?', sectionEndPassedTargetLine)

  // Limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(
    `.menu-mobile a[href*=${sectionId}]`
  )
  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    document.getElementById('navigation').classList.add('scroll')
  } else {
    document.getElementById('navigation').classList.remove('scroll')
  }
}
function showBackToTopButtonOnScroll() {
  if (scrollY > 300) {
    document.getElementById('backToTopButton').classList.add('show')
  } else {
    document.getElementById('backToTopButton').classList.remove('show')
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
}).reveal(
  `#navigation,
   #home header,
   #home .content, 
   #home .stats, 
   #services header, 
   #services .card, 
   #about header, 
   #about .content,
   #testimonials header,
   #testimonials .content,
   #contact header,
   #contact .content,
   #footer`
)
