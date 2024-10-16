document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");

  if (!postId) {
    console.error("Post ID is not specified in the URL");
    return;
  }

  fetch(`http://localhost:3000/posts/${postId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((post) => {
      document.getElementById("post-title").innerText = post.title;
      document.getElementById("post-image").src = post.image;
      document.getElementById("post-author").innerText = `By: ${post.author}`;
      document.getElementById(
        "post-description"
      ).innerText = ` "${post.title}".`;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
});
