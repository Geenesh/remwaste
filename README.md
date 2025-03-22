# RemWaste - Skip Selection Page

RemWaste is a React-based web page designed to help users select skip sizes for waste management. The app is built with TypeScript, Redux Toolkit, and Vite, focusing on scalability, performance, and user experience.

---

## Approach to Designing the Project

### **1. Component-Based Architecture**
The project is structured around reusable and modular components:
- **`ObjectInfoCard`**: Displays detailed information about each skip, including size, hire period, pricing, and badges for additional features. It supports selection and highlights the selected card.
- **`ProgressBar`**: A visual indicator of the user's progress through the steps of the skip selection process.

### **2. State Management with Redux Toolkit**
- The app uses Redux Toolkit for managing global state, such as the list of skips and their loading status.
- The `skipsSlice` handles fetching skips from the API and storing them in the Redux store.

### **3. Theme Management**
- A custom `ThemeProvider` is implemented to toggle between light and dark modes.
- The theme state is persisted in `localStorage` and applied globally using CSS variables.

### **4. Responsive Design**
- The app is fully responsive, ensuring a seamless experience across devices.
- CSS media queries are used to adjust layouts and font sizes for smaller screens.

### **5. API Integration**
- The app fetches skip data from a remote API using `axios` and Redux Toolkit's `createAsyncThunk`.
- The API response is normalized and stored in the Redux store for efficient access.

### **6. Accessibility and Usability**
- Buttons and interactive elements are styled with clear visual feedback for hover and disabled states.
- The "Continue" button is disabled until a skip is selected, ensuring a guided user experience.

---

## Project Structure
```
src/
├── App.tsx                # Main application component
├── App.css                # Global styles for the app
├── index.css              # CSS variables and base styles
├── main.tsx               # Entry point for the React app
├── api/                   # API and Redux store setup
│   ├── skipApi.ts         # API integration for fetching skips
│   ├── skipsSlice.ts      # Redux slice for managing skip data
│   └── store.ts           # Redux store configuration
├── components/            # Reusable components
│   ├── ObjectInfoCard/    # Skip card component
│   ├── ProgressBar/       # Progress bar component
├── context/               # Theme context for light/dark mode
├── hooks/                 # Custom hooks
└── assets/                # Static assets
```

---

## Features

### **Skip Selection**
- Users can view a list of skips with detailed information.
- Only one skip can be selected at a time, and the selected card is highlighted.

### **Progress Bar**
- A step-by-step progress bar guides users through the selection process.

### **Light/Dark Mode**
- Users can toggle between light and dark themes using the theme switcher.

### **Responsive Design**
- The app is fully responsive and works seamlessly on mobile, tablet, and desktop devices.

---

## Technologies Used
- **React**: Component-based UI library.
- **TypeScript**: Static typing for better code quality.
- **Redux Toolkit**: State management for skip data and API integration.
- **Vite**: Fast development server and build tool.
- **Axios**: HTTP client for API requests.
- **Lucide Icons**: Icon library for UI elements.