import React from "react";

function PortfolioItem(props) {
  return (
    <div className="bg-gray-700 w-fit h-fit max-w-[50%] shadow-lg rounded-xl">
      <div className="p-8">
        <div className="flex flex-col items-center">
          <p className="pb-4">{props.title}</p>
          <a href={props.link} target="_blank" rel="noreferrer">
            <img className={props.imageSize} src={props.thumbnail} alt="" />
          </a>
          <p className="pt-4">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
