import React, { PureComponent } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: 'Enero',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Febrero',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Marzo',
    uv: 2000,
    pv: 3800,
    amt: 2290,
  },
  {
    name: 'Abril',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Mayo',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Junio',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Julio',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Agosto',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Septiembre',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Octubre',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Noviembre',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Diciembre',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

export default class SalesChart extends PureComponent {
  render() {
    return (
      <div className="col-span-12 sm:col-span-9 bg-[#111827] rounded-3xl p-5 text-slate-100 ">
        <div className="flex justify-between mb-12">
          <h1 className="font-bold text-white">Gráfico de ventas</h1>
          <div>
            <i className="fa-solid fa-bars-staggered bg-[#151A20] p-4 rounded-xl -rotate-90"></i>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" tick={{ fill: 'white' }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fill: 'white' }} tickLine={false} axisLine={false} />
            {/*<Tooltip />*/}
            <Line type="monotone" dataKey="pv" stroke="#FFC403" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#E80054" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
