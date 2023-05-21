import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import { Trophy } from '@phosphor-icons/react'
import BellRinging from '@phosphor-icons/react/dist/icons/BellRinging'

export const Private = () =>{
  const auth = useContext(AuthContext)
  return(
    <div className="flex flex-row w-full">
      <div className="w-[15vw] min-h-[80vh]" style={{backgroundColor :"6D92A1"}}>
      <ul className="list-none">
        <li className="border-b border-black py-4 px-4">Início</li>
        <li className="border-b border-black py-4 px-4">Cadastro</li>
        <li className="border-b border-black py-4 px-4">Matérias</li>
        <li className="border-b border-black py-4 px-4">Histórico</li>
        <li className="border-b border-black py-4 px-4">Atividades</li>
      </ul>
        </div>
        <div className="w-[85vw] bg-blue-400 grid grid-cols-3">
        <div className='w-[400px] h-[300px] flex flex-col justify-between rounded-md my-4 mx-4' style={{backgroundColor : "#859CA6"}}>
            <div className='' style={{backgroundColor: "#355664"}}>
                      <h1 className='text-white text-center text-[32px]'>História</h1>
                      <h4 className='text-white text-center text-[24px]'>Prof: João Carlos</h4>
              </div>
              <div className='cursor-pointer'>
                  <h2 className='pl-2 text-yellow-300 text-center font-thin text-[20px]'>Verifique a última atividade postada...</h2>
              </div>
              <div className='flex flex-row gap-2 ml-12 mb-2'>
                    <Trophy size={32} className='cursor-pointer' />
                    <BellRinging size={32} className='cursor-pointer'/>
              </div>
          </div>
          <div className='w-[400px] h-[300px] flex flex-col justify-between rounded-md my-4 mx-4' style={{backgroundColor : "#859CA6"}}>
              <div className='' style={{backgroundColor: "#355664"}}>
                      <h1 className='text-white text-center text-[32px]'>História</h1>
                      <h4 className='text-white text-center text-[24px]'>Prof: João Carlos</h4>
              </div>
              <div className='cursor-pointer'>
                  <h2 className='pl-2 text-yellow-300 text-center font-thin text-[20px]'>Verifique a última atividade postada...</h2>
              </div>
              <div className='flex flex-row gap-2 ml-12 mb-2'>
                    <Trophy size={32} className='cursor-pointer' />
                    <BellRinging size={32} className='cursor-pointer'/>
              </div>
          </div>
          <div className='w-[400px] h-[300px] flex flex-col justify-between rounded-md my-4 mx-4' style={{backgroundColor : "#859CA6"}}>
                <div className='' style={{backgroundColor: "#355664"}}>
                    <h1 className='text-white text-center text-[32px]'>História</h1>
                    <h4 className='text-white text-center text-[24px]'>Prof: João Carlos</h4>
                </div>
            <div className='cursor-pointer'>
                <h2 className='pl-2 text-yellow-300 text-center font-thin text-[20px]'>Verifique a última atividade postada...</h2>
            </div>
            <div className='flex flex-row gap-2 ml-12 mb-2'>
                  <Trophy size={32} className='cursor-pointer'/>
                  <BellRinging size={32} className='cursor-pointer' />
            </div>
          </div>
        </div>
    </div>
  )
}