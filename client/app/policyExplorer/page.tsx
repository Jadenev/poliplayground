'use client';
import React, { useState, useEffect } from "react";
import SideNav from '@/components/sideNav';

export default function PolicyExplorer() {
    /// test endpoint: checking if api endpoint works.
    /*
    const fetchEndpoint = async() => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/test`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            console.log(data);
        } catch (error: unknown) {
            console.error(error);
        };
    };*/

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
        bg-[#a1bfa0] 
        text-gray-900
        flex"
    >
      <SideNav />
      <main className="flex-1 p-6">     
        <section>
          <h2 className="text-2xl font-semibold">Policy Explorer</h2>
          <p className="mt-2 text-gray-800">
            Explore readable summaries of bills and proposals here.
          </p>
        </section>
        {/*
        <header>
          <h1 className="text-4xl font-bold text-gray-900">Legible</h1>
        </header>*/}
      </main>
    </div>
  );
};
