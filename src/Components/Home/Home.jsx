import React, { useCallback, useContext, useState } from "react";
import { myContext } from "../Context/Context";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { fetchHomePageMeals, meals } = useContext(myContext);

  const fetchMealsHandler = useCallback(() => {
    fetchHomePageMeals(searchTerm);
  }, [searchTerm, fetchHomePageMeals]);
  return (
    <>
      <div className="input-div">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a meal by a word or click search for some random meals"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={fetchMealsHandler}
          >
            Search
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {meals ? (
            meals.map((meal) => (
              <div
                className="card column"
                style={{ width: "18rem" }}
                key={meal.idMeal}
              >
                <img
                  src={meal.strMealThumb}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h4 className="card-text">{meal.strMeal}</h4>
                </div>
              </div>
            ))
          ) : (
            <h2>Hey No meals found! Try another word!</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
