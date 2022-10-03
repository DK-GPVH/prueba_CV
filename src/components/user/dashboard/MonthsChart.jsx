import React, { PureComponent } from 'react'
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: 'Enero',
    uv: 4000,
    pv: 6000,
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
    pv: 9800,
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
    pv: 9800,
    amt: 2500,
  },
  {
    name: 'Julio',
    uv: 3490,
    pv: 7300,
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
    pv: 6300,
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
    pv: 9300,
    amt: 2100,
  },
]

export default class MonthsChart extends PureComponent {
  render() {
    return (
      <div className="col-span-12 bg-[#111827] rounded-3xl p-5 text-slate-100">
        <div className="flex justify-between mb-12">
          <h1 className="font-bold text-white">TOTAL DE DOCUMENTOS : 200</h1>
          <div>
            <i className="fa-solid fa-bars-staggered bg-[#151A20] p-4 rounded-xl -rotate-90"></i>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={30}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
              tickLine={false}
              axisLine={false}
              tick={{ fill: 'white' }}
            />

            <Bar
              dataKey="pv"
              fill="#9747FF"
              background={{ fill: '#111827' }}
              className="rounded-lg"
              radius={[10, 10, 10, 10]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
