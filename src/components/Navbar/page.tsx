"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Briefcase from "@/assets/bag";
import LocationIcon from "@/assets/locationMarker";
import UserGroupIcon from "@/assets/userGroup";
import * as s from "./style.css"; // 스타일 임포트

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(pathname || "");
  }, [pathname]);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <nav className={s.navContainer}>
      <div className={s.navBar}>
        <button
          className={`${s.itemContainer} ${
            activePath === "/analysis" ? s.active : ""
          }`}
          onClick={() => handleNavigation("/analysis")}
        >
          <Briefcase color={activePath === "/analysis" ? "blue" : "gray"} />
          이용량
        </button>
        <button
          className={`${s.itemContainer} ${
            activePath === "/comparison" ? s.active : ""
          }`}
          onClick={() => handleNavigation("/comparison")}
        >
          <UserGroupIcon
            color={activePath === "/comparison" ? "blue" : "gray"}
          />
          혼잡도
        </button>
        <button
          className={`${s.itemContainer} ${
            activePath === "/line" ? s.active : ""
          }`}
          onClick={() => handleNavigation("/line")}
        >
          <LocationIcon color={activePath === "/line" ? "blue" : "gray"} />
          경로
        </button>
      </div>
    </nav>
  );
}
