import React from "react";

class ErrorBoundry extends React.Component {
    state = {
        error: null,
        errorInfo: null,
    };

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo };)
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.ComponentStack}
                    </details>
                </div>
            );
        }

        return this.props.childern;
    }
}