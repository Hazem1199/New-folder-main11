const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const API_KEY = "AIzaSyCywC05U5MgQRljcVOPkR--usjFVhiW4ns"; // Paste your API key here
// const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

const generateResponse = async (chatElement) => {
    const API_URL = "https://docs.googleapis.com/v1/documents/1HwG1ZKndG4GbjpqZmAONaxSocILe9xnMdLn2pH9PiDY";
    const messageElement = chatElement.querySelector("p");
    const token = "ya29.a0AfB_byCWVvLCxw9fza4hjBfL4ctEIxnNEU-jlHXTjq2hF9SkStx9B1HLoZ5p2WkcDIEembjgbmDkgBV88FQU7cokOVnCc2N1hVqKE12dyo58EJ9lQUN77gF--JKl83TwauiXHCg7HdDrNPPBnMsmEryxd5VCpW-lm40AaCgYKAXMSARESFQHGX2MikCjY8SxETO9JKXcZhdxiMg0171"

    // Function to fetch data from the Google Docs API

    try {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                // Include your OAuth token in the Authorization header
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Process the data as needed
        console.log(data.body);

        // Set the response message in the chatbox
        messageElement.textContent = data.someProperty; // Adjust this based on the actual structure of the response
    } catch (error) {
        console.error("Error fetching data from Google Docs API:", error);
        // Display an error message in the chatbox
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    } finally {
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }
}

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if (!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

// chatInput.addEventListener("input", () => {
//     // Adjust the height of the input textarea based on its content
//     chatInput.style.height = `${inputInitHeight}px`;
//     chatInput.style.height = `${chatInput.scrollHeight}px`;
// });

// chatInput.addEventListener("keydown", (e) => {
//     // If Enter key is pressed without Shift key and the window 
//     // width is greater than 800px, handle the chat
//     if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
//         e.preventDefault();
//         handleChat();
//     }
// });

// sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));


// import fetch from 'node-fetch';

// const API_URL = "https://docs.googleapis.com/v1/documents/1HwG1ZKndG4GbjpqZmAONaxSocILe9xnMdLn2pH9PiDY";
// const token = "ya29.a0AfB_byCWVvLCxw9fza4hjBfL4ctEIxnNEU-jlHXTjq2hF9SkStx9B1HLoZ5p2WkcDIEembjgbmDkgBV88FQU7cokOVnCc2N1hVqKE12dyo58EJ9lQUN77gF--JKl83TwauiXHCg7HdDrNPPBnMsmEryxd5VCpW-lm40AaCgYKAXMSARESFQHGX2MikCjY8SxETO9JKXcZhdxiMg0171"

// const headers = {
//     Authorization: `Bearer ${token}`,
// };

// fetch(API_URL, {
//     headers,
// })
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data); // Process the document data
//     })
//     .catch((error) => {
//         console.error(error);
//     });



