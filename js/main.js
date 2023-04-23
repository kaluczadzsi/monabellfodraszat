const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navListItem = document.querySelectorAll('.nav-list-item');
const sectionNav = document.querySelector('.section-nav');
const sectionHero = document.querySelector('.section-hero');

hamburger.addEventListener('click', (e) => {
  slideMobileNav();
  sectionNav.classList.toggle('bg-white');
});

navListItem.forEach((li) =>
  li.addEventListener('click', () => {
    slideMobileNav();
  })
);

function slideMobileNav() {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
}

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      sectionNav.classList.add('sticky');
      sectionHero.classList.add('section-mt-10');
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

obs.observe(sectionHero);
