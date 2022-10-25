import React, { PureComponent } from 'react'
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: '2018',
    uv: 4000,
    pv: 300,
    amt: 2400,
  },
  {
    name: '2019',
    uv: 3000,
    pv: 200,
    amt: 2210,
  },
  {
    name: '2020',
    uv: 2000,
    pv: 200,
    amt: 2290,
  },
  {
    name: '2021',
    uv: 2780,
    pv: 300,
    amt: 2000,
  },
  {
    name: '2022',
    uv: 1890,
    pv: 100,
    amt: 2181,
  },
]

export default class YearChartReporte extends PureComponent {
  render() {
    return (
      <div className="col-span-12 bg-gray-200 rounded-3xl p-5 text-slate-100 m-2">
        <div className="flex justify-between mb-12">
          <h1 className="font-bold ">TOTAL DE DOCUMENTOS </h1>
          <div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 30,
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
              tick={{ fill: 'black' }}
            />

            <Bar
              dataKey="pv"
              fill= "#9747FF"
              className="rounded-lg"
              radius={[10, 10, 10, 10]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}