export function setupThemeToggle() {

    document.addEventListener("DOMContentLoaded", () => {
        const savedTheme = localStorage.getItem("theme");
        const body = document.body;
        const btn = document.getElementById("toggleTheme");

        if (savedTheme === "light") {
            body.classList.add("light");
            btn.textContent = "☀️";
        }

        // Gestion du bouton de changement de thème
        btn.addEventListener("click", () => {
            body.classList.toggle("light");
            const isLight = body.classList.contains("light");
            btn.textContent = isLight ? "☀️" : "🌙";
            localStorage.setItem("theme", isLight ? "light" : "dark");
        });

        // Flèche retour haut

    });


}