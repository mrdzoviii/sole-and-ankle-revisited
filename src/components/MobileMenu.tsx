interface MobileMenuProps {
  isOpen: boolean;
  onDismiss: () => void;
}

const MobileMenu = ({ isOpen, onDismiss }: MobileMenuProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <button onClick={onDismiss}>Dismiss menu</button>
      <nav>
        <a href="/sale">Sale</a>
        <a href="/new">New&nbsp;Releases</a>
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/kids">Kids</a>
        <a href="/collections">Collections</a>
      </nav>
      <footer>
        <a href="/terms">Terms and Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </footer>
    </div>
  );
};

export default MobileMenu;
