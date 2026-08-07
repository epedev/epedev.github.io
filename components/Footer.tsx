export default function Footer() {
  return (
    <footer className="max-w-2xl mx-auto px-4 py-8 text-xs text-blue-700">
      © {new Date().getFullYear()}. epedev — offensive security research log.
    </footer>
  );
}
