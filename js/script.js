document.querySelectorAll('.open-modal').forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.getElementById(button.dataset.modal);
    if (modal) {
      modal.style.display = 'flex';
    }
  });
});

document.querySelectorAll('.close').forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    closeBtn.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
