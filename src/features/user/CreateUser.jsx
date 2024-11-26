import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";
function CreateUser() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (username) {
      dispatch(updateName(username));
      navigate("/menu");
    }
  }

  return (
    <>
      {name.username ? (
        <>
          <br />
          <Button to="/menu" type={"primary"}>
            Continue Ordiring{" "}
          </Button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <p className=" mb-4 text-sm text-stone-600 ">👋 Welcome! Please start by telling us your name:</p>
          <input type="text" className="input mb-4" placeholder="Your full name" value={username} onChange={(e) => setUsername(e.target.value)} />

          {username !== "" && (
            <div>
              <Button type="primary">Start ordering</Button>
            </div>
          )}
        </form>
      )}
    </>
  );
}

export default CreateUser;
