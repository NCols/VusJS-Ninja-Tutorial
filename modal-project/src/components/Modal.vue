<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale', dark: theme === 'dark'}">
            <h1>
                {{ header }}
            </h1>
            <p>
                {{ text}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['header', 'text', 'theme'],  // 'props' is required and must be an array, allows us to pass any value or props that we will be accepting into this component. Here we passed header from App.vue -> 'Modal header=""'. We can now access it in the template.
    methods: {
        closeModal() {
            this.$emit('close')  // This is how we emit an event. On App.vue we will have a custom event listener on the Modal (@close=""). Between '' we put the name of the event we want to emit. Can be whatever we want.
        }
    }
}
</script>


<style>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
    .modal h1 { /* '.modal' allows to only apply h1 styling to the modal class from the template. */
        color: greenyellow;
        padding-bottom: 20px;
    }

    .modal.sale {
        background: crimson;
        color: white;
    }
    .modal.sale h1 {
        color: white;
    }

    .modal.dark {
        background: rgb(53, 51, 51);
    }
</style>