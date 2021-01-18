import { createElement, useRef, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function useStaticContent() {
  const ref = useRef(null)
  const [firstRender, setFirstRender] = useState(true)
  const isServerPrerender = navigator.userAgent === 'ReactSnap'

  useEffect(() => {
    // check if the innerHTML is empty as client side navigation
    // need to render the component without server-side backup
    const isEmpty = ref.current && ref.current.innerHTML === ''
    if (firstRender && isServerPrerender) {
      setRender(true)
    }
  }, [])

  return [render, ref]
}

export default function StaticContent({ children, element = 'div', ...props }) {
  const location = useLocation()
  const isServerPrerender = navigator.userAgent === 'ReactSnap'
  const isFromOtherPath = location.state && location.state.fromOtherPath
  // const [render, ref] = useStaticContent()

  // if we're in the server or a spa navigation, just render it
  if (isFromOtherPath || !PRODUCTION || isServerPrerender) {
    return createElement(element, {
      ...props,
      style: {width: "100%"},
      children
    })
  }

  // avoid re-render on the client
  return createElement(element, {
    style: {width: "100%"},
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: { __html: '' }
  })
}
