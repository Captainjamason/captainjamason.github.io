function loadPosts() {
    const cont = document.getElementById("postContainer");
    const post = document.createElement('div');

    fetch('/posts')

    post.className = "posts";
    post.innerHTML = "<h3>Test</h3>";
    cont.appendChild(post);
}

loadPosts();