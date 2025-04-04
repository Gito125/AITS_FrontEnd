import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselSlide from "../components/CarouselSlide";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % 4);
  const handlePrev = () => setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));

  return (
    <div className="container flex flex-col items-center bg-blue-100 text-gray-900 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Streamline Academic & Issue Tracking with Ease!</h1>

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
          <CarouselSlide imgSrc="https://plus.unsplash.com/premium_photo-1682310075673-b408eb1ca6fd?q=80&w=2112" alt="Issue Tracking" primaryText="📌 Issue Tracking" secondaryTest="Report and resolve academic concerns quickly and efficiently." /> 

          <CarouselSlide imgSrc="https://plus.unsplash.com/premium_photo-1682309524785-cf2288f7b544?q=80&w=2112" alt="Notifications" primaryText="🔔 Notifications" secondaryTest="Get real-time updates on issue resolutions and academic progress." /> 

          <CarouselSlide imgSrc="https://images.unsplash.com/flagged/photo-1558963675-94dc9c4a66a9?q=80&w=1972" alt="Reports & Insights" primaryText="📊 Reports & Insights" secondaryTest="View academic data and issue tracking reports in one place." />

          <CarouselSlide imgSrc="https://images.unsplash.com/photo-1593698054469-2bb6fdf4b512?q=80&w=1974" alt="User Roles" primaryText="👤 User Roles" secondaryTest="Custom dashboards for students, faculty, and administrators." />
        </Carousel>

        {/* Navigation Buttons */}
        <button onClick={handlePrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition">◀</button>
        <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition">▶</button>
      </div>

      {/* Call-to-Action */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold">Take Control of Academic Issue Tracking</h2>
        <p className="mt-2 text-gray-700">Sign up today and make academic management seamless and efficient.</p>
        <Link to="/signup">
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition">Get Started</button>
        </Link>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl">
        <FeatureCard title="Fast Issue Reporting" description="Easily report academic concerns in a few clicks." icon="📝" />
        <FeatureCard title="Automated Notifications" description="Stay updated on issue resolutions instantly." icon="📢" />
        <FeatureCard title="Role-Based Dashboards" description="Personalized views for students, faculty, and staff." icon="👥" />
      </div>

      {/* Testimonials */}
      <div className="mt-16 text-center max-w-3xl">
        <h2 className="text-2xl font-semibold">What Our Users Say</h2>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <p className="italic text-gray-700">
            "This system has transformed the way we track academic issues. The automation and ease of use are outstanding!"
          </p>
          <span className="block mt-4 font-bold">- Dr. Alice Johnson, Faculty</span>
        </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <p className="italic text-gray-700">
            "As a student, I used to struggle with reporting academic issues. This platform has made it so easy to communicate with faculty!"
          </p>
          <span className="block mt-4 font-bold">- Michael Kintu, Student</span>
        </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <p className="italic text-gray-700">
            "The real-time notifications keep me updated on issue resolutions. It's a game changer for academic administration."
          </p>
          <span className="block mt-4 font-bold">- Prof. Sarah Namusoke, Administrator</span>
        </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <p className="italic text-gray-700">
            "I love how everything is organized in one place. The reports and insights help us make data-driven decisions."
          </p>
          <span className="block mt-4 font-bold">- Eng. David Mutebi, IT Department</span>
        </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <p className="italic text-gray-700">
            "This system has improved transparency in handling academic concerns. Everyone is now accountable."
          </p>
          <span className="block mt-4 font-bold">- Florence Achan, Lecturer</span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;