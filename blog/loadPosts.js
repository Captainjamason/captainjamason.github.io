async function loadPosts() {
    const cont = document.getElementById("postContainer");
    const post = document.createElement('div');

    const resp = await fetch('./posts.json')
    const posts = await resp.json();

    var i = 0;
    while(i < posts.length) {
        post.className = "posts";
        post.innerHTML += `<h3>${posts[i].name}</h3>`;
        post.innerHTML += `<p>${posts[i].date}</h3>`;
        post.innerHTML += `<p>${posts[i].content}</p>`;
        post.innerHTML += `<hr>`
        cont.appendChild(post);
        i++;
    }
}

loadPosts();