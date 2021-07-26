document.addEventListener("click", validateHitbox);

function validateHitbox(event) {
  const language = document.getElementById("language").value;

  console.log(event.x, event.y);

  if (event.x >= 13 && event.x <= 39 && event.y >= 91 && event.y <= 109) {
    if (language == 1) {
      console.log("Hand 1");
    } else {
      console.log("Mano 1");
    }
  }

  if (event.x >= 148 && event.x <= 199 && event.y >= 102 && event.y <= 120) {
    if (language == 1) {
      console.log("Hand 2");
    } else {
      console.log("Mano 2");
    }
  }

  if (event.x >= 41 && event.x <= 102 && event.y >= 166 && event.y <= 176) {
    if (language == 1) {
      console.log("Foot 1");
    } else {
      console.log("Pie 1");
    }
  }

  if (event.x >= 181 && event.x <= 240 && event.y >= 174 && event.y <= 185) {
    if (language == 1) {
      console.log("Foot 2");
    } else {
      console.log("Pie 2");
    }
  }

  if (event.x >= 82 && event.x <= 156 && event.y >= 82 && event.y <= 154) {
    if (language == 1) {
      console.log("Chest");
    } else {
      console.log("Pecho");
    }
  }

  if (event.x >= 75 && event.x <= 214 && event.y >= 13 && event.y <= 73) {
    if (language == 1) {
      console.log("Head");
    } else {
      console.log("Cabeza");
    }
  }

  if (event.x >= 242 && event.x <= 353 && event.y >= 123 && event.y <= 169) {
    if (language == 1) {
      console.log("Tale");
    } else {
      console.log("Cola");
    }
  }
}
