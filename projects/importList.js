async function impList() {
    const resp = await fetch('./list.json')
    const data = await resp.json();

    const cont = document.getElementById("container");
    const post = document.createElement('div');

    var i = 0;
    while(i < data.length) {
        post.innerHTML += `<h2>${data[i].name}</h2>`;
        post.innerHTML += `<p>Version: ${data[i].ver}</p>`;
        post.innerHTML += `<p>${data[i].desc}</p>`
        post.innerHTML += `<a href=${data[i].redir}>Click Here!</a>`
        post.innerHTML += `<hr>`
        cont.appendChild(post);
        i++;
    }
}

impList();