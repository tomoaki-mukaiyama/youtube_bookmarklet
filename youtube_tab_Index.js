javascript: (() => {
    
    var newStyle = document.createElement('style');
    newStyle.type = 'text/css';
    newStyle.innerText = 'a:focus{outline: none; border-style: solid; border-width: 10px; border-color: #E71D36;}';
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

})()