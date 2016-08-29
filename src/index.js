const windowSizer = () => {
  let windowSizer = document.createElement('div')
  windowSizer.style.position = 'fixed'
  windowSizer.style.top = '0'
  windowSizer.style.left = '0'
  windowSizer.style.background = 'white'
  windowSizer.style.padding = '0.25em 0.5em'
  windowSizer.style.border = '1px solid #ddd'
  windowSizer.style.zIndex = '10000'
  document.body.appendChild(windowSizer)

  window.addEventListener('resize', e => {
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    windowSizer.textContent = `${width}px x ${height}px`
  })
}

export default windowSizer