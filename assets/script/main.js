document.addEventListener('DOMContentLoaded', () => {

    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        //contentに高さが設定されていて、かつ0pxではない状態をisOpenと定義
        const isOpen = content.style.height && content.style.height !== "0px";
        // 「＋／−」用クラス切り替え
        header.classList.toggle('active', !isOpen);

        if (isOpen) {
          //まず高さを明示的に指定しておく
          content.style.height = content.scrollHeight + 'px';
          //そして高さを0pxにする。
          requestAnimationFrame(() => {
            content.style.height = '0px';
          });
        } else {
          content.style.height = content.scrollHeight + 'px';
          //transition後に高さをautoにし、このイベント（handler）自体も終わりにする
          content.addEventListener('transitionend', function handler() {
            content.style.height = 'auto';
            content.removeEventListener('transitionend', handler);
          });
        }
      });
    });



}); //script END