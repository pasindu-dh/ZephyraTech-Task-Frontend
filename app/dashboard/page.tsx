"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthService from "@/services/auth.service";
import Button from "@/components/Button";
import { LogOut } from 'lucide-react';

export default function DashboardPage() {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) {
      router.push('/login');
    } else {
      setUser(currentUser);
    }
  }, [router]);

  const handleLogout = () => {
    AuthService.logout();
    router.push('/login');
  };

  if (!user) {
    return null; // Don't render anything while checking auth or if not logged in
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F7F7F7] p-8">
      <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 w-full max-w-md text-center">
        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <h1 className="text-2xl font-bold text-primary mb-2">Hello, You are logged success</h1>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          Welcome to ZephyraTech. Your account is active under:<br/>
          <span className="font-semibold text-primary">{user.email}</span>
        </p>
        
        <Button variant="outline" onClick={handleLogout} className="mx-auto max-w-[200px]">
          <LogOut size={18} />
          <span>Logout</span>
        </Button>
      </div>
    </main>
  );
}
