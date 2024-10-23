import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-poppins)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div id="main-content" className="flex flex-col gap-8">
          <h3 className="font-[family-name:var(--font-geist-mono)] text-center text-3xl">Philippine News Summary</h3>
          <h1 className="text-8xl sm:text-8xl font-bold text-center">Launching</h1>
          <h1 className="text-8xl sm:text-8xl font-bold text-center">Soon</h1>
        </div>
        <div id="sub-content">
          <ul className="flex flex-col gap-2">
            <li>✅ Gathering data</li>
            <li>⬜ Processing data</li>
            <li>⬜ Training Model</li>
          </ul>
        </div>
      </main>
      <Footer href="/release-notes" hrefText="Release Notes" />
    </div>
  );
}
