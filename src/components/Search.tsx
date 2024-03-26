// interface Order {
//     id: number,
//     date: string,
//     country: string,
//     currency: string,
//     amount: number
// }

import { useState } from "react"

const orders = [
    {id: "123", date: "1-2-23", country: "US", currency: "USD", amount: 50},
    {id: "456", date: "1-3-23", country: "US", currency: "VND", amount: 51},
    {id: "789", date: "1-4-23", country: "US", currency: "USD", amount: 52}
]


// let orderList: Order[] = []
// orderList.push({id: 123, date: "1-2-23", country: "US", currency: "USD", amount: 50})
// orderList.push({id: 456, date: "1-3-23", country: "US", currency: "USD", amount: 51})
// orderList.push({id: 789, date: "1-4-23", country: "US", currency: "USD", amount: 52})





//const filtered = orders.filter(order => order.id === 123)




const Search = () : JSX.Element => {
    const [filteredOrders, setFilteredOrders] = useState(orders)

    const handleFilter = (event : string) => {
        const value = event
        const filtered = orders.filter(order => order.id.includes(value))
        console.log(filtered)
    }

    return (
        <div>
            {/* <input type="text" onChange={handleFilter} /> */}
            {/* {filteredOrders.map(order => (
                <div key = {order.id}>
                    <p>ID: order.id </p>
                    <p>DATE</p>
                    </div>
            } */}

            <label htmlFor="name"> Order ID:</label>
            <input type= "text" id="name" name="name"/>
            <button> Search </button>
        </div>
        
    )
}

export default Search