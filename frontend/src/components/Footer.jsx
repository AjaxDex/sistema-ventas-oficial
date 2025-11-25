function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p className="mb-0">
        &copy; {new Date().getFullYear()} Sistema de Ventas - UNSAAC. 
        Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;