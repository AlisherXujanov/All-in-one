const BASE_URL = "http://localhost:3001"

const links = {
    // protected routes
    authLinks: [
        { name: "Explore", path: "/" },
        { name: "About", path: "/about" },
        { name: "NFTs", path: "/nfts" },
        { name: "Trending🔥", path: "/trending" },
        { name: "FAQ💬", path: "/faq" }
    ],
    // non-protected routes
    nonAuthLinks: [
        { name: "Explore", path: "/" },
        { name: "About", path: "/about" },
        { name: "FAQ💬", path: "/faq" }
    ],
    footer: []
}


export {
    links,
    BASE_URL
}