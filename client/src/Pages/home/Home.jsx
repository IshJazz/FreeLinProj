import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import Slide from "../../components/Slide/Slide";
import { cards } from "../../data";
import CatCard from "../../components/catCard/CatCard";
const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your doorstep</h1>
            <div className="title">
              <img src="" alt="" />
              The best for every budget.
            </div>
            <p>
              Find high-quality services at every proce point. nNo hourly rates,
              just project based pricing.
            </p>
            <div className="title">
              <img src="" alt="" />
              The best for every budget.
            </div>
            <p>
              Find high-quality services at every proce point. nNo hourly rates,
              just project based pricing.
            </p>
          </div>
          <div className="item">
            <video src="" controls></video>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your doorstep</h1>
            <div className="title">
              <img src="" alt="" />
              The best for every budget.
            </div>
            <p>
              Find high-quality services at every proce point. nNo hourly rates,
              just project based pricing.
            </p>
            <div className="title">
              <img src="" alt="" />
              The best for every budget.
            </div>
            <p>
              Find high-quality services at every proce point. nNo hourly rates,
              just project based pricing.
            </p>
          </div>
          <div className="item">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
