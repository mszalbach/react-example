var React=require("react");
var ReactDOM=require("react-dom");

export class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Demo</h1>
                <p>Hello</p>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('react'));