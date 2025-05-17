import { useState } from "react"
import ItemCard from "./ItemCard"

const RestaurantCategory = (category) => {

    const {title, itemCards} = category?.category?.card?.card

    const [showItems, setShowItems] = useState(false)

    const HandleClick = () => {
        setShowItems(prev => !(prev))
    }

    return(
        <div className="flex flex-col w-6/12">
            <div className="flex justify-between p-2 shadow-lg my-2 bg-gray-200 rounded-md cursor-pointer" onClick={HandleClick}>
                <span className="font-bold">{title}  ({itemCards.length})</span>
                {
                    showItems ? <span className="text-sm">▼</span> : <span className="text-sm">▲</span>
                }
            </div>
            {
                itemCards.map((item, index) => {
                    return(
                        <div key={index}>
                        {
                            showItems ? <ItemCard key={index} item={item} /> : <></>
                        }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RestaurantCategory