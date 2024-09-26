import getTotalDurationSeconds from "./utils/get-total-duration-seconds";
import getTotalElevationGainMeters from "./utils/get-total-elevation-gain-meters";
import getTotalKm from "./utils/get-total-km";
import runs from "./data/runs";

const totalKm = getTotalKm(runs)
const totalDurationSeconds = getTotalDurationSeconds(runs);
const totalElevationGainMeters = getTotalElevationGainMeters(runs);

console.table({
  totalKm,
  totalDurationSeconds,
  totalElevationGainMeters
});
