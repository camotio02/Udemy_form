const elements = [
    {
        section: 'header',

        children: [
            { tag: 'h1', text: '' },
            { tag: 'p', text: 'texto 1' },
            { tag: 'div', text: 'texto 2' },
            { tag: 'footer', text: 'texto 3' },
            { tag: 'section', text: 'texto 4' },
        ],

    },
    {
        section: 'Home',
        children: [
            { tag: 'h1', text: '' },
            { tag: 'p', text: 'texto 1' },
            { tag: 'div', text: 'texto 2' },
            { tag: 'footer', text: 'texto 3' },
            { tag: 'section', text: 'texto 4' },
        ],
    },
    {
        section: 'Meddium',
        children: [
            { tag: 'h1', text: '' },
            { tag: 'p', text: 'texto 1' },
            { tag: 'div', text: 'texto 2' },
            { tag: 'footer', text: 'texto 3' },
            { tag: 'section', text: 'texto 4' },
        ],
    },
    {
        section: 'Footer',
        children: [
            { tag: 'h1', text: '' },
            { tag: 'p', text: 'texto 1' },
            { tag: 'div', text: 'texto 2' },
            { tag: 'footer', text: 'texto 3' },
            { tag: 'section', text: 'texto 4' },
        ],
    },


]
const container = document.querySelector('.container');
elements.map((element, index) => {
    let elements = document.createElement(`h1`);
    elements.innerHTML = element.section;
    container.appendChild(elements),
        element.children.map((child, index) => {
            const createdAuthTag = document.createElement(child.tag)
            createdAuthTag.innerHTML = child.text;
            container.appendChild(createdAuthTag)
        }
    )
})
// elements.forEach((element, index) => {
//     let elements = document.createElement(element.tag);
//     elements.innerHTML = element.text
//     return (
//         container.appendChild(elements)
//     )
// })

// for (let element of elements) {
//     let el = document.createElement(element.tag);
//     el.innerHTML = element.text
//     container.appendChild(el)
// }