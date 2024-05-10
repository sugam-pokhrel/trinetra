import Sidebar from "../ui/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div class="flex">
      <div className="flex w-full">
        <Sidebar />
        <div className="w-full">{children}</div>
      </div>
      )
    </div>
  );
}
