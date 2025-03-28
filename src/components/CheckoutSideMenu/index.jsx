import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../components/OrderCard'
import './styles.css'


const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed top-20 bg-white right-0 border border-black rounded-lg`}>
        <div className='flex justify-between items-center px-6'>
            <h2 className='font-medium text-xl'>My Order</h2>
            <div>
              <XMarkIcon 
                className='h-6 w-6 text-black cursor-pointer'
                onClick={() => context.closeCheckoutSideMenu()}
              />
            </div>
        </div>
        <div className="px-6">
          {
            context.cartProducts.map(product => (
                <OrderCard
                  key={product.id}
                  title={product.title}
                  imageUrl={product.images}
                  price={product.price}
                />
            ))
          }
        </div>
    </aside>
  )
}

export default CheckoutSideMenu