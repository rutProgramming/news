import NewsDrawer from "./components/NewsDrawer";
import AppRoutes from "./router";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}


export default App
