import React from 'react';
import { Home, BarChart2, CheckSquare, Menu, X } from 'lucide-react';

const Sidebar = ({ page, setPage, isOpen, setIsOpen }) => {
    const navItems = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'attendance', label: 'My Attendance', icon: CheckSquare },
        { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    ];

    const NavLink = ({ id, label, icon: Icon }) => (
        <button
            onClick={() => { setPage(id); setIsOpen(false); }}
            className={`flex items-center w-full px-4 py-3 text-left transition-colors duration-200 rounded-lg ${page === id ? 'bg-indigo-500 text-white shadow-md' : 'hover:bg-white/20'
                }`}
        >
            <Icon className="w-5 h-5 mr-3" />
            <span className="font-medium">{label}</span>
        </button>
    );

    return (
        <>
            <div className={`fixed inset-y-0 left-0 z-30 w-64 p-4 space-y-4 text-white transition-transform duration-300 ease-in-out transform bg-gray-900/70 backdrop-blur-lg lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <h2 className="text-2xl font-bold text-center">Student Dashboard</h2>
                <nav className="flex flex-col space-y-2">
                    {navItems.map(item => <NavLink key={item.id} {...item} />)}
                </nav>
            </div>
            {isOpen && <div className="fixed inset-0 z-20 bg-black/50 lg:hidden" onClick={() => setIsOpen(false)}></div>}
        </>
    );
};

export default Sidebar;
