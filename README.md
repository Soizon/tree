# Tree is a JavaScript function to render the user interface in The DOM

tree is a function that allows you to easily create UI/UX elements in the HTML DOM from Javascript, being able to create components from the chaining of elements, it is really nice since everything can be done from Javascript.

**example**

```
function myDiv() {
    return tree(
        'div',
        {'class': 'my-div'},
        [
            tree(
                'p',
                {},
                ["Here the text"]
            ),
            undefined && " this will never be shown"
        ]
    )
}
```

The childs can be text and elements HTML.

Now we can display our component in the browser.

```
document.body.appendChild( myDiv() ) 
```