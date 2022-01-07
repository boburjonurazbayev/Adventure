var elHeading = document.querySelector('.heading')

var elText = document.querySelector('.text')

var userName = prompt('Assalomu alaykum. Ismingizni yozing:', 'John');

var totalMoney = Number(prompt('Qancha pul jamg`argansiz', '8317488.6' ));

var ticketCostDollar = 500;

var hotelCostDollar = 250;

var restCostEuro = 120;

var dollarSum = 9433.34;

var euroSum = 10354.03;

var ticketCostSum = ticketCostDollar * dollarSum;

var hotelCostSum = hotelCostDollar * dollarSum;

var restCostSum = restCostEuro * euroSum;

var adventureCost = (ticketCostSum + hotelCostSum + restCostSum);

var needMoney = adventureCost - totalMoney;

var overMoney = totalMoney - adventureCost;


if (totalMoney >= adventureCost) {
    elHeading.textContent = 'Oq yo`l ' + userName + ' aka'
} else {
    elHeading.textContent = userName + ' aka ozgina sabr qilishingiz kerak bo`lar ekan'
}

if (totalMoney >= adventureCost) {
    elText.textContent = 'Sizda ' + overMoney.toFixed(1) + ' so`m ortiqcha pulingiz qolar ekan'
} else {
    elText.textContent = 'Sizga ' + needMoney.toFixed(1) + ' so`m pulingiz yetishmas ekan'
}