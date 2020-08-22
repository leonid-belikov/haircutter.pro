import homePage from "@/components/aboutPage/aboutPage";
import galleryPage from "@/components/galleryPage/galleryPage";
import eventsPage from "@/components/eventsPage/eventsPage";


export default [
  {
    path: '/',
    component: homePage,
  },
  {
    path: '/gallery',
    component: galleryPage,
  },
  {
    path: '/events',
    component: eventsPage,
  },
]
