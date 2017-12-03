import * as React from 'react'
import AddTag from './AddTag'
import { observer } from 'mobx-react'

@observer
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
                {this.props.video.tags.map((tag, i) => (
                    <div key={i} className="tagitem">{tag}</div>
                ))}
            </div>
            <AddTag video={this.props.video} />
    </div>    
    }
}