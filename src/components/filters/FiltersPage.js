import { useContext } from "react";
import "./filterpage.css";
import { FuncContext } from "../../pages/DataProviders/FuncCall";
import { MainContext } from "../../pages/DataProviders/MainReducer";

export const FiltersPage = () => {
  const { ProdDetailsCate, ratingFilter, dispatcherMain, Range, SortBy } =
    useContext(MainContext);
  const { shopCate, removeCate, setStars, setRange, clearAllFilter, carsData } =
    useContext(FuncContext);
  let prodData = carsData;
  if (ratingFilter > 0) {
    prodData = prodData.filter((val) => val.rating >= ratingFilter);
    console.log(prodData);
  }
  if (Range < 4000000) {
    prodData = prodData.filter((val) => val.price < Range);
  }
  function setRating(event) {
    const stars = event.target.value;
    setStars(stars);
  }

  function setCategory(event, cate) {
    const str = event.target.checked;
    str ? shopCate(cate) : removeCate(cate);
  }
  function priceRange(event) {
    const num = event.target.value;
    setRange(num);
  }
  return (
    <div className="producBoxFilters">
      <div style={{ display: "flex" }}>
        <p style={{ marginRight: "50px" }}>Filters</p>
        <p onClick={() => clearAllFilter()} style={{ color: "#185464" }}>
          Clear
        </p>
      </div>
      <p>Price</p>
      <input
        onChange={(e) => priceRange(e)}
        defaultValue={3800000}
        className="range"
        type="range"
        min="0"
        max="3800001"
      ></input>
      <div>
        <p>Category</p>
        <div className="categoryFilter">
          <label>
            {" "}
            <input
              checked={ProdDetailsCate.includes("Trucks")}
              onClick={(e) => setCategory(e, "Trucks")}
              type="checkbox"
            ></input>{" "}
            Truck
          </label>
          <label>
            {" "}
            <input
              checked={ProdDetailsCate.includes("Suv")}
              onClick={(e) => setCategory(e, "Suv")}
              type="checkbox"
            ></input>{" "}
            Suv
          </label>
          <label>
            {" "}
            <input
              checked={ProdDetailsCate.includes("EV")}
              onClick={(e) => setCategory(e, "EV")}
              type="checkbox"
            ></input>{" "}
            EV
          </label>
          <label>
            {" "}
            <input
              checked={ProdDetailsCate.includes("Super Cars")}
              onClick={(e) => setCategory(e, "Super Cars")}
              type="checkbox"
            ></input>{" "}
            Super Cars
          </label>
        </div>
      </div>
      <div>
        <p>Rating</p>
        <div className="categoryFilter">
          <label>
            {" "}
            <input
              checked={ratingFilter == 1 ? true : false}
              value={1}
              onClick={(e) => setRating(e)}
              type="radio"
            ></input>{" "}
            1 Star+
          </label>
          <label>
            {" "}
            <input
              checked={ratingFilter == 2 ? true : false}
              value={2}
              onClick={(e) => setRating(e)}
              type="radio"
            ></input>{" "}
            2 Star+
          </label>
          <label>
            {" "}
            <input
              checked={ratingFilter == 3 ? true : false}
              value={3}
              onClick={(e) => setRating(e)}
              type="radio"
            ></input>{" "}
            3 Star+
          </label>
          <label>
            {" "}
            <input
              checked={ratingFilter == 4 ? true : false}
              value={4}
              onClick={(e) => setRating(e)}
              type="radio"
            ></input>{" "}
            4 Star+
          </label>
        </div>
      </div>
      <div>
        <p>Price Sort</p>
        <div className="categoryFilter">
          <label>
            <input
              checked={SortBy == "low2high" ? true : false}
              onClick={() =>
                dispatcherMain({ type: "lowToHigh", payload: "low2high" })
              }
              type="radio"
            ></input>{" "}
            low to high
          </label>
          <label>
            <input
              checked={SortBy == "high2low" ? true : false}
              onClick={() =>
                dispatcherMain({ type: "highToLow", payload: "high2low" })
              }
              type="radio"
            ></input>{" "}
            high to low
          </label>
        </div>
      </div>
    </div>
  );
};
