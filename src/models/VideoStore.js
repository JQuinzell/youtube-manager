import { observable, computed } from 'mobx'
import { database } from 'firebase'
import YouTubeVideo from './Video'

const videosRef = database().ref(`/videos`)

class YouTubeVideoStore {
    @observable data = observable.map()

    constructor() {
        videosRef.on('child_added', data => {
            let video = new YouTubeVideo(data.val().id)
            this.data.set(video.id, video)
        })

        this.data = observable.map()
        this.fetchInitialData = this.fetchInitialData.bind(this)
    }

    @computed get videos() {
        return this.data.values()
    }
}

export default new YouTubeVideoStore()