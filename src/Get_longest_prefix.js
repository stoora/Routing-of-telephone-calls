//getting the longest prefix (all operators combined)
module.exports = {
    Get_longest_prefix: function(matched_prefixes){
        //        console.log("----------------sorting prefixes ");
        var to_be_sorted = [] ;
        var sorted_prefixes = [] ;
        var prefix = "";
        var longest_prefix = "";
        var price = 0;
        var operator = "";
        operator = matched_prefixes.operator;
        
        for(var i=0; i<= matched_prefixes.length -1; i++){
            prefix = parseInt(matched_prefixes[i].prefix);
            //                console.log(matched_prefixes[i]);
            to_be_sorted.push(prefix);
            
        }
        
        //sorting matched prefixes in descending order  
        to_be_sorted.sort(function(a, b){return b-a});
        //        console.log("sorted prefixes " + to_be_sorted);
        
        longest_prefix = to_be_sorted[0];
        
        // reassembling the prefix with its price
        for(var i=0; i<= matched_prefixes.length -1; i++){
            
            if(matched_prefixes[i].prefix == longest_prefix){
                price = matched_prefixes[i].price;
                var couple = {};
                couple.price = price;
                couple.prefix = longest_prefix;
                couple.operator = operator;
                
                console.log("longest_prefix:  " + longest_prefix + " cost $ " + couple.price + "/minute");
                //        console.log(couple);
                
            }
            
        }
        return couple ;
    }
}