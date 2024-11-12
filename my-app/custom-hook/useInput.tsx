'use client'

import { useState } from "react";

export default function useInput() {
    const [inputValue, setInputValue] = useState<string>("");

    return {
        inputValue, setInputValue
    }
}