import Hero from '@/components/Hero';
import Header from '@/components/Header';
export default function Home() {
  return (
    <div>
      <main className="flex flex-col h-full items-center sm:items-start bg-cover bg-center bg-no-repeat bg-gradient-to-br from-[#08A8B6] to-[#0a86b7]  ">
        <Header />
        <Hero />
      </main>
    </div>
  );
}
