  
    function getMonthByNumber(number) {

        if (number > 1) {
            return months[number-1]
        } 

};

    let months = ['January', 'February', 'March', 
    'April', 'May', 'June', 'July', 'August', 
    'September', 'October', 'November', 'December'];
    
    
    console.log(getMonthByNumber(3));
    console.log(getMonthByNumber(4));

    


