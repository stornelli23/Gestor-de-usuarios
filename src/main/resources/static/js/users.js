window.onload = function () {
  getAllUsers();
};

async function getAllUsers() {
  const request = await fetch("api/users", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const users = await request.json();

  // console.log(usuarios);

  let usersList = "";

  users.forEach((user) => {
    let userHTML =
      '<tr><th scope="row">' +
      user.id +
      "</th><td>" +
      user.nombre +
      "</td><td>" +
      user.apellido +
      "</td><td>" +
      user.email +
      "</td><td>" +
      user.telefono +
      '</td><td><button onClick="editUser(' +
      user.id +
      ') "type="button" class="btn btn-outline-primary mx-1">Editar</button><button onClick="deleteUser(' +
      user.id +
      ')" type="button" class="btn btn-outline-danger mx-1">Eliminar</button></td></tr>';

    usersList += userHTML;
  });

  document.querySelector("#users tbody").innerHTML = usersList;
}


async function getUserById(id){
  const request = await fetch("api/users/" + id, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const user = await request.json();
  return user;
}

async function editUser(id) {
  const request = await fetch("api/users/" + id, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const user = await request.json();

  document.getElementById("nameEdit").value = user.nombre;
  document.getElementById("surnameEdit").value = user.apellido;
  document.getElementById("emailEdit").value = user.email;
  document.getElementById("phoneEdit").value = user.telefono;

  let container = document.getElementById("editContainer");
  container.classList.remove("d-none");
  container.classList.add("d-block");  

  let botonGuardar = document.getElementById("saveEditBtn");

  botonGuardar.addEventListener('click', async function() {

    await fetch("api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user.id,
        nombre: document.getElementById("nameEdit").value,
        apellido: document.getElementById("surnameEdit").value,
        email: document.getElementById("emailEdit").value,
        telefono: document.getElementById("phoneEdit").value,
      }),
    });
    
  })
}


async function deleteUser(id) {
  if (!confirm("¿Desea eliminar el usuario realmente?")) {
    return;
  }

  await fetch("api/users/delete/" + id, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  location.reload();
}

async function registerUser() {

  await fetch("api/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: document.getElementById("name").value,
      apellido: document.getElementById("surname").value,
      email: document.getElementById("email").value,
      telefono: document.getElementById("phone").value,
    }),
  });
}


