import Link from "next/link";

function Ad() {
    return (
        <div className="advertisement-wrapper bg-red-700 text-center text-white text-xs p-2">
            Get ready to hit the trail with our exciting 
            <Link className="text-white ms-2 underline" 
                href="https://us.christianlouboutin.com/us_en/discover-the-giddy-up-collection"
            >
                new collection!
            </Link>
        </div>
    );
}

export default Ad;