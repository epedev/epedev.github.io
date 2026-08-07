import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TerminalWindow from "@/components/TerminalWindow";

export const metadata = { title: "Contact — epedev" };

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0a0e14] text-blue-200 font-mono">
      <Nav />
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-xl text-amber-400 mb-8">$ ./contact --send</h1>

        <TerminalWindow title="epedev@insa:~/contact">
          <div className="text-blue-500">$ cat channels.txt</div>
          <div className="mt-2 space-y-2">
            <div>
              <span className="text-blue-600">github</span>{" "}
              <a
                href="https://github.com/epedev"
                className="text-blue-300 hover:text-amber-400"
              >
                github.com/epedev
              </a>
            </div>
            <div>
              <span className="text-blue-600">bugcrowd</span>{" "}
              <span className="text-blue-300">on request</span>
            </div>
          </div>
          <div className="mt-3 text-blue-500">$ _</div>
        </TerminalWindow>

        <p className="text-xs text-blue-600 mt-6">
          No embedded form here — a static site has nowhere to send it.
          GitHub is the reliable channel.
        </p>
      </div>
      <Footer />
    </main>
  );
}
