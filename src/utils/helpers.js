export function checkBodyWidth() {
  const bodyWidth = document.body.offsetWidth
  if (bodyWidth === window.innerWidth) {
    document.body.classList.add('no-scroll')
  } else {
    document.body.classList.remove('no-scroll')
  }
}