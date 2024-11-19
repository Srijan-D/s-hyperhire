import { NextResponse } from 'next/server';

export async function GET() {
  const checkboxes = [
    { label: '한국어 능력' },
    { label: '업무 수행 능력' },
    { label: '검엽 여부' },
    { label: '평판 조회' },
  ];

  return NextResponse.json(checkboxes);
}
