import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './Pages/Homepage';
import Redirect from './components/Redirect';
function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
    <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/:urlCode" element={<Redirect/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;