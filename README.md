# App

## Class Structure

1. readonly
2. public
3. contructor
4. public functions
5. private
6. private functions

wHealth \*\*\* — це мобільний додаток для управління здоров’ям, який дозволяє зберігати медичну інформацію, аналізувати симптоми, знаходити лікарів, клініки та аптеки. Основна мета програми — зробити процес моніторингу та підтримки здоров’я простим і доступним.

Модулі:

1. healthpatient: Управління інформацією про пацієнтів, включаючи створення та перегляд профілів.
2. healthrecord: Збереження та організація медичних записів і історії пацієнтів.
3. healthdrug: Відстеження медикаментів, їх дозування та нагадування про прийом.
4. healthdisease: Визначення можливих захворювань на основі симптомів.
5. healthtreatment: Інформація про лікування та рекомендації для пацієнтів.
6. healthsymptom: Введення та аналіз симптомів для діагностики.
7. healthanalysis: Аналіз даних для отримання ймовірних діагнозів та рекомендацій.
8. healthclinic: Пошук клінік та інформація про їх послуги.
9. healthdoctor: Пошук лікарів та перегляд профілів фахівців.
10. healthcomment: Додавання відгуків і коментарів про клініки, лікарів чи аптеки.
11. healthpharmacy: Пошук аптек та інформація про наявність ліків.
12. healthplace: Модуль для управління адресами та деталями локацій, таких як аптеки чи клініки. Дозволяє зберігати інформацію про місцезнаходження, контактні дані та тип локації.

13. healthtrade: Документ для відображення інформації про покупки пацієнта в аптеках. Містить дані про придбані медикаменти, дати покупок та пов’язані аптеки.

Сторінки:

1. My patients: Сторінка для перегляду списку зареєстрованих пацієнтів.
2. Create patient: Форма для створення нового профілю пацієнта.
3. Patient profile: Детальна інформація про пацієнта з можливістю редагування.
4. Patient history: Перегляд історії хвороб, лікування та медичних записів пацієнта.
5. My first aid kit: Список медикаментів користувача з нагадуваннями про прийом.
6. Clinics: Список доступних клінік із можливістю фільтрації за місцем розташування.
7. Clinic: Детальна інформація про обрану клініку, її послуги та контакти.
8. Doctors: Список лікарів із пошуком за спеціалізацією.
9. Doctor: Профіль лікаря із описом спеціалізації, рейтингом та відгуками.
10. Pharmacies: Список аптек поблизу з інформацією про робочий час і наявність ліків.
11. Pharmacy: Детальна інформація про конкретну аптеку, включаючи контактні дані.
12. Disease Finder: Інструмент для введення симптомів і аналізу можливих захворювань.

Сценарії:

1. Перегляд та управління пацієнтами:

    - Користувач відкриває "My patients" для перегляду списку зареєстрованих пацієнтів.
    - Обирає "Create patient", щоб додати нового пацієнта з персональними та медичними даними.
    - Відкриває "Patient profile", щоб переглянути чи оновити інформацію про пацієнта.
    - Доступ до "Patient history" для перегляду медичних записів, історії лікувань та логів здоров’я.

2. Відстеження медикаментів:

    - Користувач переходить до "My first aid kit", щоб додати або керувати списком медикаментів.
    - Оновлює графіки дозування та встановлює нагадування про прийом ліків.

3. Пошук медичних установ:

    - Користувач відкриває "Clinics", щоб знайти клініки поблизу та переглянути їхні деталі на сторінці "Clinic".
    - Переходить до "Doctors", щоб знайти спеціалістів за напрямом чи переглянути деталі окремих лікарів на сторінці "Doctor".

4. Ідентифікація захворювань:

    - Користувач відкриває "Disease Finder", щоб ввести симптоми.
    - Система аналізує дані та пропонує можливі діагнози з рекомендаціями щодо подальших дій.

5. Пошук аптек:

    - Користувач заходить у "Pharmacies", щоб знайти аптеки поблизу та переглянути їхні деталі на сторінці "Pharmacy".
    - Перевіряє наявність ліків та години роботи аптек.

6. Аналіз даних здоров’я:

    - Користувач вводить симптоми у "Disease Finder" для аналізу.
    - Отримує рекомендації на основі ймовірних діагнозів і можливих варіантів лікування.

7. Коментування та відгуки:

    - Користувач залишає відгуки чи коментарі про лікарів, клініки або аптеки через відповідні сторінки.

8. record.patient: **mandatory** Кожен запис медичної історії обов’язково пов’язаний із конкретним пацієнтом.
9. record.disease: **optional** Медична історія може включати пов’язане захворювання.
10. record.treatment: **optional** Запис може містити інформацію про призначене лікування.
11. record.doctor: **optional** Медична історія може бути пов’язана із лікарем, який здійснював лікування.
12. record.symptom: **optional** Запис може містити інформацію про симптоми пацієнта.
13. record.analysis: **optional** Медична історія може включати результати аналізів чи досліджень.
14. doctor.clinic: **mandatory** Кожен лікар обов’язково прив’язаний до певної клініки.
15. comment.clinic: **optional** Коментар може бути залишений до клініки.
16. comment.doctor: **optional** Коментар може бути залишений до лікаря.
17. comment.pharmacy: **optional** Коментар може бути залишений до аптеки.
18. comment.place: **optional** Коментар може бути залишений до певного місця.
19. place.clinic: **optional** Локація може бути пов’язана з клінікою.
20. place.pharmacy: **optional** Локація може бути пов’язана з аптекою.
21. trade.place: **optional** Торгова операція може бути пов’язана із конкретним місцем.

-

disease.patient
treatment.patient
--doctor.patient (deleted)
symptom.patient
analysis.patient

place in drug
record in clinic

клініки, лікарі, аптеки в топ бар

phone: Контактний номер телефону.
email: Контактний email клініки.
website: Офіційний вебсайт клініки (якщо є).
working_hours: Графік роботи клініки.
license_number: Номер ліцензії клініки (за потреби).

*specialties(Список спеціальностей, які надаються в клініці (наприклад, кардіологія, хірургія, дерматологія).), *emergency_contact(Номер телефону або контакт для екстрених випадків.),
\*clinic_type (Тип клініки (наприклад, приватна, державна, спеціалізована))

Doctors

{
phone: String,
specialty: String,
experienceYears: String,
consultationFee: String,
},

Pharmacy

{
address: String,
phone: String,
email: String,
workingHours: String,
website: String,
availableMedicines: String,
deliveryAvailable: String,
},

Place

{
address: String,
latitude: String,
longitude: String,
placeType: String,
}

---

Patient

{

 dateOfBirth: String,  
 gender: String,  
 phone: String,  
 email: String,  
 address: String,  
}

Drug

 {
  medicationName: String,   
  dose: String,             
  frequency: String,        
  startDate: Date, 
}




