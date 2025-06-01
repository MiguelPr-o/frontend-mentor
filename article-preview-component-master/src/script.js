let shareButton = document.querySelector(".article-preview__share-button");
const sharePanel = document.getElementById("share-panel");

shareButton.addEventListener("click", () => {
    if(sharePanel.style.display === "none") {
        sharePanel.style.display = "flex";
        shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
        document.querySelector(".article-preview__share-button svg path").setAttribute("fill", "hsl(214, 17%, 51%)");

    }else {
        sharePanel.style.display = "none";
        shareButton.style.backgroundColor = "hsl(217, 19%, 35%)";
        document.querySelector(".article-preview__share-button svg path").setAttribute("fill", "hsl(210, 46%, 95%)");
    }
})