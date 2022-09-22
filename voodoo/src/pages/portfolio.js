import React from "react";
import PortfolioItem from "../components/PortfolioItem";
import best from "../images/best.png";
import github from "../images/github.png";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Site Clone",
      thumbnail: best,
      description: `This project uses NextJS, Tailwind CSS, and Firebase. 
      I started this project on 9/16/22 and I am still working to add features and improve the site's looks. 
      My plans for the site are to make a clone of the 
      Boost Mobile my account dashboard. For now its fairly barebones. You can create an account and then login
      and the authentication state is carried to every page of the site. The site also uses 
      Firestore from Firebase to store user data such as first and last name which is 
      collected on account creation. I am currently working on adding the ability for 
      a user to change all their user info and delete their account. You
      can use a fake email to test the site as long as it is formatted as an email address 
      and the only password constraint currently in place is that it must be at least 6 digits.`,
      link: "https://melodic-sunburst-e467da.netlify.app",
      imageSize: "h-96 w-96 rounded-xl",
    },
    {
      title: "GitHub",
      thumbnail: github,
      description:
        "Check out my GitHub to see a few other projects I've worked on.",
      link: "https://github.com/xhellcat1942x",
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
