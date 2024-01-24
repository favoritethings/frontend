"use client";
import Banner from "@/components/banner";
import Curation from "@/components/curation";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";

export default function Home() {
  const [curationData, setCurationData] = useState<Curation | null>(null);

  const curations = axios
    .get<Curation>(`${process.env.NEXT_PUBLIC_SERVICE_API_URL}/curation/home`, {
      headers: {
        "Cache-Control": "max-age=3600",
      },
    })
    .then((res: AxiosResponse<Curation>) => setCurationData(res.data))
    .catch((e) =>
      // @TODO: 에러처리 어떻게 할 건지 논의 필요
      console.log(e),
    );

  return (
    <main>
      <Banner />
      <Curation curation={curationData} />
    </main>
  );
}
