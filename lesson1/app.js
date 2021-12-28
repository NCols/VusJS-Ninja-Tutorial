const app = Vue.createApp({
    data() { // Syntax to create function inside an object
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            showMoviesMovies: true,
        } // Return an object. The properties we create inside this returned object can now be used in our html page.
    },
    methods: {
        changeTitle() {
            // console.log('click')
            this.title = 'Lords of the schrinks' // 'this' references the component itself, and is required here to access the title property.
        },
        changeTitle2(titleFromIndexHtml) {
            this.title = titleFromIndexHtml
        },
        hideShowMovies() {
            this.showMoviesMovies = !this.showMoviesMovies // Sets it to the opposite of what it is now. True -> false and reverse.
        }
    }
}) // By loading https://unpkg.com/vue@3.0.2  and then loading app.js in index.html, we get access to this Vue object, and are able to initialize the app.

app.mount('#app') // We mount the app to the  <div id="app"></div> element in the dom. Now the Vue app controls everything inside this div in the html page. Any type of dynamic data that we want to output inside app element, or event/interactivity, all of that is now controlled by the app here. For this we create the object in the createApp method.







