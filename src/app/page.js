import DetailSection from "@/components/DetailSection";
import Image from "next/image";
import { Container } from "postcss";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#181e1b]">
      <div className=" container mx-auto px-12 py-4">
        <DetailSection />
      </div>
    </div>
  );
}
