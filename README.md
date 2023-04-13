# My Next Home

Проектът представя функционалността на приложение за публикуване и търсене на обяви за жилища от различен тип за отдаване под наем или покупкопродажба.

## Дизайн

За дизайна на приложението е използвана Bootstrap тема (статични файлове в папка public), както и допълнителни custom css файлове (в папка src -> static -> style), наименувани с името на компонента, в който са използвани.

<br />

## Архитектура

Проектът е разделен на компоненти с различна функционалност (components), два основни контекста (за аутентикация и имотите като обекти), custom хукове (hooks) с различна функция и услуги (services) за извършване на заявки към сървъра (communication to a remote rest service). 

### Основна структура (App.js)

Създадени са два основни контекста и съответните Auth и Property Providers, които обхващат всички компоненти на приложението. Създаден е routing, в който са изброени всички компоненти със съответните им url-и, на които могат да се достъпят (routes). При стартиране на приложението, се отваря първоначално начална страница с футър и навигация с линкове към отделните страници.

![appjs](https://user-images.githubusercontent.com/81371141/231802270-7c29ca5c-f2e2-4991-8141-6bfc292acdb9.png)

### Компоненти (components)

* Login - вход
* Logout - изход
* Registered - регистрация

* Profile - профил, разделен на няколко компонента
    * MyPersonalData - лична информация
        * MyPersonalDataCreate - създаване на секция с лична информация
        * MyPersonalDataEdit - редактиране на секция с лична информация
    * MyPropertiesList - списък с моите обяви
        * MyPropertyItem - детайли на една от моите обяви

* Common
    * Footer
    * Navigation

* Home - начална страница, разделена на няколко компоненти
    * PropertyArea - секция с последните няколко публикувани обяви
        * LastPropertyArea - секция с детайли за една от последните публикувани обяви
    * Slider - статичен компонент
    * WelcomeArea - статичен компонент

* PropertyList - каталог с всички обяви
    * Property - детайли на една обява от каталога с всички обяви

* PropertyCreate - създаване на обява за имот
* PropertyDetails - детайли на обява за имот
* PropertyEdit - редактиране на обява за имот

* CommentsArea - секция за коментари под дадена обява, разделена на няколко компонента
    * CommentCreate - за създаване на коментар
    * CommentDetails - за детайли на коментар

* Contact - контакти за връзка с администраторите на сайта
* 404 - ненамерена страница
* Unauthorized - неуторизиран достъп
* Pagination - страници на каталозите с обяви

### Услуги (services)

* requester - функциoналност за изпращане на различни видове (GET/ POST/ PATCH/ PUT/ DELETE) заявки със съответните данни и headers до сървъра
* authService - изпращане на заявки (чрез requester-a) за аутентикация на потребител (login/ logout/ register) до съответния url
* commentService - изпращане на заявки (чрез requester-a) за извършване на crud операции (get/ post/ put/ delete) на коментарите до съответния url 
* profileService - изпращане на заявки (чрез requester-a) за извършване на crud операции (get/ post/ put/ delete) на профила до съответния url 
* propertyService - изпращане на заявки (чрез requester-a) за извършване на crud операции (get/ post/ put/ delete) на обявите за имоти до съответния url 

### Контекст (contexts)

* AuthContext - извлича и пази данни за аутентикиран потребител, ако има такъв, от local storage-a
* PropertyContext - извлича и пази данни за всички създадени обяви за имоти и извършва заявки за crud операции

### Хукове (hooks)

* useErrorHandlers - за 'хващане' и визуализиране на грешки от сървъра (error handling и data validation)
* useLocalStorage - за запазване на сесията на аутентикиран потребител в local storage-a на браузъра, за да не се губят данните при рефреш на страницата
* usePagination - за страници на каталога с обяви
* useSorting - за сортиране на обявите в каталога

<br />

## Функционалност

В компонентите при събмит на формата, изпращаме заявка до сървъра с необходимите данни, използвайки съответния service. При неуспешен резултат (проверяваме дали response-a, върнат от сървъра е различен от 'ok'), визуализираме грешките от backend-a. При успешен резултат (response = 'ok'), се извършва съответното действие.

### Аутентикация (authentication)

При аутентикация на потребител, сървърът връща като отговор неговите данни, заедно с генериран accessToken, които се пазят в localStorage-a и служат за запазване на сесията и проверка за наличие на логнат потребител.

* Регистрация
    * данни: username, email, password, password2
    * service: authService
    * success: login; redirect to Home page 

![register](https://user-images.githubusercontent.com/81371141/231802901-0915c2f7-eaa6-408f-bb32-8ca9100651c1.png)

* Вход
    * данни: username, password
    * service: authService
    * success: redirect to Home page 

* Изход
    * success: изчистване на local storage; redirect to Home page

### Профил (profile)

При регистация на нов потребител, той има достъп до страница Профил. Профилът е разделен на секция с лични данни и секция с каталог с всички създадени от потребителя обяви. При първоначално попълване на данните, се създава обект Profile, свързан с дадения user. След което, потребителят може да редактира данните в полетата.

* Лична информация
    * данни: first name, last name, public email, phone, facebook, website
    * service: profileService
    * success: data update

![profile](https://user-images.githubusercontent.com/81371141/231802771-16903f13-b8ea-4424-9b1a-349e2211553f.png)

* Моите обяви <br/>
Филтрираме и визуализираме само обявите на съответния потребител
    * данни: -
    * service: propertyService
    * success: list properties

### Обявa (property)

Извършват се основните crud операции, както и извличане на данни за списък с обяви и за детайли на конкретен имот.

* Създаване на обява
    * данни: title, price, imageUrl, city, address, description, type, status, floor, storey, area, yardArea, bedroom, bathroom, storage, parking, basement, view
    * service: propertyService
    * success: create new property, redirect to catalog page

![property-create](https://user-images.githubusercontent.com/81371141/231803137-5087b883-4c23-4e10-a668-31f674462356.png)

* Редактиране на обява (функционалност, достъпна само за създателя на дадената обява)
    * данни: title, price, imageUrl, city, address, description, type, status, floor, storey, area, yardArea, bedroom, bathroom, storage, parking, basement, view
    * service: propertyService
    * success: update property, redirect to catalog page

* Изтриване на обява (функционалност, достъпна само за създателя на дадената обява)
    * данни: -
    * service: propertyService
    * success: delete property, redirect to catalog page and remove it from the list

* Детайли на обява (функционалност, достъпна само за създателя на дадената обява)
    * данни: -
    * service: propertyService
    * success: display current property details

![property-details](https://user-images.githubusercontent.com/81371141/231803226-0ec79242-ae46-4ed1-846f-f94788f6d6dc.png)

* Каталог с всички обяви сортирани по дата на добавяне <br/>
В каталога е имплементирана функционалност за филтриране по различни параметри, сортиране по цена и дата и разделяне на обявите по страници, за които са използвани съответно usePagination u useSorting hooks.
    * данни: -
    * service: propertyService
    * success: display all properties

### Коментар (comment)

Извършват се основните crud операции, както и извличане на данни за списък с коментари и за детайли на конкретен коментар в страницата с детайли на обява. Коментари могат да се създават само от аутентикирани потребители с изключение на собственика на обявата, но са видими за всички.

* Създаване на коментар
    * данни: text
    * service: commentService
    * success: create new comment

![comment-create](https://user-images.githubusercontent.com/81371141/231803345-ee3a12f0-b66f-45bc-97ef-da0280f2b315.png)

* Изтриване на коментар (функционалност, достъпна само за създателя на дадения коментар)
    * данни: -
    * service: commentService
    * success: delete comment, remove it from the list

* Каталог с всички коментари към дадена обява
    * данни: -
    * service: commentService
    * success: filter and display all comments to the current property

### Статични страници

* Контакти (Contacts)
* 404 (Not found) - при опит да се достъпи несъществуващ url
* Неауторизиран достъп (Unauthorized) - при опит на неаутентикиран потребител да отвори url, до който няма достъп 

### Еrror handling - data validation

В компонентите при събмит на формата, изпращаме заявка до сървъра с необходимите данни, използвайки съответния service. При неуспешен резултат (проверяваме дали response-a, върнат от сървъра е различен от 'ok'), визуализираме грешките от backend-a.
Използван е useErrorHandling hook за 'улавяне' и визуализиране на грешките на frontend ниво, още преди изпращане на данните от формата.

<br />

## Достъп

### Public Part

* Регистрационна форма
* Каталог с всички обяви
* Сортиране и филтриране на обявите
* Детайли на всяка отделна обява
* Коментари под всяка обява
* Контакти

### Private Part

* Създаване на профил с лична информация 
* Редактиране на моя профил с лична информация
* Каталог с моите обяви в профила
* Публикуване на обява
* Редактиране на моя обява
* Изтриване на моя обява
* Публикуване на коментар
* Изтриване на мой коментар

<br />

## `npm run start`
