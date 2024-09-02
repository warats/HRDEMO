// Import stylesheets
import "./style.css"

// Body element
const body = document.getElementById('body')

// Button elements
const btnSend = document.getElementById("btnSend")
const btnClose = document.getElementById("btnClose")
const btnShare = document.getElementById("btnShare")
const btnLogIn = document.getElementById("btnLogIn")
const btnLogOut = document.getElementById("btnLogOut")
const btnScanCode = document.getElementById("btnScanCode")
const btnOpenWindow = document.getElementById("btnOpenWindow")

// Profile elements
const email = document.getElementById("email")
const userId = document.getElementById("userId")
const pictureUrl = document.getElementById("pictureUrl")
const displayName = document.getElementById("displayName")
const statusMessage = document.getElementById("statusMessage")

// QR element
const code = document.getElementById("code")
const friendShip = document.getElementById("friendShip")

async function main() {
  // Initialize LIFF app)
  
  // Try a LIFF function
}
main(
    await liff.init({ liffId: "2006216440-VbmQ65PL" })
)
// Try a LIFF function
switch (liff.getOS()) {
    case "android": body.style.backgroundColor = "#d1f5d3"; break
    case "ios": body.style.backgroundColor = "#eeeeee"; break
  }