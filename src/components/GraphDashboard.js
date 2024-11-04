import React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  Line,
  Bar,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  { name: '2020', commits: 200, sales: 1200 },
  { name: '2021', commits: 300, sales: 1500 },
  { name: '2022', commits: 500, sales: 900 },
  { name: '2023', commits: 700, sales: 1600 },
];

export default function GraphDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <h2>커밋 수 Line 차트</h2>
      <LineChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="commits" stroke="#6ABD8C" activeDot={{ r: 8 }} />
      </LineChart>

      <h2>판매량 Bar 차트</h2>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" />
      </BarChart>

      <h2>판매량 Pie 차트</h2>
      <PieChart width={730} height={250}>
        <Pie
          data={data}
          dataKey="sales"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#82ca9d"
          label
        />
        <Tooltip />
      </PieChart>

      <h2>커밋 수 Line 차트 (Custom)</h2>
      <LineChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="commits" stroke="#ff7300" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="sales" stroke="#387908" />
      </LineChart>
    </div>
  );
}
