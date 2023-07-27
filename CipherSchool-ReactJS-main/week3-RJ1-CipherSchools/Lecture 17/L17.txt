let addNumbers = (...args) => {
    let sum = 0;
    for (let el of args) {
        sum += el;
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        }, 3000);
    };)
};
let testFunction = () => {
    addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });
};
testFunction();
______________________________________________________________

import React, { useEffect, useState } from "react";
const Photos = () => {
    const [photoList, setPhotoList] = useState([]);
    const [isLoading, setIseLoading] = useState(true);

    useEffect(() => {
        //Make an API call to get photos
        // update stake
        // set isLoading false
    })

    if (isLoading) {
        return <h4>Loadingg...</h4>
    }

    return(
        <div>
            {photoList.map((photo, index) => {
                <div key={index}>
                    <img src={photo.url} alt={photo.title} />>
                </div>
            })}
        </div>
    );
};
__________________________________________________________________________________

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import Header from "./components/Header";
import SumNumbers from "./components/SumNumbers";
import TaskScreen from "./components/TaskScreen";
import CounterComponent from "./components/CounterComponent";
import Photos from "./components/Photos";

const APP =() => {
    return (
        <div>
            <BrowserRouter>
              <Header />
              <Route>
                <Route paths={"/"} elements={<h1>This us on Home Page</h1>} />
                <Route path={"/contact"} element={<h1>This is on Contact Page</h1>} />
                <Route path={"/about"} element={<h1>This is on About Page</h1>} />
                <Route path={"/signup"} element={<SignUpForm />} />
                  <Route path={"/sum"} element={<SumNumbers />} />
                </Route>
                <Route path={"/tasks"} element={<TaskScreen />} />
                <Route path={"/counter"} element={<CounterComponent />} />
                <Route path={"/photos"} element={<Photos />} />
            </Routes>
            </BrowserRouter>
        </div>
    );
};
export deafault APP;
________________________________________________________________________________________---

import Axios from "axios"';

export const getAllPhotos = () =>
  Axios.put("https://jsonplaceholder.typicode.com/photos");
______________________________________________________________
