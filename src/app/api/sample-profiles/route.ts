import { NextResponse } from 'next/server';

export async function GET() {
  const sampleProfiles = [
    {
      name: 'Abhishek Gupta',
      role: '마케팅 · 2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      image: '/card-profile.png',
      countryFlag: '/country-flag.png',
    },
    {
      name: 'Abhishek Gupta2',
      role: '마케팅 · 2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      image: '/card-profile.png',
      countryFlag: '/country-flag.png',
    },
    {
      name: 'Abhishek Gupta3',
      role: '마케팅 · 2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      image: '/card-profile.png',
      countryFlag: '/country-flag.png',
    },
  ];

  return NextResponse.json(sampleProfiles);
}
