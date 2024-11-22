let hr = document.querySelector<HTMLElement>("#hr");
let mn = document.querySelector<HTMLElement>("#mn");
let sc = document.querySelector<HTMLElement>("#sc");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    if (hr) {
    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    }

    if (mn) {
    mn.style.transform = `rotateZ(${mm}deg)`;
    }

    if (sc) {
    sc.style.transform = `rotateZ(${ss}deg)`;
    }
});
