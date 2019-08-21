import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './App.css'
import Main from '../Main/Main'
import { sendTrackEvent } from '../../utils/tracking'

let cx = classNames.bind(styles)
class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.haveload = false
    loadGa()
  }

  componentDidMount() {
    if (PRODUCTION && navigator.userAgent != 'ReactSnap') {
      loadAdSense()
      performanceTrack()
    }
  }
  render() {
    return <Route component={Main} />
  }
}

function loadGa() {
  let script = document.createElement('script')

  script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-144731980-1'
  script.async = true
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
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
    const observer = new PerformanceObserver(list => {
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
const mapStateToProps = state => {
  return {}
}
export default withRouter(connect(mapStateToProps)(App))
