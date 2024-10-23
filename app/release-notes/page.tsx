import Footer from "@/components/footer";

export default function ReleaseNotes() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-poppins)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div id="main-content" className="flex flex-col gap-8">
          <h3 className="font-[family-name:var(--font-geist-mono)] text-center text-3xl">Release Notes</h3>
        </div>
        <div id="sub-content" className="font-[family-name:var(--font-geist-mono)]">
          <ul className="flex flex-col gap-2">
            <li>1.0.0 - Launch with basic functionality such as summaries of Philippine News</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}


