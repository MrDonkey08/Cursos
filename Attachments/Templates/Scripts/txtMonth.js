function getMonth(month){
   const date = new Date();

    let monthNum = date.getMonth() + 1

    switch (monthNum){
        case 1: month = 'enero'; break;
        case 2: month = 'febrero'; break;
        case 3: month = 'marzo'; break;
        case 4: month = 'abril'; break;
        case 5: month = 'mayo'; break;
        case 6: month = 'junio'; break;
        case 7: month = 'julio'; break;
        case 8: month = 'agosto'; break;
        case 9: month = 'septiembre'; break;
        case 10: month = 'octubre'; break;
        case 11: month = 'noviembre'; break;
        case 12: month = 'diciembre'; break;
    }
    return `${month}`;
}

module.exports = getMonth;



/*function my_function (msg) {
    return `Message from my script: ${msg}`;
}
module.exports = my_function;*/