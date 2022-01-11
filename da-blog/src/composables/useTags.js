// Take in array of posts
// create a new tag set (no duplicates)
// add the tags of each post to the tag set
// return a single array of tags based on the set

import { ref } from 'vue'

const useTags = (posts) => {

    const tags = ref([])
    const tagSet = new Set() // no need for a ref here since we're only going to use tagSet inside our function

    posts.forEach((item) => {
        item.tags.forEach((tag) => {
            tagSet.add(tag)
        })
    })

    tags.value = [...tagSet] // Takes every element of the tagSet and spreads them out into the array

    return { tags }
}

export default useTags