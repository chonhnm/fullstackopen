**What is HTML**
- HTML is a make up language, HTML consist of a series of elements.

- element: 
    - opening tag
        - attributes: class,src,alt...
    - content
    - closing tag
    - Nesting elements
    ``` <p> My cat is <strong>very</strong> grumpy.</p>```
    - Empty elements
    ```<img src="images/firefox-icon.png" alt="My test image">```

- Anatomy of an HTML document
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <img src="images/firefox-icon.png" alt="My test image">
  </body>
</html>
```

---
**Marking up text**

- Headings
 ```<h1>, <h2>```
- Paragraphs
 ```<p>```
- Lists
    - unordered lists: ```<ul>```
    - ordered lists: ```<ol>```
    ```
     <ul>
        <li>math</li>
        <li>english</li>
        <li>earth</li>
     </ul>
    ```
- Links
```<a href="https://www.baidu.com">Bai Du</a>```