
window.addEventListener("DOMContentLoaded", (e) => {
   const buttons = document.getElementsByClassName("game");
   let score = 0;
   let win = 0;
   let equality = 0;
   let lose = 0;
   let score_container = document.querySelector("#score");
   let win_container = document.querySelector("#score_win");
   let equality_container = document.querySelector("#score_equality");
   let lose_container = document.querySelector("#score_lose");

   for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
         const joueur = buttons[i].innerHTML;
         const robot =
            buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
         let resultat = "";

         if (joueur === robot) {
            resultat = "Egalité !";
            equality++;
            equality_container.textContent = parseInt(equality);
         } else if (
            (joueur === "Pierre" && robot === "Ciseaux") ||
            (joueur === "Feuille" && robot === "Pierre") ||
            (joueur === "Ciseaux" && robot === "Feuille")
         ) {
            resultat = "Gagné !";
            score++;
            win++;
            score_container.textContent = parseInt(score);
            win_container.textContent = parseInt(win);
         } else {
            resultat = "Perdu !";
            lose++;
            lose_container.textContent = parseInt(lose);
         }

         document.querySelector(".resultat").innerHTML = `${resultat}`;

         document.getElementById(
            "resultatJoueur"
         ).innerHTML = `Joueur : ${joueur}`;
         document.getElementById(
            "resultatRobot"
         ).innerHTML = `Robot : ${robot}`;
      });
   }
})