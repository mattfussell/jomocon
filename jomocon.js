// variables

// selections
const navToggle = document.querySelector('.close-nav'),
      navLinks = document.querySelectorAll('.navLink'),
      navHomeText = document.querySelector('.homeText'),
      navSocials = document.querySelector('.navSocials'),
      navElementContainer = document.querySelector('.navContainer')

// functions
const init = function() {

}

/* open or close navigation */
const toggleNavState = function(e) {
  e.preventDefault()

  if (e.target.parentElement.parentElement.classList.contains('openNav')) {
    e.target.parentElement.parentElement.classList.remove('openNav')
    navLinks.forEach(link => {
      link.classList.add('hidden')
    })
    navHomeText.classList.remove('hidden')
    navToggle.classList.remove('rotate45')
    navSocials.classList.remove('navSocialsH')
    navElementContainer.classList.remove('navContainerOpen')
  } else {
    e.target.parentElement.parentElement.classList.add('openNav')
    navLinks.forEach(link => {
      link.classList.remove('hidden')
    })
    navHomeText.classList.add('hidden')
    navToggle.classList.add('rotate45')
    navSocials.classList.add('navSocialsH')
    navElementContainer.classList.add('navContainerOpen')
  }
}

// event listeners
navToggle.addEventListener('click', e => {
  toggleNavState(e)
})

// init page JS
init()