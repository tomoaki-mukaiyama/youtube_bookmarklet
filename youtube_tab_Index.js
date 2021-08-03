javascript: (() => {
    var newStyle = document.createElement('style');
    newStyle.type = 'text/css';
    newStyle.innerText = 'a:focus{outline: none; border-style: solid; border-width: 5px; border-color: #30A9DE; }';
    document.getElementsByTagName('HEAD').item(0).appendChild(newStyle);

    document.getElementById('chips-wrapper').style.display = "none";

    tabIndex();

    gridUx();

    if (document.querySelector("ytd-rich-section-renderer")) {
        document.querySelector("ytd-rich-section-renderer").remove();
    }

    document.querySelector("#contents").querySelector("#thumbnail").focus();

    function gridUx() {
        const EVENT_LISTENER_ADDED = "eventListenerAdded";
        if (document.querySelectorAll("#primary")[0].classList.contains(EVENT_LISTENER_ADDED)) {
            return;
        } else {
            document.querySelectorAll("#primary")[0].classList.add(EVENT_LISTENER_ADDED);

            var i = 0;

            document.querySelectorAll("#primary")[0].addEventListener("keydown", function (event) {
                if (event.key === "w") {
                    var num = document.querySelectorAll("#primary")[0].firstElementChild.getAttribute("style").split(":")[1].slice(0, 1);
                    var thumbnails = document.querySelectorAll('.yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail');
                    thumbnails = Array.from(thumbnails);
                    var activeThumbnail = thumbnails.find(node => node === document.activeElement);
                    var currentIndex = thumbnails.indexOf(activeThumbnail);
                    if (thumbnails[parseInt(i) - parseInt(num)]) {
                        i = parseInt(currentIndex) - parseInt(num);
                        thumbnails[i].focus();
                    };

                } else if (event.key === "s") {
                    var num = document.querySelectorAll("#primary")[0].firstElementChild.getAttribute("style").split(":")[1].slice(0, 1);
                    var thumbnails = document.querySelectorAll('.yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail');
                    thumbnails = Array.from(thumbnails);
                    var activeThumbnail = thumbnails.find(node => node === document.activeElement);
                    var currentIndex = thumbnails.indexOf(activeThumbnail);
                    if (thumbnails[parseInt(i) + parseInt(num)]) {
                        i = parseInt(currentIndex) + parseInt(num);
                        thumbnails[i].focus();

                    };

                } else if (event.key === "a") {
                    var thumbnails = document.querySelectorAll('.yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail');
                    thumbnails = Array.from(thumbnails);
                    var activeThumbnail = thumbnails.find(node => node === document.activeElement);
                    var currentIndex = thumbnails.indexOf(activeThumbnail);
                    if (thumbnails[parseInt(i) - 1]) {
                        i = parseInt(currentIndex) - 1;
                        thumbnails[i].focus();

                    };

                } else if (event.key === "d") {
                    var thumbnails = document.querySelectorAll('.yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail');
                    thumbnails = Array.from(thumbnails);
                    var activeThumbnail = thumbnails.find(node => node === document.activeElement);
                    var currentIndex = thumbnails.indexOf(activeThumbnail);
                    if (thumbnails[parseInt(i) + 1]) {
                        i = parseInt(currentIndex) + 1;
                        thumbnails[i].focus();

                    };
                };
            }, true);
        }
    };


    function tabIndex() {
        if (document.querySelector("ytd-rich-section-renderer")) {
            document.querySelector("ytd-rich-section-renderer").remove();
        }

        var thumbnails = document.querySelectorAll('.yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail');
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
                console.log("index追加できた");
            }
        });

    }

    const target = document.getElementById('contents');
    const observer = new MutationObserver(records => {
        console.log("------------------------------------");
        tabIndex();

    });


    observer.observe(target, {
        childList: true
    })

})()


