
let darkmoodbut = document.getElementById('darkmoodbut')
let logohead = document.getElementById('logohead')
let flyin = document.getElementById('flyin')
let flyout = document.getElementById('flyout')
let train = document.getElementById('train')
let hotel = document.getElementById('hotel')
let toor = document.getElementById('toor')
let house = document.getElementById('house')
let searchbox = document.querySelector('.searchbox')
let flyinsearch = document.getElementById('flyinsearch')
let hotelsearch = document.getElementById('hotelsearch')
let searchit = document.getElementById('searchit')
let tiketgo = document.getElementById('tiketgo')
let tiketback = document.getElementById('tiketback')
let dropdownsearch = document.getElementById('dropdownsearch')
let buttons = document.querySelectorAll('.dropdownbut')
let searchbox1 = 0
let searchbox2 = 0
let whichsecelted = 1
let originform1
let destinationform1

let daygoo
let daybackk
let dayintgo
let dayintback


let i = 0
let i2 = 0
let body = document.getElementById('body')
let commendiran = ['تهران','مشهد','کیش','اصفهان','کیش','قشم']
let commendiutside = ['استانبول','تهران','آنکارا','دوبی','ابوظبی','لندن']
let commendtrain = ['تهران','مشهد','رشت','ساری','شیرگاه','اهواز']
let monthfaesi = ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','ابان','اذر','دی','بهمن','اسفند']
let btnright = document.getElementById('btnright');
let btnleft = document.getElementById('btnleft');
let imgour = document.getElementById('imgour');
let SIforCOM = document.getElementById('searchinput2')
let imgs = [
    "img/stanbul.jpg", "img/tehran.jpg", "img/esphan2.jpg", "img/stanbul.jpg",
    "img/barca.jpg", "img/ibiza.jpg", "img/madrid.jpg",
    "img/paris.jpg", "img/russia.jpg","img/stanbul1.jpg","img/stanbul2.jpg",
    "img/torento.jpg","img/madrid2.jpg","img/spain4.jpg"
];


let darkthembutmain = document.getElementById('darkthembutmain')
let dropdowntimeboxgo = document.getElementById('dropdowntimeboxgo')
let dropdowntimeboxback = document.getElementById('dropdowntimeboxback')
let dropdowntime = document.getElementById('dropdowntime')
let divofdays = document.querySelectorAll('.calenderdays div')
let mountgo = document.getElementById('mountgo')
let mountback = document.getElementById('mountback')
let mountgobtn = document.getElementById('mountgobtn')
let mountbackbtn = document.getElementById('mountbackbtn')
let whichmonthgo = 1
let whichmonthback = 0
let fristchois = 0

let year 
let monthforgo = -2
let monthforback = -3
let dayforgo
let dayforback
let godaydiv
let backdaydiv

let numbergo = document.getElementById('goday')
let numberback = document.getElementById('backday')
let okeybut = document.getElementById('okeybut')
let menudivs = document.querySelectorAll('.menudiv')
let boxrecomend = document.querySelectorAll('.boxrecomend')
let extramatn = document.querySelectorAll('.extramatn')


let justgo = document.getElementById('justgo')
let goandback = document.getElementById('goandback')
let imybtn5 = 0
let noacsses = document.querySelector(".noacsses")
let goandbackis = false

flyin.classList.add('bordermenu');
menudivs.forEach(div =>{
    div.addEventListener('click',function(){
        menudivs.forEach(d => d.classList.remove('bordermenu'));
        div.classList.add('bordermenu')
    })
})

darkmoodbut.addEventListener('click',function(){
    if (i % 2 == 0){
        Alldark()
        i += 1
    }else{
        AllDay()
        i -= 1
    }
    
})

searchbox.addEventListener('click',function(){
    if (i2 % 2 == 0){
        searchbox.style.width = '950px'
        i2 += 1
    }else{
        searchbox.style.width = '60%'
        i2 -= 1
    }
})
searchbox.addEventListener('input',function(){
    if (searchit.value != ''){
        searchbox.style.width = '950px'
        i2 += 1
    }else{
        searchbox.style.width = '60%'
        i2 -= 1
    }
})
toor.addEventListener('click',function(){
    flyinsearch.style.display = 'none'
    hotelsearch.style.display = 'block'
    searchit.placeholder = 'شهر و یا منطقه ی مورد نظر '
    whichsecelted = toor
    searchbox.style.width = '60%'
    i2 = 0
    searchhelper.style.display = 'none'
    searchit.value = ''
    SIforCOM.value = ''
})
hotel.addEventListener('click',function(){
    flyinsearch.style.display = 'none'
    hotelsearch.style.display = 'block'
    searchit.placeholder = 'نام شهر یا هتل مورد نظر'
    searchbox.style.width = '60%'
    i2 = 0
    searchhelper.style.display = 'none'
    searchit.value = ''
    SIforCOM.value = ''
})
house.addEventListener('click',function(){
    flyinsearch.style.display = 'none'
    hotelsearch.style.display = 'block'
    searchit.placeholder = 'شهر و یا منطقه ی مورد نظر '
    whichsecelted = house
    searchbox.style.width = '60%'
    i2 = 0
    searchhelper.style.display = 'none'
    searchit.value = ''
    SIforCOM.value = ''
})

flyin.addEventListener('click',function(){
    flyinsearch.style.display = 'block'
    hotelsearch.style.display = 'none'
    ininfo.innerText = 'شهر مبدا'
    outinfo.innerText = 'شهر مقصد'
    whichsecelted = 1
    tiketgo.value = ''
    tiketback.value = ''
    SIforCOM.value = ''
    searchhelper.style.display = 'none'
    dropdowntimeboxgo.value = ''
    dropdowntimeboxback.value = ''
    searchit.value = ''
    dropdownsearch.style.display = 'none'
    buttons.forEach((button, index) => {
        if (index < commendiran.length) {
            button.innerHTML = commendiran[index];
        }
    });
})
flyout.addEventListener('click',function(){
    flyinsearch.style.display = 'block'
    hotelsearch.style.display = 'none'
    ininfo.innerText = 'شهر مبدا'
    outinfo.innerText = 'شهر مقصد'
    whichsecelted = 2
    tiketgo.value = ''
    SIforCOM.value = ''
    tiketback.value = ''
    searchit.value = ''
    searchhelper.style.display = 'none'
    dropdowntimeboxgo.value = ''
    dropdowntimeboxback.value = ''
    dropdownsearch.style.display = 'none'
    buttons.forEach((button , index) => {
        if (index < commendiutside.length){
            button.innerHTML = commendiutside[index]
        }
    })
})
train.addEventListener('click',function(){
    let ininfo = document.getElementById('ininfo')
    let outinfo = document.getElementById('outinfo')
    flyinsearch.style.display = 'block'
    hotelsearch.style.display = 'none'
    ininfo.innerText = 'شهر مبدا'
    outinfo.innerText = 'شهر مقصد'
    tiketgo.value = ''
    tiketback.value = ''
    SIforCOM.value = ''
    searchit.value = ''
    searchhelper.style.display = 'none'
    dropdowntimeboxgo.value = ''
    dropdowntimeboxback.value = ''
    whichsecelted = train
    dropdownsearch.style.display = 'none'
    iranTouristCities.forEach(cityiran => {
        let readyarry = document.createElement('div');
      readyarry.innerHTML = cityiran;
      readyarry.classList.add('col-md-12', "text-black", 'mt-1','text-small');
      dropdownsearchrow.appendChild(readyarry);

      readyarry.addEventListener('click', function() {
          let text = readyarry.innerText;
          setValueFunction(text); // مقدار مناسب را به مقدار مورد نظر تنظیم کنید
          dropdownsearch.style.display = 'none'; // مخفی کردن dropdown
      });
    });
})


justgo.addEventListener('click',function(){
    if(goandback.classList.contains("mybtn5active")){
        goandback.classList.remove("mybtn5active")
        justgo.classList.add("mybtn5active")
        noacsses.classList.add('noacsses')
        dropdowntimeboxback.disabled = true
        goandbackis = false

    }
})
goandback.addEventListener('click',function(){
    if(justgo.classList.contains("mybtn5active")){
        justgo.classList.remove("mybtn5active")
        goandback.classList.add("mybtn5active")
        dropdowntimeboxback.disabled = false
        noacsses.classList.remove('noacsses')
        goandbackis = true
    }
})

//اصلاح سیستم انتخاب مبدا و مقصد به کمک کال بک فانکشن
let dropdownsearchrow = document.getElementById('dropdownsearchrow');
let cityselectettiket = document.querySelectorAll('.cityselectettiket')
let iranTouristCities = ["تهران", "اصفهان", "شیراز", "مشهد", "تبریز", "کرمان", "اهواز", "رشت"];
function populateDropdown(setValueFunction,whicharrayselect) {
    if(whichsecelted == 1){
      whicharrayselect = iranTouristCities
    }else if(whichsecelted == 2){
      whicharrayselect = commendiutside
    }else {
        whicharrayselect = iranTouristCities
    }
  dropdownsearchrow.innerHTML = ''; // پاک کردن محتوای قبلی dropdown
  whicharrayselect.forEach(cityiran => {
      let readyarry = document.createElement('div');
      readyarry.innerHTML = cityiran;
      readyarry.classList.add('col-md-12', "text-black", 'mt-1','text-small','cursorp');
      dropdownsearchrow.appendChild(readyarry);

      readyarry.addEventListener('click', function() {
          let text = readyarry.innerText;
          setValueFunction(text);
          
           // مقدار مناسب را به مقدار مورد نظر تنظیم کنید
          dropdownsearch.style.display = 'none'; // مخفی کردن dropdown
      });
  });
}

tiketgo.addEventListener("click", function() {
    if (dropdownsearch.style.display === 'none') {
        dropdownsearch.style.display = 'block';
        populateDropdown(function(text) {
            // اگر مبدا برابر با مقصد باشد، هشدار نمایش بده
            if (text === tiketgo.value) {
                alert('مبدا و مقصد نمی‌تواند یکسان باشد!');
                tiketback.value = ''
            } else {
                tiketgo.value = text; // برای tiketback
                originform1 = text
            }
        }); 
    } else {
        dropdownsearch.style.display = 'none';
    }
});

tiketback.addEventListener("click", function() {
    if (dropdownsearch.style.display === 'none') {
        dropdownsearch.style.display = 'block';
        populateDropdown(function(text) {
            // اگر مبدا برابر با مقصد باشد، هشدار نمایش بده
            if (text === tiketgo.value) {
                alert('مبدا و مقصد نمی‌تواند یکسان باشد!');
                tiketback.value = ''
            } else {
                tiketback.value = text; // برای tiketback
                destinationform1 = text
            }
        }); 
    } else {
        dropdownsearch.style.display = 'none';
    }
});
//کمک کننده ی تایپ برای تیکت گو و تیکت بک
tiketgo.addEventListener('input',()=>{typehandler(tiketgo)})
tiketback.addEventListener('input',()=>{typehandler(tiketback)})

function typehandler(GoOrBack,whicharrayselect){
    dropdownsearchrow.innerHTML = ''
    if(whichsecelted == 1){
        whicharrayselect = iranTouristCities
      }else if(whichsecelted == 2){
        whicharrayselect = commendiutside
      }else {
          whicharrayselect = iranTouristCities
      }
    if (GoOrBack.value != ''){
      dropdownsearch.style.display = 'block'
      whicharrayselect.forEach(city => {
            if (city.startsWith(GoOrBack.value)) {
                let cityisok = document.createElement("div")
                cityisok.classList.add('col-md-12', "text-black", 'mt-1','text-small')
                cityisok.innerHTML= city
                dropdownsearchrow.appendChild(cityisok)
                cityisok.addEventListener('click',()=>{
                    GoOrBack.value = city
                    
                })
            }
        });
    }else{
        dropdownsearch.style.display = 'none'
        tiketgo.innerHTML = ''
    }
}


buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        // بررسی شرایط در زمان کلیک
        if (searchbox1 == 1) {
            tiketgo.value = event.target.innerText;
        } else if (searchbox2 == 1) {
            tiketback.value = event.target.innerText;
        }
    });
});

dropdowntimeboxgo.addEventListener('click' , function(){
    if(dropdowntime.style.display == 'none'){
        dropdowntime.style.display = 'block'
    }else{
        dropdowntime.style.display = 'none'
    }
})
dropdowntimeboxback.addEventListener('click' , function(){
    if(goandbackis == true){
        if(dropdowntime.style.display == 'none'){
            dropdowntime.style.display = 'block'
        }else{
            dropdowntime.style.display = 'none'
        }
    }else{
        dropdowntime.style.display = 'none'
    }
})

divofdays.forEach(div => {
    if(div.innerText == ''){
        div.classList.add('calenderdaysnone')
        // div.style.border = '0'
    }
    const parentElement = div.parentElement; // والد عنصر div
    div.addEventListener('click',function(event){
        if(goandbackis == false){
            fristchois = 1
            divofdays.forEach(div => {
                div.removeAttribute('id'); // حذف id از همه divها
                dropdowntimeboxgo.value = ""
                dropdowntimeboxback.value = ""
            });
        }else{
            fristchois += 1
        }
        let month = 0
        // انتخاب چندم است. اگر انتخاب اوله میره سراغ داستان های تاریخ رفت اگر دوم بود برگشت سوم بود همه چیو حذف میکنه میره انتخاب رو صفر میکنه.
        if(fristchois === 1){
            div.id = 'goday'
            if (parentElement.classList.contains('daysmgo')) {
                year = '1403/'
                monthforgo = whichmonthback + 1
                dropdowntimeboxgo.value = year + monthforgo + '/' +div.innerHTML
                godaydiv = document.getElementById('goday')
            } else {
                year = '1403/'
                monthforgo = whichmonthgo + 1
                dropdowntimeboxgo.value = year + monthforgo + '/' +div.innerHTML
                godaydiv = document.getElementById('goday')
            }
        }else if(fristchois === 2){
            fristchois += 1
            div.id = 'backday'
            if (parentElement.classList.contains('daysmgo')) {
                year = '1403/'
                monthforback = whichmonthback + 1
                dropdowntimeboxback.value = year + monthforback + '/' +div.innerHTML
                backdaydiv = document.getElementById('backday')
            } else {
                year = '1403/'
                monthforback = whichmonthgo + 1
                dropdowntimeboxback.value = year + monthforback + '/' +div.innerHTML
                backdaydiv = document.getElementById('backday')
            }
        }else if(fristchois >= 3){
            divofdays.forEach(div => {
                div.removeAttribute('id'); // حذف id از همه divها
                dropdowntimeboxgo.value = ""
                dropdowntimeboxback.value = ""
            });
            fristchois = 0            
        }
        daygoo =   document.getElementById('goday')
        daybackk = document.getElementById('backday')
        dayintgo = parseInt(daygoo.innerText)
        dayintback = parseInt(daybackk.innerText)
        let parentgo = daygoo.parentElement
        let parentback = daybackk.parentElement
        console.log(parseInt(daygoo.innerText),parseInt(daybackk.innerText))
        dayintgo = parseInt(daygoo.innerText)
        dayintback = parseInt(daybackk.innerText)
        if(parentgo.classList.contains('daysmgo') && parentback.classList.contains('daysmgo')){
            if(parseInt(daygoo.innerText) > parseInt(daybackk.innerText)){
                alert('روز برگشت جلوتر از روز رفت باشد')
                dropdowntimeboxback.value = ''
                daybackk.removeAttribute('id')
                fristchois = 1
            }
        }
        let deletdaysgoback = document.getElementById('deletdaysgoback')
        deletdaysgoback.addEventListener('click',function(){
            dropdowntimeboxgo.value = '';
            dropdowntimeboxback.value = '';
           daybackk.removeAttribute('id')
           daygoo.removeAttribute('id')
           fristchois = 0

    
    })
        
    })
    
})


monthfaesi.forEach((month , index) => {
    mountback.innerText = monthfaesi[0]
    mountgo.innerText = monthfaesi[1]
})
mountgobtn.addEventListener('click',()=>{
    divofdays.forEach(div => {
        div.removeAttribute('id'); // حذف id از همه divها
        dropdowntimeboxgo.value = ""
        dropdowntimeboxback.value = ""
    });
        if (whichmonthgo === 11){
        mountgo.innerText = monthfaesi[11]
        mountback.innerText = monthfaesi[10]
    }else{
        whichmonthgo +=1
        whichmonthback +=1
        mountgo.innerText = monthfaesi[whichmonthgo]
        mountback.innerText = monthfaesi[whichmonthback]
    }
    
})
mountbackbtn.addEventListener('click',()=>{
    divofdays.forEach(div => {
        div.removeAttribute('id'); // حذف id از همه divها
        dropdowntimeboxgo.value = ""
        dropdowntimeboxback.value = ""
    });
    if (whichmonthback === 0){
        whichmonthback = 0
        mountgo.innerText = monthfaesi[1]
        mountback.innerText = monthfaesi[0]
    }else{
        whichmonthgo -=1
        whichmonthback -=1
        mountgo.innerText = monthfaesi[whichmonthgo]
        mountback.innerText = monthfaesi[whichmonthback]
    }
})

okeybut.addEventListener('click',function(){
    dropdowntime.style.display = 'none'
    dayintgo = parseInt(daygoo.innerText)
    dayintback = parseInt(daybackk.innerText)
})

boxrecomend.forEach(boxrecomend1 => {
    let i3 = 0; // i3 برای هر عنصر به‌طور محلی تعریف شده
    boxrecomend1.addEventListener('click', () => {
        const extramatn1 = boxrecomend1.querySelector('.extramatn'); // فرض می‌کنم که extramatn یک کلاس درون boxrecomend1 است
        if (i3 % 2 === 0) {
            extramatn1.style.display = 'block'; // فقط extramatn مربوط به این boxrecomend نمایش داده می‌شود
            boxrecomend1.style.height = '150px';
        } else {
            extramatn1.style.display = 'none'; // فقط extramatn مربوط به این boxrecomend مخفی می‌شود
            boxrecomend1.style.height = '50px';
        }
        i3 += 1;
    });
});

let previousIndex = -1;  // برای جلوگیری از تکرار تصویر قبلی

function changeImage() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * imgs.length);
    } while (randomIndex === previousIndex);  // بررسی تکرار تصویر

    previousIndex = randomIndex;  // ذخیره اندیس تصویر فعلی
    imgour.src = imgs[randomIndex];  // تغییر تصویر
}

// افزودن رویداد به دکمه‌ها
btnright.addEventListener('click', changeImage);
btnleft.addEventListener('click', changeImage);





let touristCities = [
    "تهران", "اصفهان", "شیراز", "کیش", "تبریز", "پاریس", 
    "نیویورک", "لندن", "بارسلونا", "رم", "توکیو", "استانبول", 
    "دبی", "پراگ", "ونیز", "بانکوک", "سیدنی", "قاهره", 
    "لس آنجلس", "وین", "آتن", "بروکسل", "میلان", "مسکو", 
    "لینز", "کپنهاگ", "اوستند", "سنت پترزبورگ", "کاراکاس", 
    "ریودوژانیرو", "سانتیاگو", "بوئنوس آیرس", "کوالالامپور", 
    "سنگاپور", "بالی", "نیکوزیا", "آتن", "صنعا", 
    "بغداد", "دمشق", "عمان", "دوحه", 
    "باکو", "تاشکند", "دوشنبه", "باکو", "کابل", 
    "هند", "مالاگا", "دورتموند", "نورنبرگ", "برلین", 
    "تایلند", "هلسینکی", "واشنگتن", "آسیا", "مادرید", 
    "جزیره موریس", "بندرعباس", "مشهد", "کرمانشاه", "یزد", 
    "زاهدان", "نیشابور", "ساری", "رشت", "گرگان"
];

let okarray = []

let searchhelper =document.getElementById('searchhelper')
searchit.addEventListener('input',function(){
    searchhelper.innerHTML = ''
    if (searchit.value != ''){
        searchhelper.style.display = 'block'
        touristCities.forEach(city => {
            if (city.startsWith(searchit.value)) {
                okarray.push(city)
                let cityisok = document.createElement("div")
                cityisok.innerHTML= city
                searchhelper.appendChild(cityisok)
                cityisok.addEventListener('click',()=>{
                    searchit.value = city
                    
                })
            }
        });
    }else{
        searchhelper.style.display = 'none'
        searchhelper.innerHTML = ''
    }
        
    
})
//............................رفتن به فایل تیکت


window.addEventListener('beforeunload', function (event) {
    tiketgo.value = ''
    SIforCOM.value = ''
    tiketback.value = ''
    searchit.value = ''
    searchhelper.style.display = 'none'
    dropdowntimeboxgo.value = ''
    dropdowntimeboxback.value = ''
    dropdownsearch.style.display = 'none'
    dropdowntimeboxgo.value = '';
    dropdowntimeboxback.value = '';
    daybackk.removeAttribute('id')
    daygoo.removeAttribute('id')
    fristchois = 0
    searchbox1 = 0
    searchbox2 = 0

    whichsecelted = 1
    i = 0
    i2 = 0
    whichmonthgo = 1
    whichmonthback = 0
    fristchois = 0
});

let searchcomplate = document.getElementById('searchcomplate')
let sendsthings = []


// دکمه ی رفت یا رفتو برگشت



searchcomplate.addEventListener('click',function(){
    console.log(originform1,destinationform1,dayintgo,dayintback,'hello')
    if (originform1 === undefined) {
        originform1 = 'none';
    }
    
    if (destinationform1 === undefined) {
        destinationform1 = 'none';
    }
    
    if (dayintgo === undefined) {
        dayintgo = 'none';
    }
    
    if (dayintback === undefined) {
        dayintback = 'none';
    }
    if (monthforgo == -2) {
        monthforgo = 'none';
    }
    if (monthforback == -3) {
        monthforback = 'none';
    }
    console.log(originform1,destinationform1,dayintback,dayintgo)
    localStorage.setItem('dayintgo', dayintgo);
    localStorage.setItem('dayintback', dayintback);
    localStorage.setItem('originform1', originform1);
    localStorage.setItem('destinationform1', destinationform1);
    localStorage.setItem('month', monthforgo);
    localStorage.setItem('monthforback', monthforback);
    localStorage.setItem('goandback', goandbackis);

    
})


