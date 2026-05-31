# STOPWATCHY3 ☕

A cozy pixel art timer app built with Electron, HTML, CSS and JavaScript. Set a timer, watch your pixel art coffee brew, and get notified when time is up.

---

## Features

- Set a custom timer in minutes using up and down arrows
- Animated pixel art coffee GIF plays while the timer runs
- Countdown display in MM:SS format
- Pause and resume the timer at any point
- Stop and return to the setup screen anytime
- Time's Up screen when the timer ends with a pixel art animation
- Alarm sound on completion, plays for 10 seconds
- Draggable frameless window
- Pixelify Sans pixel font throughout
- Fully offline — no internet needed

---

## Built With

- Electron — desktop app framework
- HTML, CSS, JavaScript — UI and logic
- Pixelify Sans — pixel font (local file, no internet needed)
- Piskel — pixel art tool used to draw and animate the GIFs

---

## Project Structure

```
stopwatch-app/
├── index.html                         # UI structure and all three screens
├── styles.css                         # All styling
├── script.js                          # Timer logic and screen switching
├── main.js                            # Electron window configuration
├── coffee.gif                         # Pixel art coffee animation (screen 2)
├── done.gif                           # Pixel art done animation (screen 3)
├── alarm.mp3                          # Alarm sound
├── PixelifySans-VariableFont_wght.ttf # Local font file
├── package.json
└── package-lock.json
```

---

## Getting Started

### Prerequisites

- Node.js v22 or higher
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/stopwatch-app.git
cd stopwatch-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the app:
```bash
npm start
```

---

## How to Use

1. Use the up and down arrows to set the number of minutes
2. Click Start to begin the timer
3. The app switches to the timer screen with the coffee GIF
4. Use Pause to freeze the timer and click again to resume
5. Use Stop to cancel and return to the setup screen
6. When the timer ends the alarm plays and the done screen appears
7. The app automatically returns to setup after 10 seconds

---

## Screens

The app has three screens that swap visibility using JavaScript:

- Setup screen — pick your minutes and hit start
- Timer screen — coffee GIF, countdown, pause and stop buttons
- Done screen — time's up animation and alarm, auto returns after 10 seconds

---

## Window

- Fixed size 350 x 350 pixels
- Frameless window, drag anywhere on the app to move it
- Non-resizable

---

## Pixel Art

All pixel art in this app was hand drawn by the developer using Piskel and exported as animated GIFs. The coffee cup features a two-frame steam animation.

---

## License

MIT — feel free to use and modify!

---

> Made with coffee and pixels
