import React from "react";

interface RegionListProps {
  regions: string[];
  selectedRegion: string;
  onSelectRegion: (region: string) => void;
}

const RegionList: React.FC<RegionListProps> = ({ regions, selectedRegion, onSelectRegion }) => {
  return (
    <div className="region-list">
      {regions.map(region => (
        <div
          key={region}
          className={`region-item ${selectedRegion === region ? "selected" : ""}`}
          onClick={() => onSelectRegion(region)}
        >
          {region}
        </div>
      ))}
    </div>
  );
};

export default RegionList;
