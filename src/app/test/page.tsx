"use client";
export default function Home() {
    console.log('Client');
    return <h1 onClick={() => {
        console.log('test');
    }}>test</h1>
}