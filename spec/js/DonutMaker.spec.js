describe('Donut maker should behave like a donut maker:', function(){

    let testDonutMaker;
    
    beforeEach( function(){
        testDonutMaker = new DonutMaker();
    })

    describe('Donut maker should have properties:', function(){

        describe('should have donut count:', function(){
            it('should have a default count of 0', function(){
                expect(testDonutMaker.donutCount).toBe(0);
            })
        })

        describe('getDonutCount returns current number of donuts', function(){
            it('should return 0 for new donut maker', function(){
                expect(testDonutMaker.getDonutCount()).toBe(0);
            })
        })

        describe('should have auto clicker count:', function(){
            it('should have a default count of 0', function(){
                expect(testDonutMaker.autoClickerCount).toBe(0);
            })
        })

        describe('getAutoClickerCount returns current number of auto clickers', function(){
            it('should return 0 for new donut maker', function(){
                expect(testDonutMaker.getAutoClickerCount()).toBe(0);
            })
        })
    })

    describe('donut maker should add:', function(){

        describe('donuts when add donut is clicked', function(){
            it('should add one donut', function(){
                testDonutMaker.addDonut();
                expect(testDonutMaker.getDonutCount()).toBe(1);
            })
        })

        describe('auto clicker when add auto clicker is clicked', function(){
            it('should add one auto clicker', function(){
                testDonutMaker.addAutoClicker();
                expect(testDonutMaker.getAutoClickerCount()).toBe(1);
            })
        })
    })

    describe('donut maker should subtract:', function(){

        describe('auto clicker count cost from donut count', function(){
            it('should subtract one hundreed donuts', function(){
                testDonutMaker.addAutoClicker();
                expect(testDonutMaker.getDonutCount()).toBe(-100);
            })
        })
    })

})



