import "@fortawesome/fontawesome-free/css/all.css";

const topLine1 = (
  <>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <span className="space-between"> </span>Rated 4.9 by 100+ Happy Pet Parents
  </>
);

const buttonLabel1 = (
  <>
    Upload Your Pet
    <span className="space-between"> </span>
    <i class="fa-regular fa-hand-point-right"></i>
  </>
);

const description3 = (
  <>
    <p>
      <i class="fa-solid fa-check" /> Wall Art: Transform themed pet portraits
      into captivating wall art
    </p>
    <p>
      <i class="fa-solid fa-check" /> Pet's Persona Online: Amp up their social
      media game{" "}
    </p>
    <p>
      <i class="fa-solid fa-check" /> Cards that Wow: Turn pet pics into
      greeting cards.
    </p>
    <p>
      <i class="fa-solid fa-check" /> Heartfelt Memorials: Honor and remember
      beloved pets.
    </p>
    <p>
      <i class="fa-solid fa-check" /> And More...
    </p>
  </>
);

export const homeObjOne = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: topLine1,
  headline: "Turn Pet Pictures Into Masterpieces",
  buttonLabel: buttonLabel1,
  imgStart: "",
  img: "images/Cat_Astro.png",
  alt: "Credit Card",
  textMode: "AlignCenter",
};

export const homeObjTwo = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  headline: "Every Pet Moment, Captured Perfectly.",
  description: description3,
  buttonLabel: buttonLabel1,
  imgStart: "start",
  img: "images/ChiChi.JPG",
  alt: "Vault",
  textMode: "AlignLeft",
};
