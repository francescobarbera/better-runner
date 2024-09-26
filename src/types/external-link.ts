export type Platforms = "STRAVA" | "GARMIN" | "SUUNTO";

export type ExternalLink = {
  platform: Platforms,
  url: string;
}
