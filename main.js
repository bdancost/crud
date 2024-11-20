"use strict";

const openModal = () =>
  document.getElementById("modal").classList.add("active");
const closeModal = () =>
  document.getElementById("modal").classList.remove("active");

//CRUD - Create, Read, Update, Delete

//Evento
document
  .getElementById("cadastrarCliente")
  .addEventListener("click", openModal);
document.getElementById("modalClose").addEventListener("click", closeModal);
