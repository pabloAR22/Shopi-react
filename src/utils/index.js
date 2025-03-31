/**
 * this function calculates the total price of all products in the cart
 * @param {Array} products cartProducts - array of products in the cart
 * @returns {number} - total price of all products in the cart
*/

export const totalPrice = (products) => {
    let sum = 0 
    products.forEach(product => {
        sum += product.price
    });
    return sum
}