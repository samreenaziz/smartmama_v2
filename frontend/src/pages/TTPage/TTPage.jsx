import "../FTPage/FTPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { api_url } from "../../utils/utils.js";
import ItemsGrid from "../../components/ItemsGrid/ItemsGrid.jsx";

const TTPage = () => {
  const [trimesterData, setTrimesterData] = useState([]);
  const [trimesterType, setTrimesterType] = useState("third");

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
      <p>Third Trimester? You're almost there!</p>
      <p>
        Congratulations on making it to the final stretch! The arrival of your
        little one is just around the corner. Keep taking good care of yourself
        as you prepare for this amazing new chapter.
      </p>
      <ItemsGrid products={trimesterData} />
    </main>
  );
};
export default TTPage;
