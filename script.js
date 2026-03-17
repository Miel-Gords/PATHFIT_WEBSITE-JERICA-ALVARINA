// Database of the 12 Arnis Strikes
const strikesData = {
    1: {
        title: "1. Left Temple Strike",
        desc: "A forehand strike targeting the left side of the opponent's head or temple. The swing originates from the right shoulder.",
        img: "https://via.placeholder.com/500x300/1e1e38/ffffff?text=Strike+1+Image"
    },
    2: {
        title: "2. Right Temple Strike",
        desc: "A backhand strike targeting the right side of the opponent's head or temple. The swing originates from the left shoulder.",
        img: "https://via.placeholder.com/500x300/1e1e38/ffffff?text=Strike+2+Image"
    },
    3: {
        title: "3. Left Shoulder Strike",
        desc: "A forehand strike directed at the left shoulder or left side of the opponent's torso.",
        img: "https://via.placeholder.com/500x300/1e1e38/ffffff?text=Strike+3+Image"
    },
    4: {
        title: "4. Right Shoulder Strike",
        desc: "A backhand strike directed at the right shoulder or right side of the opponent's torso.",
        img: "https://via.placeholder.com/500x300/1e1e38/ffffff?text=Strike+4+Image"
    },
    5: {
        title: "5. Stomach Thrust",
        desc: "A straight, powerful thrust directed at the opponent's solar plexus or stomach.",
        img: "https://via.placeholder.com/500x300/1e1e38/ffffff?text=Strike+5+Image"
    },
    6: {
        title: "6. Left Chest Thrust",
        desc: "A forehand thrust targeting the left side of the opponent's chest.",
        img: "https://via.placeholder.com/500x300/1e1e38/ffffff?text=Strike+6+Image"
    },
    7: {
        title: "7. Right Chest Thrust",
        desc: "A backhand thrust targeting the right side of the opponent's chest.",
        img: "https://via.placeholder.com/500x300/1e1e38/ffffff?text=Strike+7+Image"
    },
    8: {
        title: "8. Right Lower Leg Strike",
        desc: "A backhand downward strike aiming at the opponent's right knee or shin.",
        img: "https://via.placeholder.com/500x300/1e1e38/ffffff?text=Strike+8+Image"
    },
    9: {
        title: "9. Left Lower Leg Strike",
        desc: "A forehand downward strike aiming at the opponent's left knee or shin.",
        img: "https://via.placeholder.com/500x300/1e1e38/ffffff?text=Strike+9+Image"
    },
    10: {
        title: "10. Left Eye Poke",
        desc: "A swift, forward thrusting motion targeting the opponent's left eye.",
        img: "https://via.placeholder.com/500x300/1e1e38/ffffff?text=Strike+10+Image"
    },
    11: {
        title: "11. Right Eye Poke",
        desc: "A swift, forward thrusting motion targeting the opponent's right eye.",
        img: "https://via.placeholder.com/500x300/1e1e38/ffffff?text=Strike+11+Image"
    },
    12: {
        title: "12. Crown Strike",
        desc: "A straight downward vertical strike targeting the top (crown) of the opponent's head.",
        img: "https://via.placeholder.com/500x300/1e1e38/ffffff?text=Strike+12+Image"
    }
};

// Get the HTML elements needed for the strikes pop-up
const modalOverlay = document.getElementById("modal-overlay");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-desc");

// Function to open the strikes pop-up
function openModal(strikeNumber) {
    const data = strikesData[strikeNumber];
    modalTitle.innerText = data.title;
    modalDesc.innerText = data.desc;
    modalImg.src = data.img;
    modalOverlay.classList.add("active");
}

// Function to close the strikes pop-up
function closeModal() {
    modalOverlay.classList.remove("active");
}

// Allow users to close the strikes pop-up by clicking anywhere in the dark background
modalOverlay.addEventListener("click", function(event) {
    if (event.target === modalOverlay) {
        closeModal();
    }
});

// --- NEW: Logic for the "About the Makers" Pop-up ---
const makersModalOverlay = document.getElementById("makers-modal-overlay");

function openMakersModal() {
    makersModalOverlay.classList.add("active");
}

function closeMakersModal() {
    makersModalOverlay.classList.remove("active");
}

// Allow users to close the Makers pop-up by clicking the dark background
makersModalOverlay.addEventListener("click", function(event) {
    if (event.target === makersModalOverlay) {
        closeMakersModal();
    }
});