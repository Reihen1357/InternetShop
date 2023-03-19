import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
