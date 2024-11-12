'use client'

import Window from '@/components/Window'
import { useState } from 'react';
import Image from 'next/image';
import Background from '@/public/background.jpg';

if (typeof window === 'object') {
alert("Situs tidak aman! \nSitus ini hanya dipergunakan semata-mata sebagai sarana edukasi mengenai serangan siber yang berbentuk phising. \nAnda tidak perlu mempercayai setiap informasi yang ada pada situs ini. \nSitus ini juga mencoba meniru tampilan situs login milik google. \nSegala elemen yang ada pada tampilan login situs ini tidak lain milik google")
}

export default function Home() {
  const [isClaim, setIsClaim] = useState<boolean>(false);

  function onClick() {
    setIsClaim(true);
  }

  return <div className="md:bg-primary sm:bg-white h-[100vh] sm:flex sm:flex-col md:justify-center md:items-center">
    <div className='w-[90%] h-[90%] rounded-2xl flex justify-between overflow-hidden'>
      <div className="w-[50%] h-[100%]">
        <Image src={Background} className='h-[100%]' priority alt="discount image"/>
      </div>
      <div className='w-[50%] bg-gradient-to-bl from-cyan-300 to-fuchsia-600 p-4'>
        <h1 className='font-extrabold text-2xl text-white'>Promo Tokopedia</h1>
        <h2 className="text-white font-bold text-xl">Kamu Bisa Hemat Hingga Rp20.000.000</h2>
        <h2 className="text-white font-bold text-xl">Dengan Voucher yang Kami Tawarkan</h2>
        <h2 className="text-white font-bold text-xl">Khusus Buat Kamu</h2>
        <div className='mt-6'>
          <div className='mb-6'>
            <div className="flex justify-between">
              <div className='bg-green-200 w-[30%] rounded-xl overflow-hidden'>
                <div className='p-2'>
                  <h3 className='font-bold text-[12px] text-green-500'>Bebas Ongkir</h3>
                  <h3 className="font-bold text-[14px] text-black">Dana Rp5.000.000</h3>
                  <h3 className="font-bold text-[10px] text-black">Toko : Semua Toko</h3>
                </div>
                <h3 className="font-semibold text-[10px] text-red-600 bg-green-300 p-1">Stock : Tersisa 2 buah</h3>
              </div>
              <div className='bg-green-200 w-[30%] rounded-xl overflow-hidden'>
                <div className='p-2'>
                  <h3 className='font-bold text-[12px] text-green-500'>Bebas Ongkir</h3>
                  <h3 className="font-bold text-[14px] text-black">Dana Rp1.250.000</h3>
                  <h3 className="font-bold text-[10px] text-black">Toko : Semua Toko</h3>
                </div>
                <h3 className="font-semibold text-[10px] text-red-600 bg-green-300 p-1">Stock : Tersisa 5 buah</h3>
              </div>
              <div className='bg-green-200 w-[30%] rounded-xl overflow-hidden'>
                <div className='p-2'>
                  <h3 className='font-bold text-[12px] text-green-500'>Bebas Ongkir</h3>
                  <h3 className="font-bold text-[14px] text-black">Dana Rp3.000.000</h3>
                  <h3 className="font-bold text-[10px] text-black">Toko : Semua Toko</h3>
                </div>
                <h3 className="font-semibold text-[10px] text-red-600 bg-green-300 p-1">Stock : Tersisa 4 buah</h3>
              </div>
            </div>
          </div>
          <div className='mb-6'>
            <div className="flex justify-between">
              <div className='bg-green-200 w-[30%] rounded-xl overflow-hidden'>
                <div className='p-2'>
                  <h3 className='font-bold text-[12px] text-green-500'>Bebas Ongkir</h3>
                  <h3 className="font-bold text-[14px] text-black">Dana Rp2.000.000</h3>
                  <h3 className="font-bold text-[10px] text-black">Toko : Mars Celular</h3>
                </div>
                <h3 className="font-semibold text-[10px] text-red-600 bg-green-300 p-1">Stock : Tersisa 7 buah</h3>
              </div>
              <div className='bg-green-200 w-[30%] rounded-xl overflow-hidden'>
                <div className='p-2'>
                  <h3 className='font-bold text-[12px] text-green-500'>Bebas Ongkir</h3>
                  <h3 className="font-bold text-[14px] text-black">Dana Rp7.000.000</h3>
                  <h3 className="font-bold text-[10px] text-black">Toko : Semua Toko</h3>
                </div>
                <h3 className="font-semibold text-[10px] text-red-600 bg-green-300 p-1">Stock : Tersisa 1 buah</h3>
              </div>
              <div className='bg-green-200 w-[30%] rounded-xl overflow-hidden'>
                <div className='p-2'>
                  <h3 className='font-bold text-[12px] text-green-500'>Bebas Ongkir</h3>
                  <h3 className="font-bold text-[14px] text-black">Dana Rp2.250.000</h3>
                  <h3 className="font-bold text-[10px] text-black">Toko : Semua Toko</h3>
                </div>
                <h3 className="font-semibold text-[10px] text-red-600 bg-green-300 p-1">Stock : Tersisa 3 buah</h3>
              </div>
            </div>
          </div><div>
            <div className="flex justify-between">
              <div className='bg-green-200 w-[30%] rounded-xl overflow-hidden'>
                <div className='p-2'>
                  <h3 className='font-bold text-[12px] text-green-500'>Bebas Ongkir</h3>
                  <h3 className="font-bold text-[14px] text-black">Dana Rp10.000.000</h3>
                  <h3 className="font-bold text-[10px] text-black">Toko : Permata Jaya</h3>
                </div>
                <h3 className="font-semibold text-[10px] text-red-600 bg-green-300 p-1">Stock : Tersisa 3 buah</h3>
              </div>
              <div className='bg-green-200 w-[30%] rounded-xl overflow-hidden'>
                <div className='p-2'>
                  <h3 className='font-bold text-[12px] text-green-500'>Bebas Ongkir</h3>
                  <h3 className="font-bold text-[14px] text-black">Dana Rp4.000.000</h3>
                  <h3 className="font-bold text-[10px] text-black">Toko : Semua Toko</h3>
                </div>
                <h3 className="font-semibold text-[10px] text-red-600 bg-green-300 p-1">Stock : Tersisa 3 buah</h3>
              </div>
              <div className='bg-green-200 w-[30%] rounded-xl overflow-hidden'>
                <div className='p-2'>
                  <h3 className='font-bold text-[12px] text-green-500'>Bebas Ongkir</h3>
                  <h3 className="font-bold text-[14px] text-black">Dana Rp3.250.000</h3>
                  <h3 className="font-bold text-[10px] text-black">Toko : Semua Toko</h3>
                </div>
                <h3 className="font-semibold text-[10px] text-red-600 bg-green-300 p-1">Stock : Tersisa 3 buah</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-[14px] flex justify-end">
          <button className="mds:mr-10 text-white text-md font-bold py-[10px] px-5 rounded-3xl">Reset</button>
          <button onClick={onClick} className="py-[10px] px-5 rounded-3xl font-bold text-white bg-gradient-to-r from-cyan-500 to-fuchsia-700 hover:shadow-md">Claim Voucher</button>
          {isClaim && <div className='absolute top-[0px] left-[50%] border border-stone-400 shadow-xl duration-500 animate-fade'>
            <Window setIsClaim={setIsClaim}/>
          </div>}
        </div>
      </div>
    </div>
  </div>
}


