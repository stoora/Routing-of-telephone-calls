module.exports = {
    
    Cheapest_operator: function(couples){
        var prices = [];
        var operator_name = "";
        var cheapest = 0 ;
        
        for(var i in couples){
            var price = Number(couples[i].price);
            prices.push(price);
        }
        
        cheapest = Math.min.apply(null, prices);
        
        for(var o in couples){
            if(Number(couples[o].price) === cheapest){
                operator_name = couples[o].operator ;  
                break;
            }
            
        }
        
        return {cheapest, operator_name};    
    }
    
}