import { useState } from "react";

export default function Index() {
  const [showJoinInput, setShowJoinInput] = useState(false);
  const [roomCode, setRoomCode] = useState("");

  const formatRoomCode = (value: string) => {
    // Remove all non-alphabetic characters and convert to lowercase
    const clean = value.replace(/[^a-zA-Z]/g, "").toLowerCase();

    // Limit to 9 characters
    const limited = clean.slice(0, 9);

    // Add dashes at positions 3 and 6
    let formatted = limited;
    if (limited.length > 6) {
      formatted =
        limited.slice(0, 3) +
        "-" +
        limited.slice(3, 6) +
        "-" +
        limited.slice(6);
    } else if (limited.length > 3) {
      formatted = limited.slice(0, 3) + "-" + limited.slice(3);
    }

    return formatted;
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatRoomCode(e.target.value);
    setRoomCode(formatted);
  };

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
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="bg-black rounded-3xl shadow-2xl border border-slate-600 flex flex-col justify-center items-center p-20 text-center transform scale-150 max-w-4xl w-full">
        {/* Main heading */}
        <h1 className="text-5xl font-bold text-slate-100 mb-4 tracking-tight">
          Termdesk
        </h1>

        {/* Floating tagline */}
        <p className="text-sm text-slate-400 mb-16 font-light tracking-wide">
          Work together, work better.
        </p>

        {/* Action buttons */}
        <div className="space-y-3">
          {/* Create a Room */}
          <div>
            <h5 className="text-sm font-semibold text-slate-300 hover:text-slate-100 cursor-pointer transition-colors duration-200 py-2 px-6 rounded-lg hover:bg-slate-700 border border-slate-600">
              Create a Room
            </h5>
          </div>

          {/* Join a Room */}
          <div>
            <h5
              className="text-sm font-semibold text-slate-300 hover:text-slate-100 cursor-pointer transition-colors duration-200 py-2 px-6 rounded-lg hover:bg-slate-700 border border-slate-600"
              onClick={handleJoinRoomClick}
            >
              Join
            </h5>

            {/* Dropdown input for room code */}
            {showJoinInput && (
              <form onSubmit={handleCodeSubmit} className="mt-4 space-y-3">
                <input
                  type="text"
                  value={roomCode}
                  onChange={handleCodeChange}
                  placeholder="abc-def-ghi"
                  className="w-full px-4 py-2 border border-slate-600 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-transparent outline-none transition-shadow duration-200 text-center text-slate-200 placeholder-slate-500 bg-slate-800"
                  autoFocus
                  maxLength={11}
                />
                <button
                  type="submit"
                  className="w-full bg-slate-100 text-slate-900 py-2 px-4 rounded-lg hover:bg-slate-200 transition-colors duration-200 font-medium"
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
