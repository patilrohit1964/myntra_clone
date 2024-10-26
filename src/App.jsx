import './App.css';
import Footer from './components/Footer';
import Navbarnav from './components/Navbarnav';
import AllRoutes from './routes/AllRoutes';
import { Toaster } from 'react-hot-toast'
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div>
      <Navbarnav />
      <AllRoutes />
      <Footer />
      <Toaster position="top-center" />
    </div>
  )
}

export default App;
