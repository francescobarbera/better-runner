export enum RunType {
  FARTLEK = "FARTLEK",
  SLOW_RUN = "SLOW_RUN",
  RACE = "RACE",
  BY_FEEL = "BY_FEEL",
}

export enum SplitType {
  KM = "KM",
  WORMUP = "WORMUP",
  COOLDOWN = "COOLDOWN",
  INTERVAL = "INTERVAL",
  REST = "REST",
}

export type Split = {
  minuteKm: number;
  elevetionGainMeters: number;
  averageHeartRate: number;
};

type externalLink = {
  platform: "strava" | "garmin";
  url: string;
}

type RunBaseProperties = {
  date: string;
  withHeartRateMonitor: boolean;
  distanceKm: number;
  durationSeconds: number;
  averageHeartRate: number;
  averagePaceMinutesPerKm: number;
  elevetionGainMeters: number;
  comment: string;
  externalLinks: externalLink[];
};

export type Run = (
  | {
      type: RunType.SLOW_RUN | RunType.RACE | RunType.BY_FEEL;
    }
  | {
      type: RunType.FARTLEK;
      customSplits: (Split & { splitType: SplitType })[];
    }
) &
  RunBaseProperties;
