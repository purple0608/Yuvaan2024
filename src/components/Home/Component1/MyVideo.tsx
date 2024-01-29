import React, { useEffect, useRef } from "react";
import video1 from "/src/assets/main_page/images/background_video.mp4";
import video2 from "/src/assets/main_page/images/Mang.mp4";
import "/src/assets/main_page/main_page.css";

const MyVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const updateVideoSource = () => {
      if (videoRef.current) {
        const videoSource = videoRef.current.querySelector(
          "#video-source",
        ) as HTMLSourceElement;

        if (window.innerWidth > 740) {
          videoSource.src = video1; // Replace 'video1.mp4' with your video source for width > 740px
        } else {
          videoSource.src = video2; // Replace 'video2.mp4' with your video source for width <= 740px
        }

        videoRef.current.load();
      }
    };

    // Initial update on page load
    updateVideoSource();

    // Update video source on window resize
    window.addEventListener("resize", updateVideoSource);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateVideoSource);
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay loop muted playsInline>
        <source id="video-source" src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default MyVideo;
