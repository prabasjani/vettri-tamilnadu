const InfoCard = ({ title, desc, className = "" }) => {
  return (
    <div
      className={`mt-8 rounded-xl border border-primary/10 bg-primary/5 p-4 ${className}`}
    >
      <h4 className="text-sm! text-text-primary!">{title}</h4>

      <p className="mt-1! text-xs! leading-relaxed! text-text-muted!">{desc}</p>
    </div>
  );
};

export default InfoCard;
