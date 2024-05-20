const API_KEY_NASA = "UArbiNjKOMqEqGgZQ1faeq0XfIQdDzyyFvgvXbyk"
const API_NASA = "https://api.nasa.gov/planetary/apod"

export default async (urlParams ) => {
 try {

    const response = await fetch(`${API_NASA}?api_key=${API_KEY_NASA}${urlParams?.length > 0 ? urlParams : ""}`,)
    const data = response.json();

    return Promise.resolve(data)

 } catch (error) {
    return Promise.reject(error)
    
 }

}