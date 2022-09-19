import React from "react";
import PortfolioItem from "../components/PortfolioItem";
import voodoo from "../images/voodoo.png";
import github from "../images/github.png";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Test Title",
      thumbnail: voodoo,
      description: "blah",
      link: "https://google.com",
      imageSize: "h-96 w-96 rounded-xl",
    },
    {
      title: "Test Title",
      thumbnail: github,
      description: "blah",
      link: "",
      imageSize: "",
    },
  ];

  return (
    <div className="bg-gray-800 h-screen">
      <div className="pt-10 h-fit bg-gray-800 text-gray-300 text-2xl text-center font-medium rounded-lg">
        <p>Hey there, check out some of my projects below!</p>
        <div className="flex justify-center space-x-10 p-8">
          {portfolioItems.map((item) => (
            <PortfolioItem
              title={item.title}
              thumbnail={item.thumbnail}
              description={item.description}
              link={item.link}
              imageSize={item.imageSize}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
