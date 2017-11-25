import * as React from 'react'

export default class VideoGrid extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <ul>
            {this.props.videos.map(video => <li key={video}>video</li>)}
        </ul>
    }
}