import Link from 'next/link';
import * as s from './style.css';

export default function Navbar() {
  return (
    <nav className={s.navbar}>
      <Link href="/" className={s.navItem}>
        홈
      </Link>
      <Link href="/analysis" className={s.navItem}>
        분석
      </Link>
      <Link href="/line" className={s.navItem}>
        노선
      </Link>
      <Link href="/comparison" className={s.navItem}>
        비교
      </Link>
    </nav>
  );
}
