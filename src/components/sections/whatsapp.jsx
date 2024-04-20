"use client";

import Image from "next/image";

export default function App(){
  return(
<div className="whatsapp" style={{ position: "fixed", bottom: "50px", left: "40px", zIndex: "6" }}>
  <a href="https://wa.me/919928498990?text=Hello! I am here to enquire about the admission process." target="_blank">
  <Image
                alt={'whatsapp-icon'}
                height={60}
                width={60}
                src='/images/whatsappIcon2.png'
              />
  </a>
</div>
);
}

