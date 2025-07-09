import { Outlet } from "react-router"
import Header from './Components/Header';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <Outlet/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App