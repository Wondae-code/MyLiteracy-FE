import React from 'react'

type Props = {
    text:string,
    setOpen: (value: React.SetStateAction<boolean>) => void,
}

export const Answer = (props: Props) => {
  return (
    <div className="w-full border-2 border-solid border-black rounded-lg my-4 py-4" onClick={() => props.setOpen(true)}>
        <p className="text-center text-black w-full px-8">
            Lorem ipsum dolor sit amet.
        </p>
    </div>
  )
}