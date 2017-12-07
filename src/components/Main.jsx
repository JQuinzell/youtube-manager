import * as React from 'react'
import { observer } from 'mobx-react'
import CreateVideo from './CreateVideo'
import VideoGrid from './VideoGrid'
import VideoStore from '../models/VideoStore'
import FilterTags from './FilterTags'

@observer
export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <CreateVideo />
            <FilterTags />
            <VideoGrid videos={VideoStore.videos} />
        </div>
    }
}