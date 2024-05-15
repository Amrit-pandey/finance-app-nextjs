import { Header } from "@/components/Header"

type Props = {
    children: React.ReactNode
}

const DashBoardLayout = ({children}: Props) => {
    return(
        <>
        <Header />
        <main className="px-4 lg:px-16">
            {children}
        </main>
        </>
    )
}

export default DashBoardLayout