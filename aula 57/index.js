const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('P')

const styles = {
    backgroundColor: '#563345',
    border: '2px solid green',
    color: 'white',
    display: 'flex',
    padding: '0.5em',
};
ps.forEach(function (p) {
    Object.assign(p.style, styles);
    console.log(p.textContent, p);
    p.style.backgroundColor = 'red'
});
const cores = getComputedStyle(document.querySelector('menu'))
const {
    position,
    width,
    height,
    backgroundColor,
    display,
    alignItems,
    justifyContent,
    padding,
    color,
    border,
    borderRadius,
} = cores;