 const app = Vue.createApp({
   data(){
     return{
       // author:{
       //   name:'atish'
       // },
       // km:0,
       // mtr:0,
       //   gallon:0,
       //   liter:0,
       //  num:9,
       //  decision:false,
       //  names:['atish','sumit','vaibhav'],
       //  fullNames:[
       //    {first:"Bruce",last:"Banner"},
       //    {first:"Prince",last:"Diana"}
       //  ],
        // actors:[
        //   { name:'Brad Pitt',
        //     movies: ['once upon a time in hollywood','Fight Club']
        //   },
        //   {
        //     name:'Leonardo DiCaprio',
        //     movies: ['Titanic','Wolf of wall Street']
        //   },
        //   {
        //     name:'Johnny Depp',
        //     movies: ['Piretes of caribbian']
        //   }
        // ],
        // infos:{
        //   name:"Atish",
        //   channel:"youtube",
        //   location:"latur",
        //   pin:1234
        // },
        // movie:{
        //   name:"harry potter"
        // },
        // vHtml:"<h1>this is Html Tag.</h1>",
        // headingID:"heading",
        // issuccess:"alert alert-danger",
        // iscenter:true,
        // condition1:true,
        // condition2:true,
        // highlighColor: 'orange',
        // sizes:50,
        // fms:'"Lucida Console", "Courier New", "monospace"',
        objstyle:{
        color:'red',
        fontSize:'60px',
        background:'blue'
        },
        objstyle2:{
          fontFamily:'"Lucida Console", "Courier New", "monospace"',
        }

     }
   },
  watch:{
    km(val){
      this.km = val;
      this.mtr = val * 1000;
    },
    mtr(val){
      this.km = val/1000;
      this.mtr = val;
    },
    gallon(val){
      this.gallon = val;
      this.liter = val * 3.785412;
    },
    liter(val){
      this.gallon = val /3.785412;
            this.liter = val;
    }
  }
 })
 app.mount('#app')
