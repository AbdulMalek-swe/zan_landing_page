"use client"
import Blog from "@/components/Home/Blog";
import Form from "@/components/Home/Form";
import HeroSection from "@/components/Home/HeroSection";
import OurService from "@/components/Home/OurService";
import Question from "@/components/Home/question";
import Support from "@/components/Home/Support";
import Testimonial from "@/components/Home/Testimonial";
import Transformation from "@/components/Home/Transformation";

export default function Home() {
  return (
    <main className="container mx-auto">
      <HeroSection />
      <Support/>
      <Form/>
      <OurService/>
      <Transformation/>
      <Question/>
      {/* <Testimonial/> */}
     
      {/* <Blog/> */}
    </main>
  );
}
