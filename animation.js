// Стилі для контейнера, щоб центрований заголовок був по центру по вертикалі
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.height = "100vh";
document.body.style.margin = "0";
document.body.style.background = "black";
document.body.style.color = "aqua";


const title = document.getElementById("animated-title");
title.style.fontSize = "90px";
title.style.textAlign = "center";
title.style.fontWeight = "bold"; // Робимо шрифт жирним
title.style.letterSpacing = "5px"; // Задаємо відстань між літерами
title.style.textShadow = "2px 2px 5px rgba(0, 255, 255, 0.5)"; // Тінь для тексту

const text = title.innerText;
title.innerText = "";   // Очищуємо початковий текст

// Додаємо кожну літеру в окремий <span>
[...text].forEach((char, index) => {
  const span = document.createElement('span');
  span.innerText = char;

  // Додаємо початкові стилі для анімації
  span.style.opacity = "0";
  span.style.transform = "translateY(20px)";
  span.style.transition = "opaсity 1s, transform 1s";
  span.style.display = "inline-block";
  
  
  title.appendChild(span);

  setTimeout(() => {
    // Додаємо стилі для анімації
    span.style.opacity = "1";
    span.style.transform = "translateY(0)";

  }, 200 * index);  // Кожна літера буде з'являтися з інтервалом 200 мс
});

const subtitle = document.querySelector("h2");
subtitle.style.fontSize = "40px";
subtitle.style.textAlign = "center";
subtitle.style.marginTop = "20px";