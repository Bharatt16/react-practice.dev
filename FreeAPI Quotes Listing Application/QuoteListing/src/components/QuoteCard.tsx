import type { Quote } from "../types/quote";

interface QuoteCardProps {
  quote: Quote;
}

function QuoteCard({ quote }: QuoteCardProps) {
  const copyQuote = async () => {
    try {
      await navigator.clipboard.writeText(
        `"${quote.content}" — ${quote.author}`
      );
      alert("Quote copied!");
    } catch {
      alert("Failed to copy quote.");
    }
  };

  return (
    <div className="quote-card">
      <p className="quote-text">"{quote.content}"</p>

      <h3 className="quote-author">— {quote.author}</h3>

      <button onClick={copyQuote}>Copy Quote</button>
    </div>
  );
}

export default QuoteCard;