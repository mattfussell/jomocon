// variables

// selections
const navToggle = document.querySelector('.close-nav'),
      navLinks = document.querySelectorAll('.navLink')

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
  } else {
    e.target.parentElement.parentElement.classList.add('openNav')
    navLinks.forEach(link => {
      link.classList.remove('hidden')
    })
  }
}

// event listeners
navToggle.addEventListener('click', e => {
  toggleNavState(e)
})

// init page JS
init()