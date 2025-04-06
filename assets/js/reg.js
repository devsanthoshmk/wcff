const reg=document.getElementById("reg");
function toggleReg(event=null){
    if (event && event.target !== event.currentTarget) return;
    
    window.scrollTo(0,0);
    reg.classList.toggle("visible")
    reg.parentElement.classList.toggle("blurblackbg");
    document.documentElement.classList.toggle("overflow-hidden")
    if (reg.classList.contains('visible')) {
        history.pushState({},"","?internReg=true")
    } else {
        history.pushState({},"","/")
    }

}


function getEvent(){
    const params = new URLSearchParams(window.location.search);
      const value = params.get('internReg');
      console.log(value);
      const isCurrentlyVisible = reg.classList.contains('visible');
       if (value === "true" && !isCurrentlyVisible) {
        reg.classList.add("visible");
        reg.parentElement.classList.add("blurblackbg");
        document.documentElement.classList.add("overflow-hidden");
    } else if (value !== "true" && isCurrentlyVisible) {
        reg.classList.remove("visible");
        reg.parentElement.classList.remove("blurblackbg");
        document.documentElement.classList.remove("overflow-hidden");
    }
  }
  window.addEventListener('load', getEvent)
  window.addEventListener("popstate",getEvent)