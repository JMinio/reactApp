
const carsApi = [
    {
        "category":"bmw",
        "brand":"BMW",
        "model":"330",
        "image":"330.jpg",
        "price":20000
},
    {
        "category":"mercedes",
        "brand":"MERCEDES",
        "model":"A200",
        "image":"a200.jpg",
        "price":10000

},
    {
        "category":"mercedes",
        "brand":"MERCEDES",
        "model":"AM4",
        "image":'am4.jpeg',
        "price":15000

},
    {
        "category":"chevrolet",
        "brand":"CHEVROLET",
        "model":"CAMARO",
        "image":'camaro.jpg',
        "price":25000

},
    {
        "category":"toyota",
        "brand":"TOYOTA",
        "model":"COROLLA",
        "image":'corolla.jpg',
        "price":5000

},
    {
        "category":"volkswagen",
        "brand":"VOLKSWAGEN",
        "model":"GOLF",
        "image":'golf.jpg',
        "price":17500

},
    {
        "category":"bmw",
        "brand":"BMW",
        "model":"M4",
        "image":'m4.jpg',
        "price":48000

},
    {
        "category":"bmw",
        "brand":"BMW",
        "model":"M5",
        "image":'m5.jpg',
        "price":35000

},
    {
        "category":"volkswagen",
        "brand":"VOLKSWAGEN",
        "model":"VENTO",
        "image":'vento.jpg',
        "price":12500

},
    {
        "category":"toyota",
        "brand":"TOYOTA",
        "model":"yaris",
        "image":'yaris.jpg',
        "price":13000

}];

/* const getApi = () => {
    return new Promise(
        (resolve,reject)=>{
            setTimeout(
                ()=>{
                    resolve(carsApi);
                },3000
            )
        }
    )
}

async function fetchCars(){
    const carsPromise = await getApi();
    console.log(carsPromise);
}

fetchCars();
 */
export const getObjectById = (id) => {
    return carsApi[id]; 
}

export default carsApi;