import axios from "axios";

const BASE_URL = "https://saurav.tech/NewsAPI/top-headlines/category/sports/us.json"


const getHeadlinesData = async () => {
    try{
        const response = await axios.get(BASE_URL)
        const data = response.data
        return data.articles.slice(0, 25)
    } catch(err){
        console.log(err)
    }
}
export default getHeadlinesData