"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard/candidatos');
  }, [router]);

  return null; // Optionally render something if needed
};

export default Homepage;
