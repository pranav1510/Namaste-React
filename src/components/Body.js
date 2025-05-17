import { useEffect, useRef, useState } from "react"
import RestaurantCard, { WithPromoted, withpromoted } from "./RestaurantCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router"

const Body = () => {

    const [resList, setResList] = useState([])
    const [filteredList, setFilteredList] = useState([ ])
    const [searchVal, setSearchVal] = useState("")
    const debounceValue = useRef(null)
    const PromotedRes = WithPromoted(RestaurantCard)

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async() => {
        const myList = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await myList.json()
        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
    }

    const handleSearch = (e) => {
        const value = e.target.value
            setSearchVal(value)

            if(debounceValue.current){
                clearTimeout(debounceValue.current)
            }
            if(value.trim() === ""){setFilteredList(resList)}
            else{
                debounceValue.current = setTimeout(() => {
                    console.log(searchVal);
                    const res1 = resList.filter((res) => res.info.name.toLowerCase().includes(value.toLowerCase()))
                        setFilteredList(res1)
                },500)
            }
    }

    if(resList.length === 0){
        return <Shimmer />
    }

    return(
        <>
        <div className="flex flex-col mx-2 border border-black">
            <div className="flex m-3">
                <div className="flex grow justify-center">
                    <button className="border border-black rounded-md px-4 py-1 text-md bg-yellow-400 text font-semibold" onClick={() => {
                        const res1 = resList.filter(
                            (res) => res.info.avgRating > 4
                        )
                        setFilteredList(res1)
                    }}>List of Top Restaurants</button>
                </div>
                <div className="flex grow justify-center">
                    <input className="w-80 border border-black rounded-md px-2 py-1" type="text" placeholder="Search" value={searchVal} onChange={handleSearch}/>
                </div>
            </div>
            <div className="flex flex-wrap p-2">
                {
                    filteredList?.map((rest) => 
                        (
                            <Link key={rest.info.id} to={"/restaurant/"+ rest.info.id}>
                                {
                                    rest.info.sla.deliveryTime <=30 ? <PromotedRes rest={rest}/> : <RestaurantCard rest={rest}/>
                                }
                            </Link>
                        ))
                }
            </div>
        </div>
        </>
    )
}

export default Body