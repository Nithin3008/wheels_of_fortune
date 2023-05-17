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
      "Pickup trucks are the most common type of truck. They are typically used for personal and business purposes, such as hauling materials, towing trailers, and transporting people. Pickup trucks come in a variety of sizes, from small and compact to large and heavy-duty"
  },
  {
    _id: uuid(),
    categoryName: "Super Cars",
    description:
      "Supercars are typically powered by large, high-performance engines that can produce over 500 horsepower. They also often feature advanced aerodynamics and lightweight materials that help to improve their performance. Supercars can accelerate from 0 to 60 mph in under 3 seconds and have top speeds of over 200 mph."
  },
  {
    _id: uuid(),
    categoryName: "Suv",
    description:
      "An SUV, or sport utility vehicle, is a type of car that combines elements of road-going passenger cars with features from off-road vehicles, such as raised ground clearance and four-wheel drive. SUVs are typically larger than cars, with more interior space and cargo capacity. They are often used for family transportation, outdoor activities, and towing."
  },

  {
    _id: uuid(),
    categoryName: "EV",
    description:
      "EVs are much more efficient than fossil fuel vehicles and have few direct emissions. At the same time, they do rely on electrical energy that is generally provided by a combination of non-fossil fuel plants and fossil fuel plants. Consequently, EVs can be made less polluting overall by modifying the source of electricity. In some areas, persons can ask utilities to provide their electricity from renewable energy. Fossil fuel vehicle efficiency and pollution standards take years to filter through a nation's fleet of vehicles."
  },
];
