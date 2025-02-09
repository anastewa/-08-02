const topCompanies = ['Google',
    'Авиасейлс ',
    'Zara',
    'Coca-Cola',
    'Яндекс ',
    'Levis ',
    'H&M',
    'Nike',
    'Apple ',
    'BMW',
    'Каспи'
];
 function choosingСompany(){
     for (let i = 1; i < topCompanies.length; i++) {
     let rank = i + 1;
if (rank === 2) {
    suffix = "st";
} else if (rank === 3) {
    suffix = "nd";
} else if (rank === 4) {
    suffix = "rd";
} else {
    suffix = "th";
}
       console.log('My ' + i + suffix + ' choice is ' + topCompanies[i]);
    }
}

choosingСompany();
