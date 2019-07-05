document.addEventListener("DOMContentLoaded", () => {
    let images = ["images/chips.gif","images/unicorn.jpg", "images/baker.gif", "images/noodle.gif", "images/rice.gif", "images/crystal.gif", "images/witch.gif", "images/space.gif", "images/friends.gif", "images/amused.gif", "images/fridge.gif", "images/icecream.gif", "images/fork.gif", "images/cool.gif", "images/sneak.gif"]
    let i = Math.floor(Math.random()*images.length)
    let pic = images[i]
    
    document.body.style.setProperty('background-image', `url(${pic})`)
})