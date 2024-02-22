import { capitalizeText, createArray } from "../index.js";
import { assert } from "chai"; // Using Assert style
import { expect } from "chai"; // Using Expect style
import { should } from "chai"; // Using Should style
should();

//suite
//capitalizeText
describe("capitalizeText function", function () {
    //testcases
    //Matchers
    //test that the function takes a string and return it after capitalize it
    it("test that if i pass 'myname' result should be 'myname'", function () {

        //  expect(capitalizeText('myname')).to.be.equal('myname')
        assert.equal(capitalizeText('myname'), 'MYNAME')

    });

    //test if the function takes number it will throw type error says parameter should be string
    it('test that function throw error if parameter is number', () => {
        expect(function () {
            capitalizeText(12)
        }).to.throw()
    })
    //test that the function takes a string  it will return a string 
    it('return string', function () {
        expect(capitalizeText('myname')).to.be.a('string')
    })
});


describe('test createArray', function () {
    //test that the return value of type array
    it('thest reutrn type is array', function () {
        expect(createArray(5)).to.be.an('array')
    })
    it('thest reutrn include spacific value', function () {
        expect(createArray(3)).to.be.include(1)
    })

    //test if we pass 3 it will return array of length 3 and test it's include 1
    it('thest reutrn type is array,thest reutrn include spacific value', function () {
        //chain test cases
        expect(createArray(3)).to.have.lengthOf(3).to.be.include(1)
    })
    //try to use different styles (expect , should , assert)
    it('should return an array  (using should)', function () {

        createArray(3).should.be.an('array')

    });


})