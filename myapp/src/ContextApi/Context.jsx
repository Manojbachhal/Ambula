import React, { createContext, useState } from 'react'

export const MyContext = createContext();
function MyContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    const [todo, setTodo] = useState([]);

    // updating cart data in context api
    const HandleCart = (element) => {
        setCart(element)
    }

    // updating to-do data in context api
    const handleSetTodo = (element) => {
        setTodo(element)
    }

    // context object
    const contextData = {
        cart, HandleCart, todo, handleSetTodo
    }

    return (
        <MyContext.Provider value={contextData}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextProvider