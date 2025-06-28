/* 9. Controle de Provisões do Capitão Ganso
O Capitão Ganso, lenda viva das águas de Canasvieiras, precisa organizar o estoque de provisões de sua escuna antes de zarpar. 
Seus cálculos consideram a quantidade de marujos recrutados e se há algum evento especial no calendário 
(como festas de mar ou competições de pesca). Para garantir que ninguém passe fome, ele só parte se houver pelo menos 10 marujos
**ou** se for dia de evento, pois nesses casos há apoio logístico garantido nos portos vizinhos.
Na última aventura, o capitão saiu com apenas 6 marujos e sem evento algum, e teve que dividir uma lata de sardinha em 12 partes. 
Para evitar que isso se repita, ele quer um sistema que o ajude a decidir se deve partir ou não.
Crie um programa que receba:
- `numeroMarujos` (número inteiro)
- `diaDeEvento` (booleano)
E imprima:
- Se houver pelo menos 10 marujos **ou** for dia de evento: "Provisões suficientes. Rumo ao horizonte!"
- Caso contrário: "Tripulação insuficiente. Reforçar mantimentos antes de zarpar */
import { useState } from 'react'


function SelecoesRepeticoes() {
    const [inputMarujos, setInputMarujos] = useState('');
    const [inputEventos, setInputEventos] = useState('');
    const [viagem, setViagem] = useState();

    const [sabeNadar, setSabeNadar] = useState(false);
    const [idade, setIdade] = useState('');
    const [temRecomendacao, setTemRecomendacao] = useState(false);
    const [resultRecrutamento, setResultRecrutamento] = useState('');

    function verificar() {
        if(inputMarujos>=10 || inputEventos>=1){
            setViagem('Sim')
        }else{
            setViagem('Não')
        }
    };

    /*10. Teste de Recrutamento para Novos Marujos
O Capitão Ganso costuma entrevistar pessoalmente os aspirantes a marujos. Os critérios principais são: 
a pessoa precisa saber nadar e ter mais de 16 anos. Em algumas ocasiões especiais, se o candidato tiver carta de recomendação de outro pirata, 
Durante o último recrutamento, o capitão aceitou um guri de 13 anos só porque o nome dele era Papacu, e o caos instaurou-se no convés. 
Por isso, o sistema precisa agora ser automatizado com regras bem claras.
Crie um programa que receba: sabeNadar (booleano), idade (número), temRecomendacao (booleano)
E imprima:
Se souber nadar e tiver mais de 16 anos: "Aprovado para o navio!"
Se não souber nadar, mas tem recomendação e idade maior ou igual a 14: "Aprovado sob recomendação. Monitorar nas primeiras viagens."
Caso contrário: "Reprovado. Volte quando estiver mais preparado para o mar." */ 

    function recrutar() {
        const idadeNum = Number(idade);

        console.log("Idade", idadeNum, "Sabe nadar", sabeNadar, "Recomendação", temRecomendacao);

        if (sabeNadar && idadeNum > 16) {
            setResultRecrutamento("Aprovado para o navio!");
        } else if (!sabeNadar && temRecomendacao && idadeNum >= 14) {
            setResultRecrutamento("Aprovado sob recomendação. Monitorar nas primeiras viagens!");
        } else {
            setResultRecrutamento("Reprovado! Volte quando estiver mais preparado =(");
        }
    };


    return (
        <>
        <div className='container'>
            <h1>Navegar é preciso. Viver, não!</h1>
            <h2>Ex. 9 - Capitão Ganso</h2>

            <label> Marujos: </label>
            <input 
                type="text"
                placeholder='Marujos'
                value={inputMarujos}
                onChange={(e) => setInputMarujos(e.target.value)}
            />
            <br />
            <br />
            <label> É dia de Evento?: </label>
            <input 
                type="text"
                placeholder='Eventos'
                value={inputEventos}
                onChange={(e) => setInputEventos(e.target.value)}
            />

            <br />
            <br />
            <button onClick={verificar}>Vamos Viajar?</button>
            <p>viagem: {viagem} </p>

            <hr />
            <h2>Ex. 10 - Recrutamento de Novos Marujos</h2>

            <label>Idade: </label>
            <input 
                type="number"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
            />
            <br />
            <br />

            <label>
                <input 
                type="checkbox"
                checked={sabeNadar}
                onChange={(e) => setSabeNadar(e.target.checked)}
                />
                Sabe nadar
            </label>
            <br />
            <br />

            <label>
                <input 
                    type="checkbox"
                    checked={temRecomendacao}
                    onChange={(e) => setTemRecomendacao(e.target.checked)}
                />
                Tem Carta de Recomendação 
            </label>

            <br />
            <br />
            <button onClick={recrutar}>Recrutar</button>
            <p>{resultRecrutamento}</p>
        </div>
        </>
    );
};
export default SelecoesRepeticoes;




