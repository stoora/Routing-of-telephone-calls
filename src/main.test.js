var expect = require('chai').expect;
var assert = require('chai').assert;

var Dialed_number = require('./main.js').Dialed_number;
var pl = require('./main.js').price_list;
var any_price_list = require('./main.js').any_price_list;
var All_ops = require('./main.js').All_operators;
var nothing_found = require('./main.js').nothing_found;

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
        
        it("each price_list should have its operator name", ()=>{
            
            expect(any_price_list).to.have.property('name');
            
        });
        
        it("All price lists are pushed in one array [] to loop throuh them all", ()=>{
            
            expect(All_ops).to.be.an('array');
            
        });
        
        it('initially there is no prefixes found for a given number', ()=>{
            
            assert.isTrue(nothing_found, "should be true");
            
        });
    });
 
});
    