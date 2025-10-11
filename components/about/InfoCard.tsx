interface Props {
  icon: React.ReactNode;
  title: string;
  text: React.ReactNode;
}

export const InfoCard = ({ icon, title, text }: Props) => (
  <div className="flex flex-col gap-6 p-6 md:p-8 rounded-2xl border border-border-color bg-surface shadow-sm transition-colors">
    <div className="flex items-center gap-4 text-text/80">
      {icon}
      <h3 className="text-sm md:text-base font-medium">{title}</h3>
    </div>
    { text }
  </div>
);