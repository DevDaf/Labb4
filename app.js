const API_URL = "http://localhost:3000/posts";

async function fetchPosts() {
  try {
    const response = await fetch(API_URL);
    const posts = await response.json();

    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = "";

    posts.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("post");
      postDiv.setAttribute("id", `post-${post.id}`);

      postDiv.innerHTML = `
                <img src="${post.image}" alt="${post.title}">
                <h2>${post.title}</h2>
                <p>By: ${post.author}</p>
                <a href="post.html?id=${post.id}" class="view-more">View More</a>
            `;
      postsContainer.appendChild(postDiv);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchPosts);
