import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import LogoutAlert from "./LogoutAlert";

const DropMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    toast({
      title: "Logged Out",
      description: "You have successfully logged out.",
      duration: 3000,
    });
    navigate("/");
  };

  const openLogoutDialog = () => {
    setIsLogoutDialogOpen(true);
    setIsDropdownOpen(false); 
  };

  const closeLogoutDialog = () => setIsLogoutDialogOpen(false);

  return (
    <div>
      <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <DropdownMenuTrigger>
          <div className="flex justify-between items-center gap-2 border-none">
            <span className="text-sm">lossantoshoo@gmail.com</span>
            {isDropdownOpen ? (
              <ChevronUp height={20} className="text-slate-400" />
            ) : (
              <ChevronDown height={20} className="text-slate-400" />
            )}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="md:w-48">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Switch Account</DropdownMenuItem>
          <DropdownMenuItem className="text-red-500" onSelect={openLogoutDialog}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <LogoutAlert
        isOpen={isLogoutDialogOpen}
        onLogout={handleLogout}
        onClose={closeLogoutDialog}
      />
    </div>
  );
};

export default DropMenu;
