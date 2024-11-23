"use strict";

const openModal = () =>
  document.getElementById("modal").classList.add("active");
const closeModal = () =>
  document.getElementById("modal").classList.remove("active");

const tempClient = {
  name: "Daniel",
  email: "daniel@.com",
  celular: "11999999999",
  cidade: "Recife",
};

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("db_client")) ?? [];
const setLocalStorage = (dbClient) =>
  localStorage.setItem("db_client", JSON.stringify(dbClient));

//CRUD - Create, Read, Update, Delete

//CRUD CREATE
const createClient = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client);
  setLocalStorage(dbClient);
};

//Evento
document
  .getElementById("cadastrarCliente")
  .addEventListener("click", openModal);
document.getElementById("modalClose").addEventListener("click", closeModal);
