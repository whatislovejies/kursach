<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    // Используйте пространство имен модуля auth: 'auth/' для исправления ошибки
    ...mapActions(['auth/setUserRole']),
    login() {
      const formData = new FormData();
      formData.append('email', this.email);
      formData.append('password', this.password);
      
      axios
        .post('http://localhost/this_is_the_base/Sautorization.php', formData)
        .then(response => {
          if (response.data.success) {
            console.log('Вход выполнен');
            const role = response.data.role;
            this['auth/setUserRole']({ userRole: role, userId: response.data.userId });
 // Используйте setUserRole из модуля auth с пространством имен
            if (role === 'admin') {
              this.$router.push({ path: '/applicant1' });
            } else if (role === 'guest') {
              this.$router.push({ path: '/' });
            } else if (role === 'applicant') {
              this.$router.push({ path: '/applicant1' });
            }
          } else {
            console.log('Произошла ошибка', response.data.error);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<template>
  <div class="container">
    <form @submit.prevent="login"> 
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" name="email" required />
      <label for="password">Пароль:</label>
      <input type="password" id="password" v-model="password" name="password" required /><br />
      <input type="submit" value="Войти" name="go" />
    </form>
  </div>
</template>
 <style scoped>
  /* Стили для компонента авторизации */
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
  input[type='text'],
  input[type='tel'],
  input[type='password'],
  input[type='email'] {
    width: 580px;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #999;
    margin-bottom: 20px;
  }
  .input-field[type='date'] {
    width: 100%;
  }
  input[type='submit'] {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    margin-left: 250px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  input[type='submit']:hover {
    background-color: #555;
  }
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
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
</style>