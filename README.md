Limit v1.1.1
=====

Limit - jQuery plugin that limit characters quantity in text inputs or textareas. Also it has decreasing char counter.

**Using example**

```
  $('#text').limit({
      chars: 20,
      counter: "#result",
      backendValidation: true,
      warning: 5
  });
```

- chars - specify maximum quantity of characters, default 100.
- counter - tag, id, class or any selector of DOM element where chars counter will be printed, default `#result`
- backendValidation необязательный параметр, по умолчанию значение true. Определяет способ подсчета символов. При валидации на стороне сервера (true), переход на новую строку считается за два символа. При значении false - за один.
- warning задает число символов при достижении которого, у элемента, заданного в counter, появляется класс 'warn'. Для случая, если необходимо как-то подсветить, что символы на исходе.
