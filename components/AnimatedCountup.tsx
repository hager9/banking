'use client';
import React from 'react';
import CountUp from 'react-countup';

const AnimatedCountup = ({amount}: {amount : number}) => {
  return (
    <div>
        <CountUp end={amount}
        separator=" "
        decimals={2}
        decimal=","
        prefix="$"
        />
        
    </div>
  )
}

export default AnimatedCountup
