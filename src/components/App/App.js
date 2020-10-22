import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import Main from '../Main/Main'
import { sendTrackEvent } from '../../utils/tracking'
import debounce from '../../utils/debounce'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.haveload = false
    this.maxScrollDepth = 0
    // this.scrollDepthTrack = this.scrollDepthTrack.bind(this)
  }

  scrollDepthTrack() {
    if (window.pageYOffset === undefined) {
      return
    }

    const updateMaxDepth = debounce(() => {
      this.maxScrollDepth = Math.max(window.pageYOffset, this.maxScrollDepth)
    }, 200)

    document.addEventListener('scroll', updateMaxDepth)

    // not use beforeunload
    window.addEventListener('beforeunload', (event) => {
      sendTrackEvent({
        category: 'scroll',
        action: 'scroll_depth',
        value: this.maxScrollDepth
      })
    })
  }

  componentDidMount() {
    if (PRODUCTION && navigator.userAgent != 'ReactSnap') {
      // loadAdSense()
      // performanceTrack()
      // this.scrollDepthTrack()
    }
  }
  render() {
    return <Route component={Main} />
  }
}

function loadAdSense() {
  let script = document.createElement('script')

  script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
  script.async = true
  document.head.appendChild(script)
  ;(window.adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: 'ca-pub-9548714402616173',
    enable_page_level_ads: true
  })
}

function performanceTrack() {
  if (PerformanceObserver) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // `name` will be either 'first-paint' or 'first-contentful-paint'.
        const metricName = entry.name
        const time = Math.round(entry.startTime + entry.duration)

        sendTrackEvent({
          category: 'Performance Metrics',
          action: metricName,
          value: time
        })
      }
    })
    observer.observe({ entryTypes: ['paint'] })
  }
}
const mapStateToProps = (state) => {
  return {}
}
export default withRouter(connect(mapStateToProps)(App))
