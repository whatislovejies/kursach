<script>
import axios from 'axios';
export default {
  data() {
    return {
      currentStep: 1,
      form: {
        workExperience: '',
        desiredPosition: '',
        desiredSalary: null,
        move: '',
        busyness: '',
        workSchedule: '',
        workPermit: '',
        availabilityCar: '',
        level:'',
        educational_institution:'',
        faculty:'',
        specialization:'',
        year_graduation:'',
        category:'',
        date_rec:'',
        languages:'',
        level_lang: ''
      },
      resumeId: null, // Идентификатор резюме, созданного в таблице "resume"
      educationId: null // Идентификатор образования, созданного в таблице "education"
    };
  },
  methods: {
    submitForm() {
        if (this.currentStep <3) {
          this.currentStep+=1;
        } else {
          // Форма заполнена на всех шагах
          // Вы можете отправить данные на сервер или выполнить другие необходимые действия
          axios.post('http://localhost/this_is_the_base/save_resume.php', {
          resume: this.form,
          educationId: this.educationId
        })
          .then(response => {
            console.log(response.data);
            // Добавьте обработку успешного сохранения данных, если необходимо
            // console.log(this.form);
          })
          .catch(error => {
            console.error(error);
            // Добавьте обработку ошибок, если необходимо
            console.log('fail');
          });
        }
    },
    backstep(){
      this.currentStep--;
    },
    saveResumeData() {
      // Отправка данных на сервер для сохранения резюме и получение идентификатора
      axios.post('http://localhost/this_is_the_base/save_resume.php', {
        resume: this.form,
        educationId: this.educationId
      })
        .then(response => {
          console.log(response.data);
          this.resumeId = response.data.resumeId;
          this.currentStep += 1;
        })
        .catch(error => {
          console.error(error);
          // Добавьте обработку ошибок, если необходимо
        });
    },
    saveEducationData() {
      // Отправка данных на сервер для сохранения образования и получение идентификатора
      axios.post('http://localhost/this_is_the_base/save_education.php', {
        education: this.form
      })
        .then(response => {
          console.log(response.data);
          this.educationId = response.data.educationId;
          this.submitForm();
        })
        .catch(error => {
          console.error(error);
          // Добавьте обработку ошибок, если необходимо
        });
    }
  },
}
</script>

<template>

    <form class="resume-form" novalidate>
      <div v-if="currentStep === 1">
        <div class="form-group">
          <h1>Личные данные</h1>
        <label for="workExperience">Опыт работы:</label>
        <input type="text" id="workExperience" v-model="form.workExperience" required name="workExperience">

        <label for="desiredPosition">Желаемая должность:</label>
        <input type="text" id="desiredPosition" v-model="form.desiredPosition" required name="desiredPosition">

        <label for="desiredSalary">Желаемая зарплата:</label>
        <input type="number" id="desiredSalary" v-model="form.desiredSalary" required name="desiredSalary">

        <label for="move">Готовность к переезду:</label>
        <select id="move" v-model="form.move" required name="move">
          <option value="">Выберите</option>
          <option value="yes">Да</option>
          <option value="no">Нет</option>
        </select>

        <label for="busyness">Занятость:</label>
        <select id="busyness" v-model="form.busyness" required name="busyness">
          <option value="">Выберите</option>
          <option value="full-time">Полная занятость</option>
          <option value="part-time">Частичная занятость</option>
          <option value="freelance">Фриланс</option>
        </select>

        <label for="workSchedule">График работы:</label>
        <input type="text" id="workSchedule" v-model="form.workSchedule" required>

        <label for="workPermit">Разрешение на работу:</label>
        <input type="text" id="workPermit" v-model="form.workPermit" required>
     
        <label for="availabilityCar">Наличие автомобиля:</label>
        <select id="availabilityCar" v-model="form.availabilityCar" required>
          <option value="">Выберите</option>
          <option value="yes">Да</option>
          <option value="no">Нет</option>
        </select>

      </div>   
      <button type="submit" class="next-button"  @click="submitForm">Следующий шаг</button>
    </div>

      <div v-if="currentStep === 2">
        <div class="form-group">
          <h1>Образование</h1>

          <label for="level"> Уровень образования</label>
          <select id="level" v-model="form.level">
          <option value="Среднее общее">Среднее общее — 10—11 классы</option>
          <option value="Среднее профессиональное">Среднее профессиональное</option>
          <option value="Высшее I">Высшее I степени — бакалавриат</option>
          <option value="Высшее II">Высшее II степени — специалитет, магистратура</option>
          <option value="Высшее III">Высшее III степени — подготовка кадров высшей квалификации</option>
          </select>

          <label for="educational_institution">Учебное заведение</label>
          <input type="text" id="educational_institution" v-model="form.educational_institution">

          <label for="faculty">Факультет</label>
          <input type="text" id="faculty" v-model="form.faculty">

          <label for="specialization">Специализация</label>
          <input type="text" id="specialization" v-model="form.specialization">

          <label for="year_graduation">Год окончания</label>
          <input type="date" id="year_graduation" v-model="form.year_graduation">

      <button type="submit" class="back-button"  @click="backstep">предыдущий шаг</button>
      <button type="submit" class="next-buttonn"  @click="submitForm">Следующий шаг</button>
    </div>
  </div>

  <div v-if="currentStep === 3">
    <div class="form-group">
          <h1>Дополнительные данные</h1>

          <label for="category">Категория прав</label>
          <input type="text" id="category" v-model="form.category">

          <label for="date_rec">Дата получения</label>
          <input type="date" id="date_rec" v-model="form.date_rec">

          <label for="languages">Язык</label>
          <input type="text" id="languages" v-model="form.languages">

          <label for="level_lang">уровень владения языком</label>
          <input type="text" id="level_lang" v-model="form.level_lang">

      <button type="submit" class="back-button"  @click="backstep">предыдущий шаг</button>
      <button type="submit" class="finish-button" @click="submitForm">завершить регистрацию</button>
    </div>
    </div>
   </form>
  </template>

<style scoped>
.resume-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="number"],
input[type="date"],
select {
  padding-top:15px;
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

select{
  width: 420px;
}
.next-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 140px;
  
}
.next-buttonn {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 100px;
}
button:hover {
  color: #000;
}

button:hover:before {
  width: 100%;
}
.back-button{
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 12px;
  margin-top: 20px
}

.next-button:hover {
  background-color: #0056b3;
}
h1{
  text-align: center;
}
.finish-button{
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 12px;
  margin-top: 20px
}
</style>
