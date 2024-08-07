import React, { useEffect, useState, } from 'react';
import '../src/style.css';

function App (){
  const [nutri, setNutri] = useState ([]);

  useEffect(()=>{
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

    fetch(url)
    .then((r) => r.json())
    .then((json) =>{
      setNutri(json);
    })
  }, []);

  return(
    <div class="main">
      <header class="header">
        <strong class='title'>React Nutri</strong>
      </header>

      {nutri.map((item)=>{
        return(
          <article class="item" key={item.id}>
              <strong class="title">{item.titulo}</strong>
            <div class="conteudo">
              <img class="imagem" src={item.capa} alt={item.titulo}/>
              <p class="descricao">{item.subtitulo}</p>
          </div>
              <span>{item.categoria}</span>
            </article>
        );
      })
      }
    </div>

  );
}

export default App;