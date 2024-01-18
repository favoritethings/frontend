"use client";
import React from "react";
import CurationHeader from "./header";
import CurationCard from "./card";
import axios from "axios";

const Curation = () => {
  const data = axios.get("http://125.141.125.14:8080/curation/home");
  return (
    <div className="mx-auto mb-[120px] w-[1200px]">
      <CurationHeader />
      <CurationCard />
    </div>
  );
};

export default Curation;
