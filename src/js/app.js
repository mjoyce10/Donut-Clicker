const donutCounterElement = document.querySelector('.donut-count');
const donutMultiplierElement = document.querySelector('.donuts-per-add');
const autoClickerCounterElement = document.querySelector('.auto-clicker-count');
const addDonutButton = document.querySelector('.add-donut');
const addAutoClickerButton = document.querySelector('.add-auto-clicker');

const donutMaker = new DonutMaker();

const updateDonutCounter = function(){
    donutCounterElement.innerText = donutMaker.getDonutCount();
}

const updateDonutMultiplier = function(){
    donutMultiplierElement.innerText = donutMaker.getDonutsPerAdd();
}

const updateAutoClickerCounter = function(){
    autoClickerCounterElement.innerText = donutMaker.getAutoClickerCount();
}

addDonutButton.addEventListener("click", function(){
    donutMaker.addDonut();
    updateDonutCounter();
})

addAutoClickerButton.addEventListener("click", function(){
    donutMaker.addAutoClicker();
    updateAutoClickerCounter();
    updateDonutCounter();
})

updateDonutCounter();
updateDonutMultiplier();
updateAutoClickerCounter();