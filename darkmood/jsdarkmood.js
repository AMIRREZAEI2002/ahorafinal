let mybtn1 = document.querySelectorAll('.mybtn1')
let mybtn3 = document.querySelectorAll('.mybtn3')
let miniinfos = document.querySelectorAll(".miniinfo")
let miniinfos2 = document.querySelectorAll(".miniinfo2")
let searchinput1 = document.querySelectorAll(".searchinput1")
let searchinput2 = document.querySelectorAll(".searchinput2")
let searchinput3 = document.querySelectorAll(".searchinput3")
let dropdownsearchC = document.querySelectorAll('.dropdownsearch')
let dropdownbutC = document.querySelectorAll('.dropdownbut')
let dropdowntimeC = document.querySelectorAll('.dropdowntime')
let calenderdaysDivs = document.querySelectorAll('.calenderdays')



function darkmodefuncbody(){
    body.className = '';
    body.classList.add('bodydarkmood')
    logohead.src = "img/darkmoodlogo.png"
}
function daymodefuncbody(){
    body.className = '';
    body.classList.add('bodyday')
    logohead.src = "img/logomatn.png"
}
function darkmoodmuboot() {
    mybtn1.forEach(mybtn => {
        mybtn.classList.remove('mybtn1'); // حذف کلاس روز
        mybtn.classList.add('mybtn1dark'); // اضافه کردن کلاس شب
    });
    miniinfos.forEach(miniinfo => {
        miniinfo.classList.remove('miniinfo'); // حذف کلاس روز
        miniinfo.classList.add('miniinfodark'); // ا
    })
    miniinfos2.forEach(miniinfo => {
        miniinfo.classList.remove('miniinfo'); // حذف کلاس روز
        miniinfo.classList.add('miniinfo2dark'); // ا
    })
    searchinput1.forEach(miniinfo => {
        miniinfo.classList.remove('searchinput1'); // حذف کلاس روز
        miniinfo.classList.add('searchinput1dark'); // ا
    })
    searchinput2.forEach(miniinfo => {
        miniinfo.classList.remove('searchinput2'); // حذف کلاس روز
        miniinfo.classList.add('searchinput2dark'); // ا
    })
    searchinput3.forEach(miniinfo => {
        miniinfo.classList.remove('searchinput3'); // حذف کلاس روز
        miniinfo.classList.add('searchinput3dark'); // ا
    })
    mybtn3.forEach(miniinfo => {
        miniinfo.classList.remove('mybtn3'); // حذف کلاس روز
        miniinfo.classList.add('mybtn3dark'); // ا
    })
    dropdownsearchC.forEach(miniinfo => {
        miniinfo.classList.remove('dropdownsearch'); // حذف کلاس روز
        miniinfo.classList.add('dropdownsearchdark'); // ا
    })
    dropdownbutC.forEach(miniinfo => {
        miniinfo.classList.remove('dropdownbut'); // حذف کلاس روز
        miniinfo.classList.add('dropdownbutdark'); // ا
    })
    dropdowntimeC.forEach(miniinfo => {
        miniinfo.classList.remove('dropdowntime'); // حذف کلاس روز
        miniinfo.classList.add('dropdowntimedark'); // ا
    })
    
}

 
function daymoodmuboot() {
    mybtn1.forEach(mybtn => {
        mybtn.classList.remove('mybtn1dark'); // حذف کلاس شب
        mybtn.classList.add('mybtn1'); // اضافه کردن کلاس روز
    });
    miniinfos.forEach(miniinfo => {
        miniinfo.classList.remove('miniinfodark'); // حذف کلاس شب
        miniinfo.classList.add('miniinfo'); // اضافه کردن کلاس روز
    });
    miniinfos2.forEach(miniinfo => {
        miniinfo.classList.remove('miniinfo2dark'); // حذف کلاس شب
        miniinfo.classList.add('miniinfo'); // اضافه کردن کلاس روز
    });
    searchinput1.forEach(miniinfo => {
        miniinfo.classList.remove('searchinput1dark'); // حذف کلاس شب
        miniinfo.classList.add('searchinput1'); // اضافه کردن کلاس روز
    });
    searchinput2.forEach(miniinfo => {
        miniinfo.classList.remove('searchinput2dark'); // حذف کلاس شب
        miniinfo.classList.add('searchinput2'); // اضافه کردن کلاس روز
    });
    searchinput3.forEach(miniinfo => {
        miniinfo.classList.remove('searchinput3dark'); // حذف کلاس شب
        miniinfo.classList.add('searchinput3'); // اضافه کردن کلاس روز
    });
    mybtn3.forEach(miniinfo => {
        miniinfo.classList.remove('mybtn3dark'); // حذف کلاس روز
        miniinfo.classList.add('mybtn3'); // ا
    })
    dropdownsearchC.forEach(miniinfo => {
        miniinfo.classList.remove('dropdownsearchdark'); // حذف کلاس روز
        miniinfo.classList.add('dropdownsearch'); // ا
    })
    dropdownbutC.forEach(miniinfo => {
        miniinfo.classList.remove('dropdownbutdark'); // حذف کلاس روز
        miniinfo.classList.add('dropdownbut'); // ا
    })
    dropdowntimeC.forEach(miniinfo => {
        miniinfo.classList.remove('dropdowntimedark'); // حذف کلاس روز
        miniinfo.classList.add('dropdowntime'); // ا
    })
}


let boxforiconday = document.getElementById('boxforiconday')
let icon = document.querySelectorAll('#boxforiconday i');


darkthembutmain.addEventListener('click', function() {
// بررسی اگر حالت فعلی dark است، آن را به day برگردانیم
if (darkthembutmain.classList.contains('mybtndarkthemedark')) {
darkthembutmain.classList.remove('mybtndarkthemedark');
darkthembutmain.classList.add('mybtndarkthemeday');
boxforiconday.classList.remove('boxforicondark');
boxforiconday.classList.add('boxforiconday');
icon[1].style.display = 'none'; // مخفی کردن آیکون دوم (شب)
icon[0].style.display = 'inline'; // نمایش آیکون اول (روز)
} else {
// برعکس اگر در حالت day است، به dark تغییر کند
darkthembutmain.classList.remove('mybtndarkthemeday');
darkthembutmain.classList.add('mybtndarkthemedark');
boxforiconday.classList.remove('boxforiconday');
boxforiconday.classList.add('boxforicondark');
icon[0].style.display = 'none'; // مخفی کردن آیکون اول (روز)
icon[1].style.display = 'inline'; // نمایش آیکون دوم (شب)
}
});