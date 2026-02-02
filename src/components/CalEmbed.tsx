"use client";

import { useEffect } from "react";

interface CalEmbedProps {
  calLink: string;
}

export default function CalEmbed({ calLink }: CalEmbedProps) {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full min-h-[500px] flex items-center justify-center bg-gray-50 rounded-lg">
      <div className="text-center p-8">
        <div className="text-4xl mb-4">📅</div>
        <h3 className="text-xl font-semibold mb-2">Calendar Loading...</h3>
        <p className="text-gray-600 mb-4">
          Cal.com booking widget will appear here once configured.
        </p>
        <p className="text-sm text-gray-500">
          Cal.com link: <code className="bg-gray-200 px-2 py-1 rounded">{calLink}</code>
        </p>
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-left">
          <p className="text-sm text-yellow-800">
            <strong>Setup Required:</strong> Create a Cal.com account and configure event types,
            then update the calLink values in the code to enable live booking.
          </p>
        </div>
      </div>
    </div>
  );
}
