import React from "react";

function Input(props) {
  const { type, className, label } = props;
  return (
    <div className="field relative w-full">
      <input
        type={type}
        id={label}
        className="peer w-full border border-2 text-md font-bold border-zinc-700 rounded-md focus:border-teal-500 w-full pb-4 pt-7 px-5 outline-none placeholder-transparent"
        placeholder={label}
      />
      <label
        htmlFor={label}
        className="absolute text-xs top-3.5 text-teal-500 opacity-1 left-5 text-teal-500 text-md font-bold transition-all duration-200 peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:opacity-1 placeholder-transparent peer-placeholder-shown:top-[1.4rem] peer-placeholder-shown:left-6 peer-placeholder-shown:text-base"
      >
        {label}
      </label>
    </div>
  );
}

export default Input;
