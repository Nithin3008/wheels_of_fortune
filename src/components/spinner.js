import { BallTriangle } from "react-loader-spinner";
import React from "react";

import "./spinner.css";
export function Loader() {
  return (
    <div className="LoaderClass">
      <div>
        <BallTriangle
          height={300}
          width={150}
          radius={5}
          color="orangered"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    </div>
  );
}
