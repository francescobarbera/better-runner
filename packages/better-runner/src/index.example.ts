import getTotalDurationSeconds from "./utils/get-total-duration-seconds";
import getTotalElevationGainMeters from "./utils/get-total-elevation-gain-meters";
import getTotalKms from "./utils/get-total-kms";
import runs from "./data-examples/runs.example";

const totalRunsKm = getTotalKms(runs);
const totalRunsDurationSeconds = getTotalDurationSeconds(runs);
const totalRunsElevationGainMeters = getTotalElevationGainMeters(runs);

console.table({
  totalRunsKm,
  totalRunsDurationSeconds,
  totalRunsElevationGainMeters,
});
