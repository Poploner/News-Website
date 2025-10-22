  import HomeCard from "./HomeCard"
import Header from "./Header"

export default function Home() {
    return (
      <>
      <Header/>
      <section className="bg-gray-50 dark:bg-gray-900 min-h-screen py-10">
        <div className="container mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row gap-8">
        <HomeCard/>
        </div>
      </section>
         </>
    )
        }