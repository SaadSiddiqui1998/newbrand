import React from "react";
import { Metadata } from "next";
import PortfolioMain from "@/pages/portfolio/portfolio-main";

export const metadata: Metadata = {
  title: "Pine Book Publishing - Portfolio",
};

const PortfolioPage = () => {
  return <PortfolioMain />;
};

export default PortfolioPage;
