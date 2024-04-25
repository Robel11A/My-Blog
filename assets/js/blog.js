
document.addEventListener('DOMContentLoaded', function() {
    const postsList = document.getElementById('postsList');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <small>Posted by: ${post.username}</small>
        `;
        postsList.appendChild(postElement);
    });
});
