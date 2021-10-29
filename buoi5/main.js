
var vueInstance = new Vue({
   el: '#app',
   data: {
      isOpen: false,
      selected: 2,
      color1: 255,
      color2: 255,
      color3: 255,
      imgPopup: '',
      objectClass: {
         'open' : true
      },
      listImage: [
         {
            image: './img/pexels-anna-shvets-4588065.jpg',
            number: 1
         },
         {
            image: './img/pexels-anthony-139639.jpg',
            number: 2
         },
         {
            image: './img/pexels-burst-374825.jpg',
            number: 3
         },
         {
            image: './img/pexels-carlos-spitzer-17811.jpg',
            number: 4
         },
         {
            image: './img/pexels-charles-1851164.jpg',
            number: 5
         },
         {
            image: './img/pexels-frans-van-heerden-631292.jpg',
            number: 6
         },
         {
            image: './img/pexels-gratisography-4602.jpg',
            number: 7
         },
         {
            image: './img/pexels-jan-kopřiva-3614358.jpg',
            number: 8
         },
         {
            image: './img/pexels-jeremy-bishop-2422915.jpg',
            number: 9
         },
         {
            image: './img/pexels-jim-long-949859.jpg',
            number: 10
         },
      ]
   },
   methods: {
      showPopup(image){
         console.log(image);
         this.imgPopup = image
         this.isOpen = true
      },
      closePopup(e){
        if(e.target.classList.contains("modal")){
         if(this.isOpen){
            this.isOpen = false
         }
        }
      },

     bgc: function() {
        this.color1 = Math.floor(Math.random() * 255)
        this.color2 = Math.floor(Math.random() * 255)
        this.color3 = Math.floor(Math.random() * 255)
   },


   },
   computed: {
      backgroundColor1 (){
         return `rgb(${this.color1}, ${this.color2}, ${this.color3})`
      }
      
   }
})