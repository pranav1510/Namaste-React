import { RESTAURANTS_IMG } from "../utils/constants"
const RestaurantCard = ({rest}) => {
    return(
        <div className="flex flex-col p-2 w-52 border border-black rounded-md m-2">
            <img className=" h-48 rounded-md" src= {RESTAURANTS_IMG + rest.info.cloudinaryImageId}/>
            <h3 className="text-md font-semibold py-1">{rest.info.name}</h3>
            <h4>{rest.info.cuisines.join(", ")}</h4>
            <h5>{rest.info.avgRating}</h5>
            <h5>{rest.info.sla.deliveryTime} minutes</h5>
        </div>
    )
}

export const WithPromoted = (RestaurantCard) => {
    return (props) => {
        return(
        <div>
            <label className="absolute bg-black text-white text-sm px-1 rounded-sm">Fast Delivery</label>
            <RestaurantCard {...props} />
        </div>
    )}
}

export default RestaurantCard