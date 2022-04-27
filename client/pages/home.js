// pages/home.js
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <>
      <main className="bg-black min-h-screen flex max-w-[1800px] mx-auto ">
        {/* Sidebar */}
        <Sidebar />
        
        {/*  Feed */}

        <Feed/>

        {/*  Widgets */}

        {/* Modal */}
      </main>
    </>
  );
};

export default Home;
