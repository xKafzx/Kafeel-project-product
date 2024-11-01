let colorinput = document.querySelectorAll(".color input");

colorinput.forEach((input) => {
    input.addEventListener("change", function () {
        if (this.checked) {
            productImg.src = this.getAttribute("data-image");
        }
    });
});

const quantityinput = document.getElementById("quantityinput");
const stockinfo = document.getElementById("stockinfo");
const maxstock = 999;

stockinfo.innerText = `avaible stock: ${maxstock}`;