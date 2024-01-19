"use client";
import React, { useEffect, useState } from "react";
import CurationHeader from "./header";
import CurationCard from "./card";
import axios, { AxiosResponse } from "axios";
import { Curation } from "./types";

const Curation = () => {
  const [curationData, setCurationData] = useState<Curation | null>(null);

  useEffect(() => {
    const fetchCurationData = async () => {
      try {
        const response: AxiosResponse<Curation> = await axios.get(
          "http://125.141.125.14:8080/curation/home",
        );
        setCurationData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCurationData();
  }, []);

  return (
    <div className="mx-auto mb-[120px] w-[1200px]">
      {curationData?.data.map((prev, i) => {
        return (
          <div key={i}>
            <CurationHeader title={prev.title} />
            <CurationCard spotList={prev.spotList} />
          </div>
        );
      })}
    </div>
  );
};

export default Curation;
