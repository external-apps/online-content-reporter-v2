(function () {
  const modal = document.querySelector("#mod");
  const modalOverlay = document.querySelector("#mod-overlay");
  const closeButton = document.querySelector("#close-button");
  const submit = document.getElementById("submit-url");
  console.log(submit);
  console.log(modal);

  closeButton.addEventListener("click", () => {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
  });

  submit.addEventListener("click", () => {
    console.log('clicked');
    modal.classList.toggle("closed");
    console.log(modal.classList);
    modalOverlay.classList.toggle("closed");
  });
})();
