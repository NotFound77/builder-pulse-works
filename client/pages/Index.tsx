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
    setShowJoinInput(true);
  };

  const handleBackClick = () => {
    setShowJoinInput(false);
    setRoomCode("");
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
      <div className="bg-black rounded-3xl shadow-2xl border border-slate-600 flex flex-col justify-center items-center -mt-[5px] -mb-[4px] pt-[115px] px-20 pb-[45px] text-center transform scale-150 max-w-4xl w-full">
        {/* Main heading */}
        <h1 className="text-5xl font-bold text-slate-100 mb-4 tracking-tight">
          Termdesk
        </h1>

        {/* Floating tagline */}
        <p className="text-sm text-slate-400 mb-16 font-light tracking-wide">
          Work together, work better.
        </p>

        {/* Action buttons or Join form */}
        <div className="min-h-[120px] flex flex-col justify-center">
          {!showJoinInput ? (
            /* Main buttons */
            <div className="space-y-3">
              {/* Create a Room */}
              <div>
                <h5
                  className="font-normal text-slate-300 hover:text-slate-100 cursor-pointer transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-slate-700 border border-slate-600 w-auto self-center"
                  style={{ fontSize: "15px" }}
                >
                  Create a Room
                </h5>
              </div>

              {/* Join a Room */}
              <div>
                <h5
                  className="font-semibold text-slate-300 hover:text-slate-100 cursor-pointer transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-slate-700 border border-slate-600 w-auto self-center"
                  onClick={handleJoinRoomClick}
                  style={{ fontSize: "15px" }}
                >
                  Join
                </h5>
              </div>
            </div>
          ) : (
            /* Join form with back button */
            <div className="space-y-4">
              {/* Back button */}
              <button
                onClick={handleBackClick}
                className="self-start text-slate-400 hover:text-slate-200 transition-colors duration-200 flex items-center gap-2 text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back
              </button>

              {/* Join form */}
              <form
                onSubmit={handleCodeSubmit}
                className="space-y-2 transform scale-x-45 scale-y-55"
              >
                <input
                  type="text"
                  value={roomCode}
                  onChange={handleCodeChange}
                  placeholder="abc-def-ghi"
                  className="w-full px-2 py-1 border border-slate-600 rounded focus:ring-1 focus:ring-slate-400 focus:border-transparent outline-none transition-shadow duration-200 text-center text-slate-200 placeholder-slate-500 bg-slate-800 text-xs"
                  autoFocus
                  maxLength={11}
                />
                <button
                  type="submit"
                  className="w-full bg-slate-100 text-slate-900 py-1 px-2 rounded hover:bg-slate-200 transition-colors duration-200 text-xs font-medium"
                >
                  Join
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
