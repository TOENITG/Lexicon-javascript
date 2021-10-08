const postlist = document.querySelector("#post-list");

const posts = [
  { title: "kgl kfdl gkfdl ", body: "fg kldskg lfdkgl dsf" },
  { title: "kgl kfdl gkfdl ", body: "fg kldskg lfdkgl dsf" },
];

const getPosts = () => {
  setTimeout(() => {
    posts.forEach((post, index) => {
      postlist.innerHTML += `<li>${post.title}</li>`;
    });
  }, 1000);
};

const createPost = (post, callback) => {
  setTimeout(() => {
    callback();
    posts.push(post);
  }, 1000);
};

const newPost = {
  title: "banana man",
  body: "lfgdk lgk ldsfkgldfklgs",
};

createPost(newPost, getPosts);
