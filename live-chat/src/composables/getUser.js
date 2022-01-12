import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged(_user => { // If the user logs in, we can access user data through the '_user' object.
    console.log('User state change. Current user is: ', _user)
    user.value = _user
})

const getUser = () => {
    return { user }
}

export default getUser