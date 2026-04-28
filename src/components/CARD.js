export const CARD = ({ local, children }) => {
  return (
    <div dir={local === "ar" ? "ltr" : "rtl"} className="Card">
      {children}
    </div>
  );
};
