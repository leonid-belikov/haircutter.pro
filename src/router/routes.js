import AboutPage from "@/components/aboutPage/AboutPage";
import GalleryPage from "@/components/galleryPage/GalleryPage";
import EventsPage from "@/components/eventsPage/EventsPage";


export default [
  {
    path: '/',
    component: AboutPage,
  },
  {
    path: '/gallery',
    component: GalleryPage,
  },
  {
    path: '/events',
    component: EventsPage,
  },
]
