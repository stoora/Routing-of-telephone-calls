
//this function matches the found prefixes found in a given number

module.exports = {
    Matching_prefixes: function (dialed_number, tele_operator){
        console.log("--------------matching prefixes of : " + tele_operator.name + " with : " + dialed_number );
        var matched_prefixes = [];
        var number = dialed_number;
        var prefix = "";
        var operator = "";
        var price = "";
        
        for (var i in tele_operator){
            operator = tele_operator.name;
            if (number.indexOf(tele_operator[i][0]) === 0){
                prefix = tele_operator[i][0];
                var matched_index = {};
                matched_index.prefix = prefix;
                price = tele_operator[i][1];
                matched_index.price = price;
                matched_prefixes.operator = operator;
                matched_prefixes.phoneNumber = number;
                matched_prefixes.push(matched_index);
                console.log( "index "+ i + " prefix : " + "'" + prefix +"'" + " found in this number " + number + " Operator Name : " + operator + ", Will cost " + price + " $");
                
            }
        }
        //                console.log(matched_prefixes);
        if(matched_prefixes.length){
            
            return matched_prefixes ; 
            
        }else{
            console.log("Sorry you cannot dial this number with : " + operator );
            return null;
        }      
    }
}
