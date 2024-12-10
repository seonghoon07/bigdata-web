import * as s from './style.css';

export default function Analysis() {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <h1>시간대별 이용량 분석</h1>
      </header>
      <main className={s.main}>
        <p>출근/퇴근 시간 혼잡도를 시각적으로 확인하세요.</p>
        {/* 그래프나 데이터를 삽입할 공간 */}
      </main>
    </div>
  );
}
