import { getServerSession } from "next-auth";
import Sidebar from "../ui/Sidebar";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="flex">
      {!!session && (
        <div className="flex w-full">
          <Sidebar />
          <div className="w-full">{children}</div>
        </div>
      )}
    </div>
  );
}
