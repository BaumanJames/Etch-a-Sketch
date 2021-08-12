//how i will complete this, use the slider value to 
//determine what box size for the EAS, then grab the div and on hover
//add a class that will add a color. to do a rainbow one just do a 
//math floor of random number *256 for the rgb value, and change that 
//color property of the div
let slider = document.querySelector('input');
let sliderValue = document.querySelector('input').value;
let gridArea = sliderValue * sliderValue
const black = document.querySelector('#black');
const rainbow = document.querySelector('#rainbow');
const eraser = document.querySelector('#eraser');
const clear = document.querySelector('#clear');
const container = document.querySelector('#container');
let color = 'black';

function createGrid (){
    sliderValue = document.querySelector('input').value;
    let gridArea = sliderValue * sliderValue;
    for (let i = 0; i<= gridArea; i++){
        let gridBlock = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${sliderValue}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${sliderValue}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridBlock);
    }
    var gridDivs = container.querySelectorAll('div');
    gridDivs.forEach(gridDivs => gridDivs.addEventListener('mouseover', function (e){
        changeColor(e.target)}));
}
// creates first grid at value 16
createGrid();
// have a value change based on the buttons and depending on the value do what the buttons say
black.addEventListener('click', function(){
    color = "black";
})
rainbow.addEventListener('click', ()=>{
    color = 'rainbow';
})
eraser.addEventListener('click', ()=>{
    color = 'eraser';
})
function changeColor(source){  
    let random = Math.floor(Math.random()* 360);
    switch (color){
        case 'black': 
            source.style.backgroundColor = 'black';
            break;
        case 'rainbow':
            source.style.backgroundColor = `hsl(${random}, 100%, 50%)`;
            break;
        case 'eraser':
            source.style.backgroundColor = '';
            break;
    }
    
}

//clear grid
function shakeGrid(){
    container.querySelectorAll('div').forEach((e)=>
    e.parentNode.removeChild(e));
}
clear.addEventListener('click', (e)=>{
    shakeGrid();
    createGrid();
});
//slider number adjustments
slider.addEventListener('input', function(e){
    let dimensions = document.querySelector('#slider');
    sliderValue = document.querySelector('input').value;
    dimensions.textContent = `${sliderValue} x ${sliderValue}`;
});

//slider grid adjustments
slider.addEventListener('mouseup', function(e){
    shakeGrid();
    sliderValue = document.querySelector('input').value;
    createGrid();
})