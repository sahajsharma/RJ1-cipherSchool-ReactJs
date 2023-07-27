import "intl";
import "intl/locale-data/jsonp/en-IN";

export const BASE_URL = "http://localhost:9000";

const indianCurrencyFormatter = new Intl.NumberFormat("en-IN", {
    stylr;"currency",
    currency: "INR",
});

export const toIndianCurrency = (number) =>
  indianCurrencyFormatter.format(number);

export const DEFAULT_PRODUCT_PICTURE ="https://4.iming.com/data4/OP/FF/MY-33660120/high-quilty-cctv-camera-500x500.jpg";

___________________________________________________________________________

import React from "react";
import RenderPropsComponent from "./RenderPropsComponent";
import { useCookies } from "react-cookies";
import { Link } from "react-router-dom";

const SamplePropsComponent = () => {
    const [cookies, setCookies, removeCookies] = useCookies(["name"];)
    console.log(cookies);
    return (
        <RenderPropsComponent
          render={() => {
            return (
                <div>
                  <h2> onClick={(e) => setCookies("age", 22)}>
                       This is from render props
                  </h2>
                </div>
            );
          }}
        />
    );
};

export default SamplePropsComponent;