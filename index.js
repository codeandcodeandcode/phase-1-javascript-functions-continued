function saturdayFun(arg="roller-skate"){
    return `This Saturday, I want to ${arg}`;
    }

    function mondayWork(arg="go to the office") {
        return `This Monday, I will ${arg}`;
    }

    function wrapAdjective(outerpar="*") {
        return function(par="special"){
            return `You are ${outerpar+par+outerpar}!`;
        }
    }