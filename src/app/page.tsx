import Image from "next/image";

export default function Home() {
  return (
     <>
      {/* <div className="flex gap-[33px]">
      <div className="shrink-0 w-1/3 h-[200px] bg-pink-400"></div>
      <div className="shrink-0 w-1/3 h-[200px] bg-purple-400"></div>
      <div className="shrink-0 w-1/3 h-[200px] bg-red-400"></div>
      </div> */}
      {/* <div className="flex">
      <div className="shrink-0 w-[100px] h-[200px] bg-pink-400"></div>
      <div className="shrink-0 w-[200px] h-[200px] bg-purple-400"></div>
      <div className="shrink-0 w-full h-[200px] bg-red-400"></div>
      // </div> */}

      <div className="overflow-hidden flex flex-wrap gap-x-[33px] gap-y-[22px]"></div>
      
      <div className="flex flex-wrap gap-[33px]">
      <div className="shrink-0 w-[100px] h-[200px] bg-pink-400"></div>
      <div className="shrink-0 w-[200px] h-[200px] bg-purple-400"></div>
       <div className="grow h-[200px] bg-red-400"></div> 
       {/* // grow say wo bachi hui parent ki jaga py phail jay ga bina scroll bar width m lay bagair */}
        <div className="shrink-0 grow min-w-[1200px] max-w-[1200px] h-[200px] bg-red-400"></div> 
       {/* na 1200 sy chota hoga na min m bara hoga */}

      </div>
     </> 
  );
}
