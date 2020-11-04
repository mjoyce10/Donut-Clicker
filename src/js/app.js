const donutCounterElement = document.querySelector('.donut-count');
const donutMultiplierElement = document.querySelector('.donuts-per-add');
const addDonutButton = document.querySelector('.add-donut')

const donutMaker = new DonutMaker();

const updateDonutCounter = function(){
    donutCounterElement.innerText = donutMaker.getDonutCount();
}

const updateDonutMultiplier = function(){
    donutMultiplierElement.innerText = donutMaker.getDonutsPerAdd();
}



addDonutButton.addEventListener("click", function(){
    donutMaker.addDonut();
    updateDonutCounter();
    })

updateDonutCounter();
updateDonutMultiplier();