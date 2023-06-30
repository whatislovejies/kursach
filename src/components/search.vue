<script>

</script>

<template>
    <header>
    <nav class="top-menu">
        <ul class="menu-main">
          <li class="left-item current"><router-link to="/">Соискателям</router-link></li>
          <li class="left-item"><router-link to="/employer">Работодателям</router-link></li>
      </ul>
      </nav>
      <section class="midle-menu">
      <ul class="menu">
        <li class=""><router-link to="/Sregister" class="resume_create">Создать резюме</router-link></li>
        <li class=""><router-link to="/Sautoriz" class="entrance">Вход</router-link></li>
    </ul>
    <form>
        <input type="text" placeholder="Поиск" class="input">
        <button type="submit" class="btn" @click="goToOtherPage"><i class="fas fa-search"  ></i></button><br>
        <ul class="vidget">
            <li>Вакансии</li>
            <li>Резюме</li>
            <li>Компании</li>
        </ul>
      </form>
    </section>
    <div class="container">
  <div class="left-block">
   <h4>Выберите категорию:</h4>
   <label><input type="radio" name="category" value="it">IT</label><br>
   <label><input type="radio" name="category" value="finance">Финансы</label><br>
   <label><input type="radio" name="category" value="marketing">Маркетинг</label><br>
  </div>
  <div class="right-block">
   <h3>Список вакансий:</h3>
   <ul class="job-list">
    <li class="job-item">
     <div class="job-title">Frontend разработчик</div>
     <div class="job-description">от 90 000 руб</div>
     <div class="job-description">Опыт от 3 лет до 6 лет</div>
     <div class="job-description">Требуется опытный frontend разработчик для разработки интерфейсов веб-приложений. Знание HTML, CSS, JavaScript, React.</div>
     <input type="submit" value="Откликнуться" class="btng">
     <input type="submit" value="Показать контакты" class="btnw">
    </li>
    <li class="job-item">
     <div class="job-title">Финансовый аналитик</div>
     <div class="job-description">от 90 000 руб</div>
     <div class="job-description">Опыт от 3 лет до 6 лет</div>
     <div class="job-description">Требуется аналитик для проведения финансовых исследований. Знание Excel, SQL.</div>
     <input type="submit" value="Откликнуться" class="btng">
     <input type="submit" value="Показать контакты" class="btnw">
    </li>
    <li class="job-item">
     <div class="job-title">Менеджер по маркетингу</div>
     <div class="job-description">от 90 000 руб</div>
     <div class="job-description">Опыт от 3 лет до 6 лет</div>
     <div class="job-description">Требуется менеджер для разработки и проведения маркетинговых кампаний. Знание Google Analytics, AdWords.</div>
     <input type="submit" value="Откликнуться" class="btng">
     <input type="submit" value="Показать контакты" class="btnw">
    </li>
   </ul>
  </div>
 </div>
    </header>
    <footer>
  <p>© 2023 Работа.онлайн - поиск работы онлайн. Все права защищены.</p>
  <nav>
   <ul>
    <li><a href="#">Политика конфиденциальности</a></li>
    <li><a href="#">Условия использования</a></li>
    <li><a href="#">О нас</a></li>
   </ul>
  </nav>
 </footer>
</template>

<style scoped>
.midle-menu{
  background-size: cover;
  background-repeat: no-repeat;
  height: 750px;
  margin-top: -70px; 
}
.menu {
    border-bottom: 60px solid #E0FFFF;
    
}
form {
  position: relative;
  width: 500px;
  margin: 0 auto;
  height: 42px;
  margin-top: -30px;
  
}
.container {
   display: flex;
   flex-direction: row
  }

  .left-block {
   flex: 1;
   padding: 10px;
  }

  .right-block {
   flex: 2;
   margin-left:-440px;
   padding: 10px;
  }

  input[type="radio"] {
   margin-right: 10px;
  }

  .job-list {
   list-style: none;
   padding: 0;
  }

  .job-item {
   margin-bottom: 10px;
   border-left: 5px solid #5F9EA0;
  }

  .job-title {
   font-weight: bold;
   margin-bottom: 5px;
   font-size: 24px;
   margin-left: 10px;
  }

  .job-description {
   margin-bottom: 5px;
   margin-left: 10px;
  }

  .container{
    margin-top: -400px;
    margin-left: 470px;
  }
  .btng{
  background-color: #feb386;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 15px;
}
.btnw{
  background-color: white;
  padding: 10px;
  border: 1px solid #feb386;
  border-radius: 5px;
  margin-left: 10px;
  margin-top: 20px;
  }
  .btng:hover{
    transform: scale(1.1);
  }
  .btnw:hover{
    transform: scale(1.1);
    background-color: #feb386;
    color: white;
  }
.vidget{
    display: flex;
    margin-top: 80px;
    margin-left:-270px
}
.vidget li{
    margin-left:29px;
    list-style: none;
}
</style>
