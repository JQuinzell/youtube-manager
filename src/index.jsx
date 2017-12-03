import * as React from 'react'
import ReactDOM from 'react-dom'
import './firebase'
import Main from './components/Main'
import './main.css'

import YouTubeVideoStore from './models/VideoStore'
import YouTubeVideo from './models/Video'

ReactDOM.render(
    <Main />,
    document.getElementById('app')
)