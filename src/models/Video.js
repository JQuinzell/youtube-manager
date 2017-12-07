import { database } from 'firebase'
import { observable } from 'mobx'

export default class YouTubeVideo {
    id = null
    @observable tags = []

    constructor(id, tags=[]) {
        this.id = id
        this.tags = observable(tags)

        this.save = this.save.bind(this)
        this.addTag = this.addTag.bind(this)
    }

    save() {
        database().ref(`videos/${this.id}`).set({
            id: this.id,
            tags: this.tags.slice()
        })
    }

    addTag(tag) {
        this.tags.push(tag)
        this.save()
    }
}