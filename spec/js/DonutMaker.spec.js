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
                
                for (let i=0; i < 100; i++)
                {
                    testDonutMaker.addDonut();
                }

                testDonutMaker.addAutoClicker();
                expect(testDonutMaker.getAutoClickerCount()).toBe(1);
            })
        })
    })

    describe('donut maker should subtract:', function(){

        describe('auto clicker count cost from donut count', function(){
            it('should subtract one hundreed donuts', function(){
                
                for (let i=0; i < 100; i++)
                {
                    testDonutMaker.addDonut();
                }
                
                testDonutMaker.addAutoClicker();
                expect(testDonutMaker.getDonutCount()).toBe(0);
            })
        })
    })

    describe('donut maker should increase the cost of:', function(){

        describe('a second auto clicker', function(){
            it('should increase the cost of a second auto clicker by an additional ten percent', function(){
                
                for (let i=0; i < 210; i++)
                {
                    testDonutMaker.addDonut();
                }
                
                testDonutMaker.addAutoClicker();
                testDonutMaker.addAutoClicker();
                expect(testDonutMaker.getDonutCount()).toBe(0);
            })
        })

        describe('every additional auto clicker', function(){
            it('should increase the cost of every additional auto clicker by an additional ten percent', function(){
                
                for (let i=0; i < 1000; i++)
                {
                    testDonutMaker.addDonut();
                }
                
                for (let i=0; i < 6; i++)
                {
                    testDonutMaker.addAutoClicker();
                }
                
                expect(testDonutMaker.getDonutCount()).toBe(229);
            })
        })
    })

    describe('ensure there are enough donuts to buy a(n):', function(){

        describe('autoclicker', function(){
            it('should not allow user to buy an autoclicker when donut count is 0', function(){
                testDonutMaker.addAutoClicker();

                expect(testDonutMaker.getAutoClickerCount()).toBe(0);
            })
        })

        describe('autoclicker', function(){
            it('should not allow user to buy an autoclicker when donut count is lower than auto clicker cost', function(){
                
                for (let i=0; i < 500; i++)
                {
                    testDonutMaker.addDonut();
                }
                
                for (let i=0; i < 5; i++)
                {
                    testDonutMaker.addAutoClicker();
                }

                expect(testDonutMaker.getAutoClickerCount()).toBe(4);
            })
        })
    })

})



