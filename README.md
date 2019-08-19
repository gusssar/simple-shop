## Простой магазин
---

Проект представляет собой реализацию простого магазина. Проект реализован с помощью библиотек React и Redux. 

### Имеет следующие функции:
- получение списка c удалённого сервера
- отображение содержимого полученной информации
- фильтрация списка
- поиск по наименованию
- логирование действий

### Структура проекта

```
+ seperheroes
| + public // не тронут с create-react-app
| + src
| | + actions // экшены для сущностей работы с вводом, обработкой данных и выдачей в лист
| | | - DataListActions.js
| | | - InputActions.js
| | | - ListActions.js
| | + components // отображаемые компоненты
| | | + Header
| | | | - index.js
| | | | - index.css
| | | + Input
| | | | - index.js
| | | | - index.css
| | | + Item
| | | | - index.js
| | | | - index.css
| | | + SideBar
| | | | - index.js
| | | | - index.css
| | + containers // контейнер управления приложением
| | | - App.js
| | | - App.css
| | + redusers // редьюсеры приложения (корневой + для каждого экшена)
| | | - index.js
| | | - datalist.js
| | | - input.js
| | | - list.js
| | + store // конф файл стора
| | | - confStore.js
| | + utils // функция запроса API
| | | - getReq.js
| | - index.css
| | - index.js
| | - serviseWorker.js // не тронут с create-react-app
- .gitignore
- package-lock.json
- package.json
- README.md
```

## Начало работы
Для **первого запуска** необходимо установить зависимоти (`/node_modules`) прописанные в `package.json`<br>
Для этого необходимо в терминале, находясь в корне приложения, ввести `npm instal`

## Запуск приложения
Находясь в корне проекта в консоле необходимо запустить:
#### `npm run start`
эта команда атоматически запустит приложение в режиме разработки и откроет его в [http://localhost:3000](http://localhost:3000)<br>