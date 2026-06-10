"use client";

import React, { useState } from 'react';
import Input from "@/components/Input";
import Button from "@/components/Button";
import Divider from "@/components/Divider";
import SocialLoginBlock from "@/components/SocialLoginBlock";
import OnboardingIllustration from "@/components/OnboardingIllustration";
import { Mail, Lock, Loader2, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import AuthService from "@/services/auth.service";
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await AuthService.register(email, password);
      setMessage(response.data.message);
      setIsSuccess(true);
      setLoading(false);
      
      // Redirect to login after a short delay to show success message
      setTimeout(() => {
        router.push("/login");
      }, 2000);
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
          <h2 className="text-xl font-bold text-primary mt-4">Join ZephyraTech</h2>
          <p className="text-gray-500 text-sm">Start your coaching journey with us today</p>
        </div>
      </div>

      {/* Right side (Signup Form) */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white md:bg-transparent">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold text-primary text-center mb-8">Sign Up</h1>
          
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
            <Input 
              placeholder="Confirm Password" 
              type="password" 
              icon={Lock} 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            
            {message && (
              <div className={`text-xs text-center px-2 flex items-center justify-center gap-1 ${isSuccess ? 'text-green-600' : 'text-red-500'}`}>
                {isSuccess && <CheckCircle2 size={14} />}
                {message}
              </div>
            )}
            
            <Button variant="primary" type="submit" disabled={loading || isSuccess}>
              {loading ? <Loader2 className="animate-spin" size={20} /> : "Sign Up"}
            </Button>
          </form>
          
          <Divider />
          
          <SocialLoginBlock />
          
          <div className="mt-8 text-sm text-gray-500 text-center">
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
