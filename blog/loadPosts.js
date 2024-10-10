async function loadPosts() {
    const cont = document.getElementById("postContainer");
    const post = document.createElement('div');

    const resp = await fetch('./posts/posts.html')

    const posts = await resp.text();

    post.className = "posts";
    post.innerHTML = "<h3>Test post added from JS</h3>";
    cont.appendChild(post);
}

loadPosts();