import React from 'react'
import Modal from 'react-modal'

type Props = {
    isOpen: boolean,
    setOpen: (value: React.SetStateAction<boolean>) => void,
}

export const ConfirmModal = (props: Props) => {
  return (
    <Modal
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-1/3 bg-slate-100"
            isOpen={props.isOpen}
            onRequestClose={() => {
              props.setOpen(false);
            }}
            appElement={document.getElementById("root") || undefined}
          >
            <div className="flex flex-col items-center m-6">
              <p className="text-2xl text-black">정답 확인</p>
              <div className="flex mt-4">
                <div className="flex flex-col items-center">
                  <p className="text-lg text-black text-center">선택하신 정답이</p>
                  <div className="w-full border-2 border-solid border-black rounded-lg my-2 py-2">
                    <p className="text-center text-black w-full px-8">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <p className="text-lg text-black text-center">맞습니까?</p>
                  <div className="w-1/3 border-2 border-solid border-black rounded-lg my-4 py-2 bg-purple-300">
                    <p className="text-center text-black w-full px-4"
                    onClick={() => {
                      props.setOpen(false)
                    }}>
                      확인
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
  )
}