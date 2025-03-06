import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Sidebar } from "./_components/sidebar";

export default async function Layout({ children }) {
  return (
    <div className="h-screen border-1 border-red-700 flex flex-col justify-between">
      <Header />
      <div className="flex h-full">
        <Sidebar userId={"37ca9848-34f0-40db-b285-934d4ef01ae0"} />
        <div className="w-full flex items-center justify-center border-1 border-red-700">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
