# React Project

- This is a Card List project touching on the basics of React.
- I have also included github actions for deploying this project to github pages.
- if you wanna run this project.
  ```
  first run npm install.
  npm start to run the project on a default port.
  if you want to deploy it you run npm run delpoy
  ```
- The Common lifecycle for React.
  <img src="./React lifecycle.drawio.svg">
- This is an example of class components shows how everything flows.
- We can go and look how React actually works on the basics.
    ~~~
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="style.css" />
            <title>Browser</title>
        </head>

        <body>
            <div id="root">React has not endered</div>
            <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
            <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
            <script>
                const App = () => {
                    return React.createElement('div', {}[
                        React.createElement('h1', {class: 'title'}, "React has rendered")
                    ]);
                };

                ReactDOM.render(
                    React.createElement(App);
                    document.getElementById("root")
                );
            </script>
        </body>
    </html>
    ~~~
- So this source code shows how you use react API to build your react App Component from Scrach.
