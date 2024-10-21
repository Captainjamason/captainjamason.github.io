async function loadPosts() {
    const cont = document.getElementById("postContainer");
    const post = document.createElement('div');

    const resp = await fetch('./posts.json')
    const posts = await resp.json();

    var i = 0;
    while(i < posts.length) {
        post.className = "posts";
        const resp = await fetch(posts[i].content);
        const data = await resp.text();
        post.innerHTML += `<md-block>${data}</md-block>`;
        post.innerHTML += `<hr>`
        cont.appendChild(post);
        i++;
    }
}

loadPosts();