import "./HomePage.scss";
import { useState, useEffect } from "react";
import ItemsGrid from "../../components/ItemsGrid/ItemsGrid.jsx";
import axios from "axios";
import { api_url } from "../../utils/utils.js";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [trimesterData, setTrimesterData] = useState([]);
  const [trimesterType, setTrimesterType] = useState("all");

  const fetchItemData = async () => {
    try {
      const response = await axios.get(`${api_url}`);
      const data = response.data;

      // Ensure trimesterData is always an array
      if (trimesterType === "all") {
        setTrimesterData(Array.isArray(data.all) ? data.all : []);
      } else {
        setTrimesterData(
          Array.isArray(data[trimesterType]) ? data[trimesterType] : []
        );
      }
      console.log(data);
      console.log("fetchedData");
    } catch (error) {
      console.error("HOMEPAGE", error);
      // In case of an error, ensure trimesterData is an empty array
      setTrimesterData([]);
    }
  };

  const handleTrimesterClick = (type) => {
    setTrimesterType(type);
  };

  useEffect(() => {
    fetchItemData();
  }, [trimesterType]);

  return (
    <>
      <div className="trimester__cards">
        <p className="sub-header">
          Embark on your pregnancy journey with confidence! We're here to
          simplify self-care for you without breaking the bank, offering quality
          choices that fit your budget.
        </p>

        <p className="hook">
          Curious about what's next on your path? Let’s find exactly what you
          need to navigate this amazing journey with ease. Select your trimester
          below:
        </p>
        <Link to="/ft">
          <div
            className="trimester__cards-item trimester__cards-item--green"
            onClick={() => handleTrimesterClick("first")}
          >
            <b>First Trimester</b>
            <br />
            (0 - 13 weeks)
          </div>
        </Link>
        <Link to="/st">
          <div
            className="trimester__cards-item trimester__cards-item--pink"
            onClick={() => handleTrimesterClick("second")}
          >
            <b>Second Trimester</b>
            <br />
            (14 - 26 weeks)
          </div>
        </Link>

        <Link to="/tt">
          <div
            className="trimester__cards-item trimester__cards-item--blue"
            onClick={() => handleTrimesterClick("third")}
          >
            <b>Third Trimester</b>
            <br />
            (27 - 40 weeks)
          </div>
        </Link>
      </div>

      <ItemsGrid products={trimesterData} />
    </>
  );
};

export default HomePage;
