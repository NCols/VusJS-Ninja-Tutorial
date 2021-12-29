// Vue CLI allows us to boilerplate different types of SPAs

const app = Vue.createApp({
    data() {
      return {
        showBooks: true,
        books: [
          { title: 'name of the wind', author: 'patrick rothfuss', img: '../assets/image1.jpg', isFav: true },
          { title: 'the way of kings', author: 'brandon sanderson', img: '../assets/image2.jpg', isFav: false },
          { title: 'the final empire', author: 'brandon sanderson', img: '../assets/image3.jpg', isFav: true },
        ],
      }
    },
    methods: {
      toggleShowBooks() {
        this.showBooks =  !this.showBooks
      },
      toggleFav(book) {
        book.isFav = !book.isFav;
        
      },
    },
    computed: {
      filteredBooks() {
        return this.books.filter(book => book.isFav)
      }
    }
  })
  
  app.mount('#app')
  
