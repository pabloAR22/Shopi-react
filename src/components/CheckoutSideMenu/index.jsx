import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../components/OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'


const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id !== id)
    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '31.03.2025',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      total: totalPrice(context.cartProducts),
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
  }

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed top-20 bg-white right-0 border border-black rounded-lg`}>
        <div className='flex justify-between items-center px-6 mt-6'>
            <h2 className='font-medium text-xl'>My Order</h2>
            <div>
              <XMarkIcon 
                className='h-6 w-6 text-black cursor-pointer'
                onClick={() => context.closeCheckoutSideMenu()}
              />
            </div>
        </div>
        <div className='px-6 overflow-y-scroll flex-1'>
          {
            context.cartProducts.map(product => (
                <OrderCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  imageUrl={product.images}
                  price={product.price}
                  handleDelete={handleDelete}
                />
            ))
          }
        </div>
        <div className='px-6'>
          <p className='flex justify-between items-center'>
            <span className='font-ligth'>Total: </span>
            <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
          </p>
          <button className='w-full bg-black py-3 text-white rounded-lg mb-6' onClick={() => handleCheckout()}>Checkout</button>
        </div>
    </aside>
  )
}

export default CheckoutSideMenu