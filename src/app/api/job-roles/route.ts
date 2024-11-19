import { NextResponse } from 'next/server';

export async function GET() {
  const jobRolesData = [
    { label: '해외 마케팅', icon: 'RiPieChartBoxLine' },
    { label: '퍼블리셔', icon: 'TbPhoto' },
    { label: '캐드원(제도사)', icon: 'IoCubeOutline' },
    { label: '해외 세일즈', icon: 'MdOutlineStars' },
    { label: '해외 CS', icon: 'MdOutlinePhoneInTalk' },
  ];

  return NextResponse.json(jobRolesData);
}
