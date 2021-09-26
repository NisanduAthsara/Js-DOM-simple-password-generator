document.getElementById("form").addEventListener("click",
	function(event){
		event.preventDefault();
	}
)

let user_name;
let user_b_year;
let user_age;
let pwd_let = ["kNjhD","QQwji","PliJM","FbHHt","XzXzb","KoOOl","HiBYi"];
let pwd_num = [345,876,897,231,456,909,401];
let pwd_display = document.querySelector(".pwd");
let pwd_txt = document.querySelector(".pwd-txt");
let i = 0;
let user_final_name;
let final_pwd;
let copy_btn = document.querySelector(".copy_pwd");
let reset_btn = document.querySelector(".reset-btn");

document.querySelector(".submit-btn").addEventListener("click",
	function(){
		pwd_display.style.display = "block";
		user_name = document.querySelector("#name").value;
		user_b_year = document.querySelector("#birth_year").value;
		user_age = document.querySelector("#age").value;
		user_final_name = user_name.toLowerCase();

		if(i >= pwd_let.length){
			alert("Your chances are almost gone");
			location.reload();
		}

		else{
			pwd_txt.innerHTML = "Your Password : <span>"+user_final_name+pwd_let[i]+user_b_year+pwd_num[i]+user_age+"</span>";
			i++;
			final_pwd = user_final_name+pwd_let[i]+user_b_year+pwd_num[i]+user_age;
		}
	}
)

document.querySelector(".new_pwd").addEventListener("click",
	function(){
		if(i >= pwd_let.length){
			alert("Your chances are almost gone");
			location.reload();
		}

		else{
			pwd_txt.innerHTML = "Your Password : <span>"+user_final_name+pwd_let[i]+user_b_year+pwd_num[i]+user_age+"</span>";
			i++;
			final_pwd = user_final_name+pwd_let[i]+user_b_year+pwd_num[i]+user_age;
		}
	}
)

copy_btn.addEventListener("click",
	function(){
		navigator.clipboard.writeText(final_pwd);
		alert("Password is copied to clipboard!");
	}
)

reset_btn.addEventListener("click",
	function(){
		location.reload();
	}
)