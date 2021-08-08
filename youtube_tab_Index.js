
// 左のnavバーを非表示
var navBar = document.querySelector("#guide");
if (navBar) {
    navBar.remove();
}
//navバーのあった場所の空白を取り除く
document.querySelector("#page-manager").setAttribute("style", "margin-left: 0px;");

//検索窓の下のタグ一覧を非表示
document.getElementById('chips-wrapper').style.display = "none";

tabIndex();


//コロナ特集＆急上昇特集を非表示
var unnecessaryContents = document.querySelectorAll("ytd-rich-section-renderer");
if (unnecessaryContents) {
    unnecessaryContents.forEach(node => {
        node.style.display = "none";
    });
};

document.querySelector("#contents").querySelector("#thumbnail").focus();

//return;使うために関数に入れる
(function () {
    //２回目以降の実行はスルーする為にクラスリスト追加＆監視
    const EVENT_LISTENER_ADDED = "eventListenerAdded";
    if (document.querySelectorAll("#primary")[0].classList.contains(EVENT_LISTENER_ADDED)) {
        return;
    } else {
        document.querySelectorAll("#primary")[0].classList.add(EVENT_LISTENER_ADDED);

        //css追加　フォーカスの時の外枠
        var newStyle = document.createElement('style');
        newStyle.type = 'text/css';
        newStyle.innerText = 'a:focus{outline: none; border-style: solid; border-width: 7px; border-color: #E71D36;}';
        document.getElementsByTagName('HEAD').item(0).appendChild(newStyle);

        //サムネの親要素にキー入力を受け付けるイベントリスナーを設置
        var i = 0;
        document.querySelectorAll("#primary")[0].addEventListener("keydown", function (event) {
            //列ごとの動画数を取得 num 列ごとの数が変わっても真上や真下の要素にアクセスするため
            var num = document.querySelectorAll("#primary")[0].firstElementChild.getAttribute("style").split(":")[1].slice(0, 1);
            var nodes = document.querySelectorAll('.yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail');
            nodes = Array.from(nodes);
            thumbnails = nodes.filter(node => {
                return node.closest("ytd-rich-item-renderer.style-scope.ytd-rich-grid-renderer");
            });

            var activeThumbnail = thumbnails.find(node => node === document.activeElement);
            var currentIndex = thumbnails.indexOf(activeThumbnail);

            if (event.key === "w") {
                if (thumbnails[parseInt(i) - parseInt(num)]) {
                    i = parseInt(currentIndex) - parseInt(num);
                    thumbnails[i].focus();
                };

            } else if (event.key === "s") {
                if (thumbnails[parseInt(i) + parseInt(num)]) {
                    i = parseInt(currentIndex) + parseInt(num);
                    thumbnails[i].focus();
                };

            } else if (event.key === "a") {
                if (thumbnails[parseInt(i) - 1]) {
                    i = parseInt(currentIndex) - 1;
                    thumbnails[i].focus();
                };

            } else if (event.key === "d") {
                if (thumbnails[parseInt(i) + 1]) {
                    i = parseInt(currentIndex) + 1;
                    thumbnails[i].focus();
                };
            };
        }, true);
    }
}());

//サムネ一つ一つにtabindexを追加する関数
function tabIndex() {
    var nodes = document.querySelectorAll('.yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail');
    nodes = Array.from(nodes);
    thumbnails = nodes.filter(node => {
        return node.closest("ytd-rich-item-renderer.style-scope.ytd-rich-grid-renderer");
    });

    thumbnails.forEach(thumbnail => {
        if (thumbnail.getAttribute("tabindex") === "1") {
            return;
        } else {
            thumbnail.setAttribute("tabindex", "1");
            thumbnail.addEventListener('focus', () => {
                document.activeElement.scrollIntoView({
                    behavior: "instant",
                    block: "center"
                });
            });
        }
    });
}

//サムネの親要素のDOM変化を監視、コンテンツが新たに読み込まれたらtabindexを実行
const target = document.getElementById('contents');
const observer = new MutationObserver(records => {
    tabIndex();
});

observer.observe(target, {
    childList: true
})


//フォーマット&ブックマークレット化したやつ
javascript: (() => {
var g=document.querySelector("#guide");g&&g.remove();document.querySelector("#page-manager").setAttribute("style","margin-left: 0px;");document.getElementById("chips-wrapper").style.display="none";h();var k=document.querySelectorAll("ytd-rich-section-renderer");k&&k.forEach(function(c){c.style.display="none"});document.querySelector("#contents").querySelector("#thumbnail").focus();
(function(){if(!document.querySelectorAll("#primary")[0].classList.contains("eventListenerAdded")){document.querySelectorAll("#primary")[0].classList.add("eventListenerAdded");var c=document.createElement("style");c.type="text/css";c.innerText="a:focus{outline: none; border-style: solid; border-width: 7px; border-color: #E71D36;}";document.getElementsByTagName("HEAD").item(0).appendChild(c);var a=0;document.querySelectorAll("#primary")[0].addEventListener("keydown",function(d){var e=document.querySelectorAll("#primary")[0].firstElementChild.getAttribute("style").split(":")[1].slice(0,
1),b=document.querySelectorAll(".yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail");b=Array.from(b);thumbnails=b.filter(function(f){return f.closest("ytd-rich-item-renderer.style-scope.ytd-rich-grid-renderer")});b=thumbnails.find(function(f){return f===document.activeElement});b=thumbnails.indexOf(b);"w"===d.key?thumbnails[parseInt(a)-parseInt(e)]&&(a=parseInt(b)-parseInt(e),thumbnails[a].focus()):"s"===d.key?thumbnails[parseInt(a)+parseInt(e)]&&(a=parseInt(b)+parseInt(e),thumbnails[a].focus()):
"a"===d.key?thumbnails[parseInt(a)-1]&&(a=parseInt(b)-1,thumbnails[a].focus()):"d"===d.key&&thumbnails[parseInt(a)+1]&&(a=parseInt(b)+1,thumbnails[a].focus())},!0)}})();
function h(){var c=document.querySelectorAll(".yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail");c=Array.from(c);thumbnails=c.filter(function(a){return a.closest("ytd-rich-item-renderer.style-scope.ytd-rich-grid-renderer")});thumbnails.forEach(function(a){"1"!==a.getAttribute("tabindex")&&(a.setAttribute("tabindex","1"),a.addEventListener("focus",function(){document.activeElement.scrollIntoView({behavior:"instant",block:"center"})}))})}var l=document.getElementById("contents");
(new MutationObserver(function(){h()})).observe(l,{childList:!0});
})()