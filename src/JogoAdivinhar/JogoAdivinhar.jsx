/*Jogo de Adivinhação: Crie um número aleatório entre 1 e 10. 
Peça ao usuário para adivinhar o número e, em seguida, diga se 
eles acertaram ou não. */

import React, { useState } from "react";

const JogoAdivinhar = () => {
  const [palpite, setPalpite] = useState("");
  const [mensagem, setMensagem] = useState("");

  const adivinhar = () => {
    const aleatorio = Math.ceil(Math.random()*10);
    let numero = Number(palpite);

    console.log(aleatorio);

    if (isNaN(numero) || numero < 0 || numero > 10){
      setMensagem ("Opção inválida! Digite um número entre 0 e 10");
    }else if (numero === aleatorio) {
      setMensagem (`Parabéns, você acertou!!! O número correto é ${aleatorio}`);
    }else {
      setMensagem ("Errrrrrou!!! Tente outra vez!");
    }

    setPalpite("");
    setMensagem("");
  };
  
  return  (
    <>
      <h1>Exercício 1 </h1>
      <input 
        type = "number"
        value = {palpite}
        onChange={(e) => setPalpite(e.target.value)}
      />

      <button onClick={adivinhar}>Adivinhar</button>
      <p>{mensagem}</p>
    </>
  );
};

export default JogoAdivinhar;



