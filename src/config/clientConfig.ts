// // src/config/clientConfig.ts

import { ADLIFT_PHYSIO } from "./clients/adlift";
import { ASPIRE_DENTAL } from "./clients/aspire";
import { AUTOHUB } from "./clients/autoHub";
import { DEFAULT_CONFIG } from "./clients/default";
import { NITHI_MART } from "./clients/nithimart";
import { QIYA } from "./clients/qiya";

export const clientConfigs = {
  default: DEFAULT_CONFIG,
  nithimart: NITHI_MART,
  qiya: QIYA,
  aspire_dental: ASPIRE_DENTAL,
  autohub: AUTOHUB,
  adlift: ADLIFT_PHYSIO,
};
