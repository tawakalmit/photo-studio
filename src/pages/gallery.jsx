import React from 'react'
import Navbar from '../components/navbar'
import { Tab } from '@headlessui/react'
import {FaBaby, FaChild, FaUserGraduate} from "react-icons/fa"
import {TbFriends} from "react-icons/tb"
import {MdFamilyRestroom, MdGroups, MdOutlinePhotoCameraFront} from "react-icons/md"
import {GiNewBorn} from "react-icons/gi"

export default function Gallery() {
  return (
    <div>
        <div className='w-full h-20 bg-[#f1c40f]'>
        <Navbar />
        </div>
        <div className='pt-5'>
        <p className='text-3xl font-semibold text-center p-5'>Our Popular Category</p>
        <Tab.Group>
        <div className="flex items-center w-10/12 mx-auto pb-20">
        <Tab.List className="w-fit mx-auto flex flex-col justify-items-start">
            <Tab><FaBaby size={30} /></Tab>
            <Tab><FaChild size={30} /></Tab>
            <Tab><TbFriends size={30} /></Tab>
            <Tab><FaUserGraduate size={30} /></Tab>
            <Tab><MdFamilyRestroom size={30} /></Tab>
            <Tab><GiNewBorn size={30} /></Tab>
            <Tab><MdGroups size={30} /></Tab>
            <Tab><MdOutlinePhotoCameraFront size={30} /></Tab>
        </Tab.List>
        <Tab.Panels className="w-9/12 mx-auto">
            <Tab.Panel><img src='/b93eecc0-02f3-4812-b0ac-c99acfabf1e9.jpg' alt='baby'></img></Tab.Panel>
            <Tab.Panel><img src='/bdeaf431-a6ca-44a1-8115-f7ac16009e83.jpg' alt='baby'></img></Tab.Panel>
            <Tab.Panel><img src='/190eb07f-36b3-4232-bb59-d19b86836972.jpg' alt='baby'></img></Tab.Panel>
            <Tab.Panel><img src='/1bd2d2cf-6f22-43fe-b11e-d9d68e94114a.jpg' alt='baby'></img></Tab.Panel>
            <Tab.Panel><img src='/cc8b86bd-ac49-467b-8f48-3d99abce7248.jpg' alt='baby'></img></Tab.Panel>
            <Tab.Panel><img src='/677c503f-21e9-48d3-949e-d51056248753.jpg' alt='baby'></img></Tab.Panel>
            <Tab.Panel><img src='/5a617bd3-4e69-4f3f-a3a1-83054fcda188.jpg' alt='baby'></img></Tab.Panel>
            <Tab.Panel><img src='/e5cbd1b8-9e41-4a63-8246-9599e550044c.jpg' alt='baby'></img></Tab.Panel>
        </Tab.Panels>
        </div>
        </Tab.Group>
        </div>
    </div>
  )
}
