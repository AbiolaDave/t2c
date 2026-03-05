import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// This ensures the icons are only loaded once
config.autoAddCss = false;

// Add specific icons to the library
library.add(faArrowRight, faArrowLeft);
