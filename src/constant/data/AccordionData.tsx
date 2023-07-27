import { bannerActive, dataActive, articleActive } from "../../stores/accordion";
import ArticleIcons from '../../assets/icons/clarity_note-solid.svg'
import { HiChartPie } from 'react-icons/hi'
import BannerIcon from '../../assets/icons/material-symbols_full-coverage-rounded.svg'

export const accordionData = [
    {
      title: "Data Management",
      icon: <HiChartPie />,
      links: [
        { path: "/summary", label: "Summary" },
        // Add more links here for the "Data Management" section
      ],
      activeAtom: dataActive,
    },
    {
      title: "Banner",
      icon: <img src={BannerIcon} alt="banner icon" />,
      links: [
        { path: "/bannerlist", label: "Banner List" },
        { path: "/bannersetlist", label: "Banner Set List" },
        { path: "/bannergrouplist", label: "Banner Group List" },
        // Add more links here for the "Banner" section
      ],
      activeAtom: bannerActive,
    },
    {
      title: "Article",
      icon: <img src={ArticleIcons} alt="article icon" />,
      links: [
        { path: "/articlelist", label: "Article List" },
        { path: "/articlecategory", label: "Article Category" },
        // Add more links here for the "Article" section
      ],
      activeAtom: articleActive,
    },
  ];