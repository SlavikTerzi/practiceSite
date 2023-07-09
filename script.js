
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector(".navAndLogIn").classList.toggle("active")
        document.querySelector(".headerBurger").classList.toggle("active")
        document.querySelector("body").classList.toggle("lock")
    });
});


// document.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("FaqMore2").addEventListener("click", function(){
//         document.querySelector(".s2").classList.toggle("activeFaq")
//         document.querySelector(".s2").classList.toggle("activeFaq")
//     });
// });




