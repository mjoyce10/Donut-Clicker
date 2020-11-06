const donutCounterElement = document.querySelector('.donut-count');
const donutsPerClickElement = document.querySelector('.donuts-per-click');
const donutsPerSecondElement = document.querySelector('.donuts-per-second');
const donutMultiplierCounterElement = document.querySelector('.donut-multiplier-count');
const autoClickerCounterElement = document.querySelector('.auto-clicker-count');
const autoClickerPriceElement = document.querySelector('.auto-clicker-price');
const donutMultiplierPriceElement = document.querySelector('.donut-multiplier-price');

// Buttons
const addDonutButton = document.querySelector('.add-donut');
const addAutoClickerButton = document.querySelector('.add-auto-clicker');
const addDonutMultiplierButton = document.querySelector('.add-donut-multiplier');
const resetGameButton = document.querySelector('.reset');

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

const updateDonutsPerSecond = function(){
    donutsPerSecondElement.innerText = donutMaker.getDonutsPerSecond();
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
    updateAutoClickerButton();
    updateDonutMultiplierButton();
})

addAutoClickerButton.addEventListener("click", function(){
    donutMaker.addAutoClicker();
    updateAutoClickerCounter();
    updateDonutCounter();
    updateAutoClickerPrice();
    updateAutoClickerButton();
    updateDonutMultiplierButton();
    updateDonutsPerSecond();
})

addDonutMultiplierButton.addEventListener("click", function(){
    donutMaker.addDonutMultiplier();
    updateDonutCounter();
    updateDonutMultiplierCounter();
    updateDonutsPerClick();
    updateDonutMultiplierPrice();
    updateDonutMultiplierButton();
    updateAutoClickerButton();
    updateDonutsPerSecond();
})

resetGameButton.addEventListener("click", function(){
    const resetGameConfirm = confirm("Are you sure you want to reset?");
    if (resetGameConfirm)
        {
            location.reload();
        }
})

const addDonutsByAutoClickers = function(){
    setInterval(function(){
        donutMaker.addDonutByAutoClicker();
        updateDonutCounter();
        updateAutoClickerButton();
        updateDonutMultiplierButton();
    }, 1000)
}

const updateAutoClickerButton = function(){
    addAutoClickerButton.disabled = donutMaker.donutCount < donutMaker.autoClickerPrice;
}

const updateDonutMultiplierButton = function(){
    addDonutMultiplierButton.disabled = donutMaker.donutCount < donutMaker.donutMultiplierPrice;
}

updateDonutCounter();
updateDonutsPerClick();
updateDonutsPerSecond();
updateAutoClickerCounter();
updateDonutMultiplierCounter();
updateAutoClickerPrice();
updateDonutMultiplierPrice();
addDonutsByAutoClickers();
updateAutoClickerButton();
updateDonutMultiplierButton();
