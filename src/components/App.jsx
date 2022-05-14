import { Profile } from "../components/Profile/Profile";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Profile/>
    </div>
  );
};
