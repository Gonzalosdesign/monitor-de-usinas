let logOut = document.getElementById("logOut");
logOut.addEventListener("click", (e)=>{
    localStorage.clear();
    location.reload();
})