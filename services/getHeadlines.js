import axios from "axios";

const BASE_URL =
  "https://saurav.tech/NewsAPI/top-headlines/category/sports/us.json";

const formatHeadlineData = (data) => {
  let formattedData = [];

  data.forEach((item, index) => {
    const format = {
      ...item,
      id: index.toString(),
    };

    formattedData.push(format);
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
