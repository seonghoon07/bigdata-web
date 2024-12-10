import * as s from './style.css';

export default function Comparison() {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <h1>지역별 대중교통 비교</h1>
      </header>
      <main className={s.main}>
        <p>주요 도시 간 대중교통 이용 패턴을 비교하세요.</p>
        {/* 비교 데이터를 삽입 */}
      </main>
    </div>
  );
}
