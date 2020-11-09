const donutCounterElement = document.querySelector('.donut-count');
const donutsPerClickElement = document.querySelector('.donuts-per-click');
const donutsPerSecondElement = document.querySelector('.donuts-per-second');
const donutMultiplierCounterElement = document.querySelector('.donut-multiplier-count');
const autoClickerCounterElement = document.querySelector('.auto-clicker-count');
const autoClickerPriceElement = document.querySelector('.auto-clicker-price');
const donutMultiplierPriceElement = document.querySelector('.donut-multiplier-price');
const donutsProducedLabel = document.querySelector('.donuts-produced');

// Buttons
const addDonutButton = document.querySelector('.add-donut');
const addAutoClickerButton = document.querySelector('.add-auto-clicker');
const addDonutMultiplierButton = document.querySelector('.add-donut-multiplier');
const resetGameButton = document.querySelector('.reset');
const buttons = document.querySelectorAll('.button');

// Header/Modal Elements
const aboutTheCompanyNav = document.querySelector('.about-the-company-nav');
const aboutTheDeveloperNav = document.querySelector('.about-the-developer-nav');
const inspirationNav = document.querySelector('.inspiration-nav');
const aboutMeModal = document.querySelector('.about-me');
const aboutCompanyModal = document.querySelector('.about-company');
const cookieClickerModal = document.querySelector('.cookie-clicker')
const modal = document.querySelectorAll('.modal');
const close = document.querySelectorAll('.close');

const donutMaker = new DonutMaker();

const updateDonutCounter = function(){
    donutCounterElement.innerText = donutMaker.getDonutCount();
    if (donutMaker.getDonutCount() == 1)
        donutsProducedLabel.innerText = "Donut";
    else
        donutsProducedLabel.innerText = "Donuts";
}

const updateDonutsPerClick = function(){
    let donutsPerClick = donutMaker.getDonutsPerClick();
    if (donutsPerClick === 1)
        donutsPerClickElement.innerText = `${donutsPerClick} Donut Per Click`;
    else
        donutsPerClickElement.innerText = `${donutsPerClick} Donuts Per Click`;
}

const updateDonutsPerSecond = function(){
   let donutsPerSecond = donutMaker.getDonutsPerSecond(); 
    if (donutsPerSecond === 1)
        donutsPerSecondElement.innerText = `${donutsPerSecond} Donut Automatically Produced Per Second`;
    else
        donutsPerSecondElement.innerText = `${donutsPerSecond} Donuts Automatically Produced Per Second`;
}

const updateAutoClickerCounter = function(){
    autoClickerCounterElement.innerText = donutMaker.getAutoClickerCount();
}

const updateDonutMultiplierCounter = function(){
    donutMultiplierCounterElement.innerText = donutMaker.getDonutMultiplierCount();
}

const updateAutoClickerPrice = function(){
    autoClickerPriceElement.innerText = `Price: ${donutMaker.getAutoClickerPrice()} Donuts`;
}

const updateDonutMultiplierPrice = function(){
    donutMultiplierPriceElement.innerText = `Price: ${donutMaker.getDonutMultiplierPrice()} Donuts`;
}


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

// Header/Modal EL
aboutTheCompanyNav.addEventListener("click", function(){
    aboutCompanyModal.style.display = "block";
})

aboutTheDeveloperNav.addEventListener("click", function(){
    aboutMeModal.style.display = "block";
})

inspirationNav.addEventListener("click", function(){
    cookieClickerModal.style.display = "block";
})

close.forEach(btn => {
    btn.addEventListener("click", function(){
        modal.forEach(modal => {
            modal.style.display = "none";
        })
    })
});

window.addEventListener("click", function(event) {
    modal.forEach(modal => {

        if (event.target == modal) {
            modal.style.display = "none";
        }
    })
});

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
