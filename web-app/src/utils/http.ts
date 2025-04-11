export const objToQuery = (obj: Record<string, any>) => {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(obj)) {
    if (value === "" || value === undefined) continue;
    query.append(key, value);
  }
  return query.toString() ? `?${query.toString()}` : "";
};
