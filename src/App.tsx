import { useState, useEffect } from "react";
import fetchData from "./utils/getData";
import useLocalStorage from "./hooks/useLocalStorage";
import UserDisplay from "./UserDisplay";
import useCarousel from "./hooks/useCarousel";
import { User } from "./types/User";

function App() {
    const [users, setUsers] = useLocalStorage<User[]>("users", []);
    const [lastFetch, setLastFetch] = useLocalStorage("lastFetch", 0);
    const [error, setError] = useState<string | null>("");
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
    }, [lastFetch, setLastFetch, setUsers]);

    if (error) {
        // return (
        //   <div className="flex justify-center items-center h-screen">
        //     <p>{error}</p>
        //   </div>
        // );
        // if error then return what's already cached
        return (
            <div className="flex justify-center items-center h-screen font-PO">
                <div className="relative w-80 h-80">
                    {users.map((user: any, i: number) => (
                        <UserDisplay
                            key={i}
                            user={user}
                            isVisible={i === index}
                        />
                    ))}
                </div>
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
                {users.map((user: any, i: number) => (
                    <UserDisplay key={i} user={user} isVisible={i === index} />
                ))}
            </div>
        </div>
    );
}

export default App;
