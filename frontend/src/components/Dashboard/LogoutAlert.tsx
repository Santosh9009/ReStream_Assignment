
interface LogoutAlertProps {
  onLogout: () => void; 
  isOpen: boolean; 
  onClose: () => void; 
}

const LogoutAlert = ({ onLogout, isOpen, onClose }: LogoutAlertProps) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">

        <div className="mb-4">
          <h2 className="text-lg font-semibold">Are you absolutely sure?</h2>
          <p className="text-sm text-gray-500">
            This action cannot be undone. You will be logged out of your account.
          </p>
        </div>


        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 rounded-md px-4 py-2 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onLogout();
              onClose(); 
            }}
            className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutAlert;
