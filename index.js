window.addEventListener('DOMContentLoaded', () => {

  VANTA.BIRDS({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 000,
    quantity: 3.00
  })

  setTimeout(() => {
    const main = document.querySelector('main');
    main.style.opacity = 1
    main.style.filter = "blur(0px)"
  }, 1000)
})
