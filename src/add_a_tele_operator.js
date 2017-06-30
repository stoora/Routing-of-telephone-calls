// this function adds a new tele operator
module.exports{
    var tele_operator;
    var tele_operators = [];

    function add_a_tele_operator(name, price_list){
        tele_operator = {name: name, price_list: price_list};
        tele_operators.push(tele_operator);
        return tele_operators;
    }
}