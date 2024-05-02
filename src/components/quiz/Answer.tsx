import React from 'react'

type Props = {
    text:string,
    isSelected: boolean
    setOpen: (value: React.SetStateAction<boolean>) => void,
}

export const Answer = (props: Props) => {
  return (
    <div className={`w-full border-2 border-solid border-black rounded-lg my-4 py-4 ${props.isSelected ? "bg-yellow-400" : "bg-white"}`} onClick={() => props.setOpen(true)}>
        <p className="text-center text-black w-full px-8">
            Lorem ipsum dolor sit amet.
        </p>
    </div>
  )
}