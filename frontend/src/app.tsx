import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

/**
 * React element for the entire application
 * 
 * @returns React element for the entire app
 */
function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
