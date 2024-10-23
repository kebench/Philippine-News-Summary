import Link from "next/link"

export default function Footer({
  href = "/",
  hrefText = "Home",
}: {
  href?: string,
  hrefText?: string
}){
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <a href="https://github.com/kebench/Philippine-News-Summary" target="_blank" rel="noreferrer">Codebase</a>
      <Link href={href}>{hrefText}</Link>
      <div id="copyright">© 2024 Kevin Anthony Martinez. All rights reserved.
      </div>
    </footer>
  )
}