import * as s from './style.css';

export default function Routes() {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <h1>노선별 혼잡도 지도</h1>
      </header>
      <main className={s.main}>
        <p>실시간으로 혼잡한 노선을 확인하세요.</p>
        {/* 지도 또는 시각화 컴포넌트를 삽입 */}
      </main>
    </div>
  );
}
