import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import AttendancePage from './components/AttendancePage';
import AnalyticsPage from './components/AnalyticsPage';
import { studentData } from './data/studentData';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [page, setPage] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage student={studentData} />;
      case 'attendance':
        return <AttendancePage attendance={studentData.attendance} />;
      case 'analytics':
        return <AnalyticsPage attendance={studentData.attendance} monthlyTrends={studentData.monthlyTrends} />;
      default:
        return <HomePage student={studentData} />;
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)' }}>
      <Sidebar page={page} setPage={setPage} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <div className="lg:pl-64 transition-all duration-300 ease-in-out">
        <main className="p-4 sm:p-6 lg:p-8">
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-2 rounded-md bg-white/10 mb-4"
            >
                {isSidebarOpen ? <X/> : <Menu/>}
            </button>
            {renderPage()}
        </main>
      </div>
    </div>
  );
}
