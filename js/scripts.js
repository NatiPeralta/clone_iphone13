const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

const darkMode = document.querySelector("#dark-mode");
const imgLightMode = document.querySelector("#dark-mode img");
const txtLightMode = document.querySelector("#dark-mode p");

//Image-picker of Iphone
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e);

        buttons.forEach((btn) =>
            btn.querySelector(".color").classList.remove("selected")
        );

        const button = e.target;

        const id = button.getAttribute("id");

        button.querySelector(".color").classList.add("selected");

        image.classList.toggle("changing");
        image.setAttribute("src", `img/iphone_${id}.png`);

        setTimeout(() => {
            image.classList.toggle("changing");
        }, 200);
    });
});

// dark-mode
darkMode.addEventListener("click", () => {

    const isDark = document.body.classList.toggle("dark");

        if(isDark) {
            imgLightMode.setAttribute("src", `img/sol.png`);
            txtLightMode.innerHTML = "Modo Claro";
        } else {
            imgLightMode.setAttribute("src", `img/lua.png`);
            txtLightMode.innerHTML = "Modo Escuro";
        }
});