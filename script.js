const verMaisButtons = document.querySelectorAll(".ver-mais-btn");

const closeBtns = document.querySelectorAll(".close");

const modals = document.querySelectorAll(".modal");


function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}


verMaisButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const modalId = event.currentTarget.dataset.modal;
    openModal(modalId);
  });
});


closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", (event) => {
    const modalId = event.currentTarget.closest(".modal").id;
    closeModal(modalId);
  });
});



window.addEventListener("click", (event) => {
  modals.forEach((modal) => {
    if (event.target === modal) {
      closeModal(modal.id);
    }
  });
});


