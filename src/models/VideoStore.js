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
}

export default new YouTubeVideoStore()