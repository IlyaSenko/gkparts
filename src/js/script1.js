
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) {
    return parts.pop().split(";").shift();
  }
}
var delete_cookie = function(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
var img = document.getElementById('logoPic');
if(getCookie('lang') === undefined || getCookie('lang') === 'en') {
	img.src="../images/logo.png"
} else {
	img.src="../images/logo-eng.png"
	img.style.height = "115px";
}
var enButton = document.getElementById('en');
var uaButton = document.getElementById('ua');
console.log(enButton)
enButton.addEventListener('click', () => {
  document.cookie = "lang=ua; path=/; expires: Fri, 31 Dec 9999 23:59:59 GMT";
	location.href = location.href.substr(0,location.href.length - 2) + 'en'
})

uaButton.addEventListener('click', () => {
  document.cookie = "lang=en; path=/; expires: Fri, 31 Dec 9999 23:59:59 GMT";
	location.href = location.href.substr(0,location.href.length - 2) + 'ua'
})
/* enButton.childNodes[0].setAttribute('href', `en`)
uaButton.childNodes[0].setAttribute('href', `ua`) */
console.log(location.href)

/* if(location.href.includes('/en') && (getCookie('lang') === 'en' || getCookie('lang') === undefined)) {
	delete_cookie('lang')
  document.cookie = "lang=ua; expires: Fri, 31 Dec 9999 23:59:59 GMT";
	location.reload();
	console.log(1)
} else if(location.href.includes('/ua') && getCookie('lang') === 'ua') {
	delete_cookie('lang')
  document.cookie = "lang=en; expires: Fri, 31 Dec 9999 23:59:59 GMT";
	location.reload();
	console.log(2)
}
if((location.href.includes('/en') || location.href.includes('/ua')) && getCookie('lang') === undefined) {
	delete_cookie('lang')
  document.cookie = "lang=en; expires: Fri, 31 Dec 9999 23:59:59 GMT";
	console.log(3)
} */
if(!location.href.includes('/en') && !location.href.includes('/ua')) {
	if(getCookie('lang') === undefined || getCookie('lang') === 'en') {
    if(window.location.pathname === '/') {
	    location.href += 'ua'
    } else {
	    location.href += '/ua'
    }
		console.log(4)
	} else if(getCookie('lang') === 'ua') {
    if(window.location.pathname === '/') {
	    location.href += 'en'
    } else {
	    location.href += '/en'
    }
		console.log(5)
	}
}
