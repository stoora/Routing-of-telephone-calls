var expect = require('chai').expect;
var assert = require('chai').assert;
var Dialed_number = require('./main.js').Dialed_number;
var pl = require('./main.js').price_list;

describe('rooting-of-telephone-calls', function(){
   
    describe('Telephone numbers should be inputted in the same format as in price lists', function(){
        
        it("the dialed number should be a string",()=>{
            
            assert.isString(Dialed_number);
            
        });
        
        it("price list should be filled with string",()=>{
            
            expect(pl).to.satisfy(isArrayOfStrings);
            
            function isArrayOfStrings(array){
                
                return array.every((item)=>{
                    
                    return typeof item === 'string';
                    
                });
                
            }
                
        });
        
    });
 
});
    