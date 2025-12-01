import { NextRequest, NextResponse } from 'next/server';
import { generateArchitectureSVG } from '../../../lib/svg-generator';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const svg = generateArchitectureSVG();

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
