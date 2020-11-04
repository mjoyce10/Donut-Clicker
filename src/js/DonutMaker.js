class DonutMaker {

    constructor() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.donutMultiplierCount = 0;
        this.donutMultiplierPrice = 10;
        this.autoClickerPrice = 100;
        this.donutsPerClick = 1;
    }

    getDonutCount() {
        return Number(this.donutCount.toFixed(2));
    }

    addDonut() {
        if (this.donutMultiplierCount >= 1)
            this.donutCount += this.donutsPerClick;
        else
            this.donutCount += 1;
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

    getAutoClickerCount() {
        return this.autoClickerCount;
    }

    getDonutMultiplierCount(){
        return this.donutMultiplierCount;
    }

    getDonutsPerClick(){
        return this.donutsPerClick;
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
            this.increaseDonutsPerClick(); 
        }
    }

}