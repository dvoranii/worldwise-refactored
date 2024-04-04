import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import Product from "./pages/Product/Product";
import Homepage from "./pages/Home/Homepage";
import Pricing from "./pages/Pricing/Pricing";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import PageNav from "./Components/PageNav/PageNav";
import AppLayout from "./pages/AppLayout/AppLayout";
import Login from "./pages/Login/Login";
import CityList from "./Components/CityList/CityList";
import CountryList from "./Components/CountryList/CountryList";
import City from "./Components/City/City";
import Form from "./Components/Form/Form";
import { CitiesProvider } from "./Contexts/CitiesContext";

function App() {
  // So as not to show on /app route
  function ConditionalNav() {
    const location = useLocation();

    if (location.pathname.startsWith("/app")) {
      return null;
    }

    return <PageNav />;
  }

  return (
    <CitiesProvider>
      <BrowserRouter>
        <ConditionalNav />
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />}></Route>
            <Route path="cities" element={<CityList />}></Route>
            <Route path="cities/:id" element={<City />}></Route>
            <Route path="countries" element={<CountryList />}></Route>
            <Route path="form" element={<Form />}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
