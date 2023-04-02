const html = [
        {
            question: "p align=” center”. Ushbu koddagi 'align' nima?",
            answers: [ "Teg","Element","Atribut","Data"],
            correctAnswer: 2
        },
        {
            question: "Quyidagilardan qaysi biiri formatlash tegi emas?",
            answers: [ "span","strong","mark","i"],
            correctAnswer: 0
        },
        {
            question: "HTMLda ishlatiladigan belgilovchi setni tasdiqlash uchun, qaysi kod ishlatiladi?",
            answers: [ "meta charset='UTF-8'","meta http-equiv='X-UA-Compatible' content='IE=edge'","meta name='viewport' content='width=device-width, initial-scale=1.0'","meta name='description' content='description'"],
            correctAnswer: 0
        },
        {
            question: "link, meta, style va hokazo kabi bosh teglar qaysi teg ichida joylashishi kerak?",
            answers: [ "body","div","section","head"],
            correctAnswer: 3
        },
        {
            question: "video ustiga rasm qo'yish uchun qaysi atributdan foydalanamiz?",
            answers: [ "placeholder","poster","exportports","controls"],
            correctAnswer: 1
        },
        {
            question: "inputga malumot kiritib bo'lmaydigan qilish uchun qaysi atributdan foydalanamiz?",
            answers: [ "disabled","required","default","type"],
            correctAnswer: 0
        },
        {
            question: "input faqat link kiritilishi uchun hizmat qilsa unda input turi qanday bo'ladi?",
            answers: [ "url","file","link","text"],
            correctAnswer: 0
        },
        {
            question: "Qaysi teg yordamida tartibsiz ro'yhat yaratishimiz mumkin?",
            answers: [ "ol","ul","dl","dt"],
            correctAnswer: 1
        },
        {
            question: "select ichiga malumotni qaysi teg orqali qo'shamiz?",
            answers: [ "input","option","data","li"],
            correctAnswer: 1
        },
        {
            question: "select ichiga malumotni guruhlashda qaysi tegdan foydalanamiz?",
            answers: [ "optgroup","option","group","opt"],
            correctAnswer: 0
        },
        {
            question: "Qaysi teg yordamida tartibli ro'yhat yaratishimiz mumkin?",
            answers: [ "ol","ul","dl","dt"],
            correctAnswer: 0
        },
        {
            question: "Jadvalda qator qaysi teg yordamida chiqariladi?",
            answers: [ "td","th","tr","dt"],
            correctAnswer: 2
        },
        {
            question: "Jadvalda bosh qator yacheykalari qaysi teg yordamida yaratiladi?",
            answers: [ "td","th","tr","dt"],
            correctAnswer: 1
        },
        {
            question: "HTMLda sarlavhalar qaysi teg bilan beriladi?",
            answers: [ "h1-h6","p","span","div"],
            correctAnswer: 0
        },
        {
            question: "HTMLda matn va paragraflar qaysi teg bilan beriladi?",
            answers: [ "h1-h6","p","span","div"],
            correctAnswer: 1
        },
        {
            question: "HTMLda qatorni bitta pastga tushirish uchun qaysi tegdan foydalanamiz?",
            answers: [ "dl","dt","hr","br"],
            correctAnswer: 3
        },
        {
            question: "HTMLda text osiga chizish uchun qaysi tegdan foydalanamiz?",
            answers: [ "del","div","u","i"],
            correctAnswer: 2
        },
        {
            question: "HTMLda qo'shtirnoq chiqarish uchun qaysi tegdan foydalanamiz?",
            answers: [ "p","q","u","i"],
            correctAnswer: 1
        },
        {
            question: "HTMLda havola yani link qaysi teg bilan yaratiladi?",
            answers: [ "p","a","button","i"],
            correctAnswer: 1
        },
        {
            question: "HTMLda qaysi element sahifaning boshqa sahifalarga yoki sahifa ichidagi qismlarga havola qiladigan qism hisoblanadi?",
            answers: [ "section","div","a","nav"],
            correctAnswer: 3
        },
        {
            question: "HTMLda qaysi element tekst ustiga chizadi?",
            answers: [ "overline","del","u","i"],
            correctAnswer: 1
        },
        {
            question: " HTML teglari va elementlari bir xilmi?",
            answers: [ "Ha","Yo'q","Bilmadim","Malumotim yo'q"],
            correctAnswer: 1
        },
        {
            question: "strong, b teglarining qanday farqi bor?",
            answers: [ "Hech qanday farqi yo'q","strong matnning qolgan qismiga qaraganda mos ravishda katta ahamiyatga ega yoki ko'proq ahamiyatga ega va urg'uli ekanligini bildiradi. Bu semantik ma'noga ega", "Ikkalasi boshqa-boshqa element","b matnning qolgan qismiga qaraganda mos ravishda katta ahamiyatga ega yoki ko'proq ahamiyatga ega va urg'uli ekanligini bildiradi. Bu semantik ma'noga ega"],
            correctAnswer: 1
        },
        {
            question: "Qaysi teg orqali veb sahifani veb sahifa ichida ko'rsatishimiz mumkin?",
            answers: [ "base","iframe","samp","map"],
            correctAnswer: 1
        },
        {
            question: "link va a teglari o'rtasida qanday farq mavjud?",
            answers: [ "link tegi youtobedan video olib kelish uchun ishlatilinadi. a tegi esa hujjat va tashqi manba o'rtasidagi havolani belgilaydi","link tegi boshqa veb-sahifaga yoki veb-sahifaning ma'lum bir qismiga giperhavola yaratish uchun ishlatiladi. a tegi esa hujjat va tashqi manba o'rtasidagi havolani belgilaydi","Ikkalasi aynan bir hil teglar hisoblanadi","a tegi boshqa veb-sahifaga yoki veb-sahifaning ma'lum bir qismiga giperhavola yaratish uchun ishlatiladi. link tegi esa hujjat va tashqi manba o'rtasidagi havolani belgilaydi"],
            correctAnswer: 3
        },
        {
            question: "select ichidagi option malumoti serverda korinishi uchun nima ish qilamiz?",
            answers: [ "optionga name atributi beriladi","optionga value atributi beriladi","selectga value atributi beriladi","optionga title atributi beriladi"],
            correctAnswer: 1
        },
        {
            question: "inputning qaysi turida malumot serverdan ko'rinishi uchun qo'shimcha value atributidan foydalanamiz?",
            answers: [ "text","search","checkbox","radio"],
            correctAnswer: 3
        },
        {
            question: "a va buttonning farqi?",
            answers: [ "a tegi boshqa veb-sahifaga yoki veb-sahifaning ma'lum bir qismiga giperhavola yaratish uchun ishlatiladi. button sahifaning o'zida qandaydir dinamik vazifa bajaradi.","button tegi boshqa veb-sahifaga yoki veb-sahifaning ma'lum bir qismiga giperhavola yaratish uchun ishlatiladi. a tegi esa hujjat va tashqi manba o'rtasidagi havolani belgilaydi","Ikkalasi aynan bir hil teglar hisoblanadi","a tegi boshqa veb-sahifaga yoki veb-sahifaning ma'lum bir qismiga giperhavola yaratish uchun ishlatiladi. button sahifaning o'zida qandaydir dinamik vazifa bajaradi.","a tegi youtobedan video olib kelish uchun ishlatilinadi. button tegi esa hujjat va tashqi manba o'rtasidagi havolani belgilaydi"],
            correctAnswer: 2
        },
        {
            question: "labelni va inputga qanday bog'laymiz?",
            answers: [ "inputning href atributi orqali","for va id atributlari orqali","link orqali","button orqali"],
            correctAnswer: 1
        },
        {
            question: "Veb-sahifaga input foydalanuvchidan manzil olish uchun qo'yilgan bo'lsa, u holatda input type qanday bo'ladi",
            answers: [ "text","number","range","address"],
            correctAnswer: 0
        },
        {
            question: "input type='search'ning qanday tabiiy stillari bor?",
            answers: [ "text bilan bir xil","inputga malumot kiritilganida uni yonida x belgisi chiqib qoladi","inputda lupa iconkasi chiqib qoladi","hech qanday qoshimcha stillari yo'q"],
            correctAnswer: 1
        },
        {
            question: "Quyidagilardan qaysi biri void element hisoblanadi?",
            answers: [ "h1-h6","p","img","label"],
            correctAnswer: 2
        },
        {
            question: "HTMLning 4.01-versiyasida Doctypelarning necha turi bor?",
            answers: [ "5","2","3","4"],
            correctAnswer: 2
        },
        {
            question: "a tegidagi target='_blank' atributinging vazifasi nima?",
            answers: [ "Hujjatni bosilgan oynada yoki yorliqda ochadi","Hujjatni asosiy ramkada ochadi","Link ezilganda ishlamaydigan qilib qo'yadi","Hujjatni yangi oyna yoki yorliqda ochadi"],
            correctAnswer: 3
        },
        {
            question: "iframe katta ekranga o'tmasligini qaysi harakat bilan bajaramiz?",
            answers: [ "width va height atributlarini o'chirib qoyamiz","allow atributini o'chirib qo'yamiz","allowfullscreen atributini o'chirib qo'yamiz","fullscreen atributini o'chirib qo'yamiz"],
            correctAnswer: 2
        },
        {
            question: "Matematikadagi kvadrat HTMLda qaysi teg bilan yoziladi?",
            answers: [ "dl","dt","sub","sup"],
            correctAnswer: 3
        },
        {
            question: "'H2O'dagi 2 HTMLda qaysi teg bilan yoziladi?",
            answers: [ "dl","dt","sub","sup"],
            correctAnswer: 2
        },
        {
            question: "Foydalanuvchiga ma'lumotni yuklab olish imkoniyatini qaysi teg yaratib beradi?",
            answers: [ "a","button","input type='file'","data"],
            correctAnswer: 0
        },
        {
            question: "Berilgan raqamga qo'ngiroq qilish imkoniyatini qaysi teg yaratib beradi?",
            answers: [ "a","button","input type='tel'","tel"],
            correctAnswer: 0
        },
        {
            question: "img tegidagi qaysi atribut agar foydalanuvchi biron sababga ko'ra uni ko'ra olmasa (ulanishning sekinligi, src atributidagi xatolik yoki foydalanuvchi ekranni o'qish vositasidan foydalansa) kerakli atribut tasvir uchun muqobil matnni taqdim etadi?",
            answers: [ "src","alt","data","description"],
            correctAnswer: 1
        },
        {
            question: "Jadvaldagi ustunlarni birlashtirish uchun qaysi atributdan foydalanamiz?",
            answers: [ "colspan","rowspan","caption","span"],
            correctAnswer: 0
        },
        {
            question: "Jadvaldagi qatorlarni birlashtirish uchun qaysi atributdan foydalanamiz?",
            answers: [ "colspan","rowspan","caption","span"],
            correctAnswer: 1
        },
        {
            question: "ul va ol ichida qaysi teg(lar) kelishi mumkin?",
            answers: [ "h1-h6","p","li","hammasi"],
            correctAnswer: 2
        },
        {
            question: "ul va ol ichida qaysi teg(lar) kelishi mumkin?",
            answers: [ "h1-h6","p","li","hammasi"],
            correctAnswer: 2
        },

        {
            question: "Quyidagilardan qaysi biri block element emas?",
            answers: [ "h1","p","li","a"],
            correctAnswer: 3
        },
        {
            question: "Quyidagilardan qaysi biri block element emas?",
            answers: [ "article","div","input","header"],
            correctAnswer: 2
        },
        {
            question: "Quyidagilardan qaysi biri block element emas?",
            answers: [ "ul","hr","li","span"],
            correctAnswer: 3
        },
        {
            question: "Quyidagilardan qaysi biri block element emas?",
            answers: [ "section","del","footer","nav"],
            correctAnswer: 1
        },
        {
            question: "Quyidagilardan qaysi biri inline element emas?",
            answers: [ "sup","b","p","sub"],
            correctAnswer: 2
        },
        {
            question: "Quyidagilardan qaysi biri inline element emas?",
            answers: [ "button","strong","em","div"],
            correctAnswer: 3
        },
        {
            question: "head ichida quyidagi qaysi teg kela olmaydi?",
            answers: [ "style","link","form","title"],
            correctAnswer: 2
        },
        {
            question: "Quyidagilardan qaysi biri semantik element emas?",
            answers: [ "section","nav","footer","br"],
            correctAnswer: 3
        },
        {
            question: "Web-sahifada ko'p qatorli matn kiritish maydonini yaratish uchun qaysi tegdan foydalanamiz?",
            answers: [ "field","textarea","select","placeholder"],
            correctAnswer: 1
        },
        {
            question: "Qaysi teg yoramida bir-birga bogliq elementlarni guruhlashimiz mumkin?",
            answers: [ "field","textarea","select","fieldset"],
            correctAnswer: 3
        },
        {
            question: "fieldset sarlavhasi nima deb nomalanadi?",
            answers: [ "field","label","title","legend"],
            correctAnswer: 3
        },
        {
            question: "inputga malumotni kiritishni shart qilish uchun qaysi atributdan foydalanamiz?",
            answers: [ "disabled","required","default","type"],
            correctAnswer: 1
        },
        {
            question: "audio va video elementlarini qayta-qayta ijro qilish imkoniyatini qaysi atribut qo'shib beradi?",
            answers: [ "retry","autoplay","loop","mute"],
            correctAnswer: 2
        },
        {
            question: "audio va video elementlarini ovozsiz qilish imkoniyatini qaysi atribut qo'shib beradi?",
            answers: [ "retry","autoplay","loop","mute"],
            correctAnswer: 3
        },
        {
            question: "audio va video elementlarini avtomatik ijro qilish imkoniyatini qaysi atribut qo'shib beradi?",
            answers: [ "retry","autoplay","loop","mute"],
            correctAnswer: 1
        },
        {
            question: "audio va video elementlarini qolipi qaysi atribut yordamida?",
            answers: [ "maket","autoplay","controls","mute"],
            correctAnswer: 2
        },
]

const css = [
    {
        question: "Necha xil yo'l bilan htmlga still berish mumkin?",
        answers: [ "1","2","3","4"],
        correctAnswer: 2
    },
    {
        question: "Inline still qaerga yoziladi?",
        answers: [ "teg ichida style atributiga","head ichida style tegi bilan","alohida css fayl ichida","head ichidagi link tegi ichida"],
        correctAnswer: 0
    },
    {
        question: "Internal still qaerga yoziladi?",
        answers: [ "teg ichida style atributiga","head ichida style tegi bilan","alohida css fayl ichida","head ichidagi link tegi ichida"],
        correctAnswer: 1
    },
    {
        question: "External still qaerga yoziladi?",
        answers: [ "teg ichida style atributiga","head ichida style tegi bilan","alohida css fayl ichida","head ichidagi link tegi ichida"],
        correctAnswer: 2
    },
    {
        question: "Quyidagilardan qaysi biri selector bo'la olmaydi?",
        answers: [ "h1",".title","#title","<h1>"],
        correctAnswer: 3
    },
    {
        question: "Class css faylda nima bilan chaqiriladi?",
        answers: [ ".","/","#","[]"],
        correctAnswer: 0
    },
    {
        question: "Qaysi css xossasi yordamida textga rang beriladi",
        answers: [ "text-color","color","textColor","background-color"],
        correctAnswer: 1
    },
    {
        question: "Qaysi css xossasi yordamida orqa fonga rang beriladi",
        answers: [ "text-color","color","textColor","background-color"],
        correctAnswer: 3
    },
    {
        question: "Quyidagilardan qaysi biri HEX rang berish usuli?",
        answers: [ "#fff","rgba(255, 255, 255, 0.7)","rgb255, 255, 255)","red"],
        correctAnswer: 0
    },
    {
        question: "Quyidagilardan qaysi biri orqali shaffof rang berish mumkin?",
        answers: [ "#fff","rgba(255, 255, 255, 0.7)","rgb255, 255, 255)","red"],
        correctAnswer: 1
    },
    {
        question: "RGB ranglarini qaysi sonlar orqali berishimiz mumkin?",
        answers: [ "0-256","0-100","0-900","0-255"],
        correctAnswer: 3
    },
    {
        question: "RGB ranglarindagi birinchi qiymat qaysi rangga javob beradi?",
        answers: [ "yashil","sariq","qizil","ko'k"],
        correctAnswer: 2
    },
    {
        question: "RGB ranglarindagi ikkinchi qiymat qaysi rangga javob beradi?",
        answers: [ "yashil","sariq","qizil","ko'k"],
        correctAnswer: 0
    },
    {
        question: "RGB ranglarindagi uchinchi qiymat qaysi rangga javob beradi?",
        answers: [ "yashil","sariq","qizil","ko'k"],
        correctAnswer: 3
    },
    {
        question: "Qaysi css xossasi yordamida matnni katta kichik qilishimiz mumkin?",
        answers: [ "font-style","font-size","font-weight","line-height"],
        correctAnswer: 1
    },
    {
        question: "Qaysi css xossasi yordamida matnni qalin yoki ingichka qilishimiz mumkin?",
        answers: [ "font-style","font-size","font-weight","line-height"],
        correctAnswer: 2
    },
    {
        question: "Qaysi css xossasi yordamida harflar orasini ochishimiz mumkin?",
        answers: [ "word-spacing","letter-spacing","font-weight","line-height"],
        correctAnswer: 1
    },
    {
        question: "Qaysi css xossasi yordamida matndagi so'zlar orasini ochishimiz mumkin?",
        answers: [ "word-spacing","letter-spacing","font-weight","line-height"],
        correctAnswer: 0
    },
    {
        question: "Qaysi css xossasi yordamida matnga soya berishimiz mumkin?",
        answers: [ "text-shadow","box-shadow","text-decoration","line-height"],
        correctAnswer: 0
    },
    {
        question: "text-decoration: underline qanday vazifa bajaradi?",
        answers: [ "matn ostiga chizadi","matn ustiga chizadi","matn tepasiga chizadi","matnni o'chiradi"],
        correctAnswer: 0
    },
    {
        question: "text-decoration: overline qanday vazifa bajaradi?",
        answers: [ "matn ostiga chizadi","matn ustiga chizadi","matn tepasiga chizadi","matnni o'chiradi"],
        correctAnswer: 2
    },
    {
        question: "text-decoration: line-through qanday vazifa bajaradi?",
        answers: [ "matn ostiga chizadi","matn ustiga chizadi","matn tepasiga chizadi","matnni o'chiradi"],
        correctAnswer: 1
    },
    {
        question: "Box-model necha qismdan iborat?",
        answers: [ "1","2","3","4"],
        correctAnswer: 3
    },
    {
        question: "Qaysi css xossasi yordamida element enini berishimiz mumkin?",
        answers: [ "height","width","decoration","line-height"],
        correctAnswer: 1
    },
    {
        question: "Qaysi css xossasi yordamida elementga balandlik berishimiz mumkin?",
        answers: [ "height","width","decoration","line-height"],
        correctAnswer: 0
    },
    {
        question: "Quyidagilardan qaysi biri font-family emas?",
        answers: [ "serif","cursive","decorative","fantasy"],
        correctAnswer: 2
    },
    {
        question: "Qaysi font-family turi qo'lda yozilgandek yoziladi?",
        answers: [ "serif","cursive","decorative","fantasy"],
        correctAnswer: 1
    },
    {
        question: "Qaysi font-family turida harflar qirrali yoziladi?",
        answers: [ "serif","cursive","decorative","fantasy"],
        correctAnswer: 0
    },
    {
        question: "Qaysi font-family turida harflar qirrasiz yoziladi?",
        answers: [ "serif","cursive","decorative","sans-serif"],
        correctAnswer: 3
    },
    {
        question: "To'g'ri fikr berilgan qatorni toping",
        answers: [ "rgba faqat textni shaffof qilish uchun xizmai","opacity faqat orqa fonni shaffof qiladi","rgba elementni barcha qismini shaffof qiladi","opacity elementni barcha qismini shaffof qiladi"],
        correctAnswer: 3
    },
    {
        question: "Nuqtali border qanday yoziladi?",
        answers: [ "dashed","dotted","solid","groove"],
        correctAnswer: 1
    },
    {
        question: "Uzuk chiziqli border qanday yoziladi?",
        answers: [ "dashed","dotted","solid","groove"],
        correctAnswer: 0
    },
    {
        question: "Tepa va pastda birin-ketin joylashgan ikkita element joylashgan, birinchi elementga past tarafdan 40px margin berilgan, ikkinchi elementga tepadan 30px berilgan. Birinchi va ikkinchi element o'rtasida qancha margin bo'ladi?",
        answers: [ "40px","30px","70px","10px"],
        correctAnswer: 0
    },
    {
        question: "padding: 25px 75px 100px; O'ng tarafdan qancha padding mavjud.",
        answers: [ "25px","100px","50px","75px"],
        correctAnswer: 3
    },
    {
        question: "padding: 25px 75px 100px; Past tarafdan qancha padding mavjud.",
        answers: [ "25px","100px","50px","75px"],
        correctAnswer: 1
    },
    {
        question: "padding: 25px 75px 100px; Tepa tarafdan qancha padding mavjud.",
        answers: [ "25px","100px","50px","75px"],
        correctAnswer: 0
    },
    {
        question: "width:100px; padding:20px; border:5px; Agar element box-sizing: content-box bo'lsa uni eni qancha bo'ladi.",
        answers: [ "125px","100px","150px","130px"],
        correctAnswer: 1
    },
    {
        question: "width:100px; border:5px; Agar element box-sizing: content-box bo'lsa uni eni qancha bo'ladi.",
        answers: [ "105px","100px","110px","115px"],
        correctAnswer: 1
    },
    {
        question: "text-transform: uppercase qanday vazifa bajaradi?",
        answers: [ "harflarni hammasini katta harf qilib beradi","harflarni hammasini kichik harf qilib beradi","Matndagi hamma so'zlarni bosh harfini katta harf qilib beradi","matnni qiya qilib beradi"],
        correctAnswer: 0
    },
    {
        question: "text-transform: lowercase qanday vazifa bajaradi?",
        answers: [ "harflarni hammasini katta harf qilib beradi","harflarni hammasini kichik harf qilib beradi","Matndagi hamma so'zlarni bosh harfini katta harf qilib beradi","matnni qiya qilib beradi"],
        correctAnswer: 1
    },
    {
        question: "text-transform: capitalize qanday vazifa bajaradi?",
        answers: [ "harflarni hammasini katta harf qilib beradi","harflarni hammasini kichik harf qilib beradi","Matndagi hamma so'zlarni bosh harfini katta harf qilib beradi","matnni qiya qilib beradi"],
        correctAnswer: 2
    },
    {
        question: "Foydalanuvchi tashrif buyurgan havola stili qanday beriladi?",
        answers: [ ":link",":visited",":hover", ":active"],
        correctAnswer: 1
    },
    {
        question: "Oddiy tashrif buyurilmagan havola stili qanday beriladi?",
        answers: [ ":link",":visited",":hover", ":active"],
        correctAnswer: 0
    },
    {
        question: "Foydalanuvchi havola ustiga sichqonchani olib borgandagi stili qanday beriladi?",
        answers: [ ":link",":visited",":hover", ":active"],
        correctAnswer: 2
    },
    {
        question: "Foydalanuvchi havolani ustiga bosgandagi stili qanday beriladi?",
        answers: [ ":link",":visited",":hover", ":active"],
        correctAnswer: 3
    },
    {
        question: "Jadvalni juft qatorlarini stilini berishimiz uchun nima qilishimiz kerak",
        answers: [ ":nth-child(odd)",":table(odd)",":nth-child(even)", ":table(even)"],
        correctAnswer: 2
    },
    {
        question: "Jadvalni toq qatorlarini stilini berishimiz uchun nima qilishimiz kerak",
        answers: [ ":nth-child(odd)",":table(odd)",":nth-child(even)", ":table(even)"],
        correctAnswer: 0
    },
    {
        question: "“display: none” va “visibility: hidden” o'rtasida qanday farq mavjud?",
        answers: [ "Agar biz HTML elementi uchun 'visibility: hidden' hossasidan foydalansak, u holda bu element veb-sahifadan yashiriladi, lekin veb-sahifada joy egallaydi","Agar biz HTML elementi uchun 'display: none' hossasidan foydalansak, u holda bu element veb-sahifadan yashiriladi, lekin veb-sahifada joy egallaydi","Ikkalasi aynan bir hil xossalar hisoblanadi","Agar biz HTML elementi uchun 'visibility: hidden' hossasidan foydalansak, u holda element yashirin bo'ladi va veb-sahifada hech qanday joy egallamaydi"],
        correctAnswer: 0
    },
    {
        question: "max-height haqida to'gri malumot berilgan qatorni toping.",
        answers: [ "Element bo'yi berilgan heightdan katta bo'lishi mumkin, kichik bo'lmaydi","Element bo'yi berilgan heightdan kichik bo'lishi mumkin, katta bo'lmaydi","berilgan height o'zgarmas bo'ladi", "berilgan elementga qarab undan ko'p va kam bo'lishi mumkin"],
        correctAnswer: 1
    },
    {
        question: "Qaysi flex hossasi elementlarni qaysi yo'nalishda joylashishini belgilaydi",
        answers: [ "flex-wrap","flex-direction","align-items", "align-content"],
        correctAnswer: 1
    },
    {
        question: "Qaysi flex hossasi elementlarni vertikal ravishda yig'adi (lekin pastdan yuqoriga)",
        answers: [ "flex-direction: column-reverse","flex-direction: column","flex-direction: row-reverse", "flex-direction: row"],
        correctAnswer: 0
    },
    {
        question: "Qaysi flex hossasi elementlarni elementlarni gorizontal ravishda yig'adi (chapdan o'ngga)",
        answers: [ "flex-direction: column-reverse","flex-direction: column","flex-direction: row-reverse", "flex-direction: row"],
        correctAnswer: 3
    },
    {
        question: "Qaysi flex hossasi elementlarni elementlarni gorizontal ravishda yig'adi (lekin o'ngdan chapga)",
        answers: [ "flex-direction: column-reverse","flex-direction: column","flex-direction: row-reverse", "flex-direction: row"],
        correctAnswer: 2
    },
    {
        question: "Qaysi flex hossasi elementlarni agar sig'may qolsa pastga tushishini belgilaydi",
        answers: [ "flex-wrap: wrap","flex-wrap: nowrap","flex-direction: row-reverse", "flex-direction: row"],
        correctAnswer: 0
    },
    {
        question: "Qaysi flex hossasi elementlarni tartibini belgilashimiz mumkin",
        answers: [ "flex-wrap: wrap","flex-wrap: nowrap","order", "flex-shrink"],
        correctAnswer: 2
    },
    {
        question: "Quyidagilardan qaysi biri pseudoclass hisoblanadi?",
        answers: [ "hover","shrink","order", "after"],
        correctAnswer: 0
    },
    {
        question: "Quyidagilardan qaysi biri pseudoclass hisoblanadi?",
        answers: [ "before","shrink","order", "active"],
        correctAnswer: 3
    },
    {
        question: "Quyidagilardan qaysi biri pseudoelement hisoblanadi?",
        answers: [ "before","shrink","order", "active"],
        correctAnswer: 0
    },
    {
        question: "pseudoelement haqida not'g'ri fikr berilgan javobni toping",
        answers: [ "content bo'lishi shart","display inlineligi uchun ularni inline-block qilib qo'yish kerak","Agar ota element flex bo'lsa uni inline-block qilishimiz shart emas", "pseudoelementlar display hususiyati tabiiy block bo'ladi"],
        correctAnswer: 3
    },
    {
        question: "filterning qaysi hossasi yordamida berilgan elementga hiralik qo'shishimiz mumkin?",
        answers: ["grayscale", "brightness", "blur", "contrast"],
        correctAnswer: 2
    },
    {
        question: "filterning qaysi hossasi yordamida berilgan elementga yorug'lik qo'shishimiz mumkin?",
        answers: ["grayscale", "brightness", "blur", "contrast"],
        correctAnswer: 1
    },
    {
        question: "filterning qaysi hossasi yordamida berilgan elementga kulrang effekt qo'shishimiz mumkin?",
        answers: ["grayscale", "brightness", "blur", "contrast"],
        correctAnswer: 0
    },
]

const cssAdvanced = [
    {
        question: "Quyidagilardan qaysi biri position hususiyatiga tegishli emas?",
        answers: [ "static","regular","relative","sticky"],
        correctAnswer: 1
    },
    {
        question: "Agar elementga position berilmagan bo'lsa uni tabiiy(by default) hususiyati qanday bo'ladi?",
        answers: [ "static","regular","relative","sticky"],
        correctAnswer: 0
    },
    {
        question: "Elementlarni bir joyga qotirib qo'yish positionning qaysi hususiyatidan foydalanamiz?",
        answers: [ "static","fixed","relative","sticky"],
        correctAnswer: 1
    },
    {
        question: "Qaysi position hususiyati o'ziga eng yaqin bo'lgan static bo'lmagan elementga nisbatan joylashadi?",
        answers: [ "static","fixed","relative","absolute"],
        correctAnswer: 3
    },
    {
        question: "Qaysi position hususiyati har doim bodyga nisbatan joylashadi?",
        answers: [ "static","fixed","relative","absolute"],
        correctAnswer: 1
    },
    {
        question: "Qaysi position hususiyati top, left, right, bottom hususiyatlarini qabul qilmaydi?",
        answers: [ "static","fixed","relative","absolute"],
        correctAnswer: 0
    },
    {
        question: "Qaysi position hususiyati o'z joyini yo'qotib inline-block elementga aylanib qoladi?",
        answers: [ "static","sticky","relative","absolute"],
        correctAnswer: 3
    },
    {
        question: "Qaysi position hususiyatida z-index hususiyati ishlamaydi?",
        answers: [ "static","sticky","relative","absolute"],
        correctAnswer: 0
    },
    {
        question: "Custom property nimani ichida yoziladi?",
        answers: [ ":root",":custom-props",":custom-property",":props"],
        correctAnswer: 0
    },
    {
        question: "Custom property qanday yoziladi?",
        answers: [ "-primary-color:","--primary-color:","primary-color:","primary__color:"],
        correctAnswer: 1
    },
    {
        question: "display:gridda qatorlar orasi qanday ochiladi?",
        answers: ["row-gap", "column-gap", "space-x", "space-y"],
        correctAnswer: 0
    },
    {
        question: "display:grid containeri ichidagi elementlar 2ta ustunda joylashishi uchun qanday kod yozamiz?",
        answers: ["grid-template-columns: auto auto;", "grid-template-columns: 1fr 1fr;", "barcha javoblar to'g'ri", "grid-template-columns: repeat(2, 1fr)"],
        correctAnswer: 2
    },
    {
        question: "display:gridda elementlar 3ta ustunda joylashgan bo'lsa, birinchi elementni birinchi ustun va ikkinchi ustun ornida joylashishi uchun qaysi css xossasi yoziladi?",
        answers: ["grid-column: 1 / 2", "grid-column: 1 / 3", "grid-row: 1 / 2", "grid-row: 1 / 3"],
        correctAnswer: 1
    },
    {
        question: "display:gridda elementlar 3ta qatorda joylashgan bo'lsa, birinchi elementni birinchi va ikkinchi qatorga cho'zib joylash uchun qaysi css xossasi yoziladi?",
        answers: ["grid-column: 1 / 2", "grid-column: 1 / 3", "grid-row: 1 / 2", "grid-row: 1 / 3"],
        correctAnswer: 3
    },
    {
        question: "display:gridda elementlar 3ta qatorda joylashgan bo'lsa, birinchi elementni birinchi va ikkinchi qatorga va birinchi va ikkinchi ustunda cho'zib joylash uchun qaysi css xossasi yoziladi?",
        answers: ["grid-area: 1 / 1 / 3 / 3", "grid-area: 1 / 3 / 1 / 3", "grid-area: 1 / 1 / 2 / 2", "grid-area: 1 / 2 / 1 / 2"],
        correctAnswer: 1
    },
    {
        question: "Quyidagilardan qaysi biri BEM yozilish uslubi hisoblanadi?",
        answers: ["header-list", "header_list", "headerList", "header__list"],
        correctAnswer: 3
    },
    {
        question: "Quyidagilardan qaysi biri BEM yozilish uslubi hisoblanadi?",
        answers: ["footer-list", "footer_list", "footerList", "footer__list"],
        correctAnswer: 3
    },
    {
        question: "Quyidagilardan qaysi biri BEM yozilish uslubi hisoblanadi?",
        answers: ["list-item", "list_item", "list__item", "listItem"],
        correctAnswer: 2
    },
    {
        question: "Quyidagilardan qaysi biri BEM yozilish uslubi hisoblanadi?",
        answers: ["nav-list", "nav__list", "navList", "nav_list"],
        correctAnswer: 1
    },
    {
        question: "Quyidagilardan qaysi biri BEM yozilish uslubi hisoblanadi?",
        answers: ["btn-red", "btn--red", "btn_red", "btnRed"],
        correctAnswer: 1
    },
    {
        question: "Quyidagilardan qaysi biri BEM yozilish uslubi hisoblanadi?",
        answers: ["btn-primary", "btn--primary", "btn_primary", "btnPrimary"],
        correctAnswer: 1
    },
    {
        question: "Quyidagilardan qaysi biri BEM yozilish uslubi hisoblanadi?",
        answers: ["btn-success", "btn--success", "btn_success", "btnSuccess"],
        correctAnswer: 1
    },
    {
        question: "Jadbalni cheagaralarini birlashtirish uchun qaysi css xossasidan foydalanamiz?",
        answers: ["border-collapse: collapse", "border-collapse: uncollapse", "border-collapse: collect", "border-collapse: connect"],
        correctAnswer: 0
    },
    {
        question: "Transformning qaysi turida elementlarni joyidan jildirishimiz mumkin?",
        answers: ["scale", "rotate", "translate", "skew"],
        correctAnswer: 2
    },
    {
        question: "Transformning qaysi turida elementlarni gradus bo'ylab aylantirish mumkin?",
        answers: ["scale", "rotate", "translate", "skew"],
        correctAnswer: 1
    },
    {
        question: "Transformning qaysi turida elementlarni cho'zish mumkin?",
        answers: ["scale", "rotate", "translate", "skew"],
        correctAnswer: 0
    },
    {
        question: "Transformning qaysi turida elementlarni qiyshaytishimiz mumkin?",
        answers: ["scale", "rotate", "translate", "skew"],
        correctAnswer: 3
    },
    {
        question: "transform:scale qiymati to'g'ri berilgan qatorni toping?",
        answers: ["45deg", "-45deg", "2px", "1.2"],
        correctAnswer: 3
    },
    {
        question: "transform:scale qiymati to'g'ri berilgan qatorni toping?",
        answers: ["45deg", "-45deg", "2px", "0.5"],
        correctAnswer: 3
    },
    {
        question: "transform:translate qiymati to'g'ri berilgan qatorni toping?",
        answers: ["45deg", "-45deg", "20px", "0.5"],
        correctAnswer: 2
    },
    {
        question: "transform:translate qiymati to'g'ri berilgan qatorni toping?",
        answers: ["45deg", "-45deg", "-20px", "0.5"],
        correctAnswer: 2
    },
    {
        question: "transform:rotate qiymati to'g'ri berilgan qatorni toping?",
        answers: ["45deg", "20px", "-20px", "0.5"],
        correctAnswer: 0
    },
    {
        question: "transform:rotate qiymati to'g'ri berilgan qatorni toping?",
        answers: ["20px", "-45deg", "-20px", "0.5"],
        correctAnswer: 1
    },
    {
        question: "transform:skew qiymati to'g'ri berilgan qatorni toping?",
        answers: ["45deg", "20px", "-20px", "0.5"],
        correctAnswer: 0
    },
    {
        question: "transform:skew qiymati to'g'ri berilgan qatorni toping?",
        answers: ["20px", "-45deg", "-20px", "0.5"],
        correctAnswer: 1
    },
    {
        question: "Animatsiyani bajarish uchun qancha vaqt ketishini qaysi css xossasi yordamida belgilashimiz mumkin?",
        answers: ["animation-duration", "animation-delay", "animation-direction", "animation-iteration-count"],
        correctAnswer: 0
    },
    {
        question: "Animatsiyani bajarish uchun qancha vaqt kutilishini qaysi css xossasi yordamida belgilashimiz mumkin?",
        answers: ["animation-duration", "animation-delay", "animation-direction", "animation-iteration-count"],
        correctAnswer: 1
    },
    {
        question: "Qaysi css xossasi yordamida animatsiyani necha marta ishga tushishini belgilash mumkin?",
        answers: ["animation-duration", "animation-delay", "animation-direction", "animation-iteration-count"],
        correctAnswer: 3
    },
    {
        question: "Qaysi animatsiya xossasi yordamida animatsiyani cheksiz qilishimiz mumkin?",
        answers: ["iteration", "infinite", "loop", "alternate"],
        correctAnswer: 1
    },
    {
        question: "Qaysi animatsiya xossasi yordamida animatsiya teskari yo'nalishda o'ynaladi (orqaga)?",
        answers: ["iteration", "reverse", "loop", "alternate"],
        correctAnswer: 1
    },
    {
        question: "Qaysi animatsiya xossasi yordamida animatsiya avval oldinga, keyin esa orqaga o'ynaladi?",
        answers: ["iteration", "reverse", "loop", "alternate"],
        correctAnswer: 3
    },
    {
        question: "Qaysi animatsiya xossasi yordamida animatsiya avval orqaga, keyin oldinga qarab ijro etiladi?",
        answers: ["iteration", "alternate-reverse", "loop", "alternate"],
        correctAnswer: 1
    },
    {
        question: "CSSning qaysi hossasi yordamida elementlar shaklini osongina o'zgartirishimiz mumkin(uchburchak, yumaloq, romb, v.h.k)?",
        answers: ["border", "circle", "clip-path", "circle-path"],
        correctAnswer: 2
    },
    {
        question: "Agar element eni 300px bo'lsa, bola elementga 50% width berilgan bo'lsa, bola element eni qancha bo'ladi?",
        answers: ["ekranning 50%", "150px", "50px", "300px"],
        correctAnswer: 1
    },
    {
        question: "Agar element eni 300px bo'lsa, bola elementga 50vw width berilgan bo'lsa, bola element eni qancha bo'ladi?",
        answers: ["ekranning 50%", "150px", "50px", "300px"],
        correctAnswer: 0
    },
    {
        question: "Qaysi unit turida ushbu element yoki ota-ona elementi font-size hususiyati orqali o'lchangan kenglikka teng keladi?",
        answers: ["px", "em", "rem", "%"],
        correctAnswer: 1
    },
    {
        question: "Qaysi unit turida html elementining font-size hususiyati belgilanmagan bo'lsa, unda umumiy qoida bo'yicha 16px qabul qilinad?",
        answers: ["px", "em", "rem", "%"],
        correctAnswer: 2
    },
    {
        question: "Kod yozishda bazi mahsulotlarning (masalan, brauzerlar) yangi yoki kuchli versiyalari uchun mahsulotning oldingi versiyalaridan farqli xususiyatlarini o'zgartirish uchun qo'llaniladigan belgilar nima deyiladi?",
        answers: ["minifikatsiya", "prefikatsiya", "moderatsiya", "mobilizatsiya"],
        correctAnswer: 1
    },
    {
        question: "Kod yozishda foydalaniladigan bir qator vositalar va usullar yordamida kodning o'lchamini kichraytirish (ya'ni, kodning hajmini yaxlit bajarish) jarayoni nima deyiladi?",
        answers: ["minifikatsiya", "prefikatsiya", "moderatsiya", "mobilizatsiya"],
        correctAnswer: 0
    },
    {
        question: "Qaysi meta teg brauzerga sahifa o'lchamlari va masshtabini boshqarish bo'yicha ko'rsatmalar beradi?",
        answers: ["<meta name='viewport' content='width=device-width, initial-scale=1.0'>", "<meta charset='UTF-8'>", "<meta name='robots' content='index, follow'>", "<meta http-equiv='X-UA-Compatible' content='IE=edge'>"],
        correctAnswer: 0
    },
]

const tboot = [
    {
        question: "Bootsrapda qaysi breakpoint 576 pikseldan 768 pikselgacha javob beradi?",
        answers: [ "sm","xs","md","lg"],
        correctAnswer: 0
    },
    {
        question: "Bootsrapda qaysi breakpoint 768 pikseldan 992 pikselgacha javob beradi?",
        answers: [ "sm","xs","md","lg"],
        correctAnswer: 2
    },
    {
        question: "Bootsrapda qaysi breakpoint 992 pikseldan 1200 pikselgacha javob beradi?",
        answers: [ "sm","xs","md","lg"],
        correctAnswer: 3
    },
    {
        question: "Bootsrapda qaysi breakpoint 576 pikselgacha javob beradi?",
        answers: [ "sm","xs","md","lg"],
        correctAnswer: 1
    },
    {
        question: "Bootsrap grid tizimida sahifa necha ustunga bo'linadi?",
        answers: [ "3","6","9","12"],
        correctAnswer: 3
    },
    {
        question: "Bootsrap grid tizimida 3ta ustundan iborat bo'lsa 2-ustun sahifa yarmini belgilash kerak bolsa ushbu 2-elementga necha col beriladi?",
        answers: [ "3","6","9","5"],
        correctAnswer: 1
    },
    {
        question: "Bootsrap grid tizimida 2ta ustundan iborat bo'lsa 1-ustun sahifa 3/1 qismini belgilash kerak bolsa ushbu 1-elementga necha col beriladi?",
        answers: [ "3","6","9","4"],
        correctAnswer: 3
    },
    {
        question: "Bootsrapda qo'shimcha ma'lumotlarni ochish yoki yopish uchun qaysi componentdan foydalanamiz?",
        answers: [ "alerts","badge","card","accardion"],
        correctAnswer: 3
    },
    {
        question: "Bootsrapda qaysi component belgilashlarni visual ravishda ko'rsatadi, misol uchun, bir nechta xabarlar yoki yangiliklar bor ekanligini yoki bir mahsulotning miqdorini ko'rsatishda foydalaniladi?",
        answers: [ "alerts","badge","card","accardion"],
        correctAnswer: 1
    },
    {
        question: "Bootsrapda qaysi component foydalanuvchilarga xatolik yoki muvaffaqiyatsizliklar haqida ogohlantirish berish uchun ishlatiladi?",
        answers: [ "alerts","badge","card","accardion"],
        correctAnswer: 0
    },
    {
        question: "Bootsrapda qaysi component sahifadagi navigatsiya tizimida foydalaniladi va bir sahifadagi joyimizni korsatadigan elementlar ketma-ketligi ko'rinishida ko'rsatish uchun ishlatiladi?",
        answers: [ "alerts","badge","card","breadcrumb"],
        correctAnswer: 3
    },
    {
        question: "Bootsrapda qaysi component foydalanuvchiga biror amalni bajarish uchun bitta yoki bir nechta tanlovni taqdim etishga imkon beradi?",
        answers: [ "dropdown","badge","card","breadcrumb"],
        correctAnswer: 0
    },
    {
        question: "Bootsrapda qaysi component sahifaning yuqori qismida joylashadi va sahifaning boshqa qismlariga o'tish uchun menyu elementlarini ko'rsatadi?",
        answers: [ "alerts","badge","card","navbar"],
        correctAnswer: 3
    },
    {
        question: "Bootsrapda qaysi component yordamida telegram menyusini yaratsak bo'ladi?",
        answers: [ "breadcrumb","badge","offcanvas","pagination"],
        correctAnswer: 2
    },
    {
        question: "Bootsrapda qaysi component foydalanuvchilarga sahifalarni almashtirishga imkon beradi?",
        answers: [ "breadcrumb","badge","offcanvas","pagination"],
        correctAnswer: 3
    },
    {
        question: "Bootsrapda qaysi component foydalanuvchiga amalni ko'rsatishda va amalning qanchalik bajarilganini ko'rsatib berishda yordam beradi?",
        answers: [ "breadcrumb","badge","progress","pagination"],
        correctAnswer: 2
    },
    {
        question: "Tailwindda belgilangan bir nechta stillarni bitta o'zgaruvchida jamlash uchun nimadan foydalanamiz?",
        answers: [ "@aplly","@layer","@components","@base"],
        correctAnswer: 0
    },
    {
        question: "npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch ushbu buyruqni qaysi faylga saqlab qo'yishimiz mumkin?",
        answers: [ "package.json","tailwind.config.js","package-lock.json","app.js"],
        correctAnswer: 0
    },
    {
        question: "Tailwind cssda qayta ishlatiluvchi component stillari qaerda yoziladi?",
        answers: [ "@layer component","@layer components","@layer base","@layer utilities"],
        correctAnswer: 1
    },
    {
        question: "Tailwind cssda standart ranglar palitrasi har bir rang uchun nechadan nechagacha hisoblanadi?",
        answers: [ "0-900","50-900","50-950","100-900"],
        correctAnswer: 2
    },
    {
        question: "Tailwind cssda arbitrary value orqali still berilgan javobni toping?",
        answers: [ "bg-[#1da1f2]","bg-red-300","bg-br-light-red","bg-red"],
        correctAnswer: 0
    },
    {
        question: "Tailwind cssda arbitrary value orqali still berilgan javobni toping?",
        answers: [ "text-[#1da1f2]","text-red-300","text-br-light-red","text-red"],
        correctAnswer: 0
    },
    {
        question: "Tailwind cssda padding-left qanday beriladi?",
        answers: [ "p-s","p-l","p-start","p-left"],
        correctAnswer: 1
    },
    {
        question: "Tailwind cssda margin-left qanday beriladi?",
        answers: [ "m-s","m-l","m-start","m-left"],
        correctAnswer: 1
    },
    {
        question: "Tailwind cssda padding-right qanday beriladi?",
        answers: [ "p-e","p-r","p-end","p-right"],
        correctAnswer: 1
    },
    {
        question: "Tailwind cssda margin-right qanday beriladi?",
        answers: [ "m-e","m-r","m-end","m-right"],
        correctAnswer: 1
    },
    {
        question: "Tailwind cssda leading nima uchun hizmat qiladi?",
        answers: [ "line-height","list-group","font-weight","font-style"],
        correctAnswer: 0
    },
    {
        question: "Tailwind cssda tracking nima uchun hizmat qiladi?",
        answers: [ "word-spacing","letter spacing","font-weight","font-style"],
        correctAnswer: 1
    },
    {
        question: "Tailwind cssda border-radius qanday beriladi?",
        answers: [ "leading","tracking","rounded","aspect-ratio"],
        correctAnswer: 2
    },
    {
        question: "Tailwind cssda grid itemlari to'gri responsive qilingan javobni belgilang(avval 1ta, keyin 2ta, oxirida 3ta).",
        answers: [ "grid-col-1 md:grid-col-2 lg:grid-col-3","grid-col-12 md:grid-col-6 lg:grid-col-4","grid-cols-12 md:grid-cols-6 lg:grid-cols-4","grid-cols-1 md:grid-cols-2 lg:grid-cols-3"],
        correctAnswer: 3
    },
    {
        question: "Tailwind cssda width=50% qilish uchun qanday still yoziladi?",
        answers: [ "width-50","w-50","w-2/1","w-1/2"],
        correctAnswer: 3
    },
    {
        question: "Tailwind cssda width=33% qilish uchun qanday still yoziladi?",
        answers: [ "width-33","w-33","w-3/1","w-1/3"],
        correctAnswer: 3
    },
    {
        question: "Quyidagilardan qaysi biri tailwind cssda arbitrary still berish usuli hisoblanadi?",
        answers: [ "text-red-300","text-[#555]","text-br-primary","text-transparent"],
        correctAnswer: 1
    },
    {
        question: "Tailwind cssda width=25% qilish uchun qanday still yoziladi?",
        answers: [ "width-25","w-25","w-4/1","w-1/4"],
        correctAnswer: 3
    },
    {
        question: "Quyidagilardan qaysi biri tailwind cssda opacity berishning xato usuli hisoblanadi?",
        answers: [ "text-blue-700/70","text-blue-700[.07]","text-blue-700/[.07]","text-blue-700 opacity-70"],
        correctAnswer: 1
    },
    {
        question: "Tailwind cssda harfalrni qiyshaytirib yozish uchun qanday still yoziladi?",
        answers: [ "font-italic","fs-italic","italic","style-italic"],
        correctAnswer: 2
    },
    {
        question: "Quyidagilardan qaysi biri tailwind cssda opacity berishning xato usuli hisoblanadi?",
        answers: [ "text-red-600/60","text-red-600[.06]","text-red-600/[.06]","text-red-600 opacity-60"],
        correctAnswer: 1
    },
    {
        question: "Tailwind cssda harfalrni qalinlashtirib yozish uchun qanday still yoziladi?",
        answers: [ "font-bold","fs-bold","bold","style-bold"],
        correctAnswer: 0
    },
    {
        question: "Tailwind cssda harfalrni qalinlashtirib yozish uchun qanday still yoziladi?",
        answers: [ "font-bold","fs-bold","bold","style-bold"],
        correctAnswer: 0
    },
    {
        question: "Tailwind cssda text-xs necha pikselga teng",
        answers: [ "14","16","18","12"],
        correctAnswer: 3
    },
    {
        question: "Quyidagilardan qaysi biri tailwind cssda arbitrary still berish usuli hisoblanadi?",
        answers: [ "text-blue-300","text-[#333]","text-br-primary","text-transparent"],
        correctAnswer: 1
    },
    {
        question: "Quyidagilardan qaysi biri tailwind cssda opacity berishning xato usuli hisoblanadi?",
        answers: [ "text-blue-600/60","text-blue-600[.06]","text-blue-600/[.06]","text-blue-600 opacity-60"],
        correctAnswer: 1
    },
    {
        question: "Tailwind cssda text-sm necha pikselga teng",
        answers: [ "14","16","18","12"],
        correctAnswer: 0
    },
    {
        question: "Tailwind cssda ml-5 necha pikselga teng",
        answers: [ "20","50","10","5"],
        correctAnswer: 0
    },
    {
        question: "Tailwind cssda ikkita element orasiga chegara berish uchun nimadan foydalanamiz?",
        answers: [ "outline","ring","offset","divide"],
        correctAnswer: 3
    },
    {
        question: "Tailwind cssda elementni display='none' qanday qilinadi?",
        answers: [ "none","d-none","hidden","d-hidden"],
        correctAnswer: 2
    },
    {
        question: "Tailwind cssda text-lg necha pikselga teng",
        answers: [ "14","16","18","12"],
        correctAnswer: 2
    },
    {
        question: "Tailwind cssda pl-5 necha pikselga teng",
        answers: [ "20","50","10","5"],
        correctAnswer: 0
    },
    {
        question: "Tailwind cssda loading effectini berish uchun qaysi animatsiya turidan foydalanamiz",
        answers: [ "animate-ping","animate-pulse","animate-ring","animate-spin"],
        correctAnswer: 3
    },
    {
        question: "Tailwind cssda elementlarga yuqoridan pastga tinimsiz harakat effectini berish uchun qaysi animatsiya turidan foydalanamiz",
        answers: [ "animate-ping","animate-pulse","animate-bounce","animate-spin"],
        correctAnswer: 2
    },
    {
        question: "Tailwind cssda text-base necha pikselga teng",
        answers: [ "14","16","18","12"],
        correctAnswer: 1
    },
]

console.log(tboot.length);

export { html, css, cssAdvanced, tboot }