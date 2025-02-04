import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const LazyYouTube = ({ videoId, thumbnailUrl }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Function to load video
    const loadVideo = () => {
      setIsLoaded(true);
    };

    // Callback for IntersectionObserver
    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        loadVideo();
        observer.disconnect(); // Stop observing once video is loaded
      }
    };

    // Set up the Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.25, // Adjust as needed; 0.25 means video will load when 25% visible
    });

    // Observe the video container
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Clean up the observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={videoRef}
      sx={{
        position: "relative",
        paddingTop: "56.25%", // 16:9 aspect ratio
      }}
    >
      {isLoaded ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      ) : (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${
              thumbnailUrl ||
              `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            })`,
            backgroundSize: "cover",
          }}
        ></div>
      )}
    </Box>
  );
};

LazyYouTube.propTypes = {
  videoId: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string,
};

export default LazyYouTube;