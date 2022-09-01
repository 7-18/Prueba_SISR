export const Copyright = ({ language }) => {
  const year = new Date().getFullYear();
  return (
    <div className="mt-3 d-flex justify-content-center align-items-end">
      <p>{year} | {language === "ES" ? "Todos los derechos reservados." : "All rights reserved."}</p>
    </div>
  );
};