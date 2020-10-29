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
    })

    describe('donut maker should add donuts:', function(){

        describe('when add donut is clicked', function(){
            it('should add one donut', function(){
                testDonutMaker.addDonut();
                expect(testDonutMaker.getDonutCount()).toBe(1);
            })
        })
    })
})



