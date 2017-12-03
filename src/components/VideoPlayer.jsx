import * as React from 'react'

export default class VideoPlayer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <iframe
            className="videoitem" 
            width="266" 
            height="150" 
            src={`https://www.youtube.com/embed/${this.props.video.id}`}
            frameborder="0" 
            allowfullscreen></iframe>

            <div className="taggrid">
                <div className="tagitem"> Tag 1</div>
                <div className="tagitem"> Tag 2</div>
                <div className="tagitem"> Tag 3</div>
                <div className="tagitem"> Tag 4</div>
            </div>    
    </div>    
    }
}