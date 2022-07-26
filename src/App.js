import { BrowserRouter } from "react-router-dom";
import { OpcionesProvider } from "./context/OpcionesProvider";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <OpcionesProvider>
        <AppRouter />
      </OpcionesProvider>
    </BrowserRouter>
  );
}

export default App;
