import Link from "next/link";

export default function Home() {
    console.log('Server');
    return <>
          <Link href="/">Root</Link>
          <h1>test</h1>
          </>
}