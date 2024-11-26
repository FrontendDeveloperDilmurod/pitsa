import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className=" font-pizza text-center my-10 px-4">
      <h1 className=" text-3xl text-stone-800 font-semibold mb-3 ">
        The best pizza.
        <br />
        <span className=" tracking-wide space-x-5 text-yellow-500">Straight out of the oven, straight to you.</span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
