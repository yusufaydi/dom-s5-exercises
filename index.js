// 1 .Bir HTML sayfasında bulunan bir başlık elementini (h1) JavaScript kullanarak değiştirin. Yeni başlık metni "Merhaba, Dünya!" olsun.
// 2. Bir HTML sayfasında bulunan bir div elementinin arka plan rengini JavaScript kullanarak değiştirin.
// 3. Bir HTML sayfasında bulunan bir ul (sırasız liste) elementine JavaScript kullanarak yeni liste elemanları ekleyin.
// 4. Bir düğmeye tıklandığında bir metni güncelleyen bir JavaScript fonksiyonunu çağırın.
// 5. Bir HTML formunda kullanıcıdan bir metin girmesini isteyin. Ardından, girilen metni başka bir bölümde görüntüleyin.
// 6. Bir HTML sayfasında bulunan bir div elementinin (veya istediğiniz bir elementin) stilini JavaScript kullanarak değiştirin. Örneğin, genişliğini artırın ve rengini değiştirin.
// 7. Bir HTML sayfasında bulunan bir sırasız listeyi (ul) JavaScript kullanarak filtreleyin. Örneğin, sadece belirli bir harfi içerenleri gösterin.
// 8. Bir HTML sayfasında bulunan bir sırasız listeye JavaScript kullanarak yeni bir liste elemanı ekleyin ve ardından bir elemanı silin.
// 9. Bir HTML sayfasında bulunan bir liste üzerinde olay delegasyonu kullanarak tıklanan elemanın metnini gösterin.
// 10. Bir HTML formunu JavaScript kullanarak doğrulayın. Örneğin, kullanıcı adı ve şifre alanlarını kontrol edin ve hatalı giriş durumunda bir uyarı gösterin.

document.addEventListener("DOMContentLoaded", function () {
  updateFirstTitle("Merhaba Dünya");
  backGroundMyDiv();
  appendLi();
  divStyleChange();
  filterUl();
  appendAndRemove();
  //clickedLi();
  addGlobalEventListener("click", "li", (e) => {
    alert(e.target.innerText);
    console.log(e);
  });
  document
    .getElementById("fname")
    .addEventListener("blur", checkInputOfUsername);
  document
    .getElementById("fpassword")
    .addEventListener("blur", checkInputOfPassword);
  ulStyleChange();
});

function updateFirstTitle(str) {
  const newh1 = document.getElementById("myh1");
  newh1.innerText = str;
}

function AddText() {
  let newText = "deneme metin içerik";
  let myh1 = document.getElementById("myh1");
  myh1.innerText = newText;
}

function backGroundMyDiv() {
  const mydiv = document.getElementById("mydiv");
  mydiv.style.backgroundColor = "red";
}

function appendLi() {
  let ul = document.getElementById("101");
  let createdLi = document.createElement("li");

  createdLi.innerText = "Liste a 101 3";

  ul.appendChild(createdLi);
}

function metniGoruntule() {
  let girilenMetin = document.getElementsByName("fname")[0];
  let girilenMetinDegeri = girilenMetin.value;
  updateFirstTitle(girilenMetinDegeri);
}

function submitBtn(event) {
  event.preventDefault();
  metniGoruntule();
}

function ulStyleChange() {
  let myUl = document.getElementById("101");
  myUl.style.display = "inline-block";
}

function divStyleChange() {
  //background-Color = "brown" ok
  //font-family="arial" ok
  //font-size ="22px"ok
  //width: "300px"ok
  //height; "610px"ok
  let mydiv = document.getElementById("mydiv");
  mydiv.style.backgroundColor = "hsl(0, 0%, 15%)";
  mydiv.style.fontFamily = "Arial";
  mydiv.style.fontSize = "22px";
  mydiv.style.width = "300px";
  mydiv.style.height = "610px";
}

let filterUl = () => {
  const arr = [];
  let ulList = document.querySelectorAll("ul li");
  ulList.forEach((item) => {
    if (item.innerText.includes("a")) {
      arr.push(item);
    } else {
      item.style.display = "none";
    }
  });
};

function appendAndRemove() {
  let ulList = document.getElementById("101");
  let createLiElement = document.createElement("li");
  createLiElement.innerText = "Hello Li Element";
  ulList.appendChild(createLiElement);
  let removeElement = document.querySelector("li");
  removeElement.remove();
}

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) {
      callback(e);
    }
  });
}

/*
the function above this code block is a better way of doing this.

function clickedLi() {
  document.getElementById("101").addEventListener("click", function (event) {
    // e.target is the clicked element!
    // If it was a list item
    if (event.target && event.target.nodeName === "LI") {
      alert(event.target.innerText);
      console.log(event);
    }
  });
}
*/

const checkInputOfUsername = (event) => {
  const errorElement = Array.from(
    event.target.parentNode.querySelectorAll("span")
  );
  if (
    event.target.value === document.getElementById("myh1") &&
    !errorElement.length
  ) {
    event.target.insertAdjacentHTML(
      "afterend",
      '<span class="text-danger">Required</span>'
    );
  }

  if (errorElement && event.target.value === document.getElementById("myh1")) {
    errorElement.forEach((item) => item.remove());
  }
};
const password = 123456;
const checkInputOfPassword = (event) => {
  const errorElement = Array.from(
    event.target.parentNode.querySelectorAll("span")
  );
  if (event.target.value === "" && !errorElement.length) {
    event.target.insertAdjacentHTML(
      "afterend",
      '<span class="text-danger">Required</span>'
    );
  }

  if (errorElement && event.target.value === password) {
    errorElement.forEach((item) => item.remove());
  }
};
