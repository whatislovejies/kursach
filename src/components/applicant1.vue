<script>
import axios from 'axios';
export default {
  data() {
    return {
      showNewVacancies: true,
      showWorkFromHome: false,
      showPartTime: false,
      showNoExperience: false,
      name: 'HomePage',
      vacancies: [],
      showDropdown: false
    }
  },
  mounted() {
    // Получение данных из сервера
    axios.get('http://localhost/this_is_the_base/vacancy.php')
      .then(response => {
        this.vacancies = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
      goToOtherPage () {
      this.$router.push('/Search')
    },
    toggleDropdown() {
  this.showDropdown = !this.showDropdown;
  // Добавляем или удаляем класс "open" у родительского элемента
  const dropdown = this.$refs.dropdown;
  if (dropdown && dropdown.classList) {
      // Добавляем или удаляем класс "open" у элемента dropdown
      dropdown.classList.toggle('open', this.showDropdown);
    }
},
    goToOtherPage() {
      this.$router.push('/Search');
    }
  },
  
};

</script>

<template>
  <div>
    <header>
      <section class="middle-menu">
        <ul class="menu">
          <li class=""><router-link to="/resume" class="resume_create">Создать резюме</router-link></li>
          <li class="dropdown">
            <router-link to="#" class="entrance" @click="toggleDropdown">Личный кабинет <i class="fa fa-user"></i></router-link>
            <ul class="dropdown-menu" v-show="showDropdown" :class="{ 'dropdown-open': showDropdown }">
              <li class="one"><router-link to="#">Личные данные</router-link></li>
              <li class="one"><router-link to="#">Резюме</router-link></li>
              <li class="one"><router-link to="#">Выход</router-link></li>
            </ul>
          </li>
        </ul>
      <form class="form">
        <h1 >Работа найдётся для каждого</h1>
        <input type="text" placeholder="Поиск" class="input">
        <button type="submit" class="btn" @click="goToOtherPage"><i class="fas fa-search"  ></i></button>
      </form>
      <router-link to="/employer">Я ищу сотрудника</router-link> 
    </section>  
      </header>
      <section class="actual-menu">
        <ul class="skyline">
          <li @click.prevent="showNewVacancies = true; showWorkFromHome = false; showPartTime = false; showNoExperience = false;">
        <router-link to="" :class="{ 'active-link': showNewVacancies }">Новые вакансии</router-link>
      </li>
      <li @click.prevent="showNewVacancies = false; showWorkFromHome = true; showPartTime = false; showNoExperience = false;">
        <router-link to="" :class="{ 'active-link': showWorkFromHome }">Работа из дома</router-link>
      </li>
      <li @click.prevent="showNewVacancies = false; showWorkFromHome = false; showPartTime = true; showNoExperience = false;">
        <router-link to="" :class="{ 'active-link': showPartTime }">Подработка</router-link>
      </li>
      <li @click.prevent="showNewVacancies = false; showWorkFromHome = false; showPartTime = false; showNoExperience = true;">
        <router-link to="" :class="{ 'active-link': showNoExperience }">Работа без опыта</router-link>
      </li>
          <li><router-link to=" ">Все вакансии</router-link></li>
        </ul>
        <div v-show="showNewVacancies">
      <!-- Компонент для новых вакансий -->
      <div style="display: flex; margin-top:50px;">
  <div style="width: 550px; background-color: #f2f2f2; padding: 20px;">
    <div class="s1">01.01.2022</div>
    <div class="s2">Заголовок блока</div>
    <div class="s3">Текст первого абзаца.</div>
    <div class="s4">Текст второго абзаца.</div>
    <button class="btng">Зеленая кнопка</button>
    <button class="btnw">Белая кнопка</button>
  </div>
  <div style="width: 550px; background-color: #f2f2f2; padding: 20px; margin-left: 20px;">
    <div class="s1">02.01.2022</div>
    <div class="s2">Заголовок второго блока</div>
    <div class="s3">Текст первого абзаца второго блока.</div>
    <div class="s4">Текст второго абзаца второго блока.</div>
    <button class="btng">Зеленая кнопка</button>
    <button class="btnw">Белая кнопка</button>
  </div>
  <div style="width: 550px; background-color: #f2f2f2; padding: 20px; margin-left: 20px;">
    <div class="s1">02.01.2022</div>
    <div class="s2">Заголовок второго блока</div>
    <div class="s3">Текст первого абзаца второго блока.</div>
    <div class="s4">Текст второго абзаца второго блока.</div>
    <button class="btng">Зеленая кнопка</button>
    <button class="btnw">Белая кнопка</button>
  </div>
</div>
    </div>
    <div v-show="showWorkFromHome">
      <!-- Компонент для работы из дома -->
      <p>Компонент для работы из дома</p>
      <div style="display: flex; margin-top:50px;">
  <div style="width: 550px; background-color: #f2f2f2; padding: 20px;">
    <div class="s1">01.01.2022</div>
    <div class="s2">Заголовок блока</div>
    <div class="s3">Текст первого абзаца.</div>
    <div class="s4">Текст второго абзаца.</div>
    <button class="btng">Зеленая кнопка</button>
    <button class="btnw">Белая кнопка</button>
  </div>
  <div style="width: 550px; background-color: #f2f2f2; padding: 20px; margin-left: 20px;">
    <div class="s1">02.01.2022</div>
    <div class="s2">Заголовок второго блока</div>
    <div class="s3">Текст первого абзаца второго блока.</div>
    <div class="s4">Текст второго абзаца второго блока.</div>
    <button class="btng">Зеленая кнопка</button>
    <button class="btnw">Белая кнопка</button>
  </div>
  <div style="width: 550px; background-color: #f2f2f2; padding: 20px; margin-left: 20px;">
    <div class="s1">02.01.2022</div>
    <div class="s2">Заголовок второго блока</div>
    <div class="s3">Текст первого абзаца второго блока.</div>
    <div class="s4">Текст второго абзаца второго блока.</div>
    <button class="btng">Зеленая кнопка</button>
    <button class="btnw">Белая кнопка</button>
  </div>
</div>
    </div>
    <div v-show="showPartTime">
      <!-- Компонент для подработки -->
      <p>Компонент для подработки</p>
      <div style="display: flex; margin-top:50px;">
  <div style="width: 550px; background-color: #f2f2f2; padding: 20px;">
    <div class="s1">01.01.2022</div>
    <div class="s2">Заголовок блока</div>
    <div class="s3">Текст первого абзаца.</div>
    <div class="s4">Текст второго абзаца.</div>
    <button class="btng">Зеленая кнопка</button>
    <button class="btnw">Белая кнопка</button>
  </div>
  <div style="width: 550px; background-color: #f2f2f2; padding: 20px; margin-left: 20px;">
    <div class="s1">02.01.2022</div>
    <div class="s2">Заголовок второго блока</div>
    <div class="s3">Текст первого абзаца второго блока.</div>
    <div class="s4">Текст второго абзаца второго блока.</div>
    <button class="btng">Зеленая кнопка</button>
    <button class="btnw">Белая кнопка</button>
  </div>
  <div style="width: 550px; background-color: #f2f2f2; padding: 20px; margin-left: 20px;">
    <div class="s1">02.01.2022</div>
    <div class="s2">Заголовок второго блока</div>
    <div class="s3">Текст первого абзаца второго блока.</div>
    <div class="s4">Текст второго абзаца второго блока.</div>
    <button class="btng">Зеленая кнопка</button>
    <button class="btnw">Белая кнопка</button>
  </div>
</div>
    </div>
    <div v-show="showNoExperience">
      <!-- Компонент для работы без опыта -->
      <p>Компонент для работы без опыта</p>
      <div style="display: flex; margin-top:50px;">
  <div style="width: 550px; background-color: #f2f2f2; padding: 20px;">
    <div class="s1">01.01.2022</div>
    <div class="s2">Заголовок блока</div>
    <div class="s3">Текст первого абзаца.</div>
    <div class="s4">Текст второго абзаца.</div>
    <button class="btng">Зеленая кнопка</button>
    <button class="btnw">Белая кнопка</button>
  </div>
  <div style="width: 550px; background-color: #f2f2f2; padding: 20px; margin-left: 20px;">
    <div class="s1">02.01.2022</div>
    <div class="s2">Заголовок второго блока</div>
    <div class="s3">Текст первого абзаца второго блока.</div>
    <div class="s4">Текст второго абзаца второго блока.</div>
    <button class="btng">Зеленая кнопка</button>
    <button class="btnw">Белая кнопка</button>
  </div>
  <div style="width: 550px; background-color: #f2f2f2; padding: 20px; margin-left: 20px;">
    <div class="s1">02.01.2022</div>
    <div class="s2">Заголовок второго блока</div>
    <div class="s3">Текст первого абзаца второго блока.</div>
    <div class="s4">Текст второго абзаца второго блока.</div>
    <button class="btng">Зеленая кнопка</button>
    <button class="btnw">Белая кнопка</button>
  </div>
</div>
    </div>
      </section>
      <section class="bblock">
  <h1>Работа и вакансии в Магнитогорске</h1>

    <div v-for="vacancy in vacancies" :key="vacancy.id" class="block">
  <h2>{{ vacancy.title }}</h2>
  <p>{{ vacancy.place_work }}</p>
  <p>{{ vacancy.description_vacancy }}</p>
  <p>{{ vacancy.work_experience }}</p>
  <p>{{ vacancy.employee_responsibilities }}</p>
  <p>{{ vacancy.key_skills }}</p>
</div>
      </section>
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
 
  </div>
</template>

<style scoped>
.menu {
  list-style-type: none;
  padding: 0;
  margin: 0;
  
}

.menu li {
  display: inline-block;
  
}

.menu li a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #000;
}
.s1{
  font-size: 18px;
  font-weight: bold;
}
.s2{
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
}
.s3{
  font-size: 16px;
   margin-top: 20px;
}
.s4{
  font-size: 16px;
   margin-top: 10px;
}
.btng{
  background-color: #feb386;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
}
.btnw{
  background-color: white;
  color: black;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  margin-top: 20px;
  }
  .bblock{
    width: 1400px;
    margin-left:12%;
  }
  .block {
    display: inline-block;
    width: 304px;
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    text-align: center;
    border-right: 5px solid #5F9EA0;
    
}
.block:hover {
  transform: scale(1.1);
}
.dropdown {
  position: relative;
  display: inline-block;
}
.one{
  padding-left: 10px;
}
.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0px;
  padding: 0;
  margin-top: 5px;
  transition: height 0.5s ease;
  
}
.dropdown .dropdown-menu {
  display: block;
  white-space: normal;
  
}
.dropdown-menu li {
  /* Удалите "width: 100%;" */
  width:100%;
  margin-left: -12px;
  margin-top: -50px;
}

.dropdown-menu li a {
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
  border-radius: 50px;
  background-color: #fff;
}
.dropdown-menu li a:hover{
  background: #feb386;
}
.dropdown-menu li:last-child a {
  border-bottom: none;
}
.dropdown-menu.dropdown-open {
  height: auto;
  animation: slide-down 0.9s ease;
}
@keyframes slide-down {
  0% {
    transform: translateY(-30%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
