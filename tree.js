
const isElement = (element) => 
	element instanceof Element || element instanceof HTMLDocument;


/**
 * @param {string} element
 * @param {object} attributes
 * @param {Array<HTMLElement|string>} childs
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
            if (child == false && !isElement(child)) continue; 

            if (typeof child === 'string' || child instanceof String) {
                textNode = document.createTextNode(child);
                newElement.appendChild(textNode);
                continue;
            } 
            newElement.appendChild(child);
        }
    } 
    return newElement; 
}
