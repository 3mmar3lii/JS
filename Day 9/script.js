const P = new Promise(async (resolve, reject) => {
  const res = await fetch(`https://dummyjson.com/users`);
  const users = await res.json();
  if (users) {
    resolve(users);
  } else {
    reject("Error while getting the data from server !");
  }
});

P.then((data) => {
  console.log("Inside the then", data.users);
  data.users.forEach((user) => {
    let tabButton = document.createElement("button");
    tabButton.classList.add("tabStyle");
    tabButton.textContent = user.firstName;
    document.body.appendChild(tabButton);
    tabButton.onclick = () => handleGetUserData(user.id);
  });
}).catch((err) => {
  console.log(err);
});

async function handleGetUserData(userId) {
  try {
    const userData = await fetch(`https://dummyjson.com/users/${userId}/todos`);
    const userInfo = await userData.json();

    let userToDo = document.querySelector(".todo-container");

    if (!userToDo) {
      userToDo = document.createElement("div");
      userToDo.classList.add("todo-container");
      document.body.appendChild(userToDo);
    }

    userToDo.innerHTML = "";

    userInfo.todos.forEach((todo) => {
      userToDo.innerHTML += `<p>${todo.todo}</p>`;
    });
  } catch (err) {
    console.log(err);
  }
}
