const elementImage = document.getElementById("image");

fetch("https://dwaapi.juvasquez88.vercel.app/letters")
  .then((response) => response.json())
  .then((res) => {
    console.log(res);
    const letters = res.letters;

    document.getElementById("vButton").addEventListener("click", () => {
      elementImage.src = letters.find((letter) => letter.letter === "v").image;
    });

    document.getElementById("tButton").addEventListener("click", () => {
      elementImage.src = letters.find((letter) => letter.letter === "t").image;
    });

    document.getElementById("rButton").addEventListener("click", () => {
      elementImage.src = letters.find((letter) => letter.letter === "r").image;
    });

    document.getElementById("eButton").addEventListener("click", () => {
      elementImage.src = letters.find((letter) => letter.letter === "e").image;
    });

    document.getElementById("wButton").addEventListener("click", () => {
      elementImage.src = letters.find((letter) => letter.letter === "w").image;
    });

    document.getElementById("oButton").addEventListener("click", () => {
      elementImage.src = letters.find((letter) => letter.letter === "o").image;
    });

    document.getElementById("lButton").addEventListener("click", () => {
      elementImage.src = letters.find((letter) => letter.letter === "l").image;
    });

    document.getElementById("iButton").addEventListener("click", () => {
      elementImage.src = letters.find((letter) => letter.letter === "i").image;
    });
  });
