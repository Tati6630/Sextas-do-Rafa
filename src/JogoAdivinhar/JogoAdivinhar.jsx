/*Jogo de Adivinhação: Crie um número aleatório entre 1 e 10. 
Peça ao usuário para adivinhar o número e, em seguida, diga se 
eles acertaram ou não. */

import React from "react";

const JogoAdivinhar = () => {
  const adivinhar = () => {
    const aleatorio = Math.ceil(Math.random()*10);
    let palpite = Number(prompt("Chuta aí"));

    console.log(aleatorio);

    if (isNaN(palpite) || palpite < 0 || palpite > 10){
      alert ("Opção inválida! Digite um número entre 0 e 10");
    }else if (palpite === aleatorio) {
      alert (`Parabéns, você acertou!!! O número correto é ${aleatorio}`);
    }else {
      alert ("Errrrrrou!!! Tente outra vez!");
    }
  };
  
  return  (
    <>
      <h1>Exercício 1 </h1>
      <button onClick={adivinhar}>Adivinhar</button>
    </>
  );
};

export default JogoAdivinhar;



