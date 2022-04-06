import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsLetterHorizontal from "../components/NewsLetterHorizontal";
import NewsLetterVertical from "../components/NewsLetterVertical";
import PasswordReset from "../components/PasswordReset";
import ProductModal from "../components/ProductModal";
import SearchModal from "../components/SearchModal";
import ShoppingCartModal from "../components/ShoppingCartModal";
import SideChartModal from "../components/SideChartModal";
import WaitListModal from "../components/WaitListModal/index";
function MainLayout({ children }) {
    return (
        <>
            <NavBar />
            <Header />
            <Outlet />
            <Footer />

            <NewsLetterHorizontal />
            <NewsLetterVertical />
            <PasswordReset />
            <ProductModal />
            <SearchModal />
            <ShoppingCartModal />
            <SideChartModal />
            <WaitListModal />
        </>
    );
}

export default MainLayout;
