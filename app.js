const { listen } = require('express/lib/application');

const app = require('express')();
const PORT = 8080;

(function () {
    app.listen(
        PORT,
        ()=> console.log(`its alive on http://Localhost:${PORT}`)
    );
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
    
})();



