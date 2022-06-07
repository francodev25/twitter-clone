import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, PhotographIcon , XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Picker } from 'emoji-mart'
import "emoji-mart/css/emoji-mart.css";

function Input(){

    const [input,setInput] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const filePickerRef = useRef(null);
    const [showEmojis, setShowEmojis] = useState(false);

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
          reader.readAsDataURL(e.target.files[0]);
        }
    
        // reader.onload = (readerEvent) => {
        //   setSelectedFile(readerEvent.target.result);
        // };
      };
    
      const addEmoji = (e) => {
        // let sym = e.unified.split("-");
        // // let codesArray = [];
        // // sym.forEach((el) => codesArray.push("0x" + el));
        // // let emoji = String.fromCodePoint(...codesArray);
        // setInput(input + emoji);
      };
    

    return (
        <div
            className={`border-b border-gray-200 p-3 flex space-x-3 overflow-hidden`}
        >
            <img src={'https://yt3.ggpht.com/yti/APfAmoFEvwA525FagnnvCJ7dcCmwp2P1AOLWo9yBCzgVzO8=s88-c-k-c0x00ffffff-no-rj-mo'} 
                className="h-11 w-11 rounded-full cursor-pointer"
            />

            <div className="w-full divide-y divide-gray-200">
                <div className={``}>
                    <textarea className="bg-transparent outline-none text-gray-700 text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
                        placeholder="What's happening?"
                        onChange={(e) => setInput(e.target.value)}
                    name="" id="" rows={2}value={input}></textarea>
                </div>

                {/** Selected File  */}
                <div className="relative">
                    {/* <div className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer">

                    </div> */}

                </div>

                <div className="flex items-center justify-between pt-2.5">
                    <div className="flex items-center">
                    <div
                        className="icon"
                        // onClick={() => filePickerRef.current.click()
                        //}
                    >
                        <PhotographIcon className="text-[#1d9bf0] h-[22px]" />
                        <input
                        type="file"
                        ref={filePickerRef}
                        hidden
                        onChange={addImageToPost}
                        />
                    </div>

                    <div className="icon rotate-90">
                        <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
                    </div>

                    <div className="icon" 
                    // onClick={() => setShowEmojis(!showEmojis)}
                    >
                        <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" onClick={() => setShowEmojis(!showEmojis)} />
                    </div>

                    <div className="icon">
                        <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
                    </div>
                    
                    {showEmojis && (
                        <Picker
                        onSelect={addEmoji}
                        style={{
                            position: "absolute",
                            marginTop: "465px",
                            marginLeft: -40,
                            maxWidth: "320px",
                            borderRadius: "20px",
                        }}

                        />
                    )}

                    </div>
                    <button
                    className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default"
                    disabled={!input && !selectedFile}
                    // onClick={sendPost}
                    >
                    Tweet
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Input;