import React from 'react'
import Flex from './Flex'
import List from './List'
import ListItem from './ListItem'

const ActivityListContent = () => {
  return (
    <Flex className={'flex flex-col gap-6 mt-10'}>
        <h2 className='font-poppins font-semibold text-darker_blue text-2xl text-center lg:text-start'>Our Team Members:</h2>
        <Flex className={'flex items-center gap-4 flex-col'}>
            <List className={'flex gap-2'}>
                <ListItem className={'lg:w-[250px] w-[200px] font-poppins font-semibold text-darknest_blue text-xl'}>Full Name</ListItem>
                <ListItem className={'lg:w-[150px] w-[100px] font-poppins font-semibold text-darknest_blue text-xl justify-center'}>Department</ListItem>
            </List>
            <List className={'flex gap-5 mt-2'}>
                <ListItem className={'lg:w-[250px] w-[200px] font-poppins font-semibold text-font-color'}>Anas Al Rafin  (Leader)</ListItem>
                <ListItem className={'lg:w-[150px] w-[100px] font-poppins font-semibold text-font-color justify-center'}>ME</ListItem>
            </List>
            <List className={'flex gap-5'}>
                <ListItem className={'lg:w-[250px] w-[200px] font-poppins font-semibold text-font-color'}>Shihab Tanvir Sadnan</ListItem>
                <ListItem className={'lg:w-[150px] w-[100px] font-poppins font-semibold text-font-color justify-center'}>ME</ListItem>
            </List>
            <List className={'flex gap-5'}>
                <ListItem className={'lg:w-[250px] w-[200px] font-poppins font-semibold text-font-color'}>Abdullah Al Mreenmay</ListItem>
                <ListItem className={'lg:w-[150px] w-[100px] font-poppins font-semibold text-font-color justify-center'}>ME</ListItem>
            </List>
            <List className={'flex gap-5'}>
                <ListItem className={'lg:w-[250px] w-[200px] font-poppins font-semibold text-font-color'}>Nazmur Rahman Emon</ListItem>
                <ListItem className={'lg:w-[150px] w-[100px] font-poppins font-semibold text-font-color justify-center'}>EEE</ListItem>
            </List>
            <List className={'flex gap-5'}>
                <ListItem className={'lg:w-[250px] w-[200px] font-poppins font-semibold text-font-color'}>Rifah Tasfia Kabir (Co-Leader)</ListItem>
                <ListItem className={'lg:w-[150px] w-[100px] font-poppins font-semibold text-font-color justify-center'}>EEE</ListItem>
            </List>
            <List className={'flex gap-5'}>
                <ListItem className={'lg:w-[250px] w-[200px] font-poppins font-semibold text-font-color'}>Shoaib Al Mahian</ListItem>
                <ListItem className={'lg:w-[150px] w-[100px] font-poppins font-semibold text-font-color justify-center'}>ME</ListItem>
            </List>
            <List className={'flex gap-5'}>
                <ListItem className={'lg:w-[250px] w-[200px] font-poppins font-semibold text-font-color'}>Talal Owasif Tushar</ListItem>
                <ListItem className={'lg:w-[150px] w-[100px] font-poppins font-semibold text-font-color justify-center'}>ME</ListItem>
            </List>
            <List className={'flex gap-5'}>
                <ListItem className={'lg:w-[250px] w-[200px] font-poppins font-semibold text-font-color'}>Jubaida Hossain</ListItem>
                <ListItem className={'lg:w-[150px] w-[100px] font-poppins font-semibold text-font-color justify-center'}>ME</ListItem>
            </List>
            <List className={'flex gap-5'}>
                <ListItem className={'lg:w-[250px] w-[200px] font-poppins font-semibold text-font-color'}>Khalid uz zaman</ListItem>
                <ListItem className={'lg:w-[150px] w-[100px] font-poppins font-semibold text-font-color justify-center'}>EEE</ListItem>
            </List>
            <List className={'flex gap-5'}>
                <ListItem className={'lg:w-[250px] w-[200px] font-poppins font-semibold text-font-color'}>S.M.Moin Haque</ListItem>
                <ListItem className={'lg:w-[150px] w-[100px] font-poppins font-semibold text-font-color justify-center'}>EEE</ListItem>
            </List>
            <List className={'flex gap-5'}>
                <ListItem className={'lg:w-[250px] w-[200px] font-poppins font-semibold text-font-color'}>Khorshed Alam</ListItem>
                <ListItem className={'lg:w-[150px] w-[100px] font-poppins font-semibold text-font-color justify-center'}>EEE</ListItem>
            </List>
            <List className={'flex gap-5'}>
                <ListItem className={'lg:w-[250px] w-[200px] font-poppins font-semibold text-font-color'}>Abrar Jahin Sachcha</ListItem>
                <ListItem className={'lg:w-[150px] w-[100px] font-poppins font-semibold text-font-color justify-center'}>EEE</ListItem>
            </List>
            <List className={'flex gap-5'}>
                <ListItem className={'lg:w-[250px] w-[200px] font-poppins font-semibold text-font-color'}>Jahirul Islam</ListItem>
                <ListItem className={'lg:w-[150px] w-[100px] font-poppins font-semibold text-font-color justify-center'}>ME</ListItem>
            </List>
            <List className={'flex gap-5'}>
                <ListItem className={'lg:w-[250px] w-[200px] font-poppins font-semibold text-font-color'}>Shahedul Alam</ListItem>
                <ListItem className={'lg:w-[150px] w-[100px] font-poppins font-semibold text-font-color justify-center'}>EEE</ListItem>
            </List>
            <List className={'flex gap-5'}>
                <ListItem className={'lg:w-[250px] w-[200px] font-poppins font-semibold text-font-color'}>Md. Fahim Ahmed</ListItem>
                <ListItem className={'lg:w-[150px] w-[100px] font-poppins font-semibold text-font-color justify-center'}>ME</ListItem>
            </List>
            <List className={'flex gap-5'}>
                <ListItem className={'lg:w-[250px] w-[200px] font-poppins font-semibold text-font-color'}>Amit Chakraborty</ListItem>
                <ListItem className={'lg:w-[150px] w-[100px] font-poppins font-semibold text-font-color justify-center'}>EEE</ListItem>
            </List>
            <List className={'flex gap-5'}>
                <ListItem className={'lg:w-[250px] w-[200px] font-poppins font-semibold text-font-color'}>Md. Omar Karim</ListItem>
                <ListItem className={'lg:w-[150px] w-[100px] font-poppins font-semibold text-font-color justify-center'}>ME</ListItem>
            </List>
        </Flex>
    </Flex>
  )
}

export default ActivityListContent