import * as React from 'react'
import ReactDOM from 'react-dom'
import './firebase'

import YouTubeVideoStore from './models/VideoStore'
import YouTubeVideo from './models/Video'

new YouTubeVideo('EgfOHQKldy0').save()
new YouTubeVideo('qwOdU02SE0w').save()
YouTubeVideoStore.fetchInitialData()

ReactDOM.render(
    <h1>HELLO</h1>,
    document.getElementById('app')
)