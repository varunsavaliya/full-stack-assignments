
## Run Locally

Clone the project

```bash
  git clone 
```

Go to the project directory

```bash
  cd directory_name
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

# Explanation

Wrapper Component
- This is main component which will be rendered in App.jsx
- It has all component element and required function
- Full name and email or phone, these both fields will be displayed conditionally
- Also button text and the text below button will be shown conditionally
- Click function will alter the login variable based on that variable we are applying conditions

Logo Component
- It takes src and alt to use in img tag

Button Component
- It takes button text and click function as props

Field Component
- It takes type and placeholder as props to use it in input elements

CSS files for components are there in folders accordingly