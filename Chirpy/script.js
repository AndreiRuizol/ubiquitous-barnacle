document.addEventListener('DOMContentLoaded', function() {
    const flowerImage = document.getElementById('flowerImage');
    const tiktokEmbedContainer = document.getElementById('tiktokEmbedContainer');

    flowerImage.addEventListener('click', function() {
        // Get the TikTok embed code (replace with your actual embed code)
        const tiktokEmbedCode = '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@tiktok/video/YOUR_TIKTOK_VIDEO_ID" data-video-id="YOUR_TIKTOK_VIDEO_ID" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@tiktok" href="https://www.tiktok.com/@tiktok">@tiktok</a> <a target="_blank" title="♬ original sound - TikTok" href="https://www.tiktok.com/music/original-sound-6597649375992727558">♬ original sound - TikTok</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>';

        // Set the innerHTML of the container to the embed code
        tiktokEmbedContainer.innerHTML = tiktokEmbedCode;

        // Remove the 'hidden' class to make the container visible
        tiktokEmbedContainer.classList.remove('hidden');

        // Optionally, you could hide the flower after it's clicked:
        // flowerImage.style.display = 'none';
    });
});
