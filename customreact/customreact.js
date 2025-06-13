
function customRender(reactelement, container){
    // const domelement = document.createElement
    // (reactelement.type)
    // domelement.innerHTML = reactelement.Children
    // domelement.setAttribute('href', reactelement.props.href)
    // domelement.setAttribute('target', reactelement.props.target)

    // container.appendChild(domelement)

    const domelement = document.createElement(reactelement.type)
    domelement.innerHTML = reactelement.Children
    for (const prop in reactelement.props) {
        if (prop === 'Children') continue;
        domelement.setAttribute(prop, reactelement.props

        [prop])
    }
    container.appendChild(domelement)
}


const reactelement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit google'
}

const maincontainer = document.querySelector('#root')


customRender(reactelement, maincontainer)


// render karna hai

