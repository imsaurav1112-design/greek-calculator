// api.js

const BASE_URL = 'https://api.greekcalculator.in';

async function testServerConnection() {
    console.log("Attempting to connect to Insider Owl server...");
    try {
        const response = await fetch(`${BASE_URL}/`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("✅ Success! Server says:", data);
        
        // If you have a specific UI element to show status, update it here
        const statusEl = document.getElementById('server-status');
        if (statusEl) statusEl.innerText = "Connected to Live Data";

    } catch (error) {
        console.error("❌ Connection Failed:", error);
    }
}

// Run the test when the script loads
testServerConnection();