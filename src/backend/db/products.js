import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Ford F-150 Raptor",
    manufacturer: "Ford",
    price: "90000$",
    categoryName: "Trucks",
    HP: 450,
    Torque: "691 Nm",
    engine: "V6"
  },
  {
    _id: uuid(),
    title: "Tundra",
    manufacturer: "Toyota",
    price: "77000$",
    categoryName: "Trucks",
    HP: 437,
    Torque: "790 Nm",
    engine: "V6"
  },
  {
    _id: uuid(),
    title: "Silverado",
    manufacturer: "Chevrolet",
    price: "45500$",
    categoryName: "Trucks",
    HP: 420,
    Torque: "625 Nm",
    engine: "V8"
  },
  {
    _id: uuid(),
    title: "Sierra HD 2024",
    manufacturer: "GMC",
    price: "65500$",
    categoryName: "Trucks",
    HP: 470,
    Torque: "1300 Nm",
    engine: "V8"

  },
  {
    _id: uuid(),
    title: "1500 TRX",
    manufacturer: "Ram",
    price: "84000$",
    categoryName: "Trucks",
    HP: 702,
    Torque: "885 Nm",
    engine: "V8"
  },



  {
    _id: uuid(),
    title: "RangeRover SV 2023",
    manufacturer: "LandRover",
    price: "218,300$",
    categoryName: "Suv",
    HP: 523,
    Torque: "750 Nm",
    engine: "V8"
  },
  {
    _id: uuid(),
    title: "AMG-G63",
    manufacturer: "Mercdes-Benz",
    price: "349000$",
    categoryName: "Suv",
    HP: 577,
    Torque: "760 Nm",
    engine: "V8"

  },
  {
    _id: uuid(),
    title: "X7-M50i(2021)",
    manufacturer: "BMW",
    price: "120000$",
    categoryName: "Suv",
    HP: 523,
    Torque: "612 Nm",
    engine: "V8"
  },

  {
    _id: uuid(),
    title: "DBX707",
    manufacturer: "Aston Martin",
    price: "236000$",
    categoryName: "Suv",
    HP: 707,
    Torque: "900 Nm",
    engine: "V8"
  },

  {
    _id: uuid(),
    title: "Escalade-V",
    manufacturer: "Cadillac",
    price: "140000$",
    categoryName: "Suv",
    HP: 682,
    Torque: "885 Nm",
    engine: "V8"
  },




  {
    _id: uuid(),
    title: "M5-CS",
    manufacturer: "BMW",
    price: "142000$",
    categoryName: "Super Cars",
    HP: 635,
    Torque: "750 Nm",
    engine: "V8"

  },


  {
    _id: uuid(),
    title: "La-Ferrari",
    manufacturer: "Ferrari",
    price: "3,126,249$",
    categoryName: "Super Cars",
    HP: 963,
    Torque: "900 Nm",
    engine: "V8"
  },


  {
    _id: uuid(),
    title: "Jesko",
    manufacturer: "Koenigsegg",
    price: "2,990,000$",
    categoryName: "Super Cars",
    HP: 1600,
    Torque: "1500 Nm",
    engine: "V8"
  },



  {
    _id: uuid(),
    title: "Valkyrie AMR Pro",
    manufacturer: "Aston Martin",
    price: "3,800,000$",
    categoryName: "Super Cars",
    HP: 1000,
    Torque: "760 Nm",
    engine: "V12"
  },


  {
    _id: uuid(),
    title: "Huayra",
    manufacturer: "Pagani",
    price: "3,618,000$",
    categoryName: "Super Cars",
    HP: 850,
    Torque: "750 Nm",
    engine: "V12"
  },






  {
    _id: uuid(),
    title: "e-tron Gt",
    manufacturer: "Audi",
    price: "99000$",
    categoryName: "EV",
    HP: 590,
    Torque: "830 Nm",

  },

  {
    _id: uuid(),
    title: "Hummer",
    manufacturer: "GMC",
    price: "79000$",
    categoryName: "EV",
    HP: 830,
    Torque: "1600 Nm",

  },


  {
    _id: uuid(),
    title: "Nevara",
    manufacturer: "Rimac",
    price: "2,200,000",
    categoryName: "EV",
    HP: 1914,
    Torque: "2360 Nm",
  },



  {
    _id: uuid(),
    title: "Air Sapphire",
    manufacturer: "Lucid Mototrs",
    price: "250000$",
    categoryName: "EV",
    HP: 1200,
    Torque: "1500 Nm",
  },


];
