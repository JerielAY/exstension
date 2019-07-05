document.addEventListener("DOMContentLoaded", () => {
    let images = ["pizza.jpg","chips.gif","sweets.jpg","unicorn.jpg"]
    let i = Math.floor(Math.random()*images.length)
    let pic = images[i]
    
    document.body.style.setProperty('background-image', `url(${pic})`)
})