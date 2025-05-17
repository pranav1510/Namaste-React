import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

	const {resId} = useParams()
	const resInfo = useRestaurantMenu(resId)

    if(resInfo === null){return <Shimmer />}

    const {name, cuisines, costForTwoMessage, avgRating, locality, } = resInfo?.cards[2]?.card.card.info
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card

	const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
	console.log(categories)

	return (
		<div className="flex flex-col mx-2 items-center">
			<div className="flex flex-col w-6/12 border border-black mt-1 rounded-md p-2">
				<h1 className="text-xl font-bold my-1">{name}</h1>
				<div className="flex flex-col">
					<span className="text-sm font-medium text-gray-700">{avgRating}🌟</span>
                    <span className="text-sm font-medium text-gray-700">{costForTwoMessage}</span>
					<span className="text-sm font-medium text-gray-700">{cuisines.join(", ")}</span>
					<span className="text-sm font-medium text-gray-700">{locality}</span>
				</div>
			</div>
			{
				categories.map((category, index) => {
					return(
						<RestaurantCategory key={index} category={category} />
					)
				})
			}
			
			</div>
	);
};

export default RestaurantMenu;
