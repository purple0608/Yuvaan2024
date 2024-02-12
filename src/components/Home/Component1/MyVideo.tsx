import React, { useEffect, useRef, useState } from "react";
import video1 from "/src/assets/main_page/images/background_video.mp4";
import video2 from "/src/assets/main_page/images/Mang.mp4";
import image1 from "/src/assets/main_page/images/st1.png";
import "/src/assets/main_page/main_page.css";

const MyVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideo, setIsVideo] = useState<boolean>(true);

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth > 740 && !isVideo) {
        setIsVideo(true);
      } else if (window.innerWidth <= 740 && isVideo) {
        setIsVideo(false);
      }
    };

    // Initial update on page load
    updateBackground();

    // Update background on window resize
    window.addEventListener("resize", updateBackground);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateBackground);
    };
  }, [isVideo]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {isVideo ? (
        <video ref={videoRef} autoPlay loop muted playsInline>
          <source
            id="video-source"
            src={window.innerWidth > 740 ? video1 : video2}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="fp-responsive-image"
          style={{
            background: `url(${image1}) no-repeat center center fixed`,
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
          }}
        />
      )}
    </div>
  );
};


export default MyVideo;
