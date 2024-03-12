import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

const pricing = () => {

    //If payment success then display success message, else display failed message

    return (
        <div>
            Failed! something went wrong with your payment.
        </div>
    )
}

export default pricing