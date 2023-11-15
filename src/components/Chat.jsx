import "../style/Chat.css"
import { MesssageOther } from "./MessageOther";
import { MessageSelf } from "./MessageSelf";

export function Chat() {


  const sendMessage = (e) => {
    e.preventDefaul();


  }

  return (
    <div className="wrapper-chat flex flex-col items-center justify-center w-full min-h-screen">
      <div className="w-full flex-1 flex flex-col gap-5 px-5 pt-10 pb-28 justify-end">
          <MessageSelf/>
          <MesssageOther/>
        </div>
        <form 
          className="w-full flex flex-row flex-nowrap gap-3 fixed bottom-0 bg-[#191919] p-4"
          onSubmit={(e) => sendMessage(e)}>
          <input 
            type="text" 
            placeholder="Digite uma mensagem..." 
            className="w-full p-4 rounded-md outline-none bg-[#212121] text-[#f2f2f2]"
            />
          <button className="cursor-pointer flex items-center justify-center mr-2">
            <i className="block fa-regular fa-paper-plane text-white text-2xl"></i>
          </button>
        </form>
    </div>
  )
}