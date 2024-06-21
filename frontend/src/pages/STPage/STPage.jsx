import "../FTPage/FTPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { api_url } from "../../utils/utils.js";
import ItemsGrid from "../../components/ItemsGrid/ItemsGrid.jsx";

const STPage = () => {
  const [trimesterData, setTrimesterData] = useState([]);
  const [trimesterType, setTrimesterType] = useState("second");

  const fetchItemData = async () => {
    try {
      const response = await axios.get(`${api_url}`);
      const data = response.data;

      // Ensure trimesterData is always an array
      setTrimesterData(
        Array.isArray(data[trimesterType]) ? data[trimesterType] : []
      );

      console.log(data);
      console.log("fetchedData");
    } catch (error) {
      console.error("FTPAGE", error);
      // In case of an error, ensure trimesterData is an empty array
      setTrimesterData([]);
    }
  };

  useEffect(() => {
    fetchItemData();
  }, [trimesterType]);
  return (
    <main className="Page-title__container">
      <p>Second Trimester? Exciting!</p>
      <p>
        Congratulations on reaching the middle of your pregnancy journey! This
        is a wonderful time of growth and bonding with your baby.
      </p>
      <ItemsGrid products={trimesterData} />
    </main>
  );
};
export default STPage;
