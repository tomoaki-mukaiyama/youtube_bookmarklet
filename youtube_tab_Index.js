    
    var newStyle = document.createElement('style');
    newStyle.type = 'text/css';
    newStyle.innerText = 'a:focus{outline: none; border-style: solid; border-width: 7px; border-color: #E71D36;}';
    document.getElementsByTagName('HEAD').item(0).appendChild(newStyle);

    document.getElementById('chips-wrapper').style.display = "none";

    tabIndex();

    gridUx();

    var unnecessaryContents = document.querySelectorAll("ytd-rich-section-renderer");
    if (unnecessaryContents) {
        unnecessaryContents.forEach(node => {
            node.style.display = "none";
        });
    };

    document.querySelector("#contents").querySelector("#thumbnail").focus();

    function gridUx() {
        const EVENT_LISTENER_ADDED = "eventListenerAdded";
        if (document.querySelectorAll("#primary")[0].classList.contains(EVENT_LISTENER_ADDED)) {
            return;
        } else {
            document.querySelectorAll("#primary")[0].classList.add(EVENT_LISTENER_ADDED);

            var i = 0;

            document.querySelectorAll("#primary")[0].addEventListener("keydown", function (event) {
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
    };

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
    const target = document.getElementById('contents');
    const observer = new MutationObserver(records => {
        tabIndex();
    });

    observer.observe(target, {
        childList: true
    })


//フォーマット&ブックマークレット化したやつ
javascript: (() => {
    var newStyle=document.createElement("style");newStyle.type="text/css";newStyle.innerText="a:focus{outline: none; border-style: solid; border-width: 7px; border-color: #E71D36;}";document.getElementsByTagName("HEAD").item(0).appendChild(newStyle);document.getElementById("chips-wrapper").style.display="none";tabIndex();gridUx();var unnecessaryContents=document.querySelectorAll("ytd-rich-section-renderer");unnecessaryContents&&unnecessaryContents.forEach(function(a){a.style.display="none"});document.querySelector("#contents").querySelector("#thumbnail").focus();
function gridUx(){if(!document.querySelectorAll("#primary")[0].classList.contains("eventListenerAdded")){document.querySelectorAll("#primary")[0].classList.add("eventListenerAdded");var a=0;document.querySelectorAll("#primary")[0].addEventListener("keydown",function(b){var d=document.querySelectorAll("#primary")[0].firstElementChild.getAttribute("style").split(":")[1].slice(0,1),c=document.querySelectorAll(".yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail");c=Array.from(c);thumbnails=c.filter(function(e){return e.closest("ytd-rich-item-renderer.style-scope.ytd-rich-grid-renderer")});
c=thumbnails.find(function(e){return e===document.activeElement});c=thumbnails.indexOf(c);"w"===b.key?thumbnails[parseInt(a)-parseInt(d)]&&(a=parseInt(c)-parseInt(d),thumbnails[a].focus()):"s"===b.key?thumbnails[parseInt(a)+parseInt(d)]&&(a=parseInt(c)+parseInt(d),thumbnails[a].focus()):"a"===b.key?thumbnails[parseInt(a)-1]&&(a=parseInt(c)-1,thumbnails[a].focus()):"d"===b.key&&thumbnails[parseInt(a)+1]&&(a=parseInt(c)+1,thumbnails[a].focus())},!0)}}
function tabIndex(){var a=document.querySelectorAll(".yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail");a=Array.from(a);thumbnails=a.filter(function(b){return b.closest("ytd-rich-item-renderer.style-scope.ytd-rich-grid-renderer")});thumbnails.forEach(function(b){"1"!==b.getAttribute("tabindex")&&(b.setAttribute("tabindex","1"),b.addEventListener("focus",function(){document.activeElement.scrollIntoView({behavior:"instant",block:"center"})}))})}
var target=document.getElementById("contents"),observer=new MutationObserver(function(a){tabIndex()});observer.observe(target,{childList:!0});
})()
