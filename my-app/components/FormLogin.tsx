'use client'

import { Dispatch, FormEvent, SetStateAction } from "react";
import InputField from "@/components/InputField";
import { useState } from 'react';
import { VscAccount } from "react-icons/vsc";
import useInput from "@/custom-hook/useInput";
import Image from 'next/image';
import googleIcon from '@/public/google.svg'

let formStyle = "sms:w-[40%] sms:flex flex-col justify-between items-end relative sms:pt-[48px]";

type FormLoginType = {
  setIsClaim : Dispatch<SetStateAction<boolean>>
}

export default function FormLogin({setIsClaim} : FormLoginType) {
  const [isNext, setIsNext] = useState<number>(0);
  const {inputValue : emailInputValue, setInputValue : setEmailInputValue} = useInput();
  const {inputValue : passwordInputValue, setInputValue : setPasswordInputValue} = useInput();

  if (isNext == 1) {
    formStyle += "duration-300 -translate-x-[149%] z-0";
  }

  let InputForm = <div className={formStyle}>
    <div className="w-full">
      < InputField placeHolder="Email atau nomor telepon" type="text" id="email" inputValue={emailInputValue} setInputValue={setEmailInputValue}/>
    </div>
    <div className="w-full flex justify-start">
      <a href="#" className="text-textColorSecondary font-medium text-[14px] xs:mt-16 sms:mt-4 mds:mt-10">Lupa email?</a>
    </div>
    <p className="xs:mt-16 sms:mt-10 text-textColorTertiary text-[14px]">Bukan komputer Anda? Gunakan mode tamu untuk login secara pribadi. {" "}
      <a href="#" className="text-textColorSecondary font-medium">Pelajari lebih lanjut cara menggunakan Mode Tamu</a>
    </p>
    <div className="xs:mt-10 text-[14px] flex justify-between sms:items-center">
      <button className="mds:mr-10 text-textColorSecondary font-medium hover:bg-blue-100 py-[10px] px-5 rounded-3xl">Buat Akun</button>
      <button onClick={handleOnClick} className="py-[10px] px-5 bg-blue-600 rounded-3xl font-bold text-white hover:bg-blue-700 hover:shadow-md">Selanjutnya</button>
    </div>
  </div>;

  if (isNext >= 2) {

    let typeInput = "password";

    InputForm = <div className="xs:mt-10 sms:w-[40%] xs:flex xs:flex-col xs:justify-between sms:items-end relative text-[14px] animate-translation">
      <div>
        <p>Untuk melanjutkan, verifikasi diri anda terlebih dahulu</p>
        <div className="w-full mt-10">
          < InputField placeHolder="Masukkan kata sandi" type={typeInput} id="password" inputValue={passwordInputValue} setInputValue={setPasswordInputValue}/>
        </div>
      </div>
      <div className="xs:mt-32 text-[14px] flex justify-between sms:items-center">
        <button className="mds:mr-10 text-textColorSecondary font-medium hover:bg-blue-100 py-[10px] px-5 rounded-3xl">Buat Akun</button>
        <button onClick={() => setIsClaim(false)} className="py-[10px] px-5 bg-blue-600 rounded-3xl font-bold text-white hover:bg-blue-700 hover:shadow-md">Selanjutnya</button>
      </div>
    </div>
  }


  function handleOnClick() {
    setIsNext(prevEvent => {
      ++prevEvent;
      setTimeout(() => setIsNext(2), 400)
      return prevEvent;
    });
  }

  return <div className="mds:bg-primary bg-white sms:bg-white h-[100vh] sms:flex sms:flex-col mds:justify-center mds:items-center">
    <div className="sms:hidden p-2 flex justify-start items-center border-b-[1px] border-stone-400">
    <Image alt="Google Icon" src={googleIcon} priority width={40} height={40} />
    <h2 className="ml-1 font-medium text-stone-600">Sign in With Google</h2>
    </div>
    <div className="mds:w-[75%] mds:h-[75vh] xs:h-[100%] xs:w-[100%] sms:items-stretch mds:bg-white rounded-3xl sms:flex sms:flex-row sms:justify-between xs:pt-[12px] sms:pt-[60px] px-9 pb-9 mb-4">
      <div className="sms:w-[50%] z-50 bg-white">
        <div>
        <Image className="xs:hidden sms:block" alt="Google Icon" src={googleIcon} priority width={60} height={60} />
          <h1 className="font-medium text-[36px]">{isNext >= 2 ? "Selamat Datang" : "Login"}</h1>
          {isNext >= 2 ? <div className="xs:mt-4 inline-flex justify-start items-center border border-black rounded-2xl px-1">
            <VscAccount />
        <select name="email" id="email" className="ml-1 bg-transparent pt-[2px] pb-[2px]">
          <option value="">{emailInputValue}</option>
        </select>
      </div>: <p className="mt-3 xs:mb-10 font-medium">Gunakan Akun Google Anda</p>}

        </div>
      </div>
      {InputForm}
    </div>
    <div className="flex justify-between mds:w-[75%] text-[12px] text-stone-400 text-textColorPrimary">
      <div>
        <select name="language" id="language" className="bg-transparent pr-36">
          <option value="Indonesia">Indonesia</option>
          <option value="English">English</option>
          <option value="Malay">Malay</option>
        </select>
      </div>
      <div className="">
        <a href="#" className="ml-10">Bantuan</a>
        <a href="#" className="ml-10">Privasi</a>
        <a href="#" className="ml-10">Persyaratan</a>
      </div>
    </div>
    <div className="sms:block xs:hidden max-[971px]:hidden h-[100vh] w-[12.5%] bg-primary absolute z-50 top-0 right-0 bottom-0"></div>
  </div>
}


// async function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
//   e.preventDefault();
//   const data = new FormData(e.currentTarget);
//   const fd = Object.fromEntries(data.entries());
//   const url = "http://localhost:3000/api/test";
//   await fetch(url, {
//     method: "POST",
//     headers: { "Content-Type": 'application/json', },
//     body: JSON.stringify(fd),
//   })
// }