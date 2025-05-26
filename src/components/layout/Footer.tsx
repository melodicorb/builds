import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <Image 
              src="/images/logo.svg" 
              alt="LinkedIn Keywords Research Tool Logo" 
              width={24} 
              height={24} 
              className="me-2" 
            />
            <p className="mb-0">&copy; {new Date().getFullYear()} LinkedIn Keywords Research Tool</p>
          </div>
          <div className="col-md-6 text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <Link href="/about" className="text-decoration-none">
                  About
                </Link>
              </li>
              <li className="list-inline-item ms-3">
                <Link href="/privacy" className="text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
              <li className="list-inline-item ms-3">
                <Link href="/terms" className="text-decoration-none">
                  Terms of Service
                </Link>
              </li>
              <li className="list-inline-item ms-3">
                <a 
                  href="https://www.facebook.com/megahub11" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-decoration-none"
                >
                  <i className="bi bi-facebook me-1"></i>Facebook
                </a>
              </li>
              <li className="list-inline-item ms-3">
                <a 
                  href="https://clicksoftly.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-decoration-none"
                >
                  <i className="bi bi-globe me-1"></i>Website
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}