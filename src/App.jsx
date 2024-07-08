import { useState, useEffect } from "react";
import fetchData from "./utils/getData";
import useLocalStorage from "./hooks/useLocalStorage";
import UserDisplay from "./UserDisplay";
import useCarousel from "./hooks/useCarousel";

// app uses twitch token generator https://twitchtokengenerator.com/?code=88s2ke31iwgdsgkhlotc11008b8q1v&scope=&state=frontend%7CQVJ1UEZQQno4ODN2UTBDc0duVTMxZz09
function App() {
  const [users, setUsers] = useLocalStorage("users", []);
  const [lastFetch, setLastFetch] = useLocalStorage("lastFetch", null);
  const [error, setError] = useState("");
  const index = useCarousel(users, 5000);

  const ONE_DAY = 24 * 60 * 60 * 1000; // milliseconds in one day

  useEffect(() => {
    const now = Date.now();

    if (!lastFetch || now - lastFetch > ONE_DAY) {
      fetchData()
        .then((userData) => {
          setUsers(userData);
          setLastFetch(now);
        })
        .catch((error) => {
          setError("Failed to load user data.");
          console.error("Error fetching user data: ", error);
        });
    } else {
      console.log("Data fetched less than 24 hours ago. Skipping fetch.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastFetch, setLastFetch, setUsers]);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>{error}</p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen font-PO">
      <div className="relative w-80 h-80">
        {users.map((user, i) => (
          <UserDisplay key={i} user={user} isVisible={i === index} />
        ))}
      </div>
    </div>
  );
}

export default App;
