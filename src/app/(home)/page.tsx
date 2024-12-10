import Link from 'next/link';
import * as s from './style.css';

export default function Home() {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <h1>실대정</h1>
        <p>대중교통 혼잡도 분석 플랫폼</p>
      </header>
      <main className={s.main}>
        <ul className={s.linkList}>
          <li>
            <Link href="/analysis" className={s.link}>
              시간대별 이용량 분석
            </Link>
          </li>
          <li>
            <Link href="/line" className={s.link}>
              노선별 혼잡도 지도
            </Link>
          </li>
          <li>
            <Link href="/comparison" className={s.link}>
              지역별 대중교통 비교
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
