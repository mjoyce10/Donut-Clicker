const donutCounterElement = document.querySelector('.donut-count');
const donutMultiplierElement = document.querySelector('.donuts-per-click');
const autoClickerCounterElement = document.querySelector('.auto-clicker-count');

// Buttons
const addDonutButton = document.querySelector('.add-donut');
const addAutoClickerButton = document.querySelector('.add-auto-clicker');
const addDonutMultiplierButton = document.querySelector('.add-donut-multiplier');

// Header Elements
const aboutTheCompany = document.querySelector('.about-the-company');
const aboutTheDeveloper = document.querySelector('.about-the-developer');

const donutMaker = new DonutMaker();

const updateDonutCounter = function(){
    donutCounterElement.innerText = donutMaker.getDonutCount();
}

const updateDonutMultiplier = function(){
    donutMultiplierElement.innerText = donutMaker.getDonutsPerClick();
}

const updateAutoClickerCounter = function(){
    autoClickerCounterElement.innerText = donutMaker.getAutoClickerCount();
}

// Header Links
aboutTheCompany.addEventListener("click", function(){
    alert("This is an about for the donut company.");
})

aboutTheDeveloper.addEventListener("click", function(){
    alert("This is an about for me.");
})

addDonutButton.addEventListener("click", function(){
    donutMaker.addDonut();
    updateDonutCounter();
})

addAutoClickerButton.addEventListener("click", function(){
    donutMaker.addAutoClicker();
    updateAutoClickerCounter();
    updateDonutCounter();
})

addDonutMultiplierButton.addEventListener("click", function(){
    donutMaker.addDonutMultiplier();
    updateDonutCounter();
    updateDonutMultiplier();
})

updateDonutCounter();
updateDonutMultiplier();
updateAutoClickerCounter();