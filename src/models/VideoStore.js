import { observable, computed } from 'mobx'
import { database } from 'firebase'
import YouTubeVideo from './Video'

const videosRef = database().ref(`/videos`)

class YouTubeVideoStore {
    @observable data = observable.map()

    constructor() {
        videosRef.on('child_added', data => {
            console.log(data.val().tags)
            let video = new YouTubeVideo(data.val().id, data.val().tags)
            this.data.set(video.id, video)
        })

        this.data = observable.map()
    }

    @computed get videos() {
        return this.data.values()
    }
    videosByTag(tag) {
        let videos = this.videos.filter(video => {
            let tagsincluded=video.tags.includes(tag)
            return tagsincluded
        })
        return videos
    }
}

export default new YouTubeVideoStore()