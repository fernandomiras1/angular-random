export function appendTrackerSolicitar() {
  const urlform = 'https://solicitatutarjeta.naranja.com/formulario/quiero-mi-naranja.html';

  function setLink(element) {
    const param = window.location.search.substring(1);
    if (param) {
      element.setAttribute('href', `${urlform}?${param}`);
    } else {
      element.setAttribute('href', `${urlform}?VL_CanalSolicitud=4`);
    }
  }

  const urlfind = `[href*='${urlform}']`;
  const links = document.querySelectorAll(urlfind);

  for (let i = 0; i < links.length; i += 1) {
    setLink(links[i]);
  }

  // Footer button needs different behaviour ¯\_(ツ)_/¯
  const btnFooter = document.querySelectorAll('#btnFooter');

  setTimeout(
    () => {
      if (typeof btnFooter[0] !== 'undefined') {
        setLink(btnFooter[0]);
      }
    },
    200);
}

// Delete chat button on Contact page
export function deleteChatBtn() {
  setTimeout(() => {
    const btnWrapper = document.querySelector('.list-chat_desktop');
    if (btnWrapper !== null) {
      const closestBtnWrapper = btnWrapper.closest('.list-item_two');
      closestBtnWrapper.setAttribute('hidden', 'true');
    }
  });
}

export function openPdfNewTab() {
  const links = document.querySelectorAll('a[href$=pdf]');
  links.forEach((elem) => {
    elem.setAttribute('target', '_blank');
  });
}
