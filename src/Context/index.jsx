import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    
    //open/close Detail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

    const openProductDetail = () => {
        setIsProductDetailOpen(true)
    }
    const closeProductDetail = () => {
        setIsProductDetailOpen(false)
    }

    //Show productDetail
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart
    const [cartProducts, setCartProducts] = useState([])

    //checkout 
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    
    const openCheckoutSideMenu = () => {
        setIsCheckoutSideMenuOpen(true)
    }
    const closeCheckoutSideMenu = () => {
        setIsCheckoutSideMenuOpen(false)
    }

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}