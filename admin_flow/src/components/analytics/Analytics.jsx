import "./analytics.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: '5',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '10',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '15',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '20',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '25',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '30',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '35',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const Analytics = ({aspect}) => {
  return (
    <div className="analytics">
        <div className="title">
            Analytics
        </div>
        <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Analytics
