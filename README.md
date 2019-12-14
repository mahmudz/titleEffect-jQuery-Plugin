<p align="center">
    <img src="https://img.shields.io/npm/dt/titleeffect-jquery.svg?style=for-the-badge">
    <img src="https://img.shields.io/github/issues/mahmudz/titleEffect-jQuery-Plugin?style=for-the-badge">
    <img src="https://img.shields.io/github/stars/mahmudz/titleEffect-jQuery-Plugin?style=for-the-badge">
</p>

## TitleEffect is a jQuery plugin to create impressive document titles that make it simple to animate the title text in the browser tab.

### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/titleeffect-jquery@1.0.2/dist/titleEffect.jquery.min.js"></script>
```

### Animation types:
- Replace (default): switches between an array of title text.
- Blink: switches between an array of title text with fade in/out animations.
- Scroll: Scrolls through an array of title text so that the users are able to read the entire tab title.

### How to use it:
1. Include the plugin titleEffect plugin after jQuery.
    ```html
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/titleeffect-jquery@1.0.2/dist/titleEffect.jquery.min.js"></script>
    ```

2. Initialize the plugin and define an array of document titles.
    ```js
    $(function(){
      $.titleEffect({
        titles: [
            'How: This is my first title',
            'Cool: This is my second title',
            'Is: This is my third title',
            'That!: This is my fourth title'
        ]
      });
    });
    ```

3. Specify the delay in milliseconds. Default: 1000ms.
    ```js
        $(function(){
          $.titleEffect({
            delay: 1000,
            titles: [
                'How: This is my first title',
                'Cool: This is my second title',
                'Is: This is my third title',
                'That!: This is my fourth title'
            ]
          });
        });
    ```


### Options
- effect - Determines which effect you want
- delay - The amount to delay time of animation in miliseconds
- titles - Set of document titles
- separator - Separator among the titles

#### Fade through the document titles by using the 'replace' mode.
```js
    $(function(){
      $.titleEffect({
        effect: 'replace',
        titles: [
            'How: This is my first title',
            'Cool: This is my second title',
            'Is: This is my third title',
            'That!: This is my fourth title'
        ]
      });
    });
```
    
#### Scroll through the document titles by using the 'scroll' mode.

```js
    $(function(){
      $.titleEffect({
        effect: 'scroll',
        separator:',',
        titles: [
            'How: This is my first title',
            'Cool: This is my second title',
            'Is: This is my third title',
            'That!: This is my fourth title'
        ]
      });
    });
``` 

#### Blink the document titles by using the 'blink' mode.

```js
    $(function(){
      $.titleEffect({
        effect: 'blink',
        titles: [
            'How: This is my first title',
            'Cool: This is my second title',
            'Is: This is my third title',
            'That!: This is my fourth title'
        ]
      });
    });
```