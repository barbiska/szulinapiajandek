let currentImages = [];
        let currentIndex = 0;

        function openPopup(images, date) {
            currentImages = images;
            currentIndex = 0;
            document.getElementById('popup-img').src = currentImages[currentIndex];
            document.getElementById('popup-date').innerText = date;
            let popup = document.getElementById('popup');
            popup.style.display = 'block';
            setTimeout(() => popup.classList.add('show'), 10);
        }

        function closePopup() {
            let popup = document.getElementById('popup');
            popup.classList.remove('show');
            setTimeout(() => popup.style.display = 'none', 300);
        }

        function nextImage() {
            if (currentIndex < currentImages.length - 1) {
                currentIndex++;
                document.getElementById('popup-img').src = currentImages[currentIndex];
            }
        }

        function prevImage() {
            if (currentIndex > 0) {
                currentIndex--;
                document.getElementById('popup-img').src = currentImages[currentIndex];
            }
        }

function drawLines() {
    const bubbles = document.querySelectorAll('.bubble');
    const svg = document.querySelector('.lines-container svg');
    svg.innerHTML = ''; // Clear existing paths

    // Get the current scroll position
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    bubbles.forEach((bubble, index) => {
        if (index < bubbles.length - 1) {
            let bubble1 = bubble.getBoundingClientRect();
            let bubble2 = bubbles[index + 1].getBoundingClientRect();

            // Adjust coordinates for scroll position
            let x1 = bubble1.left + scrollX + bubble1.width / 2;
            let y1 = bubble1.top + scrollY + bubble1.height / 2;
            let x2 = bubble2.left + scrollX + bubble2.width / 2;
            let y2 = bubble2.top + scrollY + bubble2.height / 2;

            let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            let d = `M ${x1},${y1} Q ${(x1 + x2) / 2}, ${(y1 + y2) / 2 - 50} ${x2},${y2}`;

            path.setAttribute('d', d);
            path.setAttribute('stroke', 'red');
            path.setAttribute('stroke-width', '4');
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke-linecap', 'round');

            svg.appendChild(path);
        }
    });
}


// Ensure drawLines runs after all elements are loaded
window.onload = () => setTimeout(drawLines, 100);
window.onresize = drawLines;
window.onscroll = drawLines; // Redraw lines on scroll

function toggleAudio() {
    const audio = document.getElementById('background-audio');
    const button = document.getElementById('play-audio-button');
    if (audio.paused) {
        audio.play();
        button.textContent = '🔇 Pause Music';
    } else {
        audio.pause();
        button.textContent = '🔊 Play Music';
    }
}