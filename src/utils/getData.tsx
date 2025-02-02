import excludedUsers from "../../excludedUsers.json";
import fetchWithAxios from "./fetchWithAxios";
import { User } from "../types/User";

const fetchData = async () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const twitchUrl = import.meta.env.VITE_TWITCH_URL;
  const username = import.meta.env.VITE_TWITCH_USER;
  const channelID = import.meta.env.VITE_CHANNEL_ID;
  const seToken = import.meta.env.VITE_SE_TOKEN;
  const twitchClientId = import.meta.env.VITE_TWITCH_TOKEN_GENERATOR_CLIENT_ID;
  const twitchToken = import.meta.env.VITE_TWITCH_TOKEN;

  const seOptions = {
    headers: { Authorization: `Bearer ${seToken}` },
  };
  const twitchOptions = {
    headers: {
      Authorization: `Bearer ${twitchToken}`,
      "Client-Id": twitchClientId,
    },
  };

  try {
    const [sessionData, chatStats] = await Promise.all([
      fetchWithAxios(`${baseUrl}/sessions/${channelID}`, seOptions),
      fetchWithAxios(`${baseUrl}/chatstats/${username}/stats`, seOptions),
    ]);

    const topChatter = chatStats.chatters.filter(
      (user: any) => !excludedUsers.includes(user.name)
    )[0];

    const topGifter = sessionData.data["subscriber-alltime-gifter"];
    const topTipper = sessionData.data["tip-alltime-top-donator"];

    const usernames = [
      { name: topChatter.name, label: "Chat Champion" },
      { name: topGifter.name, label: "Top Gifter" },
      { name: topTipper.name, label: "Top Contributor" },
    ];

    const userData: User[] = await Promise.all(
      usernames.map(async ({ name, label }) => {
        const res = await fetchWithAxios(
          `${twitchUrl}?login=${name}`,
          twitchOptions
        );
        const { display_name, profile_image_url } = res.data[0];
        return {
          name: display_name,
          avatar: profile_image_url,
          label,
        };
      })
    );

    return userData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchData;
