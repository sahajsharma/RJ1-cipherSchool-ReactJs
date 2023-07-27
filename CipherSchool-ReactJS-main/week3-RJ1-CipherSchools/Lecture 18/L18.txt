const add = (a, b) => {
    return a + b;
};

const highOrder = (a, referenceFunction) => {
    return referenceFunction(a, 20);
};

console.log(highOrder(30, add));
____________________________________________________________

// when a function is passed as a functional argument to a function, then the function which is passed is a callback
// and the function to which it is passed is a higher order function.

// const NewComponent = highOrderComponent(WrappedComponent) -> Syntax
__________________________________________________________________________

import React from "react";

function highOrderComponent(HocComponet) {
    return class extends React.Component {
        render() {
            return (
                <div>
                    <HocComponent />
                </div>
            );
        }
    };
}
export deafault highOrderComponent;
__________________________________________________________________________
import React from "react";

class RenderPropsComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>This is a child component</h1>
                {this.props.render()}
            </div>
        );
    }
}

export default RenderPropsComponent;
____________________________________________________________________________

import React from "react";
import RenderPropsComponent from "./RenderPropsComponent";

class SamplePropsComponent extends React.Component {
    render() {
        retun (
            <RenderPropsComponent
              render={() => {
                return (
                  <div>
                    <h2>This is a child component</h2>
                  </div>
                );
              }}
            />
        );
    }
}

export default SamplePropsComponent;
___________________________________________________________________________

import React from "react";
import RenderPropsComponent from "./RenderPropsComponent";
import { useCookies } from "react-cookies";

const SamplePropsComponent = () => {
    const [cookies, setCookies, removeCookies] = useCookies(["name"];)
    return (
        <RenderPropsComponent
          render={() => {
            return (
                <div>
                    <h2>This is from render props</h2>
                </div>
            );
          }} />
    );
};

export default SamplePropsComponent;
___________________________________________________________________________

import React from "react";
import RenderPropsComponent from "./RenderPropsComponent";
import { useCookies } from "react-cookies";

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
          }} />
    );
};

export default SamplePropsComponent;