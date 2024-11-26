import { useSelector } from "react-redux";
function UserName() {
  const { username } = useSelector((state) => state.user);
  return (
    <p title="username" className="font-semibold">
      {username}
    </p>
  );
}

export default UserName;
