# Heyyyyyy, Pretty Girl

## Overview

Heyyyyyy, Pretty Girl is a cute and interactive web experience designed to express affection and ask someone to be their Valentine. The web app features a series of adorable teddy bear animations and heartfelt messages, guiding the user through a charming and playful journey.

## Inspiration

This project was heavily inspired by [HeyPrettyGirl](https://heyyyyy-pretty-girl.vercel.app/), built by [Akinkunmi](https://x.com/xing________). The original project was developed using TypeScript and React, technologies I haven't learned yet.

Instead of following the same stack, I decided to challenge myself by leveraging my backend development knowledge along with the frontend skills I had at the time to bring this project to life.

## Features

### 🏠 Landing Page

- Displays a waving teddy bear with the text "Heyyyyyy, Pretty Girl."

- A "Next" button for navigation to proceed with the interactive story.

### 💬 Interactive Story

- Clicking the "Next" button reveals a new teddy bear variation with a sweet message.

- Messages build up towards a final romantic question: "Will you be my Valentine?"

- Users can navigate back to previous messages using the "Back" button.

- A joyous celebration animation plays if the user clicks "Yes."

### 🎉 Final Page Celebration

- Upon accepting the Valentine's proposal, the teddy bear changes to a joyous pose.

- Confetti animation is triggered for a fun and exciting effect.

- The message "Yayyyyyy!" appears, celebrating the moment.

## Tech Stack

### 🛠 Technologies Used

- **Node.js & Express.js** – Backend server setup.

- **HTML & CSS (TailwindCSS)** – Frontend structure and styling.

- **JavaScript (Vanilla JS)** – Interactive elements and animations.

- **Canvas-Confetti** – Used for the celebration animation.

## Installation & Setup

### 🔧 Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en)

- [npm](https://www.npmjs.com/)

### 📥 Clone the Repository

```sh
git clone https://github.com/AyomideKayode/valentine_web_app.git
cd valentine_web_app
```

### 📦 Install Dependencies

```sh
npm install
```

### 🎨 TailwindCSS Installation

Initially, installing TailwindCSS was a bit tricky since version 4 introduced a different installation process that no longer requires the `init` command. To stick with Tailwind v3, I used the following installation process:

```sh
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

This setup ensures TailwindCSS compiles properly and works seamlessly with the project.

### 🖌 Build TailwindCSS

```sh
npm run build:css
```

### 🚀 Run the Application

For development mode (with live reload):

```sh
npm run dev
```

For production mode:

```sh
npm start
```

The server will start at `http://localhost:3000/`.

## File Structure

```sh
heyyy-gorgeous/
│── public/
│   ├── index.html        # Main HTML file
│   ├── styles.css        # Compiled TailwindCSS file
│   ├── script.js         # JavaScript file for interactivity
│   ├── imgs/             # Images of teddy bears
│── src/
│   ├── styles.css        # Source TailwindCSS file
│── server.js             # Express server setup
│── package.json          # Project dependencies and scripts
│── README.md             # Project documentation
```

## Customization

- Modify `script.js` to change messages, images, or animations.

- Replace teddy bear images in the `public/imgs/` directory with your own.

- Adjust styling in `src/styles.css` and rebuild CSS using `npm run build:css`.

## Contributing

Pull requests are welcome! Feel free to fork the repository and submit improvements.

## License

This project is licensed under the MIT License.

## Author

Ayomide Kayode – [X(Twitter)](https://x.com/Ayomide_KayoDev)
