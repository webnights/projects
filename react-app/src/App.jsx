 
//styles
import "./App.css";
import {ways, differences} from "./data"
import {useState} from 'react'
//components
import Header from "./components/Header/Header";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";


export default function App() {
  const [contentType, setContentType] = useState(null)
  function handleClick(type)
  {
    setContentType(type);
  }
  return (
    <div className="wrapper">
      <Header />
      <main>
        <section>
          <h3>Наш подход к обучению</h3>
          <ul>
           {...ways.map((way) => <WayToTeach {...way} />)}
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>
          <Button buttonClick = {() => handleClick('Android')} isActive = {contentType === 'Android'}>Сяоми МИ 9</Button>
          <Button buttonClick = {()=> handleClick('IOS')} isActive = {contentType === 'IOS'}>Айфон 15 Про Макс</Button>
          <Button buttonClick = {()=>handleClick('HUY')} isActive = {contentType === 'HUY'}>ПокоX3</Button>
          <p>{differences[contentType] ? differences[contentType] : 'Нажмите на кнопку'  }</p>
        </section>
      </main>
    </div>
  );
}

