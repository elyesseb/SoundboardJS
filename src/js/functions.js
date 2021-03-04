export default function playbuttons() {
    // mes buttons :
    let btn1 = document.getElementById('btn__sound-1');
    let btn2 = document.getElementById('btn__sound-2');
    let btn3 = document.getElementById('btn__sound-3');
    let btn4 = document.getElementById('btn__sound-4');
    let btn5 = document.getElementById('btn__sound-5');
    let btn6 = document.getElementById('btn__sound-6');
    let btn7 = document.getElementById('btn__sound-7');
    let btn8 = document.getElementById('btn__sound-8');
    let btn9 = document.getElementById('btn__sound-9');
    // mes sons :
    let sound1 = document.getElementById('sound-1');
    let sound2 = document.getElementById('sound-2');
    let sound3 = document.getElementById('sound-3');
    let sound4 = document.getElementById('sound-4');
    let sound5 = document.getElementById('sound-5');
    let sound6 = document.getElementById('sound-6');
    let sound7 = document.getElementById('sound-7');
    let sound8 = document.getElementById('sound-8');
    let sound9 = document.getElementById('sound-9');
    // function jouer le son :
    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 65) {
            btn1.classList.add("sound-active");
            sound1.currentTime = 0;
            sound1.play();
            sound1.addEventListener("ended", function() {
                btn1.classList.remove("sound-active");
            })
        } else if (e.keyCode == 90) {
            btn2.classList.add("sound-active");
            sound2.currentTime = 0;
            sound2.play();
            sound2.addEventListener("ended", function() {
                btn2.classList.remove("sound-active");
            })
        } else if (e.keyCode == 69) {
            btn3.classList.add("sound-active");
            sound3.currentTime = 0;
            sound3.play();
            sound3.addEventListener("ended", function() {
                btn3.classList.remove("sound-active");
            })
        } else if (e.keyCode == 82) {
            btn4.classList.add("sound-active");
            sound4.currentTime = 0;
            sound4.play();
            sound4.addEventListener("ended", function() {
                btn4.classList.remove("sound-active");
            })
        } else if (e.keyCode == 84) {
            btn5.classList.add("sound-active");
            sound5.currentTime = 0;
            sound5.play();
            sound5.addEventListener("ended", function() {
                btn5.classList.remove("sound-active");
            })
        } else if (e.keyCode == 89) {
            btn6.classList.add("sound-active");
            sound6.currentTime = 0;
            sound6.play();
            sound6.addEventListener("ended", function() {
                btn6.classList.remove("sound-active");
            })
        } else if (e.keyCode == 85) {
            btn7.classList.add("sound-active");
            sound7.currentTime = 0;
            sound7.play();
            sound7.addEventListener("ended", function() {
                btn7.classList.remove("sound-active");
            })
        } else if (e.keyCode == 73) {
            btn8.classList.add("sound-active");
            sound8.currentTime = 0;
            sound8.play();
            sound8.addEventListener("ended", function() {
                btn8.classList.remove("sound-active");
            })
        } else if (e.keyCode == 79) {
            btn9.classList.add("sound-active");
            sound9.currentTime = 0;
            sound9.play();
            sound9.addEventListener("ended", function() {
                btn9.classList.remove("sound-active");
            })
        }
    })
};

export { playbuttons };