// DO NOT EDIT THIS CONTENT.
// This content is locked and must match the original website exactly.
// Only explicit written approval permits changes.
import { home } from "./home";
import { about } from "./about";
import { services } from "./services";
import { growthTransformation } from "./growthTransformation";
import { pharmaceuticalSector } from "./pharmaceuticalSector";
import { career } from "./career";
import { navigationFooter } from "./navigationFooter";

export const lockedPages = [home, about, services, growthTransformation, pharmaceuticalSector, career, navigationFooter] as const;
export const pageByRoute = Object.fromEntries(lockedPages.filter((page) => page.route).map((page) => [page.route, page]));
