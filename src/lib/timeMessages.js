function timeAgo(timestamp) {
  const now = new Date();
  const past = new Date(timestamp * 1000);
  const diffInSeconds = Math.floor((now - past) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const interval in intervals) {
    const diff = Math.floor(diffInSeconds / intervals[interval]);
    if (diff >= 1) {
      return `${diff} ${interval}${diff > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}
export default timeAgo;
