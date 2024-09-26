import getTotalDurationSeconds from "./utils/get-total-duration-seconds";
import getTotalElevationGainMeters from "./utils/get-total-elevation-gain-meters";
import getTotalKms from "./utils/get-total-kms";
import runs from "./data/runs";

const totalKm = getTotalKms(runs)
const totalDurationSeconds = getTotalDurationSeconds(runs);
const totalElevationGainMeters = getTotalElevationGainMeters(runs);

console.table({
  totalKm,
  totalDurationSeconds,
  totalElevationGainMeters
});
