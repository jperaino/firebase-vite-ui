import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";

const AppSkeleton = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <SideNav />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default AppSkeleton;
