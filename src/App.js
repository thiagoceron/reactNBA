import React, { useEffect, useState } from 'react';
import './estilo.css';

function App() {
  const [nba, setNBA] = useState([]);

  useEffect(() => {
    fetch('/nba-team.json', {
      headers: {
        Accept: "application/json"  
      }
    })
    .then((res) => res.json())
    .then((res) => setNBA(res));
  }, []);

  return (
    <div className='container'>
      <header>
        <strong>React NBA</strong>
      </header>

      {nba.map((item) => {
        return (
          <article key={item.location} className='location'>
            <strong className='name'>{item.name}</strong>
            <img src={item.logoUrl} className='logoUrl' alt={`${item.name} logo`} />
            <p className='history'>{item.history}</p>
          </article>
        );
      })}
    </div>
  );
}

export default App;
