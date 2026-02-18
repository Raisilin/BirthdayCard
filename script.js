document.addEventListener("DOMContentLoaded", function(){

    const envelope = document.getElementById("evnelope");
    const envelopeScreen = document.getElementById("envelopeScreen");
    const invitation = document.getElementById("invitation");

    envelope.addEventListener("click", function(){

        envelope.classList.add("open");
        envelope.classList.remove("close");

        setTimeout(()=>{

            envelopeScreen.style.opacity = "0";

            setTimeout(()=>{
                envelopeScreen.style.display = "none";
                invitation.classList.remove("hidden");

                setTimeout(()=>{
                    invitation.classList.add("show");
                },50);

            },800);

        },1200);
    });

    /* ===== ТАЙМЕР ===== */

    const birthdayDate = new Date("March 13, 2026 17:20:00").getTime();

    function updateTimer(){
        const now = new Date().getTime();
        const distance = birthdayDate - now;

        const days = Math.floor(distance/(1000*60*60*24));
        const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
        const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
        const seconds = Math.floor((distance%(1000*60))/1000);

        document.getElementById("timer").innerHTML =
            `🎉 ${days} дн ${hours} ч ${minutes} мин ${seconds} сек 🎉`;
    }

    updateTimer();
    setInterval(updateTimer,1000);

});
