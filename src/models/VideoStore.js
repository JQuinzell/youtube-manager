import { observable, computed } from 'mobx'
import { database } from 'firebase'

class YouTubeVideoStore {
    @observable data = observable.map()

    constructor() {
        this.data = observable.map()
        this.fetchInitialData = this.fetchInitialData.bind(this)
    }

    @computed get videos() {
        return this.data.values()
    }

    fetchInitialData() {
        database().ref(`/videos`).once('value').then(snapshot => {
            this.data = observable.map(snapshot.val())
            console.log(this.videos.map(v => ({
                id: v.id,
                tags: v.tags
            })))
        })
    }
}

export default new YouTubeVideoStore()