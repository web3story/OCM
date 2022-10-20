
document.querySelectorAll(".card").forEach(c=>{
    c.addEventListener("click",(e)=>{
        document.getElementById("modal-window").classList.remove("hidden");
        // get the content into the div
        const content = e.currentTarget.querySelector(".card-content").innerHTML;
        document.getElementById("modal-content").innerHTML = content;
        // get the title into the div
        const title = e.currentTarget.querySelector(".card-title").innerHTML;
        document.getElementById("modal-title").innerHTML = title;

    })
})

document.getElementById("modal-close").addEventListener("click",(e)=>{
    document.getElementById("modal-window").classList.add("hidden");

    // document.querySelectorAll('iframe').each(function(){
    //     this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
    //   });
})
