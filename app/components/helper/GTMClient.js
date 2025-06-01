'use client';
import { GoogleTagManager } from '@next/third-parties/google';

export default function GTMClient() {
  return <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />;
}
