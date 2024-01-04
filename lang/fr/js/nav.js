const logo = document.getElementById("logo");
logo.addEventListener("click", function () {
  // webview.loadURL("http://127.0.0.1:5500/");

   window.location.href = "/index.html";
});

const webview = document.querySelector("webview");
function forward() {
  webview.goForward();
}
function backward() {
  webview.goBack();
}
function voiranime() {
  webview.loadURL("https://voiranime.com");
  webview.addEventListener("did-finish-load", function () {
    webview.insertCSS(
      "body,.profile-manga{color:white!important;background:#101010!important}.url,.h5 a,.h4,.wp-manga-chapter a,.post-title h1,.post-content_item div h5,.comment-content p{color:white!important}.ion-checkmark,.c-selectpicker.selectpicker_chapter.selectpicker.single-chapter-select,.selectpicker.host-select{filter:invert()!important}.summary_image,.summary_content,#comment,#author,#email,#url{border-radius:5px;border:#303030 solid 2px;background:#303030!important}#comment:hover,#author:hover,#email:hover,#url:hover{border-radius:5px;border:#303030 solid 2px;background:#303030!important}div.c-sub-header-nav.with-border{display:none!important}"
    );
  });
}

function anilist() {
  webview.loadURL("https://anilist.co");
  webview.addEventListener("did-finish-load", function () {
    webview.insertCSS("body{background: #0b1622!important}");
  });
}

function vostfree() {
  webview.loadURL("https://vostfree.ws");
  webview.addEventListener("did-finish-load", function () {
    webview.insertCSS("body{background: #2E3543!important}");
  });
}

function nekosama() {
  webview.loadURL("https://neko-sama.fr");
  webview.addEventListener("did-finish-load", function () {
    webview.insertCSS("body{background: #101010!important}");
  });
}

function crunchyroll() {
  
  webview.loadURL("https://crunchyroll.com");
  webview.addEventListener("did-finish-load", function () {
    webview.insertCSS("body{background: #000!important}");
  });
}
