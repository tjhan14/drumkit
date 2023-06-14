var buttons = document.querySelectorAll("body > div > button")

for (let i = 0; i < buttons.length; i++) {
    document.querySelectorAll("body > div > button")[i].addEventListener('click', function(){
       var buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML)
    })
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})

function makeSound(key){
    switch (key) {
        case 'w':
            var soundW = new Audio('sounds/crash.mp3')
            soundW.play()
            break;

        case "a":
            var soundA = new Audio('sounds/kick-bass.mp3')
            soundA.play()
            break;

        case "s":
            var soundS = new Audio('sounds/snare.mp3')
            soundS.play()
            break;

        case "d":
            var soundD = new Audio('sounds/tom-1.mp3')
            soundD.play()
            break;

        case "j":
            var soundJ = new Audio('sounds/tom-2.mp3')
            soundJ.play()
            break;

        case "k":
            var soundK = new Audio('sounds/tom-3.mp3')
            soundK.play()
            break;

        case "l":
            var soundL = new Audio('sounds/tom-4.mp3')
            soundL.play()
            break;
    
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector('.' + currentKey)
    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed")}, 100)
}