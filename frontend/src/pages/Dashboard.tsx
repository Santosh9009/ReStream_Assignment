import StreamSetup from '../components/Dashboard/StreamSetup';
import Sidebar from '../components/Dashboard/Sidebar';
import Header from '../components/Dashboard/Header';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#162B4D] overflow-hidden">
      <Header />
      <div className="flex flex-col md:grid md:grid-cols-[5fr_3fr] gap-3 px-4">
        <main className="overflow-y-auto">
          <StreamSetup />
        </main>
        <Sidebar className="md:flex-shrink-0" /> {/* Sidebar is now responsive */}
      </div>
    </div>
  );
};

export default Dashboard;
