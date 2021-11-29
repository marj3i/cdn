let footer = document.getElementsByTagName("footer");
let footerHtml = document.createRange().createContextualFragment(`
    <section class="footer">
      <div class="logo2">
        <img src="assets/img/logo.png" />
      </div>
      <ul>
        <h1>المحتوى</h1>
        <li><a href="https://marj3i.github.io/programming/">تعلم البرمجة</a></li>
      </ul>
      <ul>
        <h1>الموقع</h1>
        <li><a href="#">حول الموقع</a></li>
        <li><a href="#">السياسة و الخصوصية</a></li>
        <li><a href="#">للدعم او التطوير</a></li>
        <li><a href="#">اتصل بنا</a></li>
      </ul>

      <ul>
        <li><a href="#">فيسبوك</a></li>
      </ul>
      
    </section>

    <section class="copyright">
      <p>جميع الحقوق محفوظة - مرجعي 2021</p>
    </section>
`)
//add footer to doc
footer[0].appendChild(footerHtml);