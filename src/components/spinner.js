import { Vortex } from "react-loader-spinner";
import React from "react";
import "./spinner.css"
export function Loader()
{
    return(<div className="LoaderClass">
        <div>
        <Vortex  visible={true}
    height="480"
    width="380"
    ariaLabel="vortex-loading"
    wrapperStyle={{}}
    wrapperClass="vortex-wrapper"
    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}>    </Vortex>
        </div>
    
    </div>)
    
}