import Image from 'next/image'
import Link from 'next/link'

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto block size-fit">
                    <Image src="/logo.png" alt="Logo" width={60} height={60} className="h-30 w-30" />
                </Link>
                <span className="text-muted-foreground block text-center text-sm pt-8"> © {new Date().getFullYear()} Tailark, All rights reserved</span>
            </div>
        </footer>
    )
}
