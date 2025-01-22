"use client"; // Ensures client-side rendering
import { useRouter } from "next/navigation"; // Proper routing for client-side components
import React from "react";
import Link from "next/link";

const WebDevelopment: React.FC = () => {
  const router = useRouter();

  // Card data
  const cards = [
    {
      image: "/zomo.png", // Replace with your image path
      heading: "Zomato data analysis Project !",
      techStack: ["Python","panda","numpy","seaborn","matplotlib"],
      github: "https://github.com/shyamkumargupta411/Zomato-Project/tree/main/Zomato",
      liveLink: "",
    },
    {
      image: "/blin.png", // Replace with your image path
      heading: "Blinkit-Power-BI !",
      techStack: ["Power-BI","KPI"],
      github: "https://github.com/shyamkumargupta411/Blinkit-Power-BI/tree/main/Blinkit%20Poject",
      liveLink: "",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-200">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="bg-pink-800 text-white py-2 px-4 rounded-lg mt-4 ml-16 hover:bg-rose-800 transition-all"
      >
        Back
      </button>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-pink-500 mb-6 text-center">
        Data Analysis: Turning Data into Actionable Insights
        </h1>
        <p className="text-lg text-gray-300 mb-8 text-center">
        I transform raw data into meaningful insights through advanced analytics, scalable dashboards, and 
        cutting-edge tools. Step into a world where clarity meets precision, driving impactful decisions with 
        every dataset.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
            >
              <img
                src={card.image}
                alt={card.heading}
                className="w-full object-cover group-hover:opacity-80 transition-all" style={{height: '400px'}}

              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-pink-400">
                  {card.heading}
                </h3>
                <p className="text-sm text-gray-300 mt-2">
                  Tech Stack: {card.techStack.join(", ")}
                </p>
                <div className="mt-4">
                  <Link
                    href={card.github}
                    target="_blank"
                    className="text-pink-500 hover:underline block"
                  >
                    GitHub Repository
                  </Link>
                  <Link
                    href={card.liveLink}
                    target="_blank"
                    className="text-pink-500 hover:underline block"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;