import React, { useEffect, useState, useCallback } from 'react';
import './Timer.css'; // External CSS for gradient animation

export default function Timer() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date('Nov 10, 2024 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        document.getElementById('countdown').textContent = 'EXPIRED';
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient min-h-screen flex justify-center items-center px-2">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">

        {/* Coming Soon Section */}
        <div className="py-4 px-6">
          <h2 className="text-5xl font-bold text-gray-800 flex flex-wrap gap-4 justify-center items-center">Homecoming 24</h2>
          <p className="mt-2 text-lg text-center text-gray-600 ">
            We are working hard to bring you an amazing website. Stay tuned!
          </p>
        </div>

        {/* Timer Section */}
        <div className="py-4 px-6">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <div className="border rounded-lg px-4 py-2">
              <div id="days" className="font-bold font-mono text-2xl text-gray-800">
                {time.days}d
              </div>
            </div>
            <div className="border rounded-lg px-4 py-2">
              <div id="hours" className="font-bold font-mono text-2xl text-gray-800">
                {time.hours}h
              </div>
            </div>
            <div className="border rounded-lg px-4 py-2">
              <div id="minutes" className="font-bold font-mono text-2xl text-gray-800">
                {time.minutes}m
              </div>
            </div>
            <div className="border rounded-lg px-4 py-2">
              <div id="seconds" className="font-bold font-mono text-2xl text-gray-800">
                {time.seconds}s
              </div>
            </div>
          </div>
          <div id="countdown" className="mt-4 text-center text-2xl font-bold text-red-600"></div>
        </div>

      </div>
    </div>
  );
}
