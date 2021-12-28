const app = Vue.createApp({
    data() { // Syntax to create function inside an object
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                { title: 'Five go adventuring again', author: 'That guy', img: '../assets/image1.jpg', isFav: true},
                { title: 'Hatchet', author: 'Another guy', img: '../assets/image2.jpg', isFav: false},
                { title: 'Save the shirt', author: 'Who knows', img: '../assets/image3.jpg', isFav: true}
            ],
            //x: 0,
            //y: 0
        } // Return an object. The properties we create inside this returned object can now be used in our html page.
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks // Sets it to the opposite of what it is now. True -> false and reverse.
        },
        toggleFav(book) { // Click on book row (li) to toggle favourite status
            console.log('toggleFav')
            book.isFav = !book.isFav
        },
        handleEvent(e, data) { // Takes the event from html page and passes it through here.
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX // Curser x position in the box (relative to the top left)
            this.y = e.offsetY
        }
    },
    // Computed properties - based/depends on other properties
    computed: {
        filteredBooks() {
            return this.books.filter(book => book.isFav)  // Whatever we return here, we can use in the html template. filter() is a callback function for each item in books. Each time, if evaluates true, we keep item in the array, if false, removed from array.
        }
    }
}) // By loading https://unpkg.com/vue@3.0.2  and then loading app.js in index.html, we get access to this Vue object, and are able to initialize the app.

app.mount('#app') // We mount the app to the  <div id="app"></div> element in the dom. Now the Vue app controls everything inside this div in the html page. Any type of dynamic data that we want to output inside app element, or event/interactivity, all of that is now controlled by the app here. For this we create the object in the createApp method.







