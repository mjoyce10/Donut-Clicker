class DonutMaker {

    constructor() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.donutMultiplierCount = 0;
        this.donutMultiplierPrice = 10;
        this.autoClickerPrice = 100;
        this.donutsPerAdd = +Math.pow(1.2, this.donutMultiplierCount).toFixed(2);
    }

    getDonutCount() {
        return this.donutCount;
    }

    addDonut() {
        if (this.donutMultiplierCount >= 1)
            this.donutCount += this.donutsPerAdd;
        else
            this.donutCount += 1;
    }

    addDonutByAutoClicker() {
        for(let i = 0; i < this.autoClickerCount; i++)
        {
            this.addDonut();
        }
    }

    getAutoClickerCount() {
        return this.autoClickerCount;
    }

    getDonutMultiplierCount(){
        return this.donutMultiplierCount;
    }

    getDonutsPerAdd(){
        return this.donutsPerAdd;
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