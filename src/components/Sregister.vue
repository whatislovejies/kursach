<script>
import axios from 'axios';
export default {
  data() {
    return {
      formIsValid: false,
      email_exists: false,
      name: '',
      surname: '',
      patronymic: '',
      telephone: '+7',
      date_birth: '',
      city_residence: '',
      citizenship: '',
      Paul: '',
      email: '',
      password: '',
      passwordd: '',
      errors: [],
      showPassword: false,
      showPasswordd: false,
    }
  },
  methods: {
    onSubmit() {
      console.log('onSubmit called');
    this.validateForm();
    console.log('errors:', this.errors);
    if (!this.errors.length) {
      this.register();
    }
  },
    register() {
      console.log('register called');
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('surname', this.surname);
      formData.append('patronymic', this.patronymic);
      formData.append('telephone', this.telephone);
      formData.append('date_birth', this.date_birth);
      formData.append('city_residence', this.city_residence);
      formData.append('citizenship', this.citizenship);
      formData.append('Paul', this.Paul);
      formData.append('email', this.email);
      formData.append('password', this.password);
      formData.append('registr', true); // добавить флаг "registr" в POST запрос

      axios.post('http://localhost/this_is_the_base/Sregistr.php', formData)
     .then(response => {
         if (response.data === "email_exists") {
             // Если email уже существует, добавить ошибку в массив errors
             this.errors.push("Этот email уже зарегистрирован");
         } else if (response.data === "success") {
             // Если данные успешно добавлены, перенаправить на главную страницу
             console.log('Данные успешно добавлены в базу данных');
             this.$router.push('/');
         } else {
             // Если произошла какая-то другая ошибка, вывести сообщение об ошибке
             console.log('Произошла ошибка', response.data);
         }
     })
     .catch(error => {
         // Обработка ошибки
         console.log('Произошла ошибка', error);
     });
    },
    validateForm() {
      this.errors = [];
      if (!this.surname.trim()) this.errors.push("Введите фамилию");
      if (!this.name.trim()) this.errors.push("Введите имя");
      if (!/^\+?[0-9]{11}$/.test(this.telephone)) this.errors.push("Некорректный телефон");
      if (!this.date_birth) this.errors.push("Введите дату рождения");
      if (!this.city_residence) this.errors.push("Введите город проживания");
      if (!this.citizenship) this.errors.push("Введите гражданство");
      if (!this.Paul) this.errors.push("Введите пол");
      if (!this.email.trim() || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.email)) this.errors.push("Некорректный email");
      if (!this.password) {
    this.errors.push('Введите пароль');
  } else if (this.password.length < 6) {
    this.errors.push('Пароль должен содержать не менее 6 символов');
  }
      if (this.password !== this.passwordd) this.errors.push("Пароли не совпадают");
      if (new Date().getFullYear() - new Date(this.date_birth).getFullYear() < 18) { this.errors.push('Вам должно быть 18 лет или старше'); } 
    },
  }
}
  //валидация
  
</script>

<template>
  <div>
    <div class="container">
      <form @submit.prevent="onSubmit()" novalidate>
        <h2>Регистрация</h2>
        <label :class="{'error-label': errors.includes('Введите фамилию')}">Фамилия: <span class="error-message">{{ errors.includes('Введите фамилию') ? 'Введите фамилию' : '' }}</span></label>
        <input type="text" name="surname" required v-model.trim="surname" @input="validateForm" :class="{'error-input': errors.includes('Введите фамилию')}" :title="errors.includes('Введите фамилию') ? 'Введите фамилию' : ''">
       

        <label :class="{'error-label': errors.includes('Введите имя')}">Имя: <span class="error-message">{{ errors.includes('Введите имя') ? 'Введите имя' : '' }}</span></label>
        <input type="text" name="name" required v-model.trim="name" @input="validateForm" :class="{'error-input': errors.includes('Введите имя')}" :title="errors.includes('Введите имя') ? 'Введите имя' : ''">
        
        <label>Отчество:</label>
        <input type="text" name="patronymic" v-model.trim="patronymic">
        
        <label :class="{'error-label': errors.includes('Некорректный телефон')}">Телефон: <span class="error-message">{{ errors.includes('Некорректный телефон') ? 'Некорректный телефон' : '' }}</span></label>
        <input type="tel" name="telephone" required v-model.trim="telephone" pattern="[0-9]{10}" @input="validateForm" :class="{'error-input': errors.includes('Некорректный телефон')}" :title="errors.includes('Некорректный телефон') ? 'Некорректный телефон' : ''">
        

        <label :class="{'error-label': errors.includes('Вам должно быть 18 лет или старше')}">Дата рождения: <span class="error-message">{{ errors.includes('Вам должно быть 18 лет или старше') ? 'Вам должно быть 18 лет или старше' : '' }}</span></label>
        <input type="date" name="date_birth" required v-model="date_birth" @input="validateForm" :class="{'error-input': errors.includes('Вам должно быть 18 лет или старше')}" :title="errors.includes('НВам должно быть 18 лет или старше') ? 'Вам должно быть 18 лет или старше' : ''">
        
        <label>Проживание:</label>
        <select name="city_residence" id="city_residence" v-model="city_residence" @change="validateForm">
          <option value="Магнитогорск">Магнитогорск</option>
        </select>
        
        <label>Гражданство:</label>
        <select name="citizenship" id="citizenship" v-model="citizenship" @change="validateForm">
          <option value="Российское">Российское</option>
        </select>
        
        <label>Пол:</label>
        <select name="Paul" id="Paul" v-model="Paul" @change="validateForm">
          <option value="Мужской">Мужской</option>
          <option value="Женский">Женский</option>
        </select>
        
        <label :class="{'error-label': errors.includes('Некорректный email')}">Email: <span class="error-message">{{ errors.includes('Некорректный email') ? 'Некорректный email' : '' }}</span></label>
        <input type="email" name="email" required v-model.trim="email" @input="validateForm" :class="{'error-input': errors.includes('Некорректный email')}" :title="errors.includes('Некорректный email') ? 'Некорректный email' : ''">
        
        <label :class="{'error-label': errors.includes('Введите пароль')}">Пароль:<span v-if="errors.includes('Введите пароль')" class="error-message">Введите пароль</span>
<span v-if="errors.includes('Пароль должен содержать не менее 6 символов')" class="error-message">Пароль должен содержать не менее 6 символов</span></label>
<input
  :type="showPassword ? 'text' : 'password'"
  v-model.trim="password"
  name="password"
  id="password-input"
  required
  @input="validateForm"
  :class="{'error-input': errors.includes('Введите пароль')}"
  :title="errors.includes('Введите пароль') ? 'Введите пароль' : ''"
>


        <label :class="{'error-label': errors.includes('Пароли не совпадают')}">Подтверждение пароля:<span class="error-message">{{ errors.includes('Пароли не совпадают') ? 'Пароли не совпадают' : '' }}</span></label>
        <input :type="showPasswordd ? 'text' : 'password'" v-model.trim="passwordd" name="confirm_password" id="password-inputt" required  @input="validateForm" :class="{'error-input': errors.includes('Пароли не совпадают')}" :title="errors.includes('Пароли не совпадают') ? 'Пароли не совпадают' : ''">
        <a @click="showPasswordd = !showPasswordd" class="password-controll"></a>

        <p v-if="errors.includes('Этот email уже зарегистрирован')" class="error-message">{{ errors.find(error => error === 'Этот email уже зарегистрирован') }}</p>

        <input type="submit" class="sub"  value="Зарегистрироваться" name="register">
        <router-link to="/Sautoriz">Уже есть аккаунт? Войти!</router-link>
      </form>
    </div>
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
	top: 952px;
	right: 660px;
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
	
    top: 1040px;
	right: 660px;
	display: inline-block;
	width: 20px;
	height: 20px;
	background: url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat;
}
.password-controll.view {
	background: url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat;
}
.error-list {
  color: red;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-left: 0;
  list-style: none;
}
.error-list li {
  margin-bottom: 5px;
}
.error-message{
  color: red;
}
.input-container {
  position: relative;
  }
  
  .input-container .error-message {
    position: absolute;
  top: 100%;
  left: 0;
  font-size: 14px;
    color: red;
    margin-top: 5px;
  }
  
  .input-container.error-input input {
  border-color: red;
  }
</style>