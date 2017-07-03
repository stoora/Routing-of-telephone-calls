var expect = require('chai').expect;
var assert = require('chai').assert;

var Dialed_number = require('./main.js').Dialed_number;
var pl = require('./main.js').price_list;
var any_price_list = require('./main.js').any_price_list;
var All_ops = require('./main.js').All_operators;
var nothing_found = require('./main.js').nothing_found;
var prefixes_found = require('./main.js').prefixes_found;
var nothing_found = require('./main.js').nothing_found;
var couple = require('./main.js').couple;
var couples = require('./main.js').couples;

describe('rooting-of-telephone-calls - main.js', function(){
   
    describe('Telephone numbers should be inputted in the same format as in price lists', function(){
        
        it("the dialed number should be a string",()=>{
            
            assert.isString(Dialed_number);
            
        });
        
        it("price list should be filled with strings",()=>{
            
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
        
        
    });
 
});
    
describe('rooting-of-telephone-calls - Matching_prefixes.js ', ()=>{
    describe('function must return an array [] that has ', ()=>{
        
        it("even if there is no prefixes_found the function must return the 'operator's name' and the 'phone number' ",()=>{
            
            expect(prefixes_found).to.have.property('operator');
            expect(prefixes_found).to.have.property('phoneNumber');
            
        });
        
        it('if no prefixes found the array prefixes_found [] should be empty', ()=>{
            
            if(nothing_found){
                
                expect(prefixes_found).to.be.null;                 
            
            } 
            
        });
    
        it('if prefixes are found the array prefixes_found [] should not be empty', ()=>{
        
            if(!nothing_found){
                
                expect(prefixes_found).to.have.lengthOf.above(0);                 
            }    
        });
    });
});

describe('rooting-of-telephone-calls - Get_longest_prefix.js ', ()=>{
    describe('function must return a couple {} ', ()=>{
        
        it("couple object has 3 properties 'operator, prefix, price'",()=>{
            
            expect(couple).to.have.keys('operator', 'prefix', 'price');
            
        });
        
        it('if no prefixes found the array couples [] should be empty', ()=>{
            
            if(nothing_found){
                
                expect(couples).to.be.null;                 
            
            } 
            
        });
    
        it('if prefixes are found the array couples [] should not be empty', ()=>{
        
            if(!nothing_found){
                
                expect(couples).to.have.lengthOf.above(0);                 
            }    
        });
        
        
    });
});

describe('rooting-of-telephone-calls - Cheapest_operator.js ', ()=>{
    describe('function must return an object {} (rooting_to) ', ()=>{
        
        it("'rooting_to' object has must have 2 properties 'cheapest, 'operator_name'", ()=>{
            
            if(nothing_found){
                
                expect(couples).to.be.null;                 

            }
        });
    
        it('if prefixes are found the array couples [] should not be empty', ()=>{
        
            if(!nothing_found){
                
                expect(couples).to.have.lengthOf.above(0);                 
            }    
        });
        
        
    });
});