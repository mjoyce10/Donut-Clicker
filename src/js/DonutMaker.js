class DonutMaker {

    constructor() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.donutMultiplierCount = 0;
        this.donutMultiplierPrice = 10;
        this.autoClickerPrice = 100;
        this.donutsPerClick = 1;
        this.donutsPerSecond = 0;
    }
    
    getDonutCount() {
        return Number(this.donutCount.toFixed(2));
    }
    
    addDonut() {
        this.donutCount += this.donutsPerClick;
    }
    
    addDonutByAutoClicker() {
        for(let i = 0; i < this.autoClickerCount; i++)
        {
            this.addDonut();
        }
    }

    increaseDonutsPerClick() {
        this.donutsPerClick = +Math.pow(1.2, this.donutMultiplierCount).toFixed(2);
    }

    calculateDonutsPerSecond() {
        this.donutsPerSecond = this.autoClickerCount * this.donutsPerClick;
    }

    getAutoClickerCount() {
        return this.autoClickerCount;
    }

    getAutoClickerPrice() {
        return Number(this.autoClickerPrice.toFixed(2));
    }

    getDonutMultiplierCount(){
        return this.donutMultiplierCount;
    }

    getDonutMultiplierPrice(){
        return Number(this.donutMultiplierPrice.toFixed(2));
    }

    getDonutsPerClick(){
        return this.donutsPerClick;
    }

    getDonutsPerSecond(){
        this.calculateDonutsPerSecond();
        return Number(this.donutsPerSecond.toFixed(2));
    }

    addAutoClicker() {
        if (this.donutCount >= this.autoClickerPrice)
        {
            this.donutCount -=  this.autoClickerPrice;
            this.autoClickerCount += 1;
            this.autoClickerPrice += this.autoClickerPrice * .10; 
        }
    }

    addDonutMultiplier() {
        if (this.donutCount >= this.donutMultiplierPrice)
        {
            this.donutCount -= this.donutMultiplierPrice;
            this.donutMultiplierCount += 1;
            this.donutMultiplierPrice += this.donutMultiplierPrice * .10;
            this.increaseDonutsPerClick(); 
        }
    }

}