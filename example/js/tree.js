/**
 * @param {string} element the type of element you want to create 
 * @param {object} attributes receives the attributes of always also events which are executed internally with "addEventListener" the function differentiates between an attribute and an event if the value of this is a function
 * @param {Array<HTMLElement|string>} childs All of the above recursively, you can condition the rendering of a child element [ undefined && tree( 'div' ) ], that element will never be displayed since the condition has been evaluated to false. 
 * 
 * @return {HTMLElement}
 */
const tree = (element, attributes={}, childs=false) => {

    const newElement = document.createElement(element);
    
    for (const [key, value] of Object.entries(attributes)) {

        if (typeof value == 'function' ) {
            newElement.addEventListener( key, (event) => { value(newElement, event) });    
            continue;
        } 
        newElement.setAttribute(key, value);
    }

    if(childs) {
        for (const child of childs) {
            if ( !child ) continue; 

            if ( typeof child === 'string' || child instanceof String ) {
                textNode = document.createTextNode(child);
                newElement.appendChild(textNode);
                continue;
            } 
            newElement.appendChild(child);
        }
    } 
    return newElement; 
}