const Dashboard = () => {
  return (
    <div className="p-4 pt-14 flex justify-center items-center h-full">
      <div>
        <iframe
          src=" http://127.0.0.1:5000/video_feed"
          frameborder="0"
          width="500px"
          height="500px"
        />
      </div>
    </div>
  );
};

export default Dashboard;
