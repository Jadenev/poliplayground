import SideNav from '@/components/sideNav';

/* TODO: emulate base behavior from other pages onto quiz page.
A use should need to sign up and have an account before using the quiz page though




*/

export default function quiz() {
    return(
        <div className="
            min-h-screen
            bg-[#a1bfa0]
            text-gray-900
            flex"
        >
            <SideNav/>
            <main className="flex-1 p-6">
                <section>
                    <h2 className="text-2xl font-semibold"> Quiz </h2>
                    
                </section>
            </main>
        </div>
    );
};