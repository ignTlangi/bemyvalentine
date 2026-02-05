import { Suspense } from 'react';
import ValentinesCard from './page.client';

export default function Page() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-red-300 flex items-center justify-center">
        <div className="text-4xl">💕</div>
      </div>
    }>
      <ValentinesCard />
    </Suspense>
  );
}