//
const postList = document.querySelector("#post-list");

const posts = [
  { title: "How to be blue!", body: "fg kldskg lfdkgl dsf" },
  { title: "Let's dance lika Tango!", body: "fg kldskg lfdkgl dsf" },
];

const getPosts = () => {
  setTimeout(() => {
    posts.forEach((post, index) => {
      postList.innerHTML += `<li>${post.title}</li>`;
    });
  }, 1000);
};

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false; // Här är bara för att låtsas om error...
      if (!error) {
        resolve();
      } else {
        reject("Oh no! Server goes down -.-");
      }
    }, 2000);
  });
};

const newPost = {
  title: "blalbalba",
  body: "rkgl dkflgkfsdl gkldfs.",
};

// createPost(newPost)
//   .then(getPosts)
//   .catch((err) => {
//     console.log(err);
//   });

const URL = "http://jsonplaceholder.typicode.com";

const handleData = fetch(`${URL}/posts`).then((res) => res.json());

const lovar1 = Promise.resolve("Välkommen till dagen!");
const lovar2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Vi ses i morgon!");
});

Promise.all([lovar1, lovar2, handleData]).then((result) => console.log(result));

const waitForData = async () => {
  await createPost(newPost);
  getPosts();
};

waitForData();

// with fetch

const getUsers = async () => {
  const res = await fetch(`${URL}/users`);
  const data = await res.json();
  console.log(data);
};

getUsers();
