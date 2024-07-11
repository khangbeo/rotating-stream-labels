import { User } from "./types/User";

type UserDisplayProps = {
  user: User;
  isVisible: boolean;
};

const UserDisplay: React.FC<UserDisplayProps> = ({ user, isVisible }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } `}
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="mb-3 text-6xl font-bold text-greeen text-center">
        {user.label}
      </div>
      <img
        src={user.avatar}
        alt="twitch-profile-picture"
        className="rounded-full border-8 border-greeen w-80 h-80"
      />
      <div className="mt-2 text-5xl font-bold text-greeen">{user.name}</div>
    </div>
  );
};

export default UserDisplay;
