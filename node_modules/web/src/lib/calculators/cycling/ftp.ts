export interface FtpResult {
  ftp: number;
  zones: { label: string; lower: number; upper: number }[];
}

export function estimateFtp(avg20MinPower: number): FtpResult {
  const ftp = avg20MinPower * 0.95;
  const zones = [
    { label: "Endurance", lower: 0.56, upper: 0.75 },
    { label: "Tempo", lower: 0.76, upper: 0.9 },
    { label: "Threshold", lower: 0.91, upper: 1.05 },
    { label: "VO2", lower: 1.06, upper: 1.2 },
  ].map((zone) => ({
    label: zone.label,
    lower: Math.round(zone.lower * ftp),
    upper: Math.round(zone.upper * ftp),
  }));

  return { ftp: Math.round(ftp), zones };
}
