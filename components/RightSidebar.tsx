import Image from 'next/image'
import Link from 'next/link'
import React, { use } from 'react'
import BankCard from './BankCard'
import { countTransactionCategories } from '@/lib/utils'
import Category from './Category'

const RightSidebar = ({user,banks,transactions}:RightSidebarProps) => {
  const categories: CategoryCount[] = countTransactionCategories(transactions)
  return (
    <aside className="right-sidebar">

      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">{user?.firstName[0]}</span>
          </div>

          <div className="profile-details">
            <h1 className='profile-name'>
              {user?.firstName} {user?.lastName}
            </h1>
            <p className="profile-email">
              {user?.email}
            </p>
          </div>
        </div>
      </section>

    <section className='banks'>
        <div className='flex justify-between w-full'>
            <h2 className='header-2'>My Banks</h2>
            <Link href='/' className='flex gap-2'>
                <Image 
                src='/icons/plus.svg'
                width={20}
                height={20}
                alt='plus'/>
                <p className='text-14 font-semibold text-gray-600'>Add Bank</p>
            </Link>
        </div>


        {banks?.length > 0 && (
          <div className='relative flex flex-col flex-1 items-center justify-center gap-5'>
            <div className='relative z-10'>
              <BankCard key={banks[0].$id} account={banks[0]} userName={`${user?.firstName} ${user?.lastName}`} showBalance={false} />
            </div>
            {banks[1] && (
              <div className='absolute top-8 right-0 z-0 w-[90%]'>
                  <BankCard key={banks[1].$id} account={banks[1]} userName={`${user?.firstName} ${user?.lastName}`} showBalance={false} />

              </div>
            )}
          </div>
        )}

        <div className='mt-10 flex flex-1 flex-col gap-6'>
          <h2 className='header-2'>
            Top categories
          </h2>
          <div className='space-y-5'>
            {categories.map((category,index)=>(
              <Category key={category.name} category={category}/>
            ))}
          </div>
        </div>

    </section>

   

    </aside>
  )
}

export default RightSidebar
