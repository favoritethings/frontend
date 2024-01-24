import CurationHeader from "./header";
import CurationCard from "./card";
import { Curation } from "./types";

const Curation = ({ curation }: { curation: Curation | null }) => {
  return (
    <div className="mx-auto mb-[120px] w-[1200px]">
      {curation?.data.map((prev, i) => {
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
