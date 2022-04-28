import React from 'react';
import logo from './logo.svg';
import './App.scss';
import FirstCounter from './components/FirstCounter/FirstCounter';
import SecondCounter from './components/SecondCounter/SecondCounter';
import AddText from './components/AddText/AddText';
import ChangeColor from './components/ChangeColor/ChangeColor';
import IfClicked from './components/IfClicked/IfClicked';
import TextFromInput from './components/TextFromInput/TextFromInput';
import NumberArrayActions from './components/NumberArrayActions/NumberArrayActions';
import Card from './components/Card/Card';

const App = () => (
  <div className="wrapper">
    <FirstCounter />
    <SecondCounter />
    <AddText />
    <ChangeColor />
    <IfClicked />
    <TextFromInput />
    <NumberArrayActions />
    <Card />
  </div>
);

export default App;
