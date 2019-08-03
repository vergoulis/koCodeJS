### KoCodeJS - A library for Konami Code 

Copyright (c) 2019, Thanasis Vergoulis (vergoulis@athenarc.gr)

This is just a fun project. It provides a Javascript open source implementation of a [konami code](https://en.wikipedia.org/wiki/Konami_Code) listener for websites. 

## Usage

Just include the Javascript code in your HTML file like this:

```
<script src="kocode.js">
</script>
```

And then start the listener like this:

```
<script>
	document.onkeyup = konami_code;
</script>
```

When the user is viewing the HTML page and then hits the correct sequence of keys a custom Javascript code is executed (e.g., an alert message). Of course you can alter the custom code to implement a different functionality (e.g., change and HTML element). 

The file test.html is just a toy example of an HTML page using the Javascript library. Have fun!

## License

The code is provided under a GNU/GPL license. 