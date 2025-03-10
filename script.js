document.addEventListener("DOMContentLoaded", function () {
   
    const revealButton = document.getElementById("revealButton");
  

    revealButton.addEventListener("click", function () {
       
     
      const heroName = document.getElementById("heroName").value;
      const heroXP = parseInt(document.getElementById("heroXP").value);

      
  
      if (!heroName || isNaN(heroXP)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
      }
  
    
      let classification;
      if (heroXP < 1000) {
        classification = "Ferro";
      } else if (heroXP <= 2000) {
        classification = "Bronze";
      } else if (heroXP <= 5000) {
        classification = "Prata";
      } else if (heroXP <= 7000) {
        classification = "Ouro";
      } else if (heroXP <= 8000) {
        classification = "Platina";
      } else if (heroXP <= 9000) {
        classification = "Ascendente";
      } else if (heroXP <= 10000) {
        classification = "Imortal";
      } else {
        classification = "Radiante";
      }

      console.log("Classificação:", classification);
  
    
      alert(`A heroína ${heroName} está no nível ${classification}`);
    });
  });