import DigialWatch from "../components/Date/Date";

const Dashboard = () => {
  return (
    <div className="p-4 pt-14 flex flex-col justify-center items-center 2 gap-5">
      <h1 className="text-black text-3xl font-extrabold">
        Live detection player
      </h1>
      <DigialWatch />
      <div>
        <iframe
          src=" http://127.0.0.1:5000/video_feed"
          frameborder="0"
          width="500px"
          height="375px"
          className="roundedrg"
        />
      </div>
    </div>
  );
};

export default Dashboard;
