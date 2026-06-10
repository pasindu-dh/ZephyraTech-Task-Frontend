"use client";

import React, { useState } from 'react';
import Input from "@/components/Input";
import Button from "@/components/Button";
import Divider from "@/components/Divider";
import SocialLoginBlock from "@/components/SocialLoginBlock";
import OnboardingIllustration from "@/components/OnboardingIllustration";
import { Mail, Lock, Loader2 } from 'lucide-react';
import Link from 'next/link';
import AuthService from "@/services/auth.service";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      await AuthService.login(email, password);
      router.push("/dashboard");
    } catch (error: any) {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setMessage(resMessage);
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-[#F7F7F7]">
      {/* Left side (Desktop Illustration) */}
      <div className="hidden md:flex flex-1 items-center justify-center p-6 bg-white border-r border-gray-100">
        <div className="text-center">
          <OnboardingIllustration />
          <h2 className="text-xl font-bold text-primary mt-4">Welcome Back</h2>
          <p className="text-gray-500 text-sm">Sign in to continue your coaching journey</p>
        </div>
      </div>

      {/* Right side (Login Form) */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white md:bg-transparent">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold text-primary text-center mb-8">Login</h1>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input 
              placeholder="Email" 
              type="email" 
              icon={Mail} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input 
              placeholder="Password" 
              type="password" 
              icon={Lock} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
            {message && (
              <div className="text-red-500 text-xs text-center px-2">
                {message}
              </div>
            )}

            <div className="flex justify-center -mt-2">
              <Button variant="ghost" type="button" className="text-xs">
                Forgot Password?
              </Button>
            </div>
            
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? <Loader2 className="animate-spin" size={20} /> : "Login"}
            </Button>
          </form>
          
          <Divider />
          
          <SocialLoginBlock />
          
          <div className="mt-8 text-sm text-gray-500 text-center">
            Need an account?{" "}
            <Link href="/signup" className="text-primary font-semibold hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
