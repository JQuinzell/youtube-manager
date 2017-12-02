import * as React from 'react'

export default class VideoPlayer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <iframe 
            width="560" 
            height="315" 
            src={`https://www.youtube.com/embed/${this.props.id}`}
            frameborder="0" 
            allowfullscreen></iframe>
    }
}