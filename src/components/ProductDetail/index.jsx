import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'


const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed bg-white right-0 border border-black rounded-lg`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <div>
              <XMarkIcon 
                className='h-6 w-6 text-black cursor-pointer'
                onClick={() => context.closeProductDetail()}
              />
            </div>
        </div>
        <figure className='px-6'>
            {/* <img className='w-full h-72 object-cover' src={context.productToShow.images && context.productToShow.images[0]} alt={context.productToShow.title}/>
            <figcaption className='flex flex-col p-6'>
                <h3 className='text-lg font-medium'>{context.productToShow.title}</h3>
                <p className='text-sm font-light'>{context.productToShow.description}</p>
                <span className='text-lg font-medium'>${context.productToShow.price}</span>
            </figcaption> */}
            <img className='w-full h-full px-2 rounded-2xl' src={context.productToShow.images} alt={context.productToShow.title} />
        </figure>
        <p className='flex flex-col p-6'>
          <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
          <span className='font-medium text-md'>{context.productToShow.title}</span>
          <span className='font-light text-sm'>{context.productToShow.description}</span>
        </p>
    </aside>
  )
}

export default ProductDetail