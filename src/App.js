import { FiSearch } from 'react-icons/fi'

function App() {
  return (
    <div className="container">
    <h1 className="title">Loja </h1>

<div className="containerInput">
  <input 
  type="text"
  placeholder="Que peça voce procura ?"
  />
<button className="buttonSearch">
  <FiSearch size={25} color="#FFF"/>
  </button>

</div>

<main className='main'>





</main>


    </div>
  );
}

export default App;
