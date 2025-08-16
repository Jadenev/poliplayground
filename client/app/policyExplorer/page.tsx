'use client';
import React, { useState, useEffect } from "react";
import SideNav from '@/components/sideNav';
import TopBar from '@/components/topBar';

export default function PolicyExplorer() {
    useEffect(() => {
        const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/api/test`;

        fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
    }, []);

  return (
    <div className="
        min-h-screen 
        bg-[#ffffff] 
        text-gray-900
        flex"
    >
      <SideNav />
      {/* New container for TopBar and main content */}
      <div className="flex flex-col flex-1"> 
        <TopBar />
        <main className="flex-1 p-6">     
          <section>
            <h2 className="text-2xl font-semibold">Policy Explorer</h2>
            <p className="mt-2 text-gray-800">
              Explore readable summaries of bills and proposals here.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};