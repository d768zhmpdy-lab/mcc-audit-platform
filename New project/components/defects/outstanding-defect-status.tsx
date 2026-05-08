type OutstandingDefectStatusProps = {
  status: "Open" | "In Progress" | "Closed";
};

const statusClasses = {
  Open: "bg-danger/10 text-danger",
  "In Progress": "bg-warning/10 text-warning",
  Closed: "bg-brand/10 text-brand"
};

export function OutstandingDefectStatus({ status }: OutstandingDefectStatusProps) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${statusClasses[status]}`}>
      {status}
    </span>
  );
}
