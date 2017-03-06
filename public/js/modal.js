(function () {
  const modal = document.querySelector("#mod");
  const modalOverlay = document.getElementById("mod-overlay");
  const closeButton = document.getElementById("close-button");
  const submit = document.getElementById("submit-url");
  console.log(submit);
  console.log(modal);
  console.log(modalOverlay);
  console.log(closeButton);

  closeButton.addEventListener("onClick", () => {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
  });

  submit.addEventListener("onClick", () => {
    console.log('clicked');
    modal.classList.toggle("closed");
    console.log(modal.classList);
    modalOverlay.classList.toggle("closed");
  });
})();
