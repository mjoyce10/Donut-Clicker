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
        
        describe('should have donut multiplier count:', function(){
            it('should have a default count of 0', function(){
                expect(testDonutMaker.donutMultiplierCount).toBe(0);
            })
        })
        
        describe('getDonutMultiplierCount returns current number of donut multipliers', function(){
            it('should return 0 for new donut maker', function(){
                expect(testDonutMaker.getDonutMultiplierCount()).toBe(0);
            })
        })

        describe('should have donuts per click count:', function(){
            it('should have a default count of 1', function(){
                expect(testDonutMaker.donutsPerClick).toBe(1);
            })
        })
        
        describe('getDonutsPerClick returns donuts per click count', function(){
            it('should return 1 for new donut maker', function(){
                expect(testDonutMaker.getDonutsPerClick()).toBe(1);
            })
        })

        describe('should have donuts per second count:', function(){
            it('should have a default count of 0', function(){
                expect(testDonutMaker.donutsPerSecond).toBe(0);
            })
        })
        
        describe('getDonutsPerSecond returns donuts per second count', function(){
            it('should return 0 for new donut maker', function(){
                expect(testDonutMaker.getDonutsPerSecond()).toBe(0);
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
                
                testDonutMaker.donutCount = 100;
    
                testDonutMaker.addAutoClicker();
                expect(testDonutMaker.getAutoClickerCount()).toBe(1);
            })
        })

        describe('donut multiplier when add donut multiplier is clicked', function(){
            it('should add one donut multiplier', function(){
                
                testDonutMaker.donutCount = 10;
    
                testDonutMaker.addDonutMultiplier();
                expect(testDonutMaker.getDonutMultiplierCount()).toBe(1);
            })
        })

        describe('donuts when activate auto clickers event is executed', function(){
            
            describe('1 auto clicker', function(){
                it('should add one donut', function(){
                    testDonutMaker.autoClickerCount = 1;
                    testDonutMaker.addDonutByAutoClicker();
                    expect(testDonutMaker.getDonutCount()).toBe(1);
                })
            })

            describe('10 auto clickers', function(){
                it('should add ten donuts', function(){
                    testDonutMaker.autoClickerCount = 10;
                    testDonutMaker.addDonutByAutoClicker();
                    expect(testDonutMaker.getDonutCount()).toBe(10);
                })
            })
        
        })

    })

    describe('donut maker should subtract:', function(){

        describe('auto clicker cost from donut count', function(){
            it('should subtract one hundreed donuts', function(){
                
                testDonutMaker.donutCount = 100;
                
                testDonutMaker.addAutoClicker();
                expect(testDonutMaker.getDonutCount()).toBe(0);
            })
        })

        describe('donut multiplier cost from donut count', function(){
            it('should subtract ten donuts', function(){
                
                testDonutMaker.donutCount = 10;
                
                testDonutMaker.addDonutMultiplier();
                expect(testDonutMaker.getDonutCount()).toBe(0);
            })
        })
    })

    describe('donut maker should increase the cost of:', function(){

        describe('a second auto clicker', function(){
            it('after purchasing one auto clicker, the new cost (for the second auto clicker) increases by an additional ten percent', function(){
                
                testDonutMaker.donutCount = 100;
                testDonutMaker.addAutoClicker();
                
                expect(testDonutMaker.autoClickerPrice).toBe(110);
            })
        })

        describe('every additional auto clicker', function(){
            it('after purchasing a 5th auto clicker, the new cost (for the 6th auto clicker) increases by an additional ten percent', function(){
                
                testDonutMaker.donutCount = 1000;
                
                for (let i=0; i < 5; i++)
                {
                    testDonutMaker.addAutoClicker();
                }
                
                expect(testDonutMaker.autoClickerPrice).toBe(161.051);
            })
        })

        describe('a second donut multiplier', function(){
            it('after purchasing one donut multiplier, the new cost (for the second donut multiplier) increases by an additional ten percent', function(){
                
                testDonutMaker.donutCount = 10;
                testDonutMaker.addDonutMultiplier();
                
                expect(testDonutMaker.donutMultiplierPrice).toBe(11);
            })
        })

        describe('every additional donut multiplier', function(){
            it('after purchasing a 5th donut multiplier, the new cost (for the 6th donut multiplier) increases by an additional ten percent', function(){
                
                testDonutMaker.donutCount = 100;
                
                for (let i=0; i < 5; i++)
                {
                    testDonutMaker.addDonutMultiplier();
                }
                
                expect(+testDonutMaker.donutMultiplierPrice.toFixed(2)).toBe(16.11);
            })
        })
    })

    describe('ensure there are enough donuts to buy a(n):', function(){

        describe('first autoclicker', function(){
            it('should not allow user to buy an autoclicker when donut count is 0', function(){
                testDonutMaker.addAutoClicker();

                expect(testDonutMaker.getAutoClickerCount()).toBe(0);
            })
        })

        describe('any additional autoclicker', function(){
            it('should not allow user to buy an autoclicker when donut count is lower than auto clicker cost', function(){
                
                testDonutMaker.donutCount = 500;
                
                for (let i=0; i < 5; i++)
                {
                    testDonutMaker.addAutoClicker();
                }

                expect(testDonutMaker.getAutoClickerCount()).toBe(4);
            })
        })

        describe('first donut multiplier', function(){
            it('should not allow user to buy an donut multiplier when donut count is 0', function(){
                
                testDonutMaker.addDonutMultiplier();

                expect(testDonutMaker.getDonutMultiplierCount()).toBe(0);
            })
        })

        describe('any additional donut multiplier', function(){
            it('should not allow user to buy a donut multiplier when donut count is lower than donut multiplier cost', function(){
                
                testDonutMaker.donutCount = 50;
                
                for (let i=0; i < 5; i++)
                {
                    testDonutMaker.addDonutMultiplier();
                }

                expect(testDonutMaker.getDonutMultiplierCount()).toBe(4);
            })
        })
    })

    describe('if donut multipliers have been purchased, donut maker should increase:', function(){

        describe('the amount of subsequently added donuts by:', function(){

            
            describe('1.2 after the first donut multiplier is purchased', function(){
                it('donuts per click should equal 1.2', function(){
                    
                    testDonutMaker.donutCount = 10;
                    testDonutMaker.addDonutMultiplier();
                    
                    expect(testDonutMaker.getDonutsPerClick()).toBe(1.2);
                })
            })
            
            describe('by 1.2 to the xth power for subsequent multipliers', function(){
                it('should add 2.48832 donuts with five donut multipliers', function(){
                    
                    testDonutMaker.donutCount = 100;

                    for (let i = 0; i < 5; i++)
                    {
                        testDonutMaker.addDonutMultiplier();
                    }
                    
                    expect(testDonutMaker.getDonutsPerClick()).toBe(2.49);
                })
            })
        })

    })
        
})
    


