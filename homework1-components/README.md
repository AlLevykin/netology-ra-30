Задание № 1. Страница интернет-магазина (функциональный компонент)
===

Необходимо создать React-компонент `ShopItemFunc` (функциональный компонент), с помощью которого мы могли бы реализовывать представление информации о товарах из нашего каталога на сайте в таком виде (компонент обведён пунктирной линией).

## Пример использования
```jsx
const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

// Внутри компонента App
return (
  <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemFunc item={item} />
    </div>
  </div>
)
```

## Описание компонента

Компонент должен иметь один props `item`, в котором он ожидает объект с информацией о товаре со следующими свойствами:
- `brand` — название производителя товара,
- `title` — название товара,
- `description` — краткое описание товара,
- `descriptionFull` — подробное описание товара,
- `price` — цена товара,
- `currency` — валюта товара.

Компонент должен создавать DOM элемент следующей структуры:
```html
<div class="main-content">
  <h2>Tiger of Sweden</h2>
  <h1>Leonard coat</h1>
  <h3>Minimalistic coat in cotton-blend</h3>
  <div class="description">
    Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.
  </div>
  <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
  <div class="divider"></div>
  <div class="purchase-info">
    <div class="price">£399.00</div>
    <button>Добавить в корзину</button>
  </div>
</div>
```

Соответственно название производителя необходимо подставить в `h2`, название товара в `h1`, краткое описание в `<h3>`, подробное описание в `div.description`, цену и валюту в `div.price`. При этом символ валюты должен следовать перед ценой, а цена должна быть представлена с двумя числами после запятой.

## Реализация

Реализуйте полноценный проект с помощью create-react-app, не забудьте задействовать prop-types (для item можете использовать либо тип `object`, либо вынести item в класс и использовать `instanceOf`.

Используйте расположенный в данном каталоге css для стилизации.

Задание № 2. Страница интернет-магазина (компонент, основанный на классе)
===

Необходимо создать React-компонент `ShopItemClass` (class-based компонент), аналогичный по функционалу компоненту из задания № 1.

Задание № 3. Календарь
===

Создать React-компонет `Calendar` (функциональный компонент), который бы показывал текущую дату и текущий месяц.

## Пример использования

```jsx
const now = new Date(2017, 2, 8);

// внутри компонента App:
return (
  <Calendar date={now} />
);
```

## Описание компонента

Компонент должен иметь один атрибут `date`, в котором он ожидает текущую дату, _объект_ `Date`.

Компонент должен создавать DOM элемент следующей структуры:
```html
<div class="ui-datepicker">
  <div class="ui-datepicker-material-header">
    <div class="ui-datepicker-material-day">Среда</div>
    <div class="ui-datepicker-material-date">
      <div class="ui-datepicker-material-day-num">8</div>
      <div class="ui-datepicker-material-month">Марта</div>
      <div class="ui-datepicker-material-year">2017</div>
    </div>
  </div>
  <div class="ui-datepicker-header">
    <div class="ui-datepicker-title">
      <span class="ui-datepicker-month">Март</span>&nbsp;<span class="ui-datepicker-year">2017</span>
    </div>
  </div>
  <table class="ui-datepicker-calendar">
    <colgroup>
      <col>
      <col>
      <col>
      <col>
      <col>
      <col class="ui-datepicker-week-end">
      <col class="ui-datepicker-week-end">
    </colgroup>
    <thead>
      <tr>
        <th scope="col" title="Понедельник">Пн</th>
        <th scope="col" title="Вторник">Вт</th>
        <th scope="col" title="Среда">Ср</th>
        <th scope="col" title="Четверг">Чт</th>
        <th scope="col" title="Пятница">Пт</th>
        <th scope="col" title="Суббота">Сб</th>
        <th scope="col" title="Воскресенье">Вс</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="ui-datepicker-other-month">27</td>
        <td class="ui-datepicker-other-month">28</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
      </tr>
      <tr>
        <td>6</td>
        <td>7</td>
        <td class="ui-datepicker-today">8</td>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
      </tr>
      <!-- остальные недели -->
    </tbody>
  </table>
</div>
```

Дата, переданная в атрибуте `date`, должна быть выделена классом `ui-datepicker-today`.

Если месяц начинается не с понедельника, то необходимо показать даты предыдущего месяца в этой неделе и пометить их классом `ui-datepicker-other-month`. Аналогично, если месяц заканчивается не в воскресенье, то неделю нужно «добить» датами следующего месяца и так же их пометить классом `ui-datepicker-other-month`.

День недели на русском языке необходимо поместить в тег `div.ui-datepicker-material-day`, дату в `div.ui-datepicker-material-day-num`, месяц на русском языке в родительном падеже в тег `div.ui-datepicker-material-month`, год в тег `div.ui-datepicker-material-year`.

Так же текущий месяц на русском языке в именительном падеже необходимо поместить в тег `span.ui-datepicker-month`, а год в тег `span.ui-datepicker-year`.

## Реализация

При необходимости, можете воспользоваться библиотекой moment.js, установив её через npm (не забудьте, что это не dev-зависимость).

Используйте расположенный в данном каталоге css-файл для стилизации.
