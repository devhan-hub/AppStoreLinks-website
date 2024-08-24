/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
     screens:{
       sm:'600px',
       md:'785px',
       lg:'1010px',
       xl:'1200px',
       
     },
    extend: {
      borderRadius:{
          '20rem':'3.5rem',
          '45px':'45px',
      },
      borderWidth:{
        thin:'1px',
      },
         height:{
           heighttin:'2px',
         },
         translate:{
          thretee:'30px'
         },
         maxWidth:{
          '1000px':'1000px',
          '700px':'700px',
          '500px':'500px',
         },
         boxShadow:{
          boxshadow: '0 0 15px rgba(0,0,0,0.1)',
         },
         screens:{
          mdet:'600px',
         },
         
       colors: {
      blueIsh:'#4b8ef1',
      blueIshLight:'rgba(91,104,235,1)',
      blueIshSup:'rgba(40,225,253,1)',
  },
  animation:{
     homediv:'homediv 2s ease both',
     home:'home 2s ease both', 
     service:'service 2s ease both',
     hover:'hover .2s ease-out both',
     navstart:'service 1.5s ease both',
    opacity:'opacity .3s ese both',
    secondboxopacity:'secondboxopacity 1s ease both',
   
  },

  transitionProperty:{
     height:'height',
  },
 
  
  keyframes:{
     homediv:{
        '0%':{left:'-1000px', opacity:'0'},
        '100%':{left:'0px' , opacity:'1'},
     },
     home:{
      '0%':{right:'-1000px',opacity:'0'},
      '100%':{right:'0px', opacity:'1'},
   },

   service:{
    '0%':{top:'-1000px',opacity:'0'},
    '100%':{top:'0px', opacity:'1'},
 },

 hover:{
     '0%':{backgroundPosition:'left bottom'},
     '100%':{backgroundPosition:'right top'},
 },
     navstart:{
      '0%':{top:'-1000px',opacity:'0'},
      '100%':{top:'0px', opacity:'1'},
     },
     opacity:{
      '0%':{opacity:'0'},
      '100%':{ opacity:'1'},
     },
     secondboxopacity:{
         '0%':{opacity:'0' , left:'-60px'},
      '100%':{ opacity:'1' ,left:'0px'},
     },
    
  },

    translate:{
      'mytranslation':'translateY:(50%) ,translate(50%) ',
    },
  backgroundImage:{
    'footer':'url(../img/footer-bg.png)',
    'service':'url(../img/service-icon-01.png)',
  },
},
  },
  plugins: [],
};

