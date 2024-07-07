import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import {DataProvider} from "./context/DataProvider";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/register'} element={<Register/>}/>
            <Route path={'/dashboard/*'} element={<DataProvider><Dashboard/></DataProvider>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
