var matching = require("./Matching_prefixes.js");
var longest = require("./Get_longest_prefix.js");
var cheapest = require("./Cheapest_operator.js");

// RAW DATA FOR TESTING 

var OperatorA_price_list = [['1', '0.9'], ['268', '5.1'], ['46', '0.17'], ['4620', '0.0'], ['468', '0.15'], ['4631', '0.15'], ['4673', '0.9'], ['46732', '1.1']];
var OperatorB_price_list = [['1', '0.92'], ['44', '0.5'], ['46', '0.2'], ['467', '1.0'], ['48', '1.2']];

// NUMBER FOR TESTING

var challenge_Number = "4673212345"; //68123456789 4673212345

var prefixes_found = [];
var prefix_selected = "";
var couple = {};
var couples = [];
var rooting_to = "";

var nothing_found = true;

OperatorA_price_list.name = "OperatorA";
OperatorB_price_list.name = "OperatorB";

var All_operators = [];

All_operators.push(OperatorA_price_list);
All_operators.push(OperatorB_price_list);

for (var i=0; i <= All_operators.length - 1; i++) {
    
     prefixes_found = matching.Matching_prefixes(challenge_Number, All_operators[i]);
    if(prefixes_found !== null && prefixes_found.length > 1) {
        nothing_found = false;
        couple = longest.Get_longest_prefix(prefixes_found);
        couples.push(couple)    ;
        console.log(couples);
        rooting_to = cheapest.Cheapest_operator(couples);
    }
}

if(rooting_to.cheapest){
        console.log(rooting_to.operator_name + " is the cheapest : " + rooting_to.cheapest + "$ . ");
}

//$$$$$$$$$$$$$$$$$$$$$$$ preparing code for Unit Test $$$$$$$$$$$$$$$$$$


var pl = [];

// transforming the (bidimentional array) price list to a simple array of strings to facilitate the unit test with 'chai'

for (var i = 0; i <= OperatorA_price_list.length -1; i++ ){
    for (var o in OperatorA_price_list[i] ){
        
        pl.push(OperatorA_price_list[i][o]);
        
    }
}

//exporting the phone number and the price list (operatorA only) to be tested

exports.Dialed_number = challenge_Number ;
exports.price_list = pl ;
exports.any_price_list = OperatorA_price_list ;
exports.All_operators = All_operators ;
exports.nothing_found = nothing_found ;
exports.prefixes_found = prefixes_found ;
exports.nothing_found = nothing_found ;
exports.couple = couple ;
exports.couples = couples ;
