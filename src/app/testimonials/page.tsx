import React from "react";
import { Metadata } from "next";
import TestimonialsMain from "@/pages/testimonials/testimonials-main";

export const metadata: Metadata = {
  title: "Pine Book Publishing - Testimonials",
};

const TestimonialsPage = () => {
  return <TestimonialsMain />;
};

export default TestimonialsPage;
