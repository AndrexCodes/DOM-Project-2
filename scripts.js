var color_box = document.getElementById('color-box');

function getRandomColor(){
    var red = parseInt(Math.random() * 255)
    var green = parseInt(Math.random() * 255)
    var blue = parseInt(Math.random() * 255)
    return `rgb(${red},${green},${blue})`
}

function ChangeColor(){
    var new_color = getRandomColor()
    color_box.style.backgroundColor = new_color
    console.log(new_color)
}