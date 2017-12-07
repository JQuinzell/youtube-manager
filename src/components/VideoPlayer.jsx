import * as React from 'react'
import AddTag from './AddTag'
import { observer } from 'mobx-react'

@observer
export default class VideoPlayer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const backgroundURL = `https://img.youtube.com/vi/${this.props.video.id}/default.jpg`
        return <div>
            <div
                className="videoitem" 
                style={{ backgroundImage: `url(${backgroundURL})`}}
            />

            <div className="taggrid">
                {this.props.video.tags.map((tag, i) => (
                    <div key={i} className="tagitem">{tag}</div>
                ))}
            </div>
            <AddTag video={this.props.video} />
    </div>    
    }
}