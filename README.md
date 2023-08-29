# React Timer and Countdown Components

This repository contains two React components for implementing timers and countdowns with ease.

## Timer Component

The Timer component allows you to set hours, minutes, and seconds and start, stop, and reset the timer. It prevents negative values and ensures that the countdown functions correctly.

### Features

- Set hours, minutes, and seconds for the timer.
- Start the timer countdown.
- Stop the timer.
- Reset the timer to its initial state.
- Prevents negative values for hours, minutes, and seconds.

### Usage

1. Clone this repository to your local machine.

2. Navigate to the project directory.

3. Install the required dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your web browser and go to `http://localhost:3000` to see the React Timer component in action.

6. Input hours, minutes, and seconds in their respective fields.

7. Click the "Start" button to begin the timer countdown. The timer will stop automatically when it reaches zero.

8. Click the "Stop" button to pause the timer.

9. Click the "Reset" button to reset the timer to the initial values.

### Countdown Component

The Countdown component allows you to specify an initial number of seconds, and it counts down from that value. It displays the remaining time in the "00:00:00" format.

### Features

- Specify an initial number of seconds.
- Automatically counts down from the specified value.
- Displays the remaining time in the "00:00:00" format.

### Usage

1. Import the `CountDown` component into your project.

2. Render the `CountDown` component and specify the initial number of seconds using the `initialSeconds` prop:

   ```jsx
   import CountDown from "./CountDown";

   function App() {
     return (
       <div className="App">
         <CountDown initialSeconds={10000} />
       </div>
     );
   }
   ```

3. The countdown will start automatically when the component is mounted.

4. Customize the appearance or behavior of the countdown component to suit your needs.

