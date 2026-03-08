const askInput = document.getElementById("ask-input");
const askSend = document.getElementById("ask-send");
const quickInput = document.getElementById("quick-input");
const quickSend = document.getElementById("quick-send");
const chatLog = document.getElementById("chat-log");

const appendMessage = (text) => {
  if (!text.trim()) {
    return;
  }

  const message = document.createElement("div");
  message.className = "chat-bubble";
  message.textContent = text.trim();
  chatLog.appendChild(message);
  chatLog.scrollTop = chatLog.scrollHeight;
};

const handleSend = (input) => {
  appendMessage(input.value);
  input.value = "";
  input.focus();
};

askSend.addEventListener("click", () => handleSend(askInput));
quickSend.addEventListener("click", () => handleSend(quickInput));

askInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    handleSend(askInput);
  }
});
