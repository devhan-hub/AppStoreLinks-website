
const menu = document.querySelector('#menu_btn');
const nav = document.querySelector('#nav-sign');
  menu.addEventListener('click' , () => {
        
       nav.classList.toggle('hidden');
  });

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

     

        

     

        
     
              



