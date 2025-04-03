import {route, type RouteConfig} from "@react-router/dev/routes";

export default [
    route("", "pages/home/page.tsx"),
    route("about", "pages/about/page.tsx"),
    route("cases", "pages/cases/page.tsx"),
    route("contacts", "pages/contacts/page.tsx"),
    route("contactus", "pages/contactus/page.tsx"),
    route("licenses", "pages/licenses/page.tsx"),
    route("reviews", "pages/reviews/page.tsx"),
    route("services", "pages/services/page.tsx"),
] satisfies RouteConfig;
