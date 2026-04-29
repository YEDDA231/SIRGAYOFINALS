const API_URL = "https://cloud.flowiseai.com/api/v1/vector/upsert/06b70cbe-3e62-4cf4-8e33-9d74263c3edd";

function addMessage(role, text) {
    const chatMessages = document.getElementById("chatMessages");
    if (!chatMessages) return;

    const item = document.createElement("div");
    item.className = `chat-bubble ${role}`;
    item.textContent = text;
    chatMessages.appendChild(item);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function sendChatMessage(userMessage) {
    const payload = {
        docs: [
            {
                pageContent: userMessage,
                metadata: {
                    source: "website-chat"
                }
            }
        ]
    };

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    const output = await response.json();
    if (!response.ok) {
        throw new Error(output?.message || `Request failed: ${response.status}`);
    }

    return "Upsert success: " + JSON.stringify(output);
}

function initChatbot() {
    const chatForm = document.getElementById("chatForm");
    const chatInput = document.getElementById("chatInput");
    const sendBtn = document.getElementById("sendBtn");

    if (!chatForm || !chatInput || !sendBtn) return;

    addMessage("bot", "Hi! Send text and I will upsert it to your Flowise vector API.");

    chatForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const message = chatInput.value.trim();
        if (!message) return;

        addMessage("user", message);
        chatInput.value = "";
        sendBtn.disabled = true;
        sendBtn.textContent = "Sending...";

        try {
            const reply = await sendChatMessage(message);
            addMessage("bot", reply);
        } catch (error) {
            addMessage("bot", "Error: " + error.message);
            console.error("Flowise upsert failed:", error);
        } finally {
            sendBtn.disabled = false;
            sendBtn.textContent = "Send";
        }
    });
}

initChatbot();
