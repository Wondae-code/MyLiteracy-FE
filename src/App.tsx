import { useState } from "react";
import { MdLibraryAdd, MdBarChart } from "react-icons/md";

import "./App.css";
import StatisticModal from "./components/modals/StatisticModal";
import { ConfirmModal } from "./components/modals/ConfirmModal";
import { Answer } from "./components/quiz/Answer";
import { Question } from "./components/quiz/Question";

function App() {
  const [isStatisicModal, setStatisticModal] = useState<boolean>(false);
  const [isConfirmModal, setConfirmModal] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number>(-1);
  const sampleQuestion =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut\
  aliquip ex ea commodo consequat. Duis aute irure dolor in\
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\
  culpa qui officia deserunt mollit anim id est laborum.";
  const sampleAnswer = "Lorem ipsum dolor sit amet.";

  const selectAnswer = (order: number) => {
    if (selectedAnswer === -1) {
      setSelectedAnswer(order);
    } else if(selectedAnswer === order){
      setSelectedAnswer(-1);
    } else{
      setSelectedAnswer(order)
    }
  };

  return (
    <div className="w-[480px] h-screen bg-gray-100">
      <header className="flex justify-between p-8">
        <p className="text-black text-3xl font-bold">My Literacy</p>
        <div className="flex justify-between gap-4">
          <MdLibraryAdd
            color="black"
            size={36}
            onClick={() => window.alert("OAuth 적용 중")}
          />
          <MdBarChart
            color="black"
            size={36}
            onClick={() => {
              setStatisticModal(true);
              console.log("hi");
            }}
          />
        </div>
      </header>
      <body className="flex flex-col h-auto p-4">
        <Question text={sampleQuestion} />
        <div className="w-full h-auto pt-16">
          <Answer
            text={sampleAnswer}
            setOpen={() => {
              selectAnswer(0);
            }}
            isSelected={selectedAnswer == 0}
          />
          <Answer
            text={sampleAnswer}
            setOpen={() => {
              selectAnswer(1);
            }}
            isSelected={selectedAnswer === 1}
          />
          <Answer
            text={sampleAnswer}
            setOpen={() => {
              selectAnswer(2);
            }}
            isSelected={selectedAnswer === 2}
          />
          <Answer
            text={sampleAnswer}
            setOpen={() => {
              selectAnswer(3);
            }}
            isSelected={selectedAnswer === 3}
          />
        </div>
        {/** 정답 확인 */}
        {selectedAnswer !== -1 ? (
          <div className={"border-2 border-solid border-black rounded-lg my-4 py-4 px-8"} onClick={() => {setConfirmModal(true)}}>
            <p>확인</p>
          </div>
        ) : (
          <></>
        )}
      </body>

      {/* 통계 모달 */}
      {isStatisicModal ? (
        <StatisticModal isOpen={isStatisicModal} setOpen={setStatisticModal} />
      ) : (
        <></>
      )}

      {/* 확인 모달 */}
      {isConfirmModal ? (
        <ConfirmModal isOpen={isConfirmModal} setOpen={setConfirmModal} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
