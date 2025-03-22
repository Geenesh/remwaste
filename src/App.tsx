import React, { useEffect } from "react";
import ObjectInfoCard from "./components/ObjectInfoCard";
import { RootState, useAppDispatch, useAppSelector } from "./api/store";
import { fetchSkips } from "./api/skipApi";
import "./App.css";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    data: skips,
    status,
    error,
  } = useAppSelector((state: RootState) => state.skips);

  useEffect(() => {
    dispatch(fetchSkips({ postcode: "NR32", area: "Lowestoft" }));
  }, [dispatch]);

  return (
    <div>
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
  );
};

export default App;
