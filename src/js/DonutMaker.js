class DonutMaker {

    constructor() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.donutMultiplierCount = 0;
        this.donutMultiplierPrice = 10;
        this.autoClickerPrice = 100;
    }

    getDonutCount() {
        return this.donutCount;
    }

    addDonut() {
        this.donutCount += 1;
    }

    addDonutByAutoClicker() {
        this.donutCount += this.autoClickerCount;
    }

    getAutoClickerCount() {
        return this.autoClickerCount;
    }

    getDonutMultiplierCount(){
        return this.donutMultiplierCount;
    }

    addAutoClicker() {
        if (this.donutCount >= this.autoClickerPrice)
        {
            this.donutCount -=  Math.round(this.autoClickerPrice);
            this.autoClickerCount += 1;
            this.autoClickerPrice += this.autoClickerPrice * .10; 
        }
    }

    addDonutMultiplier() {
        if (this.donutCount >= this.donutMultiplierPrice)
        {
            this.donutCount -=  Math.round(this.donutMultiplierPrice);
            this.donutMultiplierCount += 1;
            this.donutMultiplierPrice += this.donutMultiplierPrice * .10; 
        }
    }
}