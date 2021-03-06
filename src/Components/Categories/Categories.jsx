import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../Context/Context";
import "./categories.scss";

const Categories = () => {
  const { fetchCategories, fetchNationMeal, mealByNation } =
    useContext(myContext);
  const [nation, setNation] = useState("American");

  useEffect(() => {
    fetchCategories();
    fetchNationMeal(nation);
  }, [fetchCategories, nation]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setNation(e.target.value);
    fetchCategories(nation);
  };

  return (
    <div className="main-container">
      <div className="select-container">
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => handleChange(e)}
        >
          <option value="American" defaultValue>
            American
          </option>
          <option value="Chinese">Chineese</option>
          <option value="Egyptian">Egyptian</option>
          <option value="French">French</option>
          <option value="Indian">Indian</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
          <option value="Mexican">Mexican</option>
          <option value="Russian">Russian</option>
        </select>
      </div>
      <div className="info-cards container">
        {mealByNation.map((item) => (
          <div
            className="card column"
            style={{ width: "18rem" }}
            key={item.idMeal}
          >
            <img src={item.strMealThumb} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-text">{item.strMeal}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
