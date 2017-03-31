Используя [create-react-app](https://github.com/facebookincubator/create-react-app) и данные из файла `users.js`, создайте список пользователей на странице.

- Должен быть компонент UserCard, принимающий свойство user, которое в свою очередь представляет объект вида:

```javascript
{
    "login": "mojombo",
    "id": 1,
    "avatar_url": "https://avatars3.githubusercontent.com/u/1?v=3",
    "html_url": "https://github.com/mojombo",
    "name": "Tom Preston-Werner"
}
```

- Структура отрисованного в DOM'е компонента должна иметь вид:

```html
<figure>
  <img src="https://avatars3.githubusercontent.com/u/1?v=3" alt="Tom Preston-Werner avatar">	
  <figcaption>Tom Preston-Werner</figcaption>
  <a href="https://github.com/mojombo">mojombo</a>
</figure>
```

- Данные из файла [users.js](./users.js) должны импортироваться, используя ключевое слово `import`
