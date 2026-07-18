console.log(document.getElementById("countdown"));

// =======================================
// 🌸 THE LIBRARY OF US
// JavaScript
// =======================================


// =======================================
// SETTINGS
// =======================================

const developerMode = true;

const birthday = new Date("July 23, 2026 00:00:00").getTime();


// =======================================
// SECRET LETTERS
// =======================================

function toggleMissYou() {

    var x = document.getElementById("missYouLetter");

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

}

function toggleBadDay() {

    var x = document.getElementById("badDayLetter");

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

}


// =======================================
// LOCK SCREEN
// =======================================

function updateCountdown() {

    const now = new Date().getTime();
    const distance = birthday - now;

    if (developerMode) {

        document.getElementById("countdown").innerHTML =
        "📚 The librarian is still arranging the shelves...";

        document.getElementById("unlockBtn").style.display = "inline-block";

        return;

    }

    if (distance < 0) {

        document.getElementById("countdown").innerHTML =
        "🎉 Happy Birthday, Tejas! 🎂";

        document.getElementById("unlockBtn").style.display = "inline-block";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("countdown").innerHTML =
        "⏳ " + days + " Days " +
        hours + " Hours " +
        minutes + " Minutes";

}

function unlockSite(){

    const lock = document.getElementById("lockScreen");
    const website = document.getElementById("websiteContent");

    lock.classList.add("fade-out");

    setTimeout(function(){

        lock.style.display="none";

        website.style.display="block";

        website.classList.add("fade-in");
const music = document.getElementById("bgMusic");

music.play().catch(function() {
    console.log("Autoplay blocked until user interaction.");
});
        // Restart the typewriter
        index = 0;
        document.getElementById("introText").innerHTML = "";
        typeWriter();

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    },800);

}


// =======================================
// START WEBSITE
// =======================================

updateCountdown();

setInterval(updateCountdown, 60000);
typeWriter();
// =======================================
// TYPEWRITER EFFECT
// =======================================

const introText =
"This little place has been waiting patiently for you.\n\nInside are a few memories, a few letters, and a little piece of my heart.\n\nTake your time.";

let index = 0;

function typeWriter(){

    const intro = document.getElementById("introText");

    if(!intro) return;

    if(index < introText.length){

        intro.innerHTML += introText.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

}
window.onscroll = function () {

    let winScroll =
        document.documentElement.scrollTop ||
        document.body.scrollTop;

    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let scrolled =
        (winScroll / height) * 100;

    document.getElementById("progressBar").style.width =
        scrolled + "%";

};
function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");
    petal.textContent = "🌸";

    // Random horizontal position
    petal.style.left = Math.random() * window.innerWidth + "px";

    // Random size
    petal.style.fontSize = (15 + Math.random() * 15) + "px";

    // Random falling speed
    petal.style.animationDuration = (6 + Math.random() * 6) + "s";

    document.body.appendChild(petal);
console.log("🌸 created");
    petal.addEventListener("animationend", function () {
        petal.remove();
    });

}

setInterval(createPetal, 700);
createPetal();

function blowCandle(){
  const birthdayMusic = document.getElementById("birthdayMusic");

birthdayMusic.currentTime = 0;
birthdayMusic.play();

    document.getElementById("birthdayCake").src =
"Photo/Nocandle.jpg";

    setTimeout(function(){

        document.getElementById("wishPopup").style.display = "flex";

    },1200);

}

function closeWishPopup(){

    document.getElementById("wishPopup").style.display = "none";

    document.getElementById("birthdayScreen").style.display = "none";

}
const cake = document.getElementById("birthdayCake");

cake.style.transform = "scale(0.97)";

setTimeout(function(){

    cake.src = "Photo/Nocandle.jpg";

    cake.style.transform = "scale(1)";

},250);

window.onload = function(){

    const birthdayMusic = document.getElementById("birthdayMusic");

    birthdayMusic.volume = 0.8;

    birthdayMusic.play().catch(function(err){
        console.log(err);
    });

}