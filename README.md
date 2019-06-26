# Lightweight jQuery plugin to give little effect of your webpage title.

## Usage

```
$(document).ready(function(){
    $.titleEffect({
        delay: 1000,     // Delay time between animation frames
        effect: 'blink', // Effect Types: blink, replace, scroll
        separator: ',',  // Seperates multiple titles
        titles: [
            'This is my first title',
            'This is my second title',
            'This is my third title',
        ]
    });
});
```

