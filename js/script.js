window.addEventListener('scroll', function () {
  const header = document.querySelector('nav');
  if (window.scrollY > 250) {
    header.classList.remove('lg:bg-transparent');
    header.classList.remove('absolute')
    header.classList.add('fixed');
    header.classList.remove('md:shadow-none');
    header.classList.remove('border-b-thin');
    header.classList.add('py-8');
  } else {
    header.classList.add('lg:bg-transparent');
    header.classList.remove('fixed')
    header.classList.add('absolute');
    header.classList.add('border-b-thin')
    header.classList.add('md:shadow-none');
    header.classList.remove('py-8');
  }
});

//  for menu
const headertra = document.querySelector('.he-nav');
const menu = document.querySelector('#menu_btn');
const navhanu = document.querySelector('#nav-sign');
const topbar = document.querySelector('#top-bar');
const midbr = document.querySelector('#mid-bar');
const botbar = document.querySelector('#bot-bar');
// left-16 32 48 64 20
function toggleMenu(isOpen) {
  navhanu.classList.toggle('opacity-100', isOpen);
  navhanu.classList.toggle('opacity-0', !isOpen);
  navhanu.classList.toggle('h-[350px]', isOpen);
  navhanu.classList.toggle('h-0', !isOpen);
  navhanu.classList.toggle('pointer-events-none', !isOpen);

  topbar.classList.toggle('w-full', isOpen);
  topbar.classList.toggle('rotate-45', isOpen);
  topbar.classList.toggle('w-6', !isOpen);
  topbar.classList.toggle('translate-x-2', isOpen);
  topbar.classList.toggle('translate-y-2.5', isOpen);

  midbr.classList.toggle('opacity', isOpen);
  midbr.classList.toggle('hidden', isOpen);

  botbar.classList.toggle('w-full', isOpen);
  botbar.classList.toggle('-rotate-45', isOpen);
  botbar.classList.toggle('w-6', !isOpen);
  botbar.classList.toggle('translate-x-2', isOpen);
  botbar.classList.toggle('-translate-y-2', isOpen);

}

menu.addEventListener('click', () => {
  toggleMenu(navhanu.classList.contains('hiddene'));
  navhanu.classList.toggle('hiddene');
});


const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll("#nav-sign #navigation a");

function setActiveLink(link) {
  navlinks.forEach((otherlink) => {
    otherlink.classList.remove('text-blueIsh');

    const otherunder = otherlink.querySelector('span');
    if (otherunder) {
      otherunder.classList.remove('w-14');
      otherunder.classList.add('w-0');
    }

  });

  link.classList.add('text-blueIsh');
  const under = link.querySelector('span');

  if (under) {
    under.classList.add('w-14');
    under.classList.remove('w-0');
  }

}

navlinks.forEach((link) => {

  link.addEventListener('click', () => {
    setActiveLink(link)
  });
});


window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(link => {
        link.classList.remove('text-blueIsh');
        if (link.getAttribute('href').includes(id)) {
          setActiveLink(link);
          toggleMenu(false); // Close the menu when a section is active
        }
      });
    }
  });
};



// modal

const prev = document.querySelector('#modal');
// const signinbtn
const homeoption = document.querySelector('#homecontact');
const signup = document.querySelector('#sign-up');
const login = document.querySelector('#login');
const closeButtons = document.querySelectorAll('.modal-close');
const modalform = document.querySelector('.modal-form')

document.querySelector('#signin-btn').addEventListener('click', () => {

  prev.classList.remove('hidden');
});

document.querySelector('#home-login-btn').addEventListener('click', () => {
  event.preventDefault();
  homeoption.classList.add('hidden');
  login.classList.remove('hidden');
});

document.querySelector('#home-signup-btn').addEventListener('click', () => {
  event.preventDefault();
  signup.classList.remove('hidden');
  homeoption.classList.add('hidden');
});

document.querySelector('#back-login').addEventListener('click', () => {
  event.preventDefault();
  login.classList.add('hidden');
  homeoption.classList.remove('hidden');

})

document.querySelector('#back-signup').addEventListener('click', () => {
  event.preventDefault();
  signup.classList.add('hidden');
  homeoption.classList.remove('hidden');

})
closeButtons.forEach(close => {
  close.addEventListener('click', (event) => {
    event.preventDefault();
    prev.classList.add('hidden');
  });
});

prev.addEventListener('click', (event) => {
  if (event.target === prev) {
    prev.classList.add('hidden');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const content = document.getElementById('image');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        void secbox.offsetWidth;

        entry.target.classList.add('animate-home');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0 });

  observer.observe(content);
});

document.addEventListener('DOMContentLoaded', function () {
  const contentser = document.getElementById('service-animate');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-service');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0 });

  observer.observe(contentser);
});


const btnlist = document.querySelectorAll(".inside");
const secbox = document.querySelector('#cliant .second-box');
let lastcliked = null;

btnlist.forEach(btnEL => {
  btnEL.addEventListener('click', () => {

    if (btnEL !== lastcliked) {
      secbox.classList.remove('animate-secondboxopacity');
      void secbox.offsetWidth;
      secbox.classList.add('animate-secondboxopacity');
    }


    btnlist.forEach(box => {
      const head = box.querySelector('.head');
      const star = box.querySelector('.star');

      head.classList.remove('text-blueIsh');
      star.classList.remove('text-blueIsh');
      head.classList.add('text-opacity-80');
      star.classList.add('text-opacity-30');

    });

    const head = btnEL.querySelector('.head');
    const star = btnEL.querySelector('.star');
    head.classList.add('text-blueIsh');
    star.classList.add('text-blueIsh');
    head.classList.remove('text-opacity-80');
    star.classList.remove('text-opacity-30');

    lastcliked = btnEL;
  });
});

if (btnlist.length > 0) {
  btnlist[0].click();
}


