"use client";

import React, { useEffect, useState } from 'react';
import OnboardingIllustration from "@/components/OnboardingIllustration";
import Progress from "@/components/Progress";
import SocialLoginBlock from "@/components/SocialLoginBlock";
import { useRouter } from 'next/navigation';
import AuthService from "@/services/auth.service";
import Link from "next/link";
import { Loader2 } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (AuthService.getCurrentUser()) {
      router.push('/dashboard');
    } else {
      setIsChecking(false);
    }
  }, [router]);

  if (isChecking) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#F7F7F7]">
        <Loader2 className="animate-spin text-primary" size={32} />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-[#F7F7F7]">
      {/* Left side / Top side (Illustration) */}
      <div className="flex-1 flex items-center justify-center p-6 md:bg-white md:border-r md:border-gray-100">
        <OnboardingIllustration />
      </div>

      {/* Right side / Bottom side (Content) */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white md:bg-transparent">
        <div className="w-full max-w-sm flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold text-primary mb-2">Private Coaching</h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Add one-on-one, confidential sessions for only $35 per session
          </p>
          
          <Progress current={0} total={3} />
          
          <div className="w-full mt-4">
            <SocialLoginBlock />
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-semibold hover:underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
