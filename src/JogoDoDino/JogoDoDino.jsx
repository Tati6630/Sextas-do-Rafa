/*Fase 1: O jogo em si
No jogo do dino o jogador insere a quantidade de dinheiro que deseja apostar, 
escolhe um dos 10 dinos do game e manda sortear. Se sair o dino dele, ele ganha 6x o valor apostado. */

import React, { useState } from "react";

const JogoDoDino = () => {
  const [palpite, setPalpite] = useState("");
  const [mensagem, setMensagem] = useState("");

  const escolherDino = () => {
        const dias = [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
        let dia = Number(inputDia)
        alert(dias[dia - 1])
    }

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

export default JogoDoDino;

