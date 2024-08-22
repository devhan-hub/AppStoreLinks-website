window.addEventListener('scroll', function () {
  const header = document.querySelector('nav');
   const logo =document.querySelector('#logo');
  if (window.scrollY > 250) {
      header.classList.add('bg-white');
      header.classList.remove('absolute')
      header.classList.add('fixed');
      header.classList.add('shadow-boxshadow');
      logo.classList.add('p-6');
      logo.classList.remove('p-8');
  } else {
      header.classList.remove('bg-white');
      header.classList.remove('fixed')
      header.classList.add('absolute');
      logo.classList.remove('p-6');
      logo.classList.add('p-8');
  }
});

//  for menu
const menu = document.querySelector('#menu_btn');
const nav = document.querySelector('#nav-sign');
const topbar =document.querySelector('#top-bar');
const midbr = document.querySelector('#mid-bar');
const botbar = document.querySelector('#bot-bar');
  menu.addEventListener('click' , () => {
        menu.classList.toggle('right-2')
       nav.classList.toggle('hidden');
       topbar.classList.toggle('w-full');
       topbar.classList.toggle('rotate-45');
       topbar.classList.toggle('translate-x-2');
       topbar.classList.toggle('translate-y-2.5');
       midbr.classList.toggle('opacity-0');
       botbar.classList.toggle('w-full');
       botbar.classList.toggle('-rotate-45');
       botbar.classList.toggle('translate-x-2');
       botbar.classList.toggle('-translate-y-2');

  });

  // for active

  let sections = document.querySelectorAll("section");
  let navlinks = document.querySelectorAll("#nav-sign #navigation a");

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
                      link.classList.add('text-blueIsh');
                  }
              });
          }
      });
  };
  navlinks.forEach(link => {
    link.addEventListener('click', () => {
        // Close the dropdown menu
        navSign.classList.add('hidden'); // Hides the menu
        // menuBtn.classList.remove('open');
    })
    });

  // modal

const prev = document.querySelector('#modal');
// const signinbtn
const homeoption= document.querySelector('#homecontact');
const signup = document.querySelector('#sign-up');
const login = document.querySelector('#login');
const closeButtons = document.querySelectorAll('.modal-close');
const modalform = document.querySelector('.modal-form')

document.querySelector('#signin-btn').addEventListener('click' , () => {

     prev.classList.remove('hidden');
    });

     document.querySelector('#home-login-btn').addEventListener('click' , () => {
        event.preventDefault();
        homeoption.classList.add('hidden') ;
        signup.classList.remove('hidden');
    });

        document.querySelector('#home-signup-btn').addEventListener('click' , () => {
            event.preventDefault();
              login.classList.remove('hidden'); 
              homeoption.classList.add('hidden') ;      
        });

            document.querySelector('#back-login').addEventListener('click' ,() => {
                event.preventDefault();
                login.classList.add('hidden'); 
                homeoption.classList.remove('hidden') ;

            })
       
            document.querySelector('#back-signup').addEventListener('click' ,() => {
                event.preventDefault();
                signup.classList.add('hidden'); 
                homeoption.classList.remove('hidden') ;

            })
            closeButtons.forEach(close => {
                close.addEventListener('click', (event) => {
                    event.preventDefault();
                    prev.classList.add('hidden');
                });
            });

            prev.addEventListener('click' ,(event) => {
                if(event.target === prev) {
                    prev.classList.add('hidden');
                }
            });

 
            





            document.addEventListener('DOMContentLoaded', function() {
                const content = document.getElementById('image');
              
                const observer = new IntersectionObserver((entries, observer) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('animate-home');
                      observer.unobserve(entry.target);
                    }
                  });
                }, { threshold:0 });
              
                observer.observe(content);
              });

              document.addEventListener('DOMContentLoaded', function() {
                const contentser = document.getElementById('service-animate');
              
                const observer = new IntersectionObserver((entries, observer) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('animate-service');
                      observer.unobserve(entry.target);
                    }
                  });
                }, { threshold:0 });
              
                observer.observe(contentser);
              });

            
              const btnlist = document.querySelectorAll(".inside");
              const secbox = document.querySelector('#cliant .second-box');
              let lastcliked =null;

              btnlist.forEach(btnEL => {
                  btnEL.addEventListener('click', () => {
                    
                 if( btnEL !== lastcliked){
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

                     lastcliked =btnEL;
                  });
              });


             