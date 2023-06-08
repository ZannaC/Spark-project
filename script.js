"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("whatWeOffer");
  const infoData = [
    {
      image: "images/whatWeOffer-images/logoDesign.png",
      theme: "Logo Design",
      info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
    },

    {
      image: "images/whatWeOffer-images/mobAppDevelop.png",
      theme: "Mobile App Development",
      info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
    },
    {
      image: "images/whatWeOffer-images/videoEditing.png",
      theme: "Video Editing",
      info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
    },
    {
      image: "images/whatWeOffer-images/logoDesign2.png",
      theme: "Logo Design",
      info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
    },
    {
      image: "images/whatWeOffer-images/videoEditing.png",
      theme: "Video Editing",
      info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
    },
    {
      image: "images/whatWeOffer-images/websiteDevelop.png",
      theme: "Website Development",
      info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
    },
    {
      image: "images/whatWeOffer-images/2DAnimation.png",
      theme: "2D Animation",
      info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
    },
    {
      image: "images/whatWeOffer-images/productBranding.png",
      theme: "Product Branding",
      info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
    },
    {
      image: "images/whatWeOffer-images/websiteDevelop.png",
      theme: "Product Branding",
      info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
    },
    {
      image: "images/whatWeOffer-images/productBranding.png",
      theme: "Product Brandingt",
      info: "Need a quality, custom logo? Our team will create a stunning, original design for you that will make your business stand out from the ...",
    },
  ];

  infoData.forEach(function (data) {
    const infoBlock = document.createElement("div");
    infoBlock.classList.add("whatWeOffer");

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

    infoBlock.appendChild(repeatBlockElement);
    repeatBlockElement.appendChild(imageElement);
    repeatBlockElement.appendChild(blockElement);
    blockElement.appendChild(blockThemeElement);
    blockElement.appendChild(blockInfoElement);
    blockElement.appendChild(btnElement);

    btnElement.appendChild(btnTextElement);
    btnElement.appendChild(btnLinkElement);
    btnElement.appendChild(btnArrowElement);

    container.appendChild(infoBlock);
  });
});
