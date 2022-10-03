import React from 'react'
import HelloClient from '../components/user/dashboard/HelloClient'
import Squares from '../components/user/dashboard/Squares';
import MonthsChart from '../components/user/dashboard/MonthsChart';
import SalesChart from '../components/user/dashboard/SalesChart';
import CircularChart from '../components/user/dashboard/CircularChart';

export default function Inicio() {
  return (
    <div className='grid grid-cols-1  sm:gap-y-2 sm:grid-cols-1 mx-4 sm:col-span-12 lg:gap-2 gap-y-3 lg:grid-cols-12 lg:pt-4 mb-10'>
      <HelloClient/>
      <Squares/>
      <MonthsChart/>
      <SalesChart/>
      <CircularChart/>
    </div>
  )
}
