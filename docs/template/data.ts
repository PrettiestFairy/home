// @ts-ignore
import {NavLink} from "../.vitepress/theme/types";

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: "Template",
    items: [
      {
        icon: "/logo.jpg",
        title: "Template",
        desc: "",
        link: "",
      },
    ],
  }
]
