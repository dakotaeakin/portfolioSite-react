import React from "react";

function PortfolioItem(props) {
  return (
    <div className="bg-gray-700 w-fit h-fit shadow-lg rounded-xl">
      <div className="p-8">
        <a className="flex flex-col items-center">
          <p className="pb-4">{props.title}</p>
          <a href={props.link}>
            <img className={props.imageSize} src={props.thumbnail} />
          </a>
          <p className="pt-4">{props.description}</p>
        </a>
      </div>
    </div>
  );
}

export default PortfolioItem;
