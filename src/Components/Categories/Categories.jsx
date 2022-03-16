import React, { useContext, useEffect } from "react";
import { myContext } from "../Context/Context";

const Categories = () => {
  const { fetchCategories, categories } = useContext(myContext);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
  return (
    <>
      <div className="info-cards">
        {categories.map((item) => (
          <div
            className="card"
            style={{ width: "18rem" }}
            key={item.idCategory}
          >
            <img
              src={item.strCategoryThumb}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-text">{item.strCategory}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
