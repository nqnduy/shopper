import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import Orders from "./Ordres";
import Wishlist from "./Wishlist";
import PersonalInfo from "./PersonalInfo";
import Addresses from "./Addresses";
import Payment from "./Payment";
import { NavLink, Outlet } from "react-router-dom";
import { ACCOUNT_ADDRESSES_PATH, ACCOUNT_PAYMENT_PATH, ACCOUNT_PERSONAL_PATH, ACCOUNT_WISHLIST_PATH } from "../../constants/path";
function Account({ path }) {
    return (
        <>
            <BreadCrumb />
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            {/* Heading */}
                            <h3 className="mb-10">My Account</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            {/* Nav */}
                            <nav className="mb-10 mb-md-0">
                                <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                                    <NavLink className="list-group-item list-group-item-action dropright-toggle" to={`${path}`} end>
                                        Orders
                                    </NavLink>
                                    <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${path}/${ACCOUNT_WISHLIST_PATH}`}>
                                        Widhlist
                                    </NavLink>
                                    <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${path}/${ACCOUNT_PERSONAL_PATH}`}>
                                        Personal Info
                                    </NavLink>
                                    <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${path}/${ACCOUNT_ADDRESSES_PATH}`}>
                                        Addresses
                                    </NavLink>
                                    <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${path}/${ACCOUNT_PAYMENT_PATH}`}>
                                        Payment Methods
                                    </NavLink>
                                    <a className="list-group-item list-group-item-action dropright-toggle" href="#!">
                                        Logout
                                    </a>
                                </div>
                            </nav>
                        </div>
                        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Account;
