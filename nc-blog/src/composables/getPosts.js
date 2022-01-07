import { ref } from "vue";

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
        let data = await fetch("http://localhost:3000/posts"); 
        if (!data.ok) {
            
            throw Error("No data available"); 
        }
        posts.value = await data.json(); 
        } catch (err) {
        error.value = err.message; 
        console.log(error.value);
        }
    };

    return { posts, error, load } // Here we also have to return the load function, in order to capture it and be able to run it from our Home.vue
}

export default getPosts