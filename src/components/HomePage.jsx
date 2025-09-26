import React, { useMemo } from 'react';
import Card from './Card';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

const calculateOverallAttendance = (attendance) => {
  const totalAttended = attendance.reduce((acc, subject) => acc + subject.attended, 0);
  const totalClasses = attendance.reduce((acc, subject) => acc + subject.total, 0);
  return totalClasses > 0 ? (totalAttended / totalClasses) * 100 : 0;
};

const HomePage = ({ student }) => {
  const overallPercentage = useMemo(() => calculateOverallAttendance(student.attendance), [student.attendance]);
  const isAttendanceLow = overallPercentage < 75;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">{getGreeting()}, {student.name}!</h1>
        <p className="text-lg text-gray-300">Here's your overview for today.</p>
      </div>

      <Card className="flex flex-col items-center justify-center text-center">
        <h2 className="text-xl font-semibold mb-2 text-gray-200">Quick Attendance</h2>
        <p className={`text-6xl font-bold ${isAttendanceLow ? 'text-red-400' : 'text-green-400'}`}>
          {overallPercentage.toFixed(2)}%
        </p>
      </Card>

      {isAttendanceLow && (
        <Card className="!bg-red-500/30 border-red-500/50">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h3 className="text-xl font-bold text-red-200">Attendance Alert!</h3>
              <p className="text-red-300">Your attendance is below 75%. Please be regular to your classes.</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default HomePage;
