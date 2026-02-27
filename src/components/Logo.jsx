'use client';

import Image from 'next/image';
import teLogo from '@/app/teLogo.png';

export default function Logo({ size = 50, showText = true }) {
    return (
        <div className="inline-flex items-center justify-center gap-2">
            <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
                <Image
                    src={teLogo}
                    alt="TysonGPT Logo"
                    fill
                    priority
                    className="object-contain"
                />
            </div>
            {showText && (
                <span className="font-semibold text-chatgpt-text text-xl tracking-tight">TysonGPT</span>
            )}
        </div>
    );
}