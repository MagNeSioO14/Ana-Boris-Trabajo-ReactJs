import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./componentes/Header/Header"
import './app.css'
import ItemsListContainer from "./componentes/ItemListContainer/ItemListContainer"
import './componentes/Header/Header.scss'
import './componentes/ItemListContainer/ItemListContainer.scss'

function App() {

  return (
    <div>

      <Header/>
      <ItemsListContainer/>
    </div>
  )
}

export default App
