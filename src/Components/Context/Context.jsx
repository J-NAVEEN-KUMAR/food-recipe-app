import axios from "axios";
import React, { createContext, useCallback, useState } from "react";

export const myContext = createContext();

export const AppContext = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);
  const [mealByNation, setMealByNation] = useState([]);

  const fetchHomePageMeals = useCallback((searchTerm) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => {
        console.log(res.data.meals);
        setMeals(res.data.meals);
      });
  }, []);

  const fetchCategories = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        // console.log(res.data.categories);
        setCategories(res.data.categories);
      });
  }, []);

  const fetchRandomMeal = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => {
        // console.log(res.data.meals);
        setRandomMeal(res.data.meals);
      });
  }, []);

  const fetchNationMeal = useCallback((nation) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${nation}`)
      .then((res) => {
        console.log(nation);
        console.log(res.data.meals);
        setMealByNation(res.data.meals);
      });
  }, []);

  return (
    <myContext.Provider
      value={{
        fetchHomePageMeals,
        meals,
        fetchCategories,
        categories,
        randomMeal,
        fetchRandomMeal,
        fetchNationMeal,
        mealByNation
      }}
    >
      {children}
    </myContext.Provider>
  );
};
