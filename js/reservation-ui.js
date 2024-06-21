// $("#browse-luaus").on("click", function () {
//   $("html,body").animate({
//     scrollTop: $("#luau-previews").offset().top - 100,
//   });
// });

// $("#book-now-btn").on("click", function () {
//   $([document.documentElement, document.body]).animate({
//     scrollTop: $("#luau-previews").offset().top - 100,
//   });
// });

let galleryAnchor = document.getElementsByClassName("gallery-image");

window.onload = () => {
  for (let i = 0; i < galleryAnchor.length; i++) {
    let galleryImg = document.createElement("IMG");
    galleryImg.setAttribute("src", galleryAnchor[i].getAttribute("href"));
    galleryAnchor[i].appendChild(galleryImg);
  }
};
