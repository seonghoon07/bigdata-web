"use client";

import * as s from "./style.css";
import { useEffect, useState } from "react";
import subwayDataRaw from "@/datas/subwayUsageData.json";
import Arrow from "@/assets/arrow"
import { getCongestionStatus, getCircleColor} from "@/helper/anlysisHelper";

interface Direction {
  direction: string;
  useStf: number;
  id: number;
}

interface SubwayData {
  line: string;
  directions: Direction[];
  id: number;
}

export default function Analysis() {
  const [subwayData, setSubwayData] = useState<SubwayData[]>([]);

  useEffect(() => {
    setSubwayData(subwayDataRaw);
  }, [])

  return (
    <div className={s.container}>
      <div className={s.filterWrapper}>
        <div className={s.filterContainer}>
          <p className={s.filterText}>부산</p>
          <Arrow />
        </div>
        <div className={s.filterContainer}>
          <p className={s.filterText}>지하철</p>
          <Arrow />
        </div>
      </div>
      <div className={s.subwayListWrapper}>
        {subwayData.map((item) => (
          <div className={s.lineContainer} key={item.id}>
            <p className={s.line}>{item.line}</p>
            <div className={s.directionWrapper}>
              {item.directions.map((directions) => (
                <div className={s.directionContainer} key={directions.id}>
                  <p className={s.direction}>{directions.direction} 방면</p>
                  <div className={s.stateWrapper}>
                    <p className={s.state}>{getCongestionStatus(directions.useStf)}</p>
                    <div className={s.stateCircle} style={{ backgroundColor: getCircleColor(directions.useStf) }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
