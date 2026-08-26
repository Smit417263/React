# React Basics

Quick reference for the core concepts covered in this tutorial.

## 🚀 Project Setup

```bash
# First time only
npm install

# Run the project
npm run dev
```

## 🧩 Components

* Components make code **reusable and maintainable**.
* Component names must start with an **uppercase letter**.
* Export components if they need to be used in another file.
* Best practice: keep components in a `components/` folder.

```jsx
export function Card() {
  return <div>...</div>;
}
```

## ⚛️ JSX

* `.jsx` files let you write **HTML-like syntax inside JavaScript**.
* Use `{}` to insert **dynamic JavaScript values**.

```jsx
<h1>Hello, {name}!</h1>
```

## 🖼️ Images

Import images at the top of the file and use the imported alias.

```jsx
import logo from "./logo.png";

<img src={logo} />
```

This ensures images are handled correctly during the **build/production process**.

## 📦 Props

* Props are **custom attributes/data passed to components**.
* They allow components to be dynamic and reusable.

```jsx
<Card name="Smit" />
```

## 📤 Exports & Imports

**Named export** → import with `{}`:

```jsx
export function Card() {}
import { Card } from "./Card";
```

**Default export** → no `{}`:

```jsx
export default Card;
import Card from "./Card";
```

## 🎨 Component CSS

* Keep relevant CSS in the component's folder.
* Import the CSS into the component:

```jsx
import "./Card.css";
```

⚠️ **Important:** Regular CSS is **not scoped to the component**. A CSS rule can affect matching elements elsewhere in the app.

## 🪝 React Hooks

Hooks have **2 rules**:

1. Only call hooks **inside React component functions**.
2. Only call hooks at the **top level** of the component.

   * ❌ Not inside `if` statements
   * ❌ Not inside loops
   * ❌ Not inside nested functions

```jsx
function App() {
  const [count, setCount] = useState(0); // ✅

  if (count > 5) {
    // useState() here would be ❌
  }
}
```

### 🧠 Quick Memory

**Components → JSX → Props → Exports → CSS → Hooks**

Reusable components + dynamic JSX + props + clean file organization + hooks at the top level.
