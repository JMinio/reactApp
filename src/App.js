import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer msg="Hola bienvenidos" desc="Bienvenidos a mi nueva pagina en react"/>
    </div>
  );
}

//ItemlistContainer.js 

export default App;
