import React from "react";
import Slider from "../components/Slide";
import HeroSection from "../components/HeroSection";
import ServicesContainer from "../components/ServicesContainer";
import TestimonialContainer from "../components/TestimonialContainer";
import Footer from "../components/Footer";

export default function Home () {
    return (
        <div>
            <HeroSection />
            <ServicesContainer />
            <TestimonialContainer />
            <Footer />
        </div>
        

    )
}