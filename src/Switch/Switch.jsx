import { useState } from 'react';
//import './Switch.css'

const Switch = () => {
    const[inputDia, setInputDia] = useState('');

    const executarComArray = () => {
        const dias = [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
        let dia = Number(inputDia)
        alert(dias[dia - 1])
    }

    const executarSwitchTrue = () => {
        let dia = Number(inputDia)

        switch (true) {
            case dia < 1 || dia > 7: alert("Dia bad");
                break;
            case dia >= 1 && dia <= 7: alert("Dia Ok");
                break;
        }
    }

    
    const executar = () => {
    let valor = Number(inputDia);   
        
        switch (valor){
            case 1: alert("Domingo")
                break;
            case 2: alert("Segunda")
                break;
            case 3: alert("Terça")
                break;
            case 4: alert("Quarta")
                break;
            case 5: alert("Quinta")
                break;
            case 6: alert("Sexta")
                break;
            case 7: alert("Sábado")
                break;
            default: alert("Digita direito aí, ô!")
        }
    }

    return (
        <>
            <input type="text"
                value={inputDia}
                onChange={(e) => setInputDia(e.target.value)}
            />
            <br />
            <br />
            <button onClick={executar}>Vai lá!</button><br /><br />
            <button onClick={executarComArray}>Aperte</button><br /><br />
            <button onClick={executarSwitchTrue}>Toca Ficha</button>
        </>
    )
};
export default Switch;