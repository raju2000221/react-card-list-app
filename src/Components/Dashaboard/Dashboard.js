import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const studentMarks = [
        {
          "id": 1,
          "name": "John",
          "math": 85,
          "physics": 90,
          "chemistry": 78,
          "biology": 92
        },
        {
          "id": 2,
          "name": "Emily",
          "math": 92,
          "physics": 88,
          "chemistry": 76,
          "biology": 84
        },
        {
          "id": 3,
          "name": "Michael",
          "math": 78,
          "physics": 85,
          "chemistry": 90,
          "biology": 79
        },
        {
          "id": 4,
          "name": "Sophia",
          "math": 91,
          "physics": 95,
          "chemistry": 88,
          "biology": 92
        },
        {
          "id": 5,
          "name": "Daniel",
          "math": 87,
          "physics": 82,
          "chemistry": 91,
          "biology": 87
        },
        {
          "id": 6,
          "name": "Olivia",
          "math": 83,
          "physics": 90,
          "chemistry": 87,
          "biology": 81
        },
        {
          "id": 7,
          "name": "James",
          "math": 88,
          "physics": 92,
          "chemistry": 85,
          "biology": 89
        },
        {
          "id": 8,
          "name": "Ava",
          "math": 95,
          "physics": 84,
          "chemistry": 92,
          "biology": 87
        },
        {
          "id": 9,
          "name": "Benjamin",
          "math": 90,
          "physics": 87,
          "chemistry": 81,
          "biology": 84
        },
        {
          "id": 10,
          "name": "Isabella",
          "math": 84,
          "physics": 89,
          "chemistry": 92,
          "biology": 85
        }
      ];
      
    return (
        <div>
            <LineChart
             width={1000}
             height={500}
             data={studentMarks}
            >

                <Line dataKey="math" ></Line>
                <Line dataKey="physics" ></Line>
                <Line dataKey="chemistry" ></Line>
                <Line dataKey="biology" ></Line>
                <XAxis dataKey="name"/>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <CartesianGrid></CartesianGrid>
                <Legend></Legend>
                <ResponsiveContainer></ResponsiveContainer>
            </LineChart>
        </div>
    );
};

export default Dashboard;