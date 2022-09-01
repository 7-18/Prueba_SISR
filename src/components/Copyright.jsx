export const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mt-3 d-flex justify-content-center align-items-end">
      <p>{year} | Todos los derechos reservados.</p>
    </div>
  );
};