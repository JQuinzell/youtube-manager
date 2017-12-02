import * as React from 'react'
import VideoPlayer from './VideoPlayer'
export default class VideoGrid extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="videogrid"> 
            {this.props.videos.map(video => <VideoPlayer video={video} key={video.id} className="videoitem" />)}
        </div>
    }
}