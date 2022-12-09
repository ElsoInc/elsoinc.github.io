


function GenerOn(){
	
	let g = document.getElementById('gener');
	let gc = document.getElementById('gener_content');
	let ht = document.getElementsByTagName('html');
	//let b = document.getElementsByTagName("body");

	//ht.style.overflow = "hidden";
	g.style.display = 'flex';
	gc.style.transform = "translateY(0px)";
	g.style.opacity = "1";





}   


function GenerOff(){
	
        let g = document.getElementById('gener');
	let gc = document.getElementById('gener_content');
	
	g.style.opacity = "0";
	gc.style.transform = "translateY(-1000px)"; 
	setTimeout(function(){ g.style.display = 'none';}, 300);
	
}



function PasswordCreate(){
	let password = ""; //= document.getElementById('g_password').value;
	var chars = "" //"0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let length = document.getElementById('passwordLength').value;
	
	let number = document.getElementById('checkbox_number').checked;
	let letter = document.getElementById('checkbox_letters').checked;
	let special = document.getElementById('checkbox_special').checked;
	
	
	
	if (number == true) chars += "0123456789";
	if (letter == true) chars += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	if (special == true) chars += "!@#$%^&*()_-+=\|/.,:;[]{}";
	
	for (var i = 0; i < length; i++) {
		var randomNumber = Math.floor(Math.random() * chars.length);
		password += chars.substring(randomNumber, randomNumber +1);
    }
  
    document.getElementById("g_password").value = password;
	
	
}


function PasswordCheck(){
	
	let password = document.getElementById('p_password').value; // Получаем пароль из формы
    let letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Буквы в нижнем регистре // Буквы в верхнем регистре
    let number = "0123456789"; // Цифры
    let special = "!@#$%^&*()_-+=\|/.,:;[]{}"; // Спецсимволы
    let is_l = false; // Есть ли в пароле буквы в нижнем регистре
    let is_d = false; // Есть ли в пароле цифры
    let is_sp = false; // Есть ли в пароле спецсимволы
    for (let i = 0; i < password.length; i++) {
      /* Проверяем каждый символ пароля на принадлежность к тому или иному типу */
      if (!is_l && letter.indexOf(password[i]) != -1) is_l = true;
      else if (!is_d && number.indexOf(password[i]) != -1) is_d = true;
      else if (!is_sp && special.indexOf(password[i]) != -1) is_sp = true;
    }
    let rating = 0;
    let proc = "hey";
	let txt = "low";
    if (is_l) rating++; 
    if (is_d) rating++; // Если в пароле есть цифры, то увеличиваем рейтинг сложности
    if (is_sp) rating++; // Если в пароле есть спецсимволы, то увеличиваем рейтинг сложности
    /* Далее идёт анализ длины пароля и полученного рейтинга, и на основании этого готовится текстовое описание сложности пароля */
    if (password.length < 6 && rating < 3) {
	proc = "10%"; txt = "Low";
	}
    else if (password.length < 6 && rating >= 3) {
	proc = "50%"; 
	txt = "Medium"; 
	}
	
    else if (password.length >= 8 && rating < 3) {
		proc = "50%"; 
		txt = "Medium";
	}
    else if (password.length >= 8 && rating >= 3) { 
	proc = "99%"; 
	txt = "High";
	}
    else if (password.length >= 6 && rating == 1){
	proc = "10%"; 
	txt = "Low";
	}
    else if (password.length >= 6 && rating > 1 && rating < 4) {
	proc = "50%"; 
	txt = "Medium";
	}
    else if (password.length >= 6 && rating == 4){
	proc = "99%"; 
	txt = "High";
	}
	
	document.getElementById('passwordLenth').innerHTML = password.length;
	document.getElementById('passwordRating').innerHTML = rating;
	document.getElementById('passwordProcent').innerHTML = proc;
    document.getElementById('passwordO').innerHTML = txt; 
	
}