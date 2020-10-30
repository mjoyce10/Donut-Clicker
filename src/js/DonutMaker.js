class DonutMaker {

    constructor() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickerPrice = 100;
    }

    getDonutCount() {
        return this.donutCount;
    }

    addDonut() {
        this.donutCount += 1;
    }

    getAutoClickerCount() {
        return this.autoClickerCount;
    }

    addAutoClicker() {
        if (this.donutCount >= this.autoClickerPrice)
        {
            this.donutCount -=  Math.round(this.autoClickerPrice);
            this.autoClickerCount += 1;
            this.autoClickerPrice += this.autoClickerPrice * .10; 
        }

        else
            this.autoClickerCount += 0
    }
}