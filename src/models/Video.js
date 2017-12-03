import { database } from 'firebase'
import { observable } from 'mobx'

export default class YouTubeVideo {
    id = null
    @observable tags = []

    constructor(id, tags = []) {
        this.id = id
        this.tags = tags

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
        console.log("Adding tag", this.tags)
        this.save()
    }
}