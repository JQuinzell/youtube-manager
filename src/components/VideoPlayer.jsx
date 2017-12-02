import * as React from 'react'

export default class VideoPlayer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <iframe
            className="videoitem" 
            width="150" 
            height="150" 
            src={`https://www.youtube.com/embed/${this.props.video.id}`}
            frameborder="0" 
            allowfullscreen></iframe>
    }
}