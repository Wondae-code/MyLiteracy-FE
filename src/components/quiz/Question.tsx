type Props = {
    text: string,
};

export const Question = (props: Props) => {
  return (
    <div className="h-[320px] w-full border-2 border-solid border-black rounded-lg">
      <div className="flex items-center h-full">
        <p className="text-center text-black w-full p-8">
          {props.text}
        </p>
      </div>
    </div>
  );
};
