<script>
import axios from 'axios';
export default {
  data() {
    return {
      organization: '',
      number: '',
      Email: '',
      password: '',
      showPassword: false,
      showPasswordd: false,
    }
  },
  methods: {
    register() {
      const formData = new FormData();
      formData.append('organization', this.organization);
      formData.append('number', this.number);
      formData.append('Email', this.Email);
      formData.append('password', this.password);
      formData.append('registr', true); // добавить флаг "registr" в POST запрос

      axios.post('http://localhost/this_is_the_base/Rregister.php', formData)
           .then(response => {
              // Обработка успешного ответа
              console.log('Данные успешно добавлены в базу данных');
              this.$router.push('/employer');
           })
           .catch(error => {
              // Обработка ошибки
              console.log('Произошла ошибка', error);
           });
      }
    }
  }
</script>

<template>
   <div class="container">
  <form @submit.prevent="register" >
   <h2>Регистрация</h2>
   <label>организация:</label>
   <input type="text" name="organization" required v-model="organization">
   <label>Телефон:</label>
   <input type="number" name="number" required v-model="number">
   <label>Email:</label>
   <input type="email" name="Email" required v-model="Email">

   <label>Пароль:</label>
   <input type="password" name="password" id="password-input" required v-model="password">
    <a href="#" class="password-control"></a>

   <label>Подтверждение пароля:</label>
   <input type="password" name="confirm_password" id="password-inputt" required><br>
   <a href="#" class="password-controll"></a>
   <ul class="error-list"></ul>
   <input type="submit" class="sub" value="Зарегистрироваться" name="registr">
   <router-link to="/Rautoriz">Уже есть аккаунт? Войти!</router-link>
  </form>
 </div>
</template>

<style scoped>
h2 {
    font-size: 30px;
    color: #333;
    text-align: center;
    margin-top: 30px;
   }
   label {
    font-size: 18px;
    color: #333;
    display: block;
    margin-bottom: 5px;
   }
   input[type="text"], input[type="tel"], input[type="password"], input[type="date"] , input[type="email"], input[type="number"]{
    width: 580px;
    padding: 10px;
    font-size: 16px;
    border-radius: 50px;
    outline: none;
    border: 1px solid #999;
    margin-bottom: 20px;
   }
   select{
    width: 600px;
    padding: 10px;
    font-size: 16px;
    border-radius: 50px;
    outline: none;
    border: 1px solid #999;
    margin-bottom: 20px;
   }
   input[type="submit"] {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    margin-left: 200px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
   }
   input[type="submit"]:hover {
    background-color: #555;
   }
   .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    margin-top: 50px;
   }
   a {
    display: block;
    text-align: center;
    color: #333;
    margin-top: 20px;
    font-size: 16px;
   }
   footer {
    background-color: #eee;
    padding: 20px 40px;
    margin-top: 50px;
   }
   .btn {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 20px;
    transition: background-color 0.3s ease;
   }
   .btn:hover {
    background-color: #555;
   }
   .password-control {
	position: absolute;
	top: 433px;
	right: 670px;
	display: inline-block;
	width: 20px;
	height: 20px;
	background: url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat;
}
.password-control.view {
	background: url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat;
}
.password-controll {
	position: absolute;
    top: 519px;
	right: 670px;
	display: inline-block;
	width: 20px;
	height: 20px;
	background: url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat;
}
.password-controll.view {
	background: url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat;
}
.error-list{
    color: red;
}
</style>