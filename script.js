//your JS code here. If required.

let submit=document.getElementById("submit")
let username=document.getElementById("username")
let password=document.getElementById("password")
let checkbox=document.getElementById("checkbox")
let login=document.getElementById("existing")



submit.addEventListener(("click"),(e)=>{
e.preventDefault()
	let storeData=JSON.parse(localStorage.getItem("userData")) || []
	let userInfo={username:username.value, password:password.value}
	
	
	alert(`Logged in as ${username.value}`)

	if(checkbox.checked){

		storeData.push(userInfo)
		localStorage.setItem("userData", JSON.stringify(storeData))
		login.style.display="flex"
		checkbox.checked=""
	
	}else{
		localStorage.removeItem("userData");
	}

})

login.addEventListener(("click"),()=>{
	    let storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.length > 0) {
        alert(`Logged in as saved ${storedData[storedData.length - 1].username}`);
    }
})





