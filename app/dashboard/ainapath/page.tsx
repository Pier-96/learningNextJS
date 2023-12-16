import Image from "next/image"
export default function Page() {
    return <main>
        <p>Aina pagina </p>
        <Image src="/aina.png" width={500} height={500} className='block md:hidden' alt='Screenshots of the dashboard project showing desktop version' />
        </main>
}