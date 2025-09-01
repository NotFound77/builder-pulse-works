import { useState } from "react";

export default function Index() {
  const [showJoinInput, setShowJoinInput] = useState(false);
  const [roomCode, setRoomCode] = useState("");

  const handleJoinRoomClick = () => {
    setShowJoinInput(!showJoinInput);
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (roomCode.trim()) {
      // Handle joining room logic here
      console.log("Joining room with code:", roomCode);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-12 w-full max-w-md text-center">
        {/* Main heading */}
        <h1 className="text-4xl font-bold text-slate-900 mb-12 tracking-tight">
          Termdesk
        </h1>

        {/* Action buttons */}
        <div className="space-y-6">
          {/* Create a Room */}
          <div>
            <h5 className="text-xl font-semibold text-slate-700 hover:text-slate-900 cursor-pointer transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-slate-50">
              Create a Room
            </h5>
          </div>

          {/* Join a Room */}
          <div>
            <h5
              className="text-xl font-semibold text-slate-700 hover:text-slate-900 cursor-pointer transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-slate-50"
              onClick={handleJoinRoomClick}
            >
              Join a Room
            </h5>

            {/* Dropdown input for room code */}
            {showJoinInput && (
              <form onSubmit={handleCodeSubmit} className="mt-4 space-y-3">
                <input
                  type="text"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value)}
                  placeholder="Enter Code"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition-shadow duration-200 text-center text-slate-700 placeholder-slate-400"
                  autoFocus
                />
                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-3 px-4 rounded-lg hover:bg-slate-800 transition-colors duration-200 font-medium"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
