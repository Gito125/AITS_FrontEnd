import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselSlide from "../components/CarouselSlide";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % 4);
  const handlePrev = () =>
    setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));

  return (
    <div className="flex flex-col items-center bg-blue-100 text-gray-900 p-6">
      <h1 className="text-4xl font-bold mb-6">
        "Streamline Academic & Issue Tracking with Ease!"
      </h1>

      <div className="relative w-full">
        {/* Carousel */}
        <Carousel
          selectedItem={currentSlide}
          onChange={setCurrentSlide}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          autoPlay
          className="rounded-lg shadow-lg"
        >
          <CarouselSlide
            imgSrc={
              "https://images.unsplash.com/photo-1465343161283-c1959138ddaa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=MwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={"Issue Tracking"}
            primaryText={"📌 Issue Tracking"}
            secondaryText={
              "Report and resolve academic concerns quickly and efficiently."
            }
          />

          <CarouselSlide
            imgSrc={
              "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={"Issue Tracking"}
            primaryText={"🔔 Notifications"}
            secondaryText={
              "Get real-time updates on issue resolutions and academic progress."
            }
          />
          
          <CarouselSlide
            imgSrc={
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={"Issue Tracking"}
            primaryText={"📊 Reports & Insights"}
            secondaryText={
              "View academic data and issue tracking reports in one place."
            }
            />

          <CarouselSlide
            imgSrc={
              "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={"Issue Tracking"}
            primaryText={"👤 User Roles"}
            secondaryText={
              "Custom dashboards for students, faculty, and administrators."
            } />

        </Carousel>

        {/* Toggle Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full transition"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full transition"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default HomePage;
