import React from "react";
// import reactDom from "react-dom";

const App = () => {
    const app = {
        title : 'Subject 1',
        subtitle : 'How to Be better in this life',
        options : ['One','Two']
    }

    return (
        <div>
            <h1>title : {app.title}</h1>
            {app.subtitle && <p>Subjet : {app.subtitle}</p>}
            {app.options.length > 1 ? <p>Here are your options</p> : "No options"}
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
            </ol>
        </div>
    )
}


export default App;