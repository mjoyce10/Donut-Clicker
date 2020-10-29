class DonutMaker {

    constructor() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
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
        this.autoClickerCount += 1;
        this.donutCount -= 100;
    }
}