const windowSizer = (options = {
  location: 'top-left'
}) => {
  let windowSizer = document.createElement('div')
  let defaults = {location: 'top-left'}

  options = Object.assign(options, defaults)
  setSizerStyle(windowSizer, options.location)
  document.body.appendChild(windowSizer)

  window.addEventListener('resize', e => {
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    windowSizer.textContent = `${width}px x ${height}px`
    windowSizer.style.opacity = '1'
    windowSizer.style.zIndex = '10000'
    windowSizer.transitionEnd = false;

    if (windowSizer.timeout) {window.clearTimeout(windowSizer.timeout) }
    windowSizer.timeout = setTimeout(function (windowSizer) {
      windowSizer.style.opacity = '0'
      windowSizer.transitionEnd = true;
      }, 3000, windowSizer)
  })

  windowSizer.addEventListener('transitionend', e => {
    if (windowSizer.transitionEnd) {
      windowSizer.style.zIndex = '-100'
    }
  })
}

const setSizerStyle = (windowSizer, location) => {
  windowSizer.style.position = 'fixed'
  windowSizer.style.padding = '0.25em 0.5em'
  windowSizer.style.border = '1px solid #ddd'
  windowSizer.style.background = 'white'
  windowSizer.style.zIndex = '-100'
  windowSizer.style.transition = 'opacity 0.3s ease-in-out, zindex 0s 0.3s linear'
  windowSizer.style.opacity = '0'

  switch (location) {
    case 'top-left':
      windowSizer.style.top = '0'
      windowSizer.style.right = 'auto'
      windowSizer.style.left = '0'
    case 'top-right':
      windowSizer.style.top = '0'
      windowSizer.style.right = '0'
      windowSizer.style.left = 'auto'
    break
    case 'bottom-right':
      windowSizer.style.right = '0'
      windowSizer.style.bottom = '0'
      windowSizer.style.left = 'auto'
    break
    case 'bottom-left':
      windowSizer.style.right = 'auto'
      windowSizer.style.bottom = '0'
      windowSizer.style.left = '0'
    break
    default:
    break
  }
}

export default windowSizer
