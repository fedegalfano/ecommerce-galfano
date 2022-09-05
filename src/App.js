import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"¡Bienvenido a nuestra tienda online!"}/>
    <ItemDetailContainer/>
    </>
  );
}
export default App;