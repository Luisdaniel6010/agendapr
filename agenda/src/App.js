import './App.css';

function App() {

  function agregar(){

     const nomes = document.getElementById('nome')
     const emails = document.getElementById('email')
     const telefs = document.getElementById('telef')

     const dados =[nomes.value, emails.value, telefs.value] 
     console.log(nomes.value)

     const novoElement = document.createElement('li')
     novoElement.textContent = dados

     const container = document.getElementById('container')
     container.appendChild(novoElement)

  }

  return (
    <div className="App">
      <div> Agenda </div>

      <hr></hr>

      <div>
        <button type="submit" onClick={agregar}>Agregar</button>
        <button>Atualizar</button>
      </div>



      <form>
        <input id="nome"  placeholder='Nome'></input>
        <input id="email" placeholder='Email'></input>
        <input id="telef" placeholder='Telefone'></input>
      </form>

     

      <ul id="container">

      </ul>

     
      <button type="submit">Deletar</button>


    </div>
  );
}

export default App;
