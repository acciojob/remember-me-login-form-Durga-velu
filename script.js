//your JS code here. If required.

let btn=document.getElementById("submit")
let username=document.getElementById("username")
let password=document.getElementById("password")
let checkbox=document.getElementById("checkbox")
let login=document.getElementById("existing")


if (localStorage.getItem("userData")) {
    login.style.display = "flex";
}

btn.addEventListener(("click"),(e)=>{
e.preventDefault()
	let storeData=JSON.parse(localStorage.getItem("userData")) || []
	let userInfo={username:username.value, password:password.value}
	
	
	alert(`Logged in as ${username.value}`)
		username.innerHTML=""
	password.innerHTML=""
	if(checkbox.checked){

		storeData.push(userInfo)
		localStorage.setItem("userData", JSON.stringify(storeData))
		login.style.display="flex"
		checkbox.checked=""
	
	}else{
		localStorage.clear()
	}

})

login.addEventListener(("click"),()=>{
	    let storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.length > 0) {
        alert(`Logged in as saved ${storedData[storedData.length - 1].username}`);
    }
})





