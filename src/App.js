import logo from './logo.svg';
import Car from "./component/Car";
import './App.css';

function App() {
  return (
    <div >
      <Car model={'mers'} description={'1'} power={300+' ,'} volume={10}/>
      <Car  model={'bmw'} description={'2'} power={310+' ,'} volume={10}/>
      <Car  model={'toyota'} description={'3'} power={320+' ,'} volume={3.5}/>
    </div>
  );
}

export default App;
