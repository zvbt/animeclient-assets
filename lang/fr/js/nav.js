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
    webview.insertCSS(
      "body{background: #0B1622!important}.cover,.avatar,.page-content .home *:not(.markdown,p,a),.page-content .forum-feed *:not(.markdown,p,a),.page-content .forum-thread *:not(.markdown,p,a),.page-content .media *:not(.markdown,p,a),.page-content .settings *:not(.markdown,p,a),.page-content>.container>.activity-entry *,.el-dialog.list-editor .body *{border-radius:8px!important}.page-content .media .header,.page-content .search *:not(.handle,.title),.quick-search.visible *,.page-content .media .cover-wrap-inner .cover,.el-dialog__body .header{border-radius:16px!important}.page-content .media .header .container{padding-top:20px}.page-content .media .banner+.header .container{margin-top:-20px}#app .category,#app .tag,#app .filter{border-radius:9999px!important}.el-dialog__body{background:#131c28!important}.el-dialog__body{border-radius:16px!important}.media-preview-card:nth-child(-n+5) .content,.el-dialog__wrapper.list-editor-wrap{background:rgba(var(--color-foreground),.8)!important;backdrop-filter:blur(8px)!important}.page-content .media .episode:nth-child(-n+12) .title{background:rgba(var(--color-foreground),.8)!important;backdrop-filter:blur(4px)!important}.media-preview-card:nth-child(-n+10) .image-text,.media-preview-card:nth-child(-n+10) .plus-progress,.review-card:nth-child(-n+4) .read-review{backdrop-filter:blur(4px)!important}.site-theme-dark .overview .favourites .favourite.studio{background:rgb(var(--color-foreground))!important}.markdown,p,a{border-radius:0!important}@media (min-width:1040px){.home.full-width:has(.media-preview-card:nth-child(10)){display:block!important}.home.full-width:has(.media-preview-card:nth-child(10)) .list-preview{grid-template-columns:repeat(auto-fill,85px)!important}}.nav .wrap{display:grid;grid-template-columns:70px auto auto 70px}.nav .wrap .links{grid-column-start:3;margin-left:-25px}.nav .wrap .search{grid-column-start:2;grid-row-start:1;padding:10px;background:rgba(0,0,0,.2);border-radius:35px;width:100%;cursor:text}.quick-search.visible>.input{padding:0 16px;border-radius:999px}.nav .wrap .search:after{content:'Search AniList';margin-left:10px;color:#777a9e}.nav .wrap .user{grid-column-start:4;grid-row-start:1}.list .dropdown.el-dropdown{background:none!important}@media screen and (min-width:1040px){#app #nav{background:rgba(var(--color-foreground),.8)!important;backdrop-filter:blur(10px)!important}}@media screen and (min-width:1140px){.wrap>.footer{max-width:1320px;margin:0 auto 20px;border-radius:16px}#app #nav{margin-top:8px;max-width:1320px;left:50%;transform:translate(-50%,0);border-radius:16px}.quick-search.visible{margin-top:-8px;left:50%;transform:translate(-50%,0)}}@media screen and (max-width:1540px) and (min-width:1140px){.wrap .footer{max-width:1040px!important}#app #nav{max-width:1040px!important}}@media screen{.dropdown{box-shadow:none;border-radius:8px!important;background-color:rgb(var(--color-background))!important}.dropdown .primary-links{background-color:rgb(var(--color-foreground))!important;border-radius:8px!important;margin-bottom:0;padding-bottom:3px}.dropdown .footer{background:none}}body{overflow:scroll;overflow:overlay}body::-webkit-scrollbar{background-color:rgba(255,255,255,0);width:20px}body::-webkit-scrollbar-track{background-color:rgba(255,255,255,0)}body::-webkit-scrollbar-thumb{border:8px solid rgba(0,0,0,0);background-color:rgba(141,178,219,.75);background-clip:padding-box;border-radius:9999px}body::-webkit-scrollbar-thumb:hover{border:6px solid rgba(0,0,0,0)}::-webkit-scrollbar-thumb{background-color:rgba(141,178,219,.75)!important;border-radius:15px;width:4px}.about .content-wrap[data-v-5c30286e]::-webkit-scrollbar{background-color:rgba(255,255,255,0);width:4px}.about .content-wrap[data-v-5c30286e]::-webkit-scrollbar-track{background-color:rgba(255,255,255,0)}.about .content-wrap[data-v-5c30286e]::-webkit-scrollbar-thumb{background-color:rgba(141,178,219,.2)!important;border-radius:10px}"
    );
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