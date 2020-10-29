describe('addDonut', function() {
    it('returns 1 when given 0 as a parameter', function() {
        expect(addDonut(0)).toEqual(1)
    })

    it('returns 2 when given 1 as a parameter', function() {
        expect(addDonut(1)).toEqual(2)
    })

    it('returns 84 when given 83 as a parameter', function() {
        expect(addDonut(83)).toEqual(84)
    })
})

