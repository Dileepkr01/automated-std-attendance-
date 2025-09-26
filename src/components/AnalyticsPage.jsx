import React from 'react';
import Card from './Card';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AnalyticsPage = ({ attendance, monthlyTrends }) => {
  const overallPercentage = attendance.reduce((acc, sub) => acc + sub.attended, 0) / attendance.reduce((acc, sub) => acc + sub.total, 0) * 100;

  const pieData = [
    { name: 'Present', value: overallPercentage },
    { name: 'Absent', value: 100 - overallPercentage },
  ];
  const PIE_COLORS = ['#6366F1', '#4B5563']; // Indigo, Gray

  const barData = monthlyTrends.map(monthData => {
      const totalAttended = Object.keys(monthData).filter(k => k !== 'month').reduce((sum, key) => sum + monthData[key], 0);
      return { name: monthData.month, Attendance: totalAttended };
  });

  const subjectComparisonData = attendance.map(sub => ({
      name: sub.subject,
      'Attendance %': ((sub.attended / sub.total) * 100).toFixed(2)
  }));

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Analytics & Reports</h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <Card className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-center">Overall Attendance</h2>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" dataKey="value" nameKey="name" label>
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #4B5563', borderRadius: '0.5rem' }} />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </Card>

        <Card className="lg:col-span-3">
            <h2 className="text-2xl font-semibold mb-4 text-center">Monthly Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <XAxis dataKey="name" stroke="#9CA3AF"/>
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #4B5563', borderRadius: '0.5rem' }} cursor={{fill: 'rgba(99, 102, 241, 0.2)'}}/>
                    <Legend />
                    <Bar dataKey="Attendance" fill="#6366F1" />
                </BarChart>
            </ResponsiveContainer>
        </Card>
      </div>

      <Card>
        <h2 className="text-2xl font-semibold mb-4 text-center">Subject Comparison</h2>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={subjectComparisonData} layout="vertical" margin={{ top: 5, right: 30, left: 30, bottom: 5 }}>
                <XAxis type="number" domain={[0, 100]} stroke="#9CA3AF" />
                <YAxis type="category" dataKey="name" width={80} stroke="#9CA3AF" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #4B5563', borderRadius: '0.5rem' }} cursor={{fill: 'rgba(99, 102, 241, 0.2)'}}/>
                <Legend />
                <Bar dataKey="Attendance %" fill="#818CF8" />
            </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default AnalyticsPage;
