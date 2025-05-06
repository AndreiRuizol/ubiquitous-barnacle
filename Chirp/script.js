document.addEventListener('DOMContentLoaded', () => {
    const flowers = document.querySelectorAll('.flower');
    const tiktokGui = document.getElementById('tiktokGui');
    const tiktokVideoFrame = document.getElementById('tiktokVideo');
    const closeGuiButton = document.getElementById('closeGui');
    const bouquet = document.querySelector('.bouquet');

    let currentTikTokUrl = "";

    flowers.forEach((flower, index) => {
        flower.addEventListener('click', () => {
            const tiktokUrl = flower.dataset.tiktokUrl;
            currentTikTokUrl = tiktokUrl;
            tiktokVideoFrame.src = tiktokUrl;
            tiktokGui.style.display = 'block';
        });
    });

    closeGuiButton.addEventListener('click', () => {
        tiktokGui.style.display = 'none';
        tiktokVideoFrame.src = '';
        currentTikTokUrl = "";
    });
});
```
