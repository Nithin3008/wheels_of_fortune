import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Trucks",
    description:
      "Heavy duty and Torquy engines good for construction work.",
    src: "https://github.com/Nithin3008/wheels_of_fortune/blob/main/public/Images/Category/truck.jpg?raw=true"
  },
  {
    _id: uuid(),
    categoryName: "Super Cars",
    description:
      "Gaz guzzlers,High performance cars fun to drive.",
    src: "https://github.com/Nithin3008/wheels_of_fortune/blob/main/public/Images/Category/car.jpg?raw=true"
  },
  {
    _id: uuid(),
    categoryName: "Suv",
    description:
      "Good family cars and best for offroading.",
    src: "https://github.com/Nithin3008/wheels_of_fortune/blob/main/public/Images/Category/suv.jpg?raw=true"
  },

  {
    _id: uuid(),
    categoryName: "EV",
    description:
      "EVs are much more efficient than fossil fuel vehicles and have few direct emissions.",
    src: "https://github.com/Nithin3008/wheels_of_fortune/blob/main/public/Images/Category/ev.jpg?raw=true"
  },
];
