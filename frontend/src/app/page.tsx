"use client";

import React from 'react';
import Header from "@/components/layout/Header/Header";
import ChatLayout from "@/components/layout/ChatLayout/ChatLayout";
import scss from "./Home.module.scss";

export default function HomePage() {
    return (
        <div className={scss.container}>
            <Header />
            <ChatLayout />
        </div>
    );
}