// Shared JavaScript for the Event Invitation website
document.addEventListener("DOMContentLoaded", () => {
  const rsvpForm = document.getElementById("rsvp-form");

  if (rsvpForm) {
    rsvpForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const guestName = document.getElementById("guest-name").value.trim();
      const attendance = document.getElementById("attendance").value;
      const status = document.getElementById("rsvp-status");

      status.textContent = `Thank you, ${guestName}. Your response is: ${attendance}. This is a demonstration only; your response has not been sent.`;
      rsvpForm.reset();
    });
  }
});
