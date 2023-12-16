import Image from "next/image"
export default function Page() {
    return <main>
        <p>Danny pro con su perro </p>
        <Image src="/dannypro.png" width={500} height={500} className='hidden md:block' alt='Screenshots of the dashboard project showing desktop version' />
        </main>
}