import axios from "axios";


// the base url to be called
const BASE_URL =
  "https://saurav.tech/NewsAPI/top-headlines/category/sports/us.json";


  // formatting the data
const formatHeadlineData = (data) => {
  let formattedData = []; // empty array to store the data

  data.forEach((item, index) => {
    const format = {
      ...item,
      id: index.toString(), // adding an id to the objects to be returned
    };

    formattedData.push(format); // pushing to the empty array
  });

  return formattedData;
};

const getHeadlinesData = async () => {
  try {
    const response = await axios.get(BASE_URL);
    const data = response.data;
    const fData = data.articles.slice(0, 25);
    return formatHeadlineData(fData);
  } catch (err) {
    console.log(err);
  }
};

export default getHeadlinesData;
