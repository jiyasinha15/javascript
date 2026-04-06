import React from "react";

// function Sample({count, setCount}) {
//     return (
//         <div>
//             <h1>Tending Objects</h1>
//             <p>lorem ipsum dolor sit amet consectetur adipiscing elit</p>
//         <button
//             className="counter"
//             onClick={() => setCount((count)=> count + 1)}
//         >
//             count is {count}
//         </button>
//         </div>
//     )
// }



class Sample extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
            <h2>Tending Topics</h2>
            <p>lorem ipsum dolor sit amet consectetur adipiscing elit</p>
            <button
                className="counter"
                onClick={() => this.props.setCount((count)=> count + 1)}
            >
                count is {this.props.count}
            </button>
            </div>
        )
    }
}
export default Sample

