import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

const pricing = () => {
    return (
        <div>
            Success! you successfully subscribed!
        </div>
    )
}

export default pricing