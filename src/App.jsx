import { Route, Routes } from "react-router-dom";
import styles from "./assets/styles/styles.scss";
import {
    ABOUT_PATH,
    HOME_PATH,
    ACCOUNT_PATH,
    SHOP_PATH,
    ACCOUNT_WISHLIST_PATH,
    ACCOUNT_PERSONAL_PATH,
    ACCOUNT_PAYMENT_PATH,
    ACCOUNT_ADDRESSES_PATH,
} from "./constants/path";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Account from "./pages/Account";
import Home from "./pages/Home";
import AccountOrders from "./pages/Account/Ordres";
import AccountWishlist from "./pages/Account/Wishlist";
import AccountPersonalInfo from "./pages/Account/PersonalInfo";
import AccountAddresses from "./pages/Account/Addresses";
import AccountPayment from "./pages/Account/Payment";
import Er404 from "./pages/Er404";
import Shop from "./pages/Shop";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path={HOME_PATH} element={<Home />} />
                    <Route path={ABOUT_PATH} element={<About />} />
                    <Route path={SHOP_PATH} element={<Shop />} />
                    <Route path={ACCOUNT_PATH} element={<Account path={ACCOUNT_PATH} />}>
                        <Route index element={<AccountOrders />} />
                        <Route path={ACCOUNT_WISHLIST_PATH} element={<AccountWishlist />} />
                        <Route path={ACCOUNT_PERSONAL_PATH} element={<AccountPersonalInfo />} />
                        <Route path={ACCOUNT_ADDRESSES_PATH} element={<AccountAddresses />} />
                        <Route path={ACCOUNT_PAYMENT_PATH} element={<AccountPayment />} />
                    </Route>
                    <Route path="*" element={<Er404 />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
