import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter.jsx";
import ThemeProvider from "./contexts/ThemeContext.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}
