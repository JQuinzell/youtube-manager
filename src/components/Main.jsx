import * as React from 'react'
import CreateVideo from './CreateVideo'
import VideoGrid from './VideoGrid'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <CreateVideo />
            <VideoGrid videos={["one", "two", "three"]} />
        </div>
    }
}