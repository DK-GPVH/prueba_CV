import React, { PureComponent } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: '2022', value: 100 , stilo:'bg-[#4d0e44] p-2 m-2'},
  { name: '2021', value: 300 , stilo:'bg-[#b5179e] p-2 m-2'},
  { name: '2020', value: 200 , stilo:'bg-[#7209b7] p-2 m-2'},
  { name: '2019', value: 200 , stilo:'bg-[#560bad] p-2 m-2'},
  { name: '2018', value: 300 , stilo:'bg-[#f72585] p-2 m-2'},
]

const COLORS = ['#4d0e44', '#b5179e', '#7209b7','#560bad', '#f72585']

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   )
}
export default class CircularChartReporte extends PureComponent{
static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj'
render() {  
    return (
    <div className="lg:col-span-3 sm:col-span-12 lg:grid-cols-3 sm:grid-cols-12 bg-gray-200 rounded-3xl p-5 text-slate-100 m-2">
        <div className="flex flex-col gap-2">
          <i className="fa-regular fa-circle"></i>
          <h1 className="font-bold">Documentos por año</h1>
          <div className='flex items-center gap-2 flex-wrap'>
            {data.map((dato)=>{ 
                return <span className='font-medium mx-2'> <div className={dato.stilo}></div> {dato.name}</span>
                })}
            
          </div>
        </div>
        <div className="flex items-center">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart width={400} height={200}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
        )
    }
}
