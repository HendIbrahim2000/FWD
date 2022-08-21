/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sectionItems = document.querySelectorAll('section')
const toggleBtn = document.getElementById('toggle')
const navList = document.getElementById('navbar__list')
let sectionLink = null

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNav = () => {
    if (sectionItems) {
        const navUL = document.getElementById("navbar__list");
        for (let i = 0; i < sectionItems.length; i++) {
            const navLI = document.createElement('li');
            const navLink = document.createElement('a');
            const liText = sectionItems[i].getAttribute("data-nav");
            navLink.appendChild(document.createTextNode(liText));
            navLink.classList.add('menu__link')
            navLink.href = `#${sectionItems[i].id}`
            navLI.appendChild(navLink);
            navUL.appendChild(navLI);

        }

    }
}
// Add class 'active' to section when near top of viewport

const toggleActive = () => {
    for (let i = 0; i < sectionItems.length; i++) {

        if (sectionItems[i].getBoundingClientRect().top < 60 &&
            sectionItems[i].getBoundingClientRect().top > -sectionItems[i].getBoundingClientRect().height + 60) {
            sectionItems[i].classList.add('your-active-class')
            sectionLink[i].classList.add('item-active-class')
        } else {
            sectionItems[i].classList.remove('your-active-class')
            sectionLink[i].classList.remove('item-active-class')
        }

    }

}


// Scroll to anchor ID using scrollTO event
const smoothScroll = index => {
    const scrollToSection = sectionItems[index].offsetTop;
    scroll({
        top: scrollToSection,
        behavior: "smooth",
        block: "center"
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/


// Build menu 
window.addEventListener('DOMContentLoaded', () => {
    buildNav()
    sectionLink = document.querySelectorAll('.menu__link');
});

// Scroll to section on link click


window.addEventListener('click', event => {
    if (!event.target.matches('.menu__link')) return;
    event.preventDefault();
    for (let i = 0; i < sectionLink.length; i++) {
        if (event.target === sectionLink[i]) {
            smoothScroll(i)

        }
    }
});



// Set sections as active
window.addEventListener('scroll', toggleActive);


// Responsive menu toggle

toggleBtn.addEventListener('click', event => {
    navList.classList.toggle('hide');
});

