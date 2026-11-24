// Write your code here!

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then((posts) => displayPosts(posts))


async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()

    displayPosts(posts)
}

fetchPosts()

  async function displayPosts(posts) {
    posts.forEach(post => {
      const listItem = document.createElement("li")
      const h1 = document.createElement("h1")
      const p = document.createElement("p")

      h1.textContent = `${post.title}`
      p.textContent = `${post.body}`

      listItem.append(h1)
      listItem.append(p)

      document.getElementById("post-list").appendChild(listItem)

    });
  }