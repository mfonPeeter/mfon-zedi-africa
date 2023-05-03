import userImg from "../../assets/mfon.jpg";

const UserDetails: React.FC = () => {
  return (
    <section className="px-10 sm:px-24">
      <div className="flex flex-col space-y-14">
        <div className="flex items-center justify-between sm:justify-around">
          <h2 className="text-xl font-bold">Profile Picture:</h2>
          <div className="">
            <img className="w-44 h-44 rounded-full" src={userImg} alt="User" />
          </div>
        </div>
        <div className="flex items-center justify-between sm:justify-around">
          <h2 className="text-xl font-bold">City:</h2>
          <p className="text-lg">Uyo</p>
        </div>
        <div className="flex items-center justify-between sm:justify-around">
          <h2 className="text-xl font-bold">Date of Birth:</h2>
          <p className="text-lg">24th May, 2023</p>
        </div>
        <div className="flex items-center justify-between sm:justify-around">
          <h2 className="text-xl font-bold">Nationality</h2>
          <p className="text-lg">Nigerian</p>
        </div>
      </div>
    </section>
  );
};

export default UserDetails;
