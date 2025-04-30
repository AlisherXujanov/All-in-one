"use client"

import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <div className="error-code">
                    <span>4</span>
                    <div className="zero">
                        <div className="zero-inner"></div>
                    </div>
                    <span>4</span>
                </div>
                <h2>Page Not Found</h2>
                <p>Oops! The page you're looking for doesn't exist.</p>
                <Link href="/" className="home-button">
                    Return Home
                </Link>
            </div>

            {/* <style jsx>{`
                .not-found-container {} ...
            `}</style> */}
        </div>
    )
} 