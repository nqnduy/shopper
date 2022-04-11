import React from "react";
import Tab from "../../components/Tab";
function Description() {
    return (
        <section className="pt-11">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Tab>
                            {/* Nav */}
                            <div className="nav nav-tabs nav-overflow justify-content-start justify-content-md-center border-bottom">
                                <Tab.Title id="description">Description</Tab.Title>
                                <Tab.Title id="sizeFit">Size &amp; Fit</Tab.Title>
                                <Tab.Title id="shippingReturn">Shipping &amp; Return</Tab.Title>
                            </div>
                            {/* Content */}
                            <div className="tab-content">
                                <Tab.Content id="description">
                                    <div className="row justify-content-center py-9">
                                        <div className="col-12 col-lg-10 col-xl-8">
                                            <div className="row">
                                                <div className="col-12">
                                                    {/* Text */}
                                                    <p className="text-gray-500">
                                                        Won't herb first male seas, beast. Let upon, female upon third fifth every. Man subdue rule after years
                                                        herb after form. And image may, morning. Behold in tree day sea that together cattle whose. Fifth
                                                        gathering brought bearing. Abundantly creeping whose. Beginning form have void two. A whose.
                                                    </p>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    {/* List */}
                                                    <ul className="list list-unstyled mb-md-0 text-gray-500">
                                                        <li>
                                                            <strong className="text-body">SKU</strong>: #61590437
                                                        </li>
                                                        <li>
                                                            <strong className="text-body">Occasion</strong>: Lifestyle, Sport
                                                        </li>
                                                        <li>
                                                            <strong className="text-body">Country</strong>: Italy
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    {/* List */}
                                                    <ul className="list list-unstyled mb-0">
                                                        <li>
                                                            <strong>Outer</strong>: Leather 100%, Polyamide 100%
                                                        </li>
                                                        <li>
                                                            <strong>Lining</strong>: Polyester 100%
                                                        </li>
                                                        <li>
                                                            <strong>CounSoletry</strong>: Rubber 100%
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Content>
                                <Tab.Content id="sizeFit">
                                    <div className="row justify-content-center py-9">
                                        <div className="col-12 col-lg-10 col-xl-8">
                                            <div className="row">
                                                <div className="col-12 col-md-6">
                                                    {/* Text */}
                                                    <p className="mb-4">
                                                        <strong>Fitting information:</strong>
                                                    </p>
                                                    {/* List */}
                                                    <ul className="mb-md-0 text-gray-500">
                                                        <li>Upon seas hath every years have whose subdue creeping they're it were.</li>
                                                        <li>Make great day bearing.</li>
                                                        <li>For the moveth is days don't said days.</li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    {/* Text */}
                                                    <p className="mb-4">
                                                        <strong>Model measurements:</strong>
                                                    </p>
                                                    {/* List */}
                                                    <ul className="list-unstyled text-gray-500">
                                                        <li>Height: 1.80 m</li>
                                                        <li>Bust/Chest: 89 cm</li>
                                                        <li>Hips: 91 cm</li>
                                                        <li>Waist: 65 cm</li>
                                                        <li>Model size: M</li>
                                                    </ul>
                                                    {/* Size */}
                                                    <p className="mb-0">
                                                        <img src="/img/icons/icon-ruler.svg" alt="..." className="img-fluid" />
                                                        <a className="text-reset text-decoration-underline ml-3" data-toggle="modal" href="#modalSizeChart">
                                                            Size chart
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Content>
                                <Tab.Content id="shippingReturn">
                                    <div className="row justify-content-center py-9">
                                        <div className="col-12 col-lg-10 col-xl-8">
                                            {/* Table */}
                                            <div className="table-responsive">
                                                <table className="table table-bordered table-sm table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Shipping Options</th>
                                                            <th>Delivery Time</th>
                                                            <th>Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Standard Shipping</td>
                                                            <td>Delivery in 5 - 7 working days</td>
                                                            <td>$8.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Express Shipping</td>
                                                            <td>Delivery in 3 - 5 working days</td>
                                                            <td>$12.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1 - 2 day Shipping</td>
                                                            <td>Delivery in 1 - 2 working days</td>
                                                            <td>$12.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Free Shipping</td>
                                                            <td>
                                                                Living won't the He one every subdue meat replenish face was you morning firmament darkness.
                                                            </td>
                                                            <td>$0.00</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            {/* Caption */}
                                            <p className="mb-0 text-gray-500">
                                                May, life blessed night so creature likeness their, for.{" "}
                                                <a className="text-body text-decoration-underline" href="#!">
                                                    Find out more
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </Tab.Content>
                            </div>
                        </Tab>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Description;
