
export function soulRender(souls) {
    const li = document.createElement('li');
    li.classList.add('souls');

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = souls.title;
    li.appendChild(title);

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = souls.name;
    li.appendChild(name);

    const image = document.createElement('img');
    image.src = `../assets/${souls.image}`;
    li.appendChild(image);

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = souls.description;
    li.appendChild(description);
    
    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `${souls.price.toLocaleString('en-US', { style:'currency', currency:'USD' })}`;
    li.appendChild(price);
    
    const button = document.createElement('button');
    button.textContent = 'Add to soul container';
    li.appendChild(button);
 

    return li;
}