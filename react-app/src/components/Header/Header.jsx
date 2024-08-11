import logo from '/vite.svg'
import "./Header.css";
import {useState} from 'react'

export default function Header() {
  const [time, setTime] = useState(new Date());
  setInterval(()=> setTime(new Date()), 1000);
  
  return (
    <header className="header">
        <div className="container">
          <div className="header__inner">
                <img src={logo} alt="Result" />
                <span>Время сейчас: {time.toLocaleTimeString()}</span>
          </div>
        </div>
    </header>
  );
}

