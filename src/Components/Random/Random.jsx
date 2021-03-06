import React, { useContext, useEffect } from "react";
import { myContext } from "../Context/Context";
import "./random.scss";

const Random = () => {
  const { randomMeal, fetchRandomMeal } = useContext(myContext);

  useEffect(() => {
    fetchRandomMeal();
  }, [fetchRandomMeal]);

  return (
    <>
      <div className="info-cards container random-container">
        <h5 style={{ textAlign: "center" }}>
          Hey there! Generate a random meal here.
        </h5>
        {randomMeal.map((item) => (
          <div
            className="card random-card"
            style={{ width: "18rem" }}
            key={item.idMeal}
          >
            <img src={item.strMealThumb} className="card-img-top" alt="..." />
            <h4>{item.strMeal}</h4>
            <button onClick={fetchRandomMeal} className="random-btn">Generate Another Meal</button>
            <div className="card-body">
              <h4>Instructions</h4>
              <p className="card-text">{item.strInstructions}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Random;
