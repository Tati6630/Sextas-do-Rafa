import React from 'react';
import './App.css'
import JogoAdivinhar from './JogoAdivinhar/JogoAdivinhar';
import SelecoesRepeticoes from './SelecoesRepeticoes/SelecoesRepeticoes';
import Switch from './Switch/Switch';
import Repeticoes from './Repeticoes/Repeticoes';

const App = () => {
  return (
    <JogoAdivinhar />,
    <SelecoesRepeticoes />,
    <Switch />,
    <Repeticoes />
  );
};


export default App;
