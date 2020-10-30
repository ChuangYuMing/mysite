import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import Main from '../Main/Main'
// import { sendTrackEvent } from '../../utils/tracking'
// import debounce from '../../utils/debounce'

function App() {
  useEffect(() => {
    if (PRODUCTION && navigator.userAgent != 'ReactSnap') {
      // loadAdSense()
      // this.scrollDepthTrack()
    }
  }, []);

  function scrollDepthTrack() {
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

  return <Route component={Main} />
}




const mapStateToProps = (state) => {
  return {}
}
export default withRouter(connect(mapStateToProps)(App))
