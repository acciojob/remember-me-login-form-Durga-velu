//your JS code here. If required.

let btn=document.getElementById("submit")
let username=document.getElementById("username")
let password=document.getElementById("password")
let checkbox=document.getElementById("checkbox")
let login=document.getElementById("existing")
btn.addEventListener(("click"),(e)=>{

	let userInfo=[];
	   let storeData=JSON.parse(localStorage.getItem("userData"))
	userInfo.push({username:username.value, password:password.value})
	alert(`Logged in as ${username.value}`)
	if(checkbox.value){
		localStorage.setItem("userData", JSON.stringify(userInfo))
login.addEventListener(("click"),()=>{
	alert(`Logged in as saved ${username.value}`)
})
	
	}else{
		localStorage.clear()
	}
	
})





