let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let bgUchun = document.getElementById('bg-uchun');
let hamilyon = document.getElementById('hamilyon');
let btnN = document.getElementById("btnN")

const ageDays = () => {
    let chislo = new Date();
    let sana = chislo.toDateString();
    let birthDay = prompt("Tug'olgan yilingizni kriting");
    let birthDayYear = (2022 - birthDay) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('Siz jami ' + birthDayYear + ' kun yashadingiz' + ' hozirgi vaqt ' + sana);
    bgUchun.classList.toggle('bg-uchun2');
    hamilyon.innerHTML = "Javob pastda";
    btnN.classList.add("btnN");

    h1.setAttribute('id', 'ageDays');
    h1.appendChild(textAnswer);


    document.getElementById('creatElement').appendChild(h1);

}

const clearData = () => {
    document.getElementById("ageDays").remove();
    hamilyon.innerHTML = "Tug'ilgan yilingizni yozing men sizga qancha kun yashaganingizni aytib beraman";
    btnN.classList.remove("btnN")
}


setInterval(function () {
    let chisloTo = new Date()
    let sanaTo = chisloTo.getHours();

    let toriFirst = sanaTo < 10 ? "0" + sanaTo + ":" : sanaTo + " :"

    hours.innerHTML = toriFirst;

    let chisloThree = new Date();
    let sanaThree = chisloThree.getMinutes();

    let toriTo = sanaThree < 10 ? "0" + sanaThree + ":" : sanaThree + " :"

    minutes.innerHTML = toriTo;

    let chisloFour = new Date();
    let sanaFour = chisloFour.getSeconds();

    let tori = sanaFour < 10 ? "0" + sanaFour : sanaFour

    seconds.innerHTML = tori;
}, 1000)

