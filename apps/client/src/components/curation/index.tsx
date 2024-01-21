"use client";
import { useEffect, useState } from "react";
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
          `${process.env.NEXT_PUBLIC_SERVICE_API_URL}/curation/home`,
        );
        setCurationData(response.data);
      } catch (error) {
        console.error("error message:", error);
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
