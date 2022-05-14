import { Profile } from "../components/Profile/Profile";
import { Statistics } from "../components/Statistics/Statistics";
import { FriendList } from "../components/FriendList/FriendList";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <Profile/>
      <Statistics />
      <FriendList/>
    </div>
  );
};
