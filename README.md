# 🎯 JavaScript Events: Keyboard, Mouse & the Event Object

Welcome to the **JavaScript Events** guide! This repository helps you understand and practice handling events in JavaScript—especially keyboard and mouse events. You’ll also explore the powerful `event` object and its most useful properties.

---

## 📚 Table of Contents

- [📌 Introduction](#-introduction)
- [🖱️ Mouse Events](#️-mouse-events)
- [⌨️ Keyboard Events](#️-keyboard-events)
- [📦 The `event` Object](#-the-event-object)
  - [`event.target`](#eventtarget)
  - [`event.key`](#eventkey)
  - [`event.clientX` / `event.clientY`](#eventclientx--eventclienty)
- [🧪 Code Examples](#-code-examples)
- [🚀 How to Use](#-how-to-use)
- [📄 License](#-license)

---

## 📌 Introduction

In JavaScript, **events** are actions that occur in the browser—like clicking a button, pressing a key, or moving the mouse. We can use **event listeners** to detect these actions and run custom code in response.

---

## 🖱️ Mouse Events

Commonly used **mouse events** in JavaScript:

- `click`: User clicks an element
- `dblclick`: User double-clicks
- `mousedown`: Mouse button is pressed
- `mouseup`: Mouse button is released
- `mousemove`: Mouse pointer moves
- `mouseenter` / `mouseleave`: Pointer enters or leaves an element

---

## ⌨️ Keyboard Events

**Keyboard events** allow us to respond to user key presses:

- `keydown`: Triggered when a key is pressed
- `keyup`: Triggered when a key is released
- `keypress`: (Deprecated) Avoid using in modern code

---

## 📦 The `event` Object

When an event occurs, JavaScript creates an `event` object containing useful info about the event.

### 🔹 `event.target`

- Refers to the **element** that triggered the event.
```js
console.log(event.target); // Outputs the clicked or typed element

🔹 event.key
Returns the actual key the user pressed (like "a", "Enter", "1").
🔹 event.clientX / event.clientY
clientX: X-coordinate (horizontal) of the mouse relative to the viewport

clientY: Y-coordinate (vertical) of the mouse relative to the viewport



---

## 👨‍💻 Author

Documented by [Your Name](https://github.com/your-username) as part of a structured roadmap to mastering JavaScript and web development fundamentals.

---
