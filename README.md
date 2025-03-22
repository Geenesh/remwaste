# RemWaste - Skip Selection Page

RemWaste is a React-based web page designed to help users select skip sizes for waste management. The app is built with TypeScript, Redux Toolkit, and Vite, focusing on scalability, performance, and user experience.

---
### **Approach to Designing the Project**

#### **Component-Based Architecture**
- The project is structured around reusable components like `ObjectInfoCard` and `ProgressBar`. This modular approach ensures that each component can be independently styled and maintained.
- The `ObjectInfoCard` component displays detailed information about each skip, while the `ProgressBar` visually guides the user through the steps.

#### **Theme Management**
- A custom `ThemeProvider` was implemented to toggle between light and dark modes. The theme state is stored in `localStorage` and applied globally using CSS variables.
- This approach ensures that the entire application adapts seamlessly to the selected theme without requiring individual component updates.

#### **Responsive Design**
- The design is fully responsive, ensuring a consistent user experience across devices. Media queries are used to adjust layouts and font sizes for smaller screens.
- The progress bar is horizontally scrollable on smaller devices, while the skip cards adjust their grid layout to fit the screen size.

#### **Accessibility and Usability**
- Buttons and interactive elements are styled with clear visual feedback for hover and disabled states.
- The "Continue" button is disabled until a skip is selected, guiding the user through the process and preventing errors.

#### **API Integration**
- The app fetches skip data from a remote API using `axios` and Redux Toolkit's `createAsyncThunk`. The data is normalized and stored in the Redux store for efficient access.

---

### **Design Decisions**

#### **Consistency Across Themes**
- The primary color (`#0055ff` in light mode and `#4f83cc` in dark mode) is used consistently across both themes to maintain brand identity.
- The typography and layout remain the same, ensuring a seamless transition between themes.

#### **Visual Hierarchy**
- The progress bar and buttons are visually distinct to guide the user through the process.
- The skip cards use a combination of font sizes, weights, and colors to highlight important information like the skip size and price.

#### **Depth and Contrast**
- Shadows and borders are used to create depth and separate elements from the background.
- Colors are carefully chosen to ensure sufficient contrast for readability and accessibility.

#### **User Guidance**
- The progress bar provides a clear visual indicator of the user's current step.
- The "Continue" button is disabled until a skip is selected, ensuring that users follow the intended flow.

---

### **Improvements Made**

#### **Dark Mode Implementation**
- A fully functional dark mode was added, with all components adapting seamlessly to the new theme.
- CSS variables were used to manage theme-specific styles, making the implementation scalable and maintainable.

#### **Responsive Design Enhancements**
- The progress bar was made horizontally scrollable on smaller devices, ensuring that all steps remain accessible.
- The skip cards adjust their layout based on the screen size, providing a consistent user experience.

#### **Improved Accessibility**
- Buttons and interactive elements were styled with clear hover and disabled states.
- The text and icons were adjusted for better contrast and readability in both themes.

#### **Visual Refinements**
- Shadows and borders were fine-tuned to create a sense of depth and separation between elements.
- The badges on the skip cards were styled to match the overall theme while retaining their meaning.

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