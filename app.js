const click = document.querySelector(".btn-click")

click.addEventListener("click", rasgeleRenk)

function rasgeleRenk () {
    const randomColor = getRandomColor()
    document.body.style.backgroundColor = randomColor;
}


const mouseOver =document.querySelector(".btn-over")
console.log(mouseOver);

mouseOver.onmouseover= () => {
    const randomColor = getRandomColor()
    document.body.style.backgroundColor = randomColor;

}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 8; i++) {
        color += letters[Math.ceil(Math.random() * 15)];
    }
    return color;
}


