function  getMonthByNumber(monthNumber) {
    
        if (monthNumber == 1) {
            return 'January';
        } else if (monthNumber == 2) {
            return 'February';
        } else if (monthNumber === 3) {
            return 'March';
        } else if (monthNumber === 4) {
            return 'April'; 
        } else if (monthNumber === 5) {
            return 'May';
        } else if (monthNumber === 6) {
            return 'June';
        } else if (monthNumber === 7) {
            return 'July';
        } else if (monthNumber === 8) {
            return 'August';
        } else if (monthNumber === 9) {
            return 'September';
        } else if (monthNumber === 10) {
            return 'October';
        } else if (monthNumber === 11) {
            return 'November';
        } else if (monthNumber === 12) {
            return 'December';
        } else {
        return "некорректный номер месяца";
        }
    }

    let monthNumber = ['January', 'February', 'March', 'April'];
    let х = 0;
    let text = monthNumber[х+2];

    console.log(text);
