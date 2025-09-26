import React from 'react';
import Card from './Card';

const AttendancePage = ({ attendance }) => {
    const getPillColor = (percentage) => {
        if (percentage < 75) return 'bg-red-500/80 text-red-100';
        if (percentage < 85) return 'bg-yellow-500/80 text-yellow-100';
        return 'bg-green-500/80 text-green-100';
    };

    return (
        <div className="space-y-6">
            <h1 className="text-4xl font-bold">My Attendance</h1>
            <Card>
                <h2 className="text-2xl font-semibold mb-4 border-b border-white/20 pb-2">Subject-wise Breakdown</h2>
                <div className="space-y-4">
                    {attendance.map(subject => {
                        const percentage = (subject.attended / subject.total) * 100;
                        return (
                            <div key={subject.subject} className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
                                <div>
                                    <p className="font-bold text-lg">{subject.subject}</p>
                                    <p className="text-sm text-gray-300">Attended: {subject.attended} / {subject.total}</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-32 bg-gray-700 rounded-full h-2.5">
                                        <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
                                    </div>
                                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${getPillColor(percentage)}`}>
                                        {percentage.toFixed(1)}%
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Card>
        </div>
    );
};

export default AttendancePage;
