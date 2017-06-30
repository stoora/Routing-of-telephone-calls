module.exports = {
    Clean_number:  function(phone_number){
        var cn = "";
        for (var i in phone_number){
            if (Number(phone_number[i]))
                cn+=phone_number[i];
        }
//        console.log(cn);
        return cn;
    }
}

// cleaning dialed number from + and - 