"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const block = document.getElementById("whatWeOffer");
  const infoData = [
    {
      image: "images/whatWeOffer-images/logoDesign.png",
      theme: "Logo Design",
      info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
    },
    {
      image: "images/whatWeOffer-images/websiteDevelop.png",
      theme: "Website Development",
      info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
    },
    {
      image: "images/whatWeOffer-images/mobAppDevelop.png",
      theme: "Mobile App Development",
      info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
    },
    {
      image: "images/whatWeOffer-images/2DAnimation.png",
      theme: "2D Animation",
      info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
    },
    {
      image: "images/whatWeOffer-images/videoEditing.png",
      theme: "Video Editing",
      info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
    },
    {
      image: "images/whatWeOffer-images/productBranding.png",
      theme: "Product Branding",
      info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
    },
    {
      image: "images/whatWeOffer-images/logoDesign2.png",
      theme: "Logo Design",
      info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
    },
    {
      image: "images/whatWeOffer-images/websiteDevelop.png",
      theme: "Product Branding",
      info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
    },
    {
      image: "images/whatWeOffer-images/videoEditing.png",
      theme: "Video Editing",
      info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
    },

    {
      image: "images/whatWeOffer-images/productBranding.png",
      theme: "Product Brandingt",
      info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
    },
  ];

  const loadMoreButton = document.getElementById("loadMore");
  const isMobile = window.matchMedia("(max-width: 480px)").matches;
  let currentBlockIndex = 0;

  function createInfoBlock(data) {
    const infoBlock = document.createElement("div");
    infoBlock.classList.add("what-We-Offer");

    const repeatBlockElement = document.createElement("div");
    repeatBlockElement.classList.add("whatWeOffer-block");

    const imageElement = document.createElement("div");
    imageElement.classList.add("whatWeOffer-block-image");
    imageElement.style.backgroundImage = `url(${data.image})`;

    const blockElement = document.createElement("div");
    blockElement.classList.add("whatWeOffer-block-info");

    const blockThemeElement = document.createElement("h3");
    blockThemeElement.classList.add("whatWeOffer-block-theme");
    blockThemeElement.textContent = data.theme;

    const blockInfoElement = document.createElement("p");
    blockInfoElement.classList.add("whatWeOffer-block-info");
    blockInfoElement.textContent = data.info;

    const btnElement = document.createElement("div");
    btnElement.classList.add("whatWeOffer-btn");

    const btnTextElement = document.createElement("h3");
    btnTextElement.classList.add("green-text");
    btnTextElement.textContent = "Learn More";

    const btnLinkElement = document.createElement("a");
    btnLinkElement.classList.add("btn-link-arrow");
    btnLinkElement.href = "#";
    const btnArrowElement = document.createElement("img");
    btnArrowElement.src = "images/whatWeOffer-images/arrow-right.svg";

    block.appendChild(infoBlock);

    infoBlock.appendChild(repeatBlockElement);
    repeatBlockElement.appendChild(imageElement);
    repeatBlockElement.appendChild(blockElement);
    blockElement.appendChild(blockThemeElement);
    blockElement.appendChild(blockInfoElement);
    blockElement.appendChild(btnElement);

    btnElement.appendChild(btnTextElement);
    btnElement.appendChild(btnLinkElement);
    btnElement.appendChild(btnArrowElement);
  }

  function loadBlocks() {
    const numBlocksToShow = 5;

    for (
      let i = currentBlockIndex;
      i < currentBlockIndex + numBlocksToShow;
      i++
    ) {
      if (i >= infoData.length) {
        loadMoreButton.style.display = "none";
        break;
      }
      createInfoBlock(infoData[i]);
    }

    currentBlockIndex += numBlocksToShow;
  }

  loadBlocks(); // Initially load the first set of blocks

  if (isMobile) {
    loadMoreButton.style.display = "block";
    loadMoreButton.addEventListener("click", function (e) {
      e.preventDefault();
      loadBlocks(); // Load the next set of blocks
    });
  } else {
    loadMoreButton.style.display = "none";
  }
});

/*///////////////////////////////////////*/
// document.addEventListener("DOMContentLoaded", function () {
//   const block = document.getElementById("whatWeOffer");
//   const infoData = [
//     {
//       image: "images/whatWeOffer-images/logoDesign.png",
//       theme: "Logo Design",
//       info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
//     },
//     {
//       image: "images/whatWeOffer-images/websiteDevelop.png",
//       theme: "Website Development",
//       info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
//     },
//     {
//       image: "images/whatWeOffer-images/mobAppDevelop.png",
//       theme: "Mobile App Development",
//       info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
//     },
//     {
//       image: "images/whatWeOffer-images/2DAnimation.png",
//       theme: "2D Animation",
//       info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
//     },
//     {
//       image: "images/whatWeOffer-images/videoEditing.png",
//       theme: "Video Editing",
//       info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
//     },
//     {
//       image: "images/whatWeOffer-images/productBranding.png",
//       theme: "Product Branding",
//       info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
//     },
//     {
//       image: "images/whatWeOffer-images/logoDesign2.png",
//       theme: "Logo Design",
//       info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
//     },
//     {
//       image: "images/whatWeOffer-images/websiteDevelop.png",
//       theme: "Product Branding",
//       info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
//     },
//     {
//       image: "images/whatWeOffer-images/videoEditing.png",
//       theme: "Video Editing",
//       info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
//     },

//     {
//       image: "images/whatWeOffer-images/productBranding.png",
//       theme: "Product Brandingt",
//       info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
//     },
//   ];

//   infoData.forEach(function (data) {
//     const infoBlock = document.createElement("div");
//     infoBlock.classList.add("what-We-Offer");

//     const repeatBlockElement = document.createElement("div");
//     repeatBlockElement.classList.add("whatWeOffer-block");

//     const imageElement = document.createElement("div");
//     imageElement.classList.add("whatWeOffer-block-image");
//     imageElement.style.backgroundImage = `url(${data.image})`;

//     const blockElement = document.createElement("div");
//     blockElement.classList.add("whatWeOffer-block-info");

//     const blockThemeElement = document.createElement("h3");
//     blockThemeElement.classList.add("whatWeOffer-block-theme");
//     blockThemeElement.textContent = data.theme;

//     const blockInfoElement = document.createElement("p");
//     blockInfoElement.classList.add("whatWeOffer-block-info");
//     blockInfoElement.textContent = data.info;

//     const btnElement = document.createElement("div");
//     btnElement.classList.add("whatWeOffer-btn");

//     const btnTextElement = document.createElement("h3");
//     btnTextElement.classList.add("green-text");
//     btnTextElement.textContent = "Learn More";

//     const btnLinkElement = document.createElement("a");
//     btnLinkElement.classList.add("btn-link-arrow");
//     btnLinkElement.href = "#";
//     const btnArrowElement = document.createElement("img");
//     btnArrowElement.src = "images/whatWeOffer-images/arrow-right.svg";

//     block.appendChild(infoBlock);

//     infoBlock.appendChild(repeatBlockElement);
//     repeatBlockElement.appendChild(imageElement);
//     repeatBlockElement.appendChild(blockElement);
//     blockElement.appendChild(blockThemeElement);
//     blockElement.appendChild(blockInfoElement);
//     blockElement.appendChild(btnElement);

//     btnElement.appendChild(btnTextElement);
//     btnElement.appendChild(btnLinkElement);
//     btnElement.appendChild(btnArrowElement);
//   });
// });

/*///////////////////////////////////////////////////*/
const burgerMenu = document.querySelector(".burgerMenu");
const dropDownMenu = document.querySelector(".drop-down-menu-container");

burgerMenu.addEventListener("click", function () {
  // Toggle the display of the overlay menu
  if (dropDownMenu.style.display === "none") {
    dropDownMenu.style.display = "block";
  } else {
    dropDownMenu.style.display = "none";
  }
});

const closeDropDownMenu = document.querySelector(".close-btn");

closeDropDownMenu.addEventListener("click", function () {
  // Toggle the display of the overlay menu
  if (dropDownMenu.style.display === "block") {
    dropDownMenu.style.display = "none";
  } else {
    dropDownMenu.style.display = "block";
  }
});

/*///////////////////////////////////////////////////*/
// $(document).ready(function () {
//   $(".what-we-offer").slice(0, 5).show();
//   $("#loadMore").on("click", function (e) {
//     e.preventDefault();
//     $(".what-we-offer:hidden").slice(0, 5).slideDown();
//     if ($(".what-we-offer:hidden").length == 0) {
//       $("#loadMore").text("No Content").addClass("noContent");
//     }
//   });
// });
