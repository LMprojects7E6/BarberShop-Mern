import { Toaster } from "react-hot-toast";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Router from "./router/Router";

function App() {
  return (
    <div className="h-screen bg-fuchsia-800 flex justify-center items-center">
      <Router></Router>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
