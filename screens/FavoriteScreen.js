//import { useContext } from "react";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";
//import { FavoritesContext } from "../store/context/favorites-context";
import {MEALS} from "../data/dummy-data";

function FavoriteScreen() {

    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);

    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

    return  <MealsList items={favoriteMeals} />
        
   
}

export default FavoriteScreen;