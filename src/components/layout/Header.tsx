import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Header() {
  const router = useRouter();
  
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image 
            src="/images/logo.svg" 
            alt="LinkedIn Keywords Research Tool Logo" 
            width={36} 
            height={36} 
            className="me-2" 
          />
          LinkedIn Keywords Research Tool
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/saved-keywords" className={`nav-link ${router.pathname === '/saved-keywords' ? 'active' : ''}`}>
                Saved Keywords
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className={`nav-link ${router.pathname === '/about' ? 'active' : ''}`}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <a 
                href="https://clicksoftly.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-link"
              >
                <i className="bi bi-globe"></i>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="https://www.facebook.com/megahub11" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-link"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}