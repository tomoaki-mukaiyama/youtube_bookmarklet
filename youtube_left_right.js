javascript:(()=>{
    
    document.getElementById('chips-wrapper').style.display = "none";
    
    tabIndex();
    
    gridUx();
    
    document.querySelector("#contents").querySelector("#thumbnail").focus();
    
    function gridUx() {
        const EVENT_LISTENER_ADDED = "eventListenerAdded";
        if(document.querySelectorAll("#primary")[0].classList.contains(EVENT_LISTENER_ADDED)){
            return;
        } else {
            document.querySelectorAll("#primary")[0].classList.add(EVENT_LISTENER_ADDED);
            
            var i = 0;
            
            document.querySelectorAll("#primary")[0].addEventListener("keydown", function(event) {
                if (event.key === "a") {
                    var thumbnails = document.querySelectorAll('.yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail');
                    thumbnails = Array.from(thumbnails);
                    var activeThumbnail = thumbnails.find( node => node === document.activeElement);
                    var currentIndex = thumbnails.indexOf(activeThumbnail);
                    if (thumbnails[parseInt(i) - 1]){
                        i = parseInt(currentIndex) - 1;
                        thumbnails[i].focus();
                        
                    };
                    
                } else if (event.key === "d") {
                    var thumbnails = document.querySelectorAll('.yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail');
                    thumbnails = Array.from(thumbnails);
                    var activeThumbnail = thumbnails.find( node => node === document.activeElement);
                    var currentIndex = thumbnails.indexOf(activeThumbnail);
                    if (thumbnails[parseInt(i) + 1]){
                        i = parseInt(currentIndex) + 1;
                        thumbnails[i].focus();
                        
                    };
                };
            }, true);
        }
    };
    
    
function tabIndex () {
if (document.querySelector("ytd-rich-section-renderer")){
    document.querySelector("ytd-rich-section-renderer").remove();
}
    
var thumbnails = document.querySelectorAll('.yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail');
thumbnails.forEach(thumbnail => {
    if (thumbnail.getAttribute("tabindex") === "1") {
        return;
    } else {
        thumbnail.setAttribute("tabindex","1");
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
    if (document.querySelector("ytd-rich-section-renderer")){
        document.querySelector("ytd-rich-section-renderer").remove();
    }
var thumbnails = document.querySelectorAll('.yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail');
thumbnails = Array.from(thumbnails);
var tagindexNotAdded = thumbnails.filter( node => node.getAttribute("tabindex") === "-1");
tagindexNotAdded = Array.from(tagindexNotAdded);
tagindexNotAdded.forEach( thumbnail => {
    thumbnail.setAttribute("tabindex","1");
    thumbnail.addEventListener('focus', () => {
        document.activeElement.scrollIntoView({
            behavior: "instant",
            block: "center"
        });
        });
    });
});


observer.observe(target, {
    childList: true
})

})()

