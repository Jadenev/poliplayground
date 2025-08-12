import SideNav from '@/components/sideNav';

export default function About() {
  return (
    <div className="min-h-screen bg-[#a1bfa0] text-gray-900 flex">
      <SideNav />
      <main className="flex-1 p-6">
        <section>
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-2 text-gray-800">
            What Problem does Legible Solve?
          </p>
        </section>
      </main>
    </div>
  );
};