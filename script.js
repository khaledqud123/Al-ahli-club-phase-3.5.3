/* =========================================================
   AL AHLI CLUB JORDAN
   PHASE 3.5.3
   Premium interactive prototype
========================================================= */


/* -------------------------
   LOADER
------------------------- */

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader")?.classList.add("loaded");
  }, 900);
});


/* -------------------------
   LANGUAGE SYSTEM
------------------------- */

const translations = {

  en: {

    navHome:"Home",
    navClub:"Club",
    navSports:"Sports",
    navMeidan:"Al Meidan",
    navPool:"Pool",
    navLegacy:"Legacy",
    navContact:"Contact",
    navAdministration:"Administration",
    bookField:"Book a Field",

    heroEyebrow:"AMMAN • JORDAN • EST. 1944",
    heroLine1:"MORE",
    heroLine2:"THAN",
    heroLine3:"A CLUB.",
    heroText:"A sporting, cultural and social institution built through generations of ambition, discipline and community.",
    exploreClub:"Explore the Club",
    discoverSports:"Discover Sports",
    heroFounded:"FOUNDED",
    heroTitles:"TITLES",
    heroAthletes:"ATHLETES",
    scrollExplore:"SCROLL TO EXPLORE",

    clubLabel:"THE CLUB",
    clubTitle:"Eight decades.<br>One identity.",
    clubText:"Al Ahli has been part of Jordan's sporting and social story since 1944 — creating spaces where competition, culture and community meet.",
    discoverStory:"Discover our story",
    statFounded:"Founded",
    statTitles:"Championship titles",
    statAthletes:"Registered athletes+",
    statCulture:"Folklore members",

    exploreLabel:"EXPLORE AL AHLI",
    exploreTitle:"Choose your<br><span>experience.</span>",
    exploreText:"Sport is only one part of what makes Al Ahli what it is.",
    expSportsLabel:"SPORTS",
    expSports:"Train. Compete. Belong.",
    expMeidanLabel:"AL MEIDAN",
    expMeidan:"Strength starts here.",
    expPoolLabel:"SWIMMING POOLS",
    expPool:"Make summer yours.",
    expLegacyLabel:"LEGACY",
    expLegacy:"Built across generations.",

    sportsLabel:"SPORTS CLUBS",
    sportsTitle:"Where young<br>athletes begin.",
    sportsIntro:"Football, basketball and handball are not just sports at Al Ahli. They are pathways for children and young athletes to train, compete and grow.",

    football:"Football",
    basketball:"Basketball",
    handball:"Handball",

    footballTitle:"Football Club",
    footballText:"A dedicated environment for young players to develop their football skills, discipline and competitive experience.",
    basketballTitle:"Basketball Club",
    basketballText:"A pathway for young players to learn the fundamentals, build confidence and develop through structured basketball training.",
    handballTitle:"Handball Club",
    handballText:"One of the club's strongest sporting traditions, giving young players a place to learn, compete and become part of the Al Ahli family.",

    trainingFor:"TRAINING FOR",
    children:"Children & Youth",
    facility:"FACILITY",
    fourFields:"4 Football Fields",
    clubSport:"CLUB SPORT",
    basketballProgram:"Youth Training",
    legacySport:"LEGACY",
    handballTitles:"53 Club Titles",

    registerFootball:"Want to register for Football? Call us",
    registerBasketball:"Want to register for Basketball? Call us",
    registerHandball:"Want to register for Handball? Call us",

    fieldsLabel:"FOOTBALL FACILITIES",
    fieldsTitle:"Four fields.<br>One destination.",
    fieldsText:"Choose a field, check its demo availability and request a booking.",
    fieldOne:"Field One",
    fieldTwo:"Field Two",
    fieldThree:"Field Three",
    fieldFour:"Field Four",
    fieldStandard:"Football • Standard Pitch",
    bookThisField:"Book this field",

    meidanLabel:"AL MEIDAN",
    meidanTitle:"Strength.<br>Discipline.<br><span>Combat.</span>",
    meidanText:"Al Meidan brings together fitness, strength and combat training in one dedicated training environment.",
    gym:"Gym",
    boxing:"Boxing",
    jiujitsu:"Jiu-Jitsu",
    gymTitle:"The Gym",
    gymText:"A dedicated space for strength, conditioning and structured training.",
    strengthTraining:"Strength Training",
    conditioning:"Conditioning",
    trainingAreas:"Training Areas",
    memberSupport:"Member Support",
    boxingTitle:"Boxing",
    boxingText:"Boxing training focused on technique, conditioning, movement and discipline.",
    boxingTraining:"Boxing Training",
    technique:"Technique",
    discipline:"Discipline",
    mmaText:"Mixed martial arts training combining movement, conditioning and technical development.",
    jiujitsuTitle:"Jiu-Jitsu",
    jiujitsuText:"Technical martial arts training built around movement, control, discipline and progression.",
    jiujitsuTraining:"Jiu-Jitsu Training",

    membershipLabel:"MEMBERSHIPS",
    membershipTitle:"Choose your<br>training level.",
    membershipText:"Membership options can be customized by the club according to the final Al Meidan pricing structure.",
    monthly:"Monthly",
    quarterly:"3 Months",
    annual:"Annual",
    monthlyText:"Flexible access to the Al Meidan training environment.",
    quarterlyText:"Extended training access with member benefits.",
    annualText:"Long-term commitment for consistent training.",
    askPrice:"Ask about price",

    poolLabel:"SWIMMING POOLS",
    poolTitle:"A different side<br>of Al Ahli.",
    poolText:"Step away from competition and into a space built for swimming, families and summer.",
    poolContact:"Contact us about the pool",
    poolStatus:"POOL INFORMATION",
    poolOpen:"Opening Hours",
    daily:"Daily",
    contact:"Contact",
    callPool:"Call for current pool information",
    poolNote:"Opening hours and access arrangements should be confirmed with the club before publishing the production version.",

    adminLabel:"ADMINISTRATION",
    adminTitle:"The people<br>behind the club.",
    adminText:"Strong sporting organizations are built by strong administration, planning and people working behind the scenes.",
    board:"Club Administration",
    boardText:"Leadership, governance and strategic direction of the club.",
    sportsManagement:"Sports Management",
    sportsManagementText:"Supporting teams, athletes, training programs and sporting operations.",
    operations:"Facilities & Operations",
    operationsText:"Managing the spaces and experiences that make the club work every day.",
    adminNote:"Official names, portraits and positions can be added once supplied and approved by Al Ahli Club.",

    legacyLabel:"THE LEGACY",
    today:"TODAY",
    legacyTitle:"Eight decades<br>of becoming.",
    legacyText:"From its beginnings in Ras Al-Ain to its current home in Bayader Wadi Al-Seer, Al Ahli has grown into a major sporting, cultural and social institution.",
    footballTitles:"Football titles",
    handballTitles:"Handball titles",
    basketballTitles:"Basketball titles",

    cultureLabel:"CULTURE",
    cultureTitle:"Sport has<br>a culture.",
    cultureText:"Al Ahli's identity extends beyond sport. Its Circassian folklore group helps preserve and present cultural heritage across generations.",
    cultureMembers:"Folklore members",
    cultureCaption:"CIRCASSIAN FOLKLORE",

    communityLabel:"COMMUNITY",
    communityTitle:"A club that<br>belongs to people.",
    communityText:"Sport, culture, events and community activities come together under one roof — creating a place that is about more than competition.",
    visitClub:"Visit the club",

    bookingLabel:"FIELD BOOKING",
    bookingTitle:"Your game.<br><span>Your field.</span>",
    bookingText:"This demo lets visitors request a football field and receive a booking reference.",
    name:"Name",
    phone:"Phone",
    date:"Date",
    time:"Time",
    field:"Field",
    players:"Players",
    selectTime:"Select time",
    selectField:"Select field",
    requestBooking:"Request Booking",

    contactLabel:"VISIT AL AHLI",
    contactTitle:"Come experience<br>the club.",
    contactText:"52 Mousa Al-Nahar Street, Amman, Jordan.",
    address:"ADDRESS",
    followLabel:"FOLLOW AL AHLI",
    followTitle:"Stay connected.",
    mapTitle:"Bayader Wadi Al-Seer",
    mapText:"52 Mousa Al-Nahar Street, Amman",
    openMaps:"Open in Google Maps",

    finalLabel:"AL AHLI • 1944",
    finalTitle:"More than<br>a club.",
    backTop:"Back to the beginning",

    bookingReceived:"Booking request received.",
    bookingReceivedText:"Your demo booking request has been saved.",
    reference:"REFERENCE",
    done:"Done",

    footerConcept:"Digital concept • Phase 3.5.3"
  },


  ar: {

    navHome:"الرئيسية",
    navClub:"النادي",
    navSports:"الرياضات",
    navMeidan:"الميدان",
    navPool:"المسابح",
    navLegacy:"الإرث",
    navContact:"اتصل بنا",
    navAdministration:"الإدارة",
    bookField:"حجز ملعب",

    heroEyebrow:"عمّان • الأردن • تأسس عام 1944",
    heroLine1:"أكثر",
    heroLine2:"من",
    heroLine3:"مجرد نادٍ.",
    heroText:"صرح رياضي وثقافي واجتماعي بُني عبر أجيال من الطموح والانضباط وروح المجتمع.",
    exploreClub:"استكشف النادي",
    discoverSports:"اكتشف الرياضات",
    heroFounded:"التأسيس",
    heroTitles:"لقباً",
    heroAthletes:"رياضي",
    scrollExplore:"استكشف الموقع",

    clubLabel:"النادي",
    clubTitle:"ثمانية عقود.<br>هوية واحدة.",
    clubText:"كان النادي الأهلي جزءاً من قصة الأردن الرياضية والاجتماعية منذ عام 1944، حيث يجتمع التنافس والثقافة والمجتمع في مكان واحد.",
    discoverStory:"اكتشف قصتنا",
    statFounded:"سنة التأسيس",
    statTitles:"بطولة ولقب",
    statAthletes:"رياضي مسجل+",
    statCulture:"عضو في فرقة الفلكلور",

    exploreLabel:"استكشف الأهلي",
    exploreTitle:"اختر<br><span>تجربتك.</span>",
    exploreText:"الرياضة ليست سوى جزء واحد مما يجعل النادي الأهلي مميزاً.",
    expSportsLabel:"الرياضات",
    expSports:"تدرّب. نافس. انتمِ.",
    expMeidanLabel:"الميدان",
    expMeidan:"القوة تبدأ هنا.",
    expPoolLabel:"المسابح",
    expPool:"اجعل الصيف لك.",
    expLegacyLabel:"الإرث",
    expLegacy:"بُني عبر الأجيال.",

    sportsLabel:"الأندية الرياضية",
    sportsTitle:"حيث يبدأ<br>الرياضيون الصغار.",
    sportsIntro:"كرة القدم وكرة السلة وكرة اليد ليست مجرد رياضات في الأهلي، بل مسارات للأطفال والناشئين للتدريب والمنافسة والتطور.",

    football:"كرة القدم",
    basketball:"كرة السلة",
    handball:"كرة اليد",

    footballTitle:"نادي كرة القدم",
    footballText:"بيئة مخصصة للاعبين الصغار لتطوير مهارات كرة القدم والانضباط والخبرة التنافسية.",
    basketballTitle:"نادي كرة السلة",
    basketballText:"مسار للاعبين الصغار لتعلم الأساسيات وبناء الثقة والتطور من خلال تدريب منظم.",
    handballTitle:"نادي كرة اليد",
    handballText:"واحد من أعرق تقاليد النادي الرياضية، ويوفر للاعبين الصغار مكاناً للتعلم والمنافسة والانتماء إلى عائلة الأهلي.",

    trainingFor:"التدريب لـ",
    children:"الأطفال والناشئين",
    facility:"المنشأة",
    fourFields:"4 ملاعب كرة قدم",
    clubSport:"رياضة النادي",
    basketballProgram:"تدريب الناشئين",
    legacySport:"الإرث",
    handballTitles:"53 لقباً",

    registerFootball:"تريد التسجيل في كرة القدم؟ اتصل بنا",
    registerBasketball:"تريد التسجيل في كرة السلة؟ اتصل بنا",
    registerHandball:"تريد التسجيل في كرة اليد؟ اتصل بنا",

    fieldsLabel:"مرافق كرة القدم",
    fieldsTitle:"أربعة ملاعب.<br>وجهة واحدة.",
    fieldsText:"اختر الملعب واطلب الحجز.",
    fieldOne:"الملعب الأول",
    fieldTwo:"الملعب الثاني",
    fieldThree:"الملعب الثالث",
    fieldFour:"الملعب الرابع",
    fieldStandard:"كرة قدم • ملعب قياسي",
    bookThisField:"احجز هذا الملعب",

    meidanLabel:"الميدان",
    meidanTitle:"قوة.<br>انضباط.<br><span>قتال.</span>",
    meidanText:"يجمع الميدان بين اللياقة والقوة وتدريبات الرياضات القتالية في بيئة تدريب متخصصة.",
    gym:"الجيم",
    boxing:"الملاكمة",
    jiujitsu:"الجيوجيتسو",
    gymTitle:"الجيم",
    gymText:"مساحة مخصصة لتدريبات القوة واللياقة والتدريب المنظم.",
    strengthTraining:"تدريب القوة",
    conditioning:"اللياقة البدنية",
    trainingAreas:"مناطق التدريب",
    memberSupport:"دعم الأعضاء",
    boxingTitle:"الملاكمة",
    boxingText:"تدريب الملاكمة مع التركيز على التقنية واللياقة والحركة والانضباط.",
    boxingTraining:"تدريب الملاكمة",
    technique:"التقنية",
    discipline:"الانضباط",
    mmaText:"تدريب الفنون القتالية المختلطة الذي يجمع بين الحركة واللياقة والتطور التقني.",
    jiujitsuTitle:"الجيوجيتسو",
    jiujitsuText:"تدريب قتالي تقني يعتمد على الحركة والسيطرة والانضباط والتطور.",
    jiujitsuTraining:"تدريب الجيوجيتسو",

    membershipLabel:"العضويات",
    membershipTitle:"اختر مستوى<br>تدريبك.",
    membershipText:"يمكن للنادي تعديل خيارات العضوية وفق الأسعار النهائية المعتمدة للميدان.",
    monthly:"شهري",
    quarterly:"3 أشهر",
    annual:"سنوي",
    monthlyText:"دخول مرن إلى بيئة التدريب في الميدان.",
    quarterlyText:"فترة تدريب أطول مع مزايا للأعضاء.",
    annualText:"التزام طويل المدى للتدريب المستمر.",
    askPrice:"استفسر عن السعر",

    poolLabel:"المسابح",
    poolTitle:"جانب مختلف<br>من الأهلي.",
    poolText:"ابتعد عن المنافسة واستمتع بمكان مخصص للسباحة والعائلات والصيف.",
    poolContact:"تواصل معنا حول المسبح",
    poolStatus:"معلومات المسبح",
    poolOpen:"أوقات الدوام",
    daily:"يومياً",
    contact:"التواصل",
    callPool:"اتصل للحصول على معلومات المسبح الحالية",
    poolNote:"يجب تأكيد أوقات الدوام وترتيبات الدخول مع النادي قبل نشر النسخة النهائية.",

    adminLabel:"الإدارة",
    adminTitle:"الأشخاص<br>خلف النادي.",
    adminText:"المنظمات الرياضية القوية تُبنى بإدارة قوية وتخطيط وأشخاص يعملون خلف الكواليس.",
    board:"إدارة النادي",
    boardText:"القيادة والحوكمة والتوجيه الاستراتيجي للنادي.",
    sportsManagement:"الإدارة الرياضية",
    sportsManagementText:"دعم الفرق والرياضيين وبرامج التدريب والعمليات الرياضية.",
    operations:"المرافق والعمليات",
    operationsText:"إدارة المساحات والتجارب التي تجعل النادي يعمل كل يوم.",
    adminNote:"يمكن إضافة الأسماء والصور والمناصب الرسمية بعد تزويدنا بها واعتمادها من النادي الأهلي.",

    legacyLabel:"الإرث",
    today:"اليوم",
    legacyTitle:"ثمانية عقود<br>من البناء والتطور.",
    legacyText:"من بداياته في رأس العين إلى مقره الحالي في بيادر وادي السير، تطور الأهلي ليصبح مؤسسة رياضية وثقافية واجتماعية مهمة.",
    footballTitles:"ألقاب كرة القدم",
    handballTitles:"ألقاب كرة اليد",
    basketballTitles:"ألقاب كرة السلة",

    cultureLabel:"الثقافة",
    cultureTitle:"للرياضة<br>ثقافة.",
    cultureText:"هوية الأهلي تتجاوز الرياضة. وتساهم فرقة الفلكلور الشركسي في الحفاظ على التراث الثقافي وتقديمه عبر الأجيال.",
    cultureMembers:"عضو في الفرقة",
    cultureCaption:"الفلكلور الشركسي",

    communityLabel:"المجتمع",
    communityTitle:"نادٍ<br>ينتمي إليه الناس.",
    communityText:"تجتمع الرياضة والثقافة والفعاليات والأنشطة المجتمعية تحت سقف واحد، ليكون النادي أكثر من مجرد منافسة.",
    visitClub:"زر النادي",

    bookingLabel:"حجز ملعب",
    bookingTitle:"مباراتك.<br><span>ملعبك.</span>",
    bookingText:"هذه نسخة تجريبية تتيح للزوار طلب ملعب كرة قدم والحصول على رقم مرجعي.",
    name:"الاسم",
    phone:"الهاتف",
    date:"التاريخ",
    time:"الوقت",
    field:"الملعب",
    players:"اللاعبون",
    selectTime:"اختر الوقت",
    selectField:"اختر الملعب",
    requestBooking:"طلب الحجز",

    contactLabel:"زيارة الأهلي",
    contactTitle:"تعال واختبر<br>تجربة النادي.",
    contactText:"شارع موسى النهار 52، عمّان، الأردن.",
    address:"العنوان",
    followLabel:"تابع الأهلي",
    followTitle:"ابقَ على تواصل.",
    mapTitle:"بيادر وادي السير",
    mapText:"شارع موسى النهار 52، عمّان",
    openMaps:"افتح في خرائط Google",

    finalLabel:"الأهلي • 1944",
    finalTitle:"أكثر من<br>مجرد نادٍ.",
    backTop:"العودة إلى البداية",

    bookingReceived:"تم استلام طلب الحجز.",
    bookingReceivedText:"تم حفظ طلب الحجز التجريبي.",
    reference:"الرقم المرجعي",
    done:"تم",

    footerConcept:"نسخة رقمية تجريبية • المرحلة 3.5.3"
  }

};


let currentLanguage =
  localStorage.getItem("alAhliLanguage") || "en";


function applyLanguage(lang){

  currentLanguage = lang;

  const dictionary = translations[lang];

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.dataset.i18n;

    if(dictionary[key] !== undefined){
      element.innerHTML = dictionary[key];
    }

  });

  document.querySelectorAll("[data-placeholder-en]").forEach(input => {

    input.placeholder =
      lang === "ar"
        ? input.dataset.placeholderAr
        : input.dataset.placeholderEn;

  });

  document.getElementById("langToggle").textContent =
    lang === "ar" ? "EN" : "عربي";

  localStorage.setItem("alAhliLanguage",lang);
}


document.getElementById("langToggle").addEventListener("click",() => {

  applyLanguage(
    currentLanguage === "en" ? "ar" : "en"
  );

});


applyLanguage(currentLanguage);


/* -------------------------
   MOBILE MENU
------------------------- */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click",() => {

  mobileMenu.classList.toggle("open");

  if(mobileMenu.classList.contains("open")){
    mobileMenu.style.display = "flex";
  }else{
    mobileMenu.style.display = "none";
  }

});

document.querySelectorAll(".mobile-menu a").forEach(link => {

  link.addEventListener("click",() => {
    mobileMenu.classList.remove("open");
    mobileMenu.style.display = "none";
  });

});


/* -------------------------
   SCROLL REVEALS
------------------------- */

const revealObserver = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }

    });

  },
  {threshold:.12}
);

document.querySelectorAll(".reveal").forEach(element => {
  revealObserver.observe(element);
});


/* -------------------------
   COUNTERS
------------------------- */

const counterObserver = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if(!entry.isIntersecting) return;

      const counter = entry.target;
      const target = Number(counter.dataset.counter);

      let current = 0;
      const duration = 1300;
      const start = performance.now();

      function animate(time){

        const progress =
          Math.min((time-start)/duration,1);

        const eased =
          1-Math.pow(1-progress,3);

        current =
          Math.floor(target*eased);

        counter.textContent =
          current.toLocaleString();

        if(progress < 1){
          requestAnimationFrame(animate);
        }

      }

      requestAnimationFrame(animate);

      counterObserver.unobserve(counter);

    });

  },
  {threshold:.6}
);

document.querySelectorAll("[data-counter]").forEach(counter => {
  counterObserver.observe(counter);
});


/* -------------------------
   SPORTS TABS
------------------------- */

const sportTabs =
  document.querySelectorAll(".sport-tab");

const sportContents =
  document.querySelectorAll(".sport-content");


sportTabs.forEach(tab => {

  tab.addEventListener("click",() => {

    const sport = tab.dataset.sport;

    sportTabs.forEach(t => {
      t.classList.remove("active");
    });

    sportContents.forEach(content => {
      content.classList.remove("active");
    });

    tab.classList.add("active");

    document
      .getElementById(`${sport}-content`)
      ?.classList.add("active");

  });

});


/* -------------------------
   AL MEIDAN TABS
------------------------- */

const meidanTabs =
  document.querySelectorAll(".meidan-tab");

const meidanContents =
  document.querySelectorAll(".meidan-content");


meidanTabs.forEach(tab => {

  tab.addEventListener("click",() => {

    const selected =
      tab.dataset.meidan;

    meidanTabs.forEach(t => {
      t.classList.remove("active");
    });

    meidanContents.forEach(content => {
      content.classList.remove("active");
    });

    tab.classList.add("active");

    document
      .getElementById(`${selected}-content`)
      ?.classList.add("active");

  });

});


/* -------------------------
   FIELD QUICK BOOK
------------------------- */

document.querySelectorAll(".field-book").forEach(button => {

  button.addEventListener("click",() => {

    const field = button.dataset.field;

    document.getElementById("bookingField").value = field;

    document
      .getElementById("booking")
      .scrollIntoView({
        behavior:"smooth"
      });

  });

});


/* -------------------------
   BOOKING SYSTEM
------------------------- */

const bookingForm =
  document.getElementById("bookingForm");

const bookingModal =
  document.getElementById("bookingModal");

const bookingReference =
  document.getElementById("bookingReference");

const closeModal =
  document.getElementById("closeModal");

const modalDone =
  document.getElementById("modalDone");

const bookingMessage =
  document.getElementById("bookingMessage");


function generateReference(){

  return "AA-" +
    Math.floor(100000 + Math.random()*900000);

}


function getBookings(){

  return JSON.parse(
    localStorage.getItem("alAhliBookings353") || "[]"
  );

}


function saveBookings(bookings){

  localStorage.setItem(
    "alAhliBookings353",
    JSON.stringify(bookings)
  );

}


bookingForm.addEventListener("submit",(event) => {

  event.preventDefault();

  const name =
    document.getElementById("bookingName").value.trim();

  const phone =
    document.getElementById("bookingPhone").value.trim();

  const date =
    document.getElementById("bookingDate").value;

  const time =
    document.getElementById("bookingTime").value;

  const field =
    document.getElementById("bookingField").value;

  const players =
    document.getElementById("bookingPlayers").value;


  if(!name || !phone || !date || !time || !field){

    bookingMessage.textContent =
      currentLanguage === "ar"
        ? "يرجى تعبئة جميع المعلومات المطلوبة."
        : "Please complete all required fields.";

    return;
  }


  const bookings =
    getBookings();


  const conflict =
    bookings.some(booking =>
      booking.date === date &&
      booking.time === time &&
      booking.field === field &&
      booking.status !== "rejected"
    );


  if(conflict){

    bookingMessage.textContent =
      currentLanguage === "ar"
        ? "هذا الملعب محجوز في هذا الوقت في النسخة التجريبية."
        : "This field is already requested for this time in the demo.";

    return;

  }


  const reference =
    generateReference();


  bookings.push({

    reference,
    name,
    phone,
    date,
    time,
    field,
    players,
    status:"pending",
    createdAt:new Date().toISOString()

  });


  saveBookings(bookings);


  bookingReference.textContent =
    reference;

  bookingModal.classList.add("show");

  bookingMessage.textContent = "";

  bookingForm.reset();

});


function closeBookingModal(){

  bookingModal.classList.remove("show");

}


closeModal.addEventListener(
  "click",
  closeBookingModal
);

modalDone.addEventListener(
  "click",
  closeBookingModal
);

bookingModal.addEventListener("click",(event) => {

  if(event.target === bookingModal){
    closeBookingModal();
  }

});


/* -------------------------
   DATE MINIMUM
------------------------- */

const dateInput =
  document.getElementById("bookingDate");

const today =
  new Date().toISOString().split("T")[0];

dateInput.min = today;


/* -------------------------
   NAV SCROLL EFFECT
------------------------- */

const nav =
  document.querySelector(".nav");

window.addEventListener("scroll",() => {

  if(window.scrollY > 40){

    nav.style.background =
      "rgba(8,9,9,.9)";

  }else{

    nav.style.background =
      "rgba(8,9,9,.72)";

  }

});


/* -------------------------
   ACTIVE CHAPTER
------------------------- */

const sections =
  document.querySelectorAll("main section[id]");

const navLinks =
  document.querySelectorAll(".nav-links a");


const sectionObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if(entry.isIntersecting){

          navLinks.forEach(link => {

            link.classList.remove("active");

            if(
              link.getAttribute("href") ===
              `#${entry.target.id}`
            ){
              link.classList.add("active");
            }

          });

        }

      });

    },
    {
      threshold:.45
    }
  );


sections.forEach(section => {
  sectionObserver.observe(section);
});


/* -------------------------
   ESCAPE KEY
------------------------- */

document.addEventListener("keydown",(event) => {

  if(event.key === "Escape"){

    bookingModal.classList.remove("show");

    mobileMenu.classList.remove("open");
    mobileMenu.style.display = "none";

  }

});


/* -------------------------
   PREMIUM CARD POINTER
------------------------- */

document.querySelectorAll(
  ".experience-card,.field-card,.admin-card,.membership-card"
).forEach(card => {

  card.addEventListener("mousemove",(event) => {

    if(window.innerWidth < 700) return;

    const rect =
      card.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    const rotateX =
      ((y/rect.height)-.5)*-2;

    const rotateY =
      ((x/rect.width)-.5)*2;

    card.style.transform =
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;

  });

  card.addEventListener("mouseleave",() => {

    card.style.transform = "";

  });

});


/* -------------------------
   SMOOTH ANCHORS
------------------------- */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click",(event) => {

    const targetId =
      link.getAttribute("href");

    if(targetId === "#") return;

    const target =
      document.querySelector(targetId);

    if(!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior:"smooth",
      block:"start"
    });

  });

});
