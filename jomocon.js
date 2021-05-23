// variables

// selections
const navToggle = document.querySelector('.close-nav'),
      navLinks = document.querySelectorAll('.navLink'),
      navHomeText = document.querySelector('.homeText'),
      navSocials = document.querySelector('.navSocials'),
      navElementContainer = document.querySelector('.navContainer'),
      pageDate = document.querySelector('.currentYear'),
      aboutCards = document.querySelectorAll('.card'),
      aboutCardsArea = document.querySelector('.teamCards'),
      aboutCardsInfo = document.querySelector('.cardAbout')

// functions
const init = function() {
  setCurrentYear()
}

/* Set current year */
const setCurrentYear = _ => pageDate.innerText = new Date().getFullYear()

/* open or close navigation */
const toggleNavState = function(e) {
  e.preventDefault()

  // close the nav
  if (e.target.parentElement.parentElement.classList.contains('openNav')) {
    e.target.parentElement.parentElement.classList.remove('openNav')
    navLinks.forEach(link => {
      link.classList.add('hidden')
    })
    navHomeText.classList.remove('hidden')
    navToggle.classList.remove('rotate45')
    navSocials.classList.remove('navSocialsH')
    navElementContainer.classList.remove('navContainerOpen')
  } else { // open the nav
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

// BUG: clicking on the about text removes the entire card instead of shrinking it back to 
/* expand or contract team member card */
const toggleAboutCardState = function(e) {
  // handle direct card clicks
  const handleParent = function(e) {
    // close the card
    if (e.target.classList.contains('openCard')) {
      e.target.lastElementChild.classList.add('hidden')
      e.target.classList.remove('openCard')

      aboutCards.forEach(card => {
        if (card.classList.contains('hidden')) {
          card.classList.remove('hidden')
        }
      })
    } else { // open the card
      aboutCards.forEach(card => {
        if (card.dataset.id !== e.target.dataset.id) {
          card.classList.add('hidden')
        }
      })

      e.target.classList.add('openCard')
      e.target.lastElementChild.classList.remove('hidden')
    }
  }

  // handle child element clicks
  const handleChild = function(e) {
    if (e.target.parentElement.classList.contains('openCard')) {
      e.target.parentElement.lastElementChild.classList.add('hidden')
      e.target.parentElement.classList.remove('openCard')

      aboutCards.forEach(card => {
        if (card.classList.contains('hidden')) {
          card.classList.remove('hidden')
        }
      })
    } else { // open the card
      aboutCards.forEach(card => {
        if (card.dataset.id !== e.target.parentElement.dataset.id) {
          card.classList.add('hidden')
        }
      })

      e.target.parentElement.classList.add('openCard')
      e.target.parentElement.lastElementChild.classList.remove('hidden')
    }
  }
  
  // isolate source, call proper function
  if (e.target.classList.contains('card')) {
    handleParent(e)
  } else if (e.target.parentElement.classList.contains('card')) {
    handleChild(e)
  }
}

// event listeners
navToggle.addEventListener('click', e => toggleNavState(e))
aboutCardsArea.addEventListener('click', e => toggleAboutCardState(e))

// init page JS
init()