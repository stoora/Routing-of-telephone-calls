var expect = require('chai').expect;
var rooting_calls = require('./main.js');

var phone = require('./Clean_number');

describe('rooting-of-telephone-calls', function(){
   
    describe('Telephone numbers should be inputted in the same format as in price lists (strings in my case)', function(){
        
        it("the dialed number should be a string",()=>{
            
            expect(phone.Clean_number('4673212345')).to.be.a('string');
                
        });
        
        it("price lists should be filled as strings too",()=>{
            
            expect(rooting_calls.OperatorA_price_list).to.be.an('array');
                
        });
        
    });

});
    


/*it('should work!', function(){
        
        expect(true).to.be.true;
        
    });
    */