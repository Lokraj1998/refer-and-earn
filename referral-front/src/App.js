import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { Signup } from './pages/Signup';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />}>
          <Route path=":ref" element={<Signup />} />
        </Route>
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;