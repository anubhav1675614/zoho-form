function openModal() {
  const urlString = window.location.href;
  const url = new URL(urlString);
  const email = url.searchParams.get("Email");
  const ref = url.searchParams.get("Ref");

  let additionalParams = '';
  let reqUrl = 'https://creator.zohopublic.com/zoho_jon1217/reg-a-offering/form-embed/INDV_Investment_Form/OwXuOUYyz5O9W5Xa2e01aNY8DNn6FbECK11ZYYU7ZeK8awBEBs2nZ4pfkXneFfU60HjmtnFgBkx10MVkQHVprKAYe7VYjjQJkqX9'

  if (email) {
    additionalParams = '?Email=' + email;
  }
  if (email && ref) {
    additionalParams += `&Ref=${ref}`;
  }
  if (email === null && ref) {
    additionalParams += `?Ref=${ref}`;
  }

  reqUrl += additionalParams;

  const instance = basicLightbox.create(
    `<iframe id="formFrame" frameborder='0' allowTransparency='true' scrolling='auto' src=${reqUrl}></iframe>`, {
      closable: false
    }
  );

  instance.show(() => {
    const frame = document.getElementById("formFrame");
    frame.style.visibility = 'hidden';

    setTimeout(() => {
      const close = document.createElement("div");

      frame.style.visibility = 'visible';

      close.className = "close-button";
      close.style["top"] = frame.offsetTop - 19;
      close.style["left"] = frame.offsetLeft + frame.offsetWidth - 22;
      close.onclick = ev => instance.close();

      const lightbox = document.querySelector(".basicLightbox");
      lightbox.appendChild(close);
    }, 3000);
  });
}




