document.addEventListener('DOMContentLoaded', () => {
    const flowers = document.querySelectorAll('.flower');
    const tiktokGui = document.getElementById('tiktokGui');
    const tiktokVideoFrame = document.getElementById('tiktokVideo');
    const closeGuiButton = document.getElementById('closeGui');
    const bouquet = document.querySelector('.bouquet');

    flowers.forEach((flower, index) => {
        flower.addEventListener('click', () => {
            const tiktokUrl = flower.dataset.tiktokUrl;
            tiktokVideoFrame.src = tiktokUrl;
            tiktokGui.style.display = 'block';
        });

        // Example of setting a random rotation for a warped effect
        const randomRotation = (Math.random() - 0.5) * 20; // +/- 10 degrees
        flower.style.setProperty('--rotation', randomRotation);
    });

    closeGuiButton.addEventListener('click', () => {
        tiktokGui.style.display = 'none';
        tiktokVideoFrame.src = ''; // Clear the iframe source when closed
    });

    // More sophisticated warping (example - you might need to adjust)
    if (bouquet) {
        const numFlowers = flowers.length;
        flowers.forEach((flower, index) => {
            const angle = (index / numFlowers) * 360;
            const radius = Math.random() * 50 + 50; // Random radius to spread them out

            const x = radius * Math.cos(angle * Math.PI / 180);
            const y = radius * Math.sin(angle * Math.PI / 180);

            flower.style.transform = `translate(${x}px, ${y}px) rotate(${flower.style.getPropertyValue('--rotation')})`;
            flower.style.position = 'absolute'; // Needed for positioning
        });
        bouquet.style.width = 'auto'; // Adjust bouquet width
        bouquet.style.height = 'auto'; // Adjust bouquet height
    }
});
