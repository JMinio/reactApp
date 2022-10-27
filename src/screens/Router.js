import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "../components/Home/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/Home/ItemDetailContainer/ItemDetailContainer";
import NavBarNew from "../components/Home/NavBar/NavBar"

const Router = () => {
    return(
        <BrowserRouter>
        <NavBarNew/>
        <Routes>
            <Route path="/" element={<ItemListContainer/>}></Route>
            <Route path="/category/:marca" element={<ItemListContainer/>}></Route>
            <Route path="/item/:idCar" element={<ItemDetailContainer/>}></Route>
            <Route path="/*" element={<div><h1>ERROR 404 - Not Found</h1></div>}></Route>
        </Routes>
        </BrowserRouter>
    );
}

export default Router;