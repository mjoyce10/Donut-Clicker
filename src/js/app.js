const donutCounterElement = document.querySelector('.donut-count');
const donutsPerClickElement = document.querySelector('.donuts-per-click');
const donutMultiplierCounterElement = document.querySelector('.donut-multiplier-count');
const autoClickerCounterElement = document.querySelector('.auto-clicker-count');
const autoClickerPriceElement = document.querySelector('.auto-clicker-price');
const donutMultiplierPriceElement = document.querySelector('.donut-multiplier-price');

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

const updateDonutsPerClick = function(){
    donutsPerClickElement.innerText = donutMaker.getDonutsPerClick();
}

const updateAutoClickerCounter = function(){
    autoClickerCounterElement.innerText = donutMaker.getAutoClickerCount();
}

const updateDonutMultiplierCounter = function(){
    donutMultiplierCounterElement.innerText = donutMaker.getDonutMultiplierCount();
}

const updateAutoClickerPrice = function(){
    autoClickerPriceElement.innerText = donutMaker.getAutoClickerPrice();
}

const updateDonutMultiplierPrice = function(){
    donutMultiplierPriceElement.innerText = donutMaker.getDonutMultiplierPrice();
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
    updateAutoClickerPrice();
})

addDonutMultiplierButton.addEventListener("click", function(){
    donutMaker.addDonutMultiplier();
    updateDonutCounter();
    updateDonutMultiplierCounter();
    updateDonutsPerClick();
    updateDonutMultiplierPrice();
})

const addDonutsByAutoClickers = function(){
    setInterval(function(){
        donutMaker.addDonutByAutoClicker();
        updateDonutCounter();
    }, 10000)
}

updateDonutCounter();
updateDonutsPerClick();
updateAutoClickerCounter();
updateDonutMultiplierCounter();
updateAutoClickerPrice();
updateDonutMultiplierPrice();
addDonutsByAutoClickers();