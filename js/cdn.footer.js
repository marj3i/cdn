let footer = document.getElementsByTagName("footer");

let footerHtml = document.createRange().createContextualFragment(`
    <section class="footer">
      <div class="logo2">
        <img src="assets/img/logo.png"/>
      </div>
      <ul>
        <h1>المحتوى</h1>
        <li><a href="https://marj3i.github.io/programming/">تعلم البرمجة</a></li>
        <li><a href="https://marj3i.github.io/information-security/">تعلم الأمن المعلوماتي</a></li>
        <li><a href="https://marj3i.github.io/design/">تعلم التصميم</a></li>
        <li><a href="https://marj3i.github.io/more/">كل المجالات</a></li>
      </ul>
      <ul>
        <h1>الموقع</h1>
        <li><a href="https://marj3i.github.io/about/#about">حول الموقع</a></li>
        <li><a href="https://marj3i.github.io/about/#policy">السياسة و الخصوصية</a></li>
        <li><a href="https://marj3i.github.io/about/#support">للدعم او التطوير</a></li>
        <li><a href="https://marj3i.github.io/about/#contact">اتصل بنا</a></li>
      </ul>

      <ul class="">
        <h1>تابعنا:</h1>
        <li><a class="fb"href="https://github.com/marj3i"><i class="fab fa-github-square"></i>جيتهاب</a></li>
        <li><a class="fb"href="https://twitter.com/frscodes/"><i class="fab fa-twitter-square"></i>تويتر</a></li>
        <li><a class="fb"href="https://t.me/marj3i/"><i class="fab fa-telegram"></i>تلغرام</a></li>
        <li><a class="fb"href="https://www.facebook.com/marj3i/"><i class="fab fa-facebook-square"></i>فيسبوك</a></li>
      </ul>
    </section>

    <section class="copyright">
      <p>جميع الحقوق محفوظة - مرجعي 2021</p>
    </section>
`);


//add footer
footer[0].appendChild(footerHtml);

//for copyright
document.querySelector(".copyright").style.cursor = "pointer";
document.querySelector(".copyright").addEventListener("click", () => {
  window.location.href = "https://frscodes.github.io/copyright/";
});