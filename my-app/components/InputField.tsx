'use client'

import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {useState} from 'react';

type InputFieldType = {
    placeHolder : string,
    type : string,
    id : string,
    inputValue : string,
    setInputValue : Dispatch<SetStateAction<string>>
}

export default function InputField({placeHolder, type, id, inputValue, setInputValue} : InputFieldType) {
    const [focus, setFocus] = useState<boolean>(false);



    let labelStyle = "text-[18px] text-stone-500 translate-x-[6%] translate-y-[53%]";

    if (focus || inputValue !== "") {
        labelStyle = "text-[14px] translate-x-[5%] -translate-y-[40%] ";
        labelStyle += focus ? "text-textColorSecondary" : "text-stone-500";
    }


    function handleOnChange(e : ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }

    function handleOnFocus() {
        setFocus(true);
    }

    function handleOnBlur() {
        setFocus(false);
    }


    return <div className="relative">
    <input id={id} value={inputValue} onChange={handleOnChange} type={type} className="w-[100%] h-[54px] border border-slate-600 rounded-[5px] p-3 outline-none focus:border-blue-700 focus:border-2 absolute" onFocus={handleOnFocus} onBlur={handleOnBlur}/>
    <label htmlFor={id} className={`absolute hover:cursor-text px-1 rounded-2xl bg-white duration-300 ${labelStyle}`}>
        {placeHolder}
    </label>
    </div>
}