import React, { useEffect } from "react";
import ObjectInfoCard from "./components/ObjectInfoCard";
import { RootState, useAppDispatch, useAppSelector } from "./api/store";
import { fetchSkips } from "./api/skipApi";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./hooks/useTheme";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { theme, toggleTheme } = useTheme();
  const {
    data: skips,
    status,
    error,
  } = useAppSelector((state: RootState) => state.skips);

  useEffect(() => {
    dispatch(fetchSkips({ postcode: "NR32", area: "Lowestoft" }));
  }, [dispatch]);

  return (
    <div className="app">
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>
      <div className="content">
        <ProgressBar />
        <div className="title">Choose Your Skip Size</div>
        <div className="subtitle">Select the skip size that best suits your needs</div>
        {status === "loading" && <p>Loading...</p>}
        {status === "succeeded" && (
          <div className="skips-grid">
            {skips.map((skip) => (
              <ObjectInfoCard key={skip.id} skip={skip} />
            ))}
          </div>
        )}
        {status === "failed" && <p>Error: {error}</p>}
      </div>
    </div>
  );
};

export default App;
