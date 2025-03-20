import Link from 'next/link'

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog/123">Blog Post</Link>
      
      {/* Dynamic routes */}
      <Link href={`/posts/${postId}`}>Post</Link>
      
      {/* With additional properties */}
      <Link href="/contact" className="button" prefetch={false}>
        Contact
      </Link>
    </nav>
  )
} 