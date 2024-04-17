import React from 'react'
import { MdClose } from "react-icons/md";
import Modal from "react-modal";

type Props = {
    isOpen: boolean,
    setOpen: (value: React.SetStateAction<boolean>) => void,
}

export default function StatisticModal({isOpen, setOpen}: Props) {
  return (
    <Modal
    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-1/3 bg-slate-100"
    isOpen={isOpen}
    onRequestClose={() => {
        setOpen(false);
    }}
    appElement={document.getElementById("root") || undefined}
    >
    <div className="flex flex-col items-center m-8">
        <p className="text-3xl text-black">통계</p>
        <MdClose
        className="absolute top-0 right-0 m-4"
        size={36}
        color="black"
        onClick={() => setOpen(false)}
        />
        <div className="flex my-4">
        <div className="flex flex-col items-center w-24 px-2">
            <p className="text-3xl text-black">10</p>
            <p className="text-center text-black">
            전체 문제
            <br /> 풀이 횟수
            </p>
        </div>
        <div className="flex flex-col items-center w-24 px-2">
            <p className="text-3xl text-black">10</p>
            <p className="text-center text-black">
            연속 문제
            <br />
            맞힌 횟수
            </p>
        </div>
        <div className="flex flex-col items-center w-24 px-2">
            <p className="text-3xl text-black">10</p>
            <p className="text-center text-black">
            총<br /> 정답 횟수
            </p>
        </div>
        <div className="flex flex-col items-center w-24 px-2">
            <p className="text-3xl text-black">10</p>
            <p className="text-center text-black">
            연속
            <br /> 정답 횟수
            </p>
        </div>
        </div>
    </div>
    </Modal>
  )
}