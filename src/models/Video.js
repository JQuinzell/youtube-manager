import { database } from 'firebase'

export default class YouTubeVideo {
    id = null
    tags = []

    constructor(id) {
        this.id = id

        this.save = this.save.bind(this)
    }

    save() {
        database().ref(`videos/${this.id}`).set({
            id: this.id,
            tags: this.tags
        })
    }

    addTag(tag) {
        this.tags.push(tag)
        this.save()
    }
}