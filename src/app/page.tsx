import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex h-screen items-center justify-center dark:bg-black p-3">
      <div className="relative flex w-[600px] h-[600px] items-center justify-center "> 
        <Image
          className="dark:invert"
          src="/images/extremo.jpg"
          alt="Peças e Serviços"
          width={500}
          height={500}
          priority
        />

         <div className="absolute bottom-0 right-0  whatsapp-fixo">
          <a
            href="https://api.whatsapp.com/send?phone=5551999122927"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/whatsapp.png"
              width="60"
              height="60"
              alt="Fale Conosco pelo WhatsApp"
            />
          </a>
        </div>
       
      </div>
      
    </div>
  );
}
