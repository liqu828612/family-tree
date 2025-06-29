import Drawer from '@/components/Drawer'
import FamilyTree from '@/components/FamilyTree'
import MotherOfGirls from '@/components/MotherOfGirls'
import SearchMember from '@/components/SearchMember'
import SearchRelationship from '@/components/SearchRelationship'
import { Button } from '@zendeskgarden/react-buttons'
import { Poppins } from 'next/font/google'
import { useState } from 'react'

const poppins = Poppins({ subsets: ['latin'], weight: '300' })

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const showDrawer = () => setIsOpen(true)
  const closeDrawer = () => setIsOpen(false)

  return (
    <main
      className={`bg-white flex min-h-screen flex-col items-center justify-start p-2 ${poppins.className} text-center`}
    >
      <h1 className="text-4xl font-medium mb-10 text-slate-700">Family Tree</h1>
      <div className="max-w-2xl mx-auto mb-8 ">
        <h3 className="text-lg font-semibold text-gray-900 ">
          Welcome to the Qu family tree
        </h3>
        <h3 className="text-lg font-semibold text-red-500">
          The data is still being verified, please forgive me if there are any errors.
        </h3>
        <p className="my-4 text-gray-500">
          Click on any one of the family members to add a child or a spouse.
        </p>
        <p className="my-4 text-gray-500">
          This family tree application allows you to explore and manage the Qu family genealogy.
          For any inquiries, corrections, or contributions, please contact us at{' '}
          <a href="mailto:liqu828612@gmail.com" className="text-blue-500 hover:underline">
            liqu828612@gmail.com
          </a>{' '}
          or{' '}
          <a href="tel:+447719175149" className="text-blue-500 hover:underline">
            +447719175149
          </a>.
        </p>
      </div>
      <Button
        isBasic
        onClick={showDrawer}
        title="Search family members"
        aria-label="Search family members"
        className="!mb-8"
      >
        Search family members
      </Button>

      <FamilyTree />
      <Drawer isOpen={isOpen} onClose={closeDrawer}>
        <div className="flex flex-col gap-8">
          <SearchRelationship />
          <span className="w-full mr-4 h-[0.5px] bg-gray-300"></span>
          <SearchMember />
          <span className="w-full mr-4 h-[0.5px] bg-gray-300"></span>
          <MotherOfGirls />
        </div>
      </Drawer>
    </main>
  )
}
