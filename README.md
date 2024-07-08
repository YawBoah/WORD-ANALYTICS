## Overview

WORD-ANALYTICS is a React application that helps users analyze text by providing statistics such as the number of words, number of characters, and remaining characters for Instagram and Facebook posts based on their respective character limits.

## Features

- **Word Count**: Displays the total number of words in the text.
- **Character Count**: Shows the total number of characters in the text.
- **Instagram Character Limit**: Indicates the number of characters left until the Instagram character limit is reached.
- **Facebook Character Limit**: Shows the number of characters left until the Facebook character limit is reached.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [App](#app)
  - [Container](#container)
  - [Footer](#footer)
  - [Header](#header)
  - [Stats](#stats)
  - [Stat](#stat)
  - [Textarea](#textarea)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-username/word-analytics-app.git
   cd word-analytics-app
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Start the development server**:

   ```sh
   npm start
   ```

## Usage

After starting the development server, you can view the application in your browser by navigating to `http://localhost:3000`.

### App Structure

```jsx
import './App.css';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
```

## Components

### App

The main component that sets up the overall structure of the application.

### Container

```jsx
import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import { FACEBOOK_MAX_CHAR, INSTAGRAM_MAX_CHAR } from "../../lib/constants";

function Container() {
  const [text, setText] = useState("");
 
  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharacters: text.length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHAR - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHAR - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}

export default Container;
```

### Footer

```jsx
function Footer() {
  return (
    <footer className="footer">
      <small>&copy; Copyright by MASTER.Yob. All rights reserved.</small>
      <small>Last checked limits: 17 days ago</small>
    </footer>
  );
}

export default Footer;
```

### Header

The component for the application's header (not provided in the code but assumed to be part of the app structure).

### Stats

```jsx
function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} label="Words" />
      <Stat number={stats.numberOfCharacters} label="Characters" />
      <Stat number={stats.instagramCharactersLeft} label="Instagram" />
      <Stat number={stats.facebookCharactersLeft} label="Facebook" />
    </section>
  );
}

export default Stats;
```

### Stat

```jsx
function Stat({ number, label }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}

export default Stat;
```

### Textarea

```jsx
function Textarea({ text, setText }) {
  return (
    <textarea
      className="textarea"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Type your text here..."
    />
  );
}

export default Textarea;
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to contribute to this project by opening issues or submitting pull requests. For major changes, please open an issue first to discuss what you would like to change.

Happy coding!
