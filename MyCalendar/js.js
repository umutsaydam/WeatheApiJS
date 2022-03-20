const date = new Date();
const currentDate = new Date();


function renderDate() {
    let days = "";
    const monthDays = document.querySelector(".days");
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDay = date.getDay() + 1;
    const prevDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const trMonths = [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık"
    ];

    const trDays = [
        "Pzr",
        "Pzt",
        "Sal",
        "Çar",
        "Per",
        "Cum",
        "Cmt"
    ];
    document.querySelector(".date h1").innerHTML = trMonths[date.getMonth()];
    document.querySelector(".date p a").innerHTML = `${currentDate.getDate()} ${trMonths[currentDate.getMonth()]} ${trDays[currentDate.getDay()]} ${currentDate.getFullYear()}`;

    for (let x = firstDay; x > 0; x--) {
        days += `<div class="prev-date">${prevDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (i == date.getDate() && date.getMonth == new Date().getMonth) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let z = 1; z <= 41 - lastDay; z++) {
        days += `<div class="next-date">${z}</div>`;
    }
    monthDays.innerHTML = days;
}

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderDate();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderDate();
});


const currentLocation = function () {
    date.setMonth(currentDate.getMonth());
    renderDate();
};

renderDate();