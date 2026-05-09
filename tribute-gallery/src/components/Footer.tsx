export default function Footer() {
  return (
    <footer className="w-full py-20 px-4 text-center mt-12 border-t border-gold/20">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl text-charcoal italic leading-relaxed">
          &ldquo;A lifetime of memories, and the best is yet to come.&rdquo;
        </h2>
        <div className="mt-8 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gold/60" />
          <div className="w-2 h-2 rounded-full bg-gold/60" />
          <div className="w-2 h-2 rounded-full bg-gold/60" />
        </div>
      </div>
    </footer>
  );
}
