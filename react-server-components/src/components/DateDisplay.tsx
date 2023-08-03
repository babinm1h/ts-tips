import { formatDate } from "@/utils";

interface DateDisplayProps {
  date: number;
}

export function DateDisplay({ date }: DateDisplayProps) {
  return <span style={{ margin: "0 24px" }}>{formatDate(date)}</span>;
}
