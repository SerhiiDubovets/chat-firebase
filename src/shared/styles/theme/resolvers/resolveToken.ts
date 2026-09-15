export const resolveToken =
  <T extends Record<string, string>>(map: T) =>
  (value?: keyof T | string, fallback: keyof T = "md") => {
    if (!value) return map[fallback];

    return (map as any)[value] ?? value;
  };
