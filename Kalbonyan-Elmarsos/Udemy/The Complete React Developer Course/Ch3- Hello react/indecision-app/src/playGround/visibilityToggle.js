import ReactDom from 'react-dom'

const appRoot = document.getElementById('root')

let toggle = false

const toggleFun = () => {
    toggle = !toggle;
    renderApp();
}

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleFun}>{(toggle)?'show details':'hide details'}</button>
            {toggle && <p>Hey Your are here</p>}
        </div>
    )
    ReactDom.render(template,appRoot)
}

renderApp();