import './Repeticoes.css'

function Repeticoes () {

    function DemonstrarWhile () {
        let cont = 0;
        while (cont <= 10){
           console.log(cont);
            cont++
        };
    };

    //1. Faça um programa que calcule o quadrado de cada número de 1 a 10.
    function CalculaQuadrado () {
       let numero = 1;

        while (numero <= 10) {
            const quadrado = numero * numero;
            console.log(`O quadrado de ${numero} é ${quadrado}`);
            numero++;
        };
    };

    //3. Calcule a soma dos números de 1 a 100.
    function Soma1a100 () {
        let numero = 1;
        let somaTudo = 0;

        while (numero <= 100) {
            somaTudo += numero;
            numero++;
        }
        console.log(`A soma dos números de 1 a 100 é ${somaTudo}`);
    };

    //5. Imprima a tabuada que o usuário digitou.
    function Tabuada () {
        let multiplica = 1;
        let cont = 0;

        const numero = Number(prompt("Digite um número para obter sua tabuada:"));
            while (multiplica <= 10 ) {
                const resultado = numero * multiplica;
                multiplica++;
                cont++;

                console.log(`A tabuada do número ${numero} é: ${numero} X ${cont} = ${resultado}`);
            }
    };



    return (
    <>
    <h1>Repetições</h1>

    <section>
        <p>While</p>
        <button onClick={DemonstrarWhile}>demo WHILE</button><br /><br />
    </section>

    <section>
        <button onClick={CalculaQuadrado}>Calcula Quadrado</button><br /><br />
    </section>

    <section>
        <button onClick={Soma1a100}>Soma de Tudo</button><br /><br />
    </section>

    <section>
        <button onClick={Tabuada}>Tabuada</button><br /><br />
    </section>
            
    </>
)

};
export default Repeticoes;

