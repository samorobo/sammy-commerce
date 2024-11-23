"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Dummy video data
const videoData = [
  { title: "Training Video 1", videoUrl: "https://www.example.com/video1.mp4" },
  { title: "Training Video 2", videoUrl: "https://www.example.com/video2.mp4" },
  { title: "Training Video 3", videoUrl: "https://www.example.com/video3.mp4" },
  { title: "Training Video 4", videoUrl: "https://www.example.com/video4.mp4" },
  { title: "Training Video 5", videoUrl: "https://www.example.com/video5.mp4" },
  { title: "Training Video 6", videoUrl: "https://www.example.com/video6.mp4" },
  { title: "Training Video 7", videoUrl: "https://www.example.com/video7.mp4" },
  { title: "Training Video 8", videoUrl: "https://www.example.com/video8.mp4" },
  { title: "Training Video 9", videoUrl: "https://www.example.com/video9.mp4" },
  { title: "Training Video 10", videoUrl: "https://www.example.com/video10.mp4" },
  { title: "Training Video 11", videoUrl: "https://www.example.com/video11.mp4" },
  { title: "Training Video 12", videoUrl: "https://www.example.com/video12.mp4" },
];

export default function TrainingPage() {
  const [showCongrats, setShowCongrats] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Show congratulations popup if redirected after successful payment
    if (router.query.status === "success") {
      setShowCongrats(true);
    }
  }, [router.query]);

  return (
    <div>
      {/* Congratulations Dialog */}
      <Dialog open={showCongrats} onOpenChange={setShowCongrats}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Congratulations!</DialogTitle>
            <p>You have successfully unlocked the training section!</p>
          </DialogHeader>
          <Button onClick={() => setShowCongrats(false)}>Close</Button>
        </DialogContent>
      </Dialog>

      {/* Video Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {videoData.map((video, index) => (
          <div key={index} className="border p-4">
            <h3 className="font-bold">{video.title}</h3>
            <video
              src={video.videoUrl}
              controls
              className="w-full h-40 object-cover"
            ></video>
          </div>
        ))}
      </div>
    </div>
  );
}
