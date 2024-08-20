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
          boxshadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) inset ',
         },
         screens:{
          mdet:'600px',
         },
         
       colors: {
      blueIsh:'#4b8ef1',
      blueIshLight:'rgba(91,104,235,1)',
      blueIshSup:'rgba(40,225,253,1)',
  },

  backgroundImage:{
    'footer':'url(../img/footer-bg.png)',
  },
},
  },
  plugins: [],
};

