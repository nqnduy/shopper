import React from "react";
import BreadCrumb from "../../components/BreadCrumb/index";
import OurStory from "./components/OurStory";
import Welcome from "./components/Welcome";
import AboutCard from "./components/Intro";
import Image from "./components/Image";
import Review from "./components/Review";
import Social from "./components/Social";
import Feature from "./components/Feature";
import Intro from "./components/Intro";
function About() {
    return (
        <>
            <BreadCrumb />
            <Welcome />
            <OurStory />
            <Intro />
            <OurStory />
            <Slogan />
            <Image />
            <Review />
            <Social />
            <Feature />
        </>
    );
}

export default About;
