export default function hello(){
    const {body} = document;
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'hello';
    div.appendChild(h1);
    body.appendChild(div);
}