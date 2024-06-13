import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react';

const home = async () => {

  const loggedIn = await getLoggedInUser();

  
  return (
    <section className='home'>
      <div className='home-content'>

        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='welcome'
            user= {loggedIn?.name || 'Guest'}
            subtext='Access and manage your account and transactions efficiently'/>
        </header>

        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250}/>

      </div>

      <RightSidebar user={loggedIn} banks={[{currentBalance:123.40},{currentBalance:150.70}]} transactions={[]}/>
    </section>
  )
}

export default home
