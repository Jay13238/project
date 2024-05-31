

import React from "react";
import Image from "next/image";


export default function ClientCard(props) {
  return (
    <div key={props.id} className="relative w-[300px] h-[300px]">
      <Image
      
        src={props.image}
        fill
        priority={true}
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
}
