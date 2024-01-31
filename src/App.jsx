import Post from "./components/Post";
import { useState } from "react";

function App() {
  const [ postagens, setPostagemns] = useState([
    {
      id:0,
      titulo:"Resultado do SISU 2024",
      imagem:"https://picsum.photos/200/200?random=1",
      conteudo:"MEC e INEP liberam resultado do SISU 2024."
    },
    {
      id:1,
      titulo:"Nota de Corte de SI",
      imagem:"https://picsum.photos/200/200?random=2",
      conteudo:"Com nota de corte de 812, SI possui a maior nota da região"
    },
    {
      id:2,
      titulo:"Datas relacionadas a Lista de Espera",
      imagem:"https://picsum.photos/200/200?random=3",
      conteudo:"Revelada data para realização da chamada da lista de espera para os cursos do IFCE campus Cedro!"
    }

  ])
  
  function apagarPost(postId) {
    setPostagemns(postagens.filter(p => p.id !== postId))
  }
  return (
    <div>
      <h1>React Blog</h1>
      <p>Postagens do blog</p>
      {postagens.map(p => (
        <Post
          key={p.id}
          {...p}
          onDelete={apagarPost}
          />

      ))}
    </div>
  );
}

export default App;