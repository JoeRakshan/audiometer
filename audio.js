
import React, { useState, useRef, useEffect } from 'react';

const Audiogram = () => {
  const [frequencies, setFrequencies] = useState([0, 125, 250, 500, 1000, 2000, 4000, 8000]);
  const [thresholds, setThresholds] = useState([-10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120].reverse());
  const normalRangeThreshold = 10;
  const startFrequency = 0;
  const endFrequency = 8000.2;
  let stepFrequency = 25;
  const toneDuration = 0.5;

  const audioFiles = {

    0: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    25: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    50: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    75:`${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    100: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    125: `${process.env.PUBLIC_URL}/beep125_L.mp3`,

    150: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    175: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    200: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    225:`${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    250:  `${process.env.PUBLIC_URL}/beep250_L.mp3`,

    275:`${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    300:`${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    325:`${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    350: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    375: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    400: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    425: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    450: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    475:`${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    500: `${process.env.PUBLIC_URL}/beep500_L.mp3`,


    525:`${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    550:`${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    575:`${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    600: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    625:`${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    650: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    675: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    700: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    725: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    750: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    775: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    800: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    825: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    850: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    875: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    900: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    925:`${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    950: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    975: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    1000: `${process.env.PUBLIC_URL}/beep1000_L.mp3`,

    1200: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    1400: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    1600:`${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    1800: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    2000: `${process.env.PUBLIC_URL}/beep2000_L.mp3`,

    2200: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    2400:`${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    2600: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    2800: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    3000:`${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    3200:`${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    3400: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    3600: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    3800: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    4000:`${process.env.PUBLIC_URL}/beep4000_L.mp3`,

    4400:`${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,            
    4800: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,         
    5200: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,  
    5600:`${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,          
    6000: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,        
    6400:`${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,         
    6800: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,       
    7200: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,           
    7600: `${process.env.PUBLIC_URL}/WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3`,
    8000: `${process.env.PUBLIC_URL}/beep8000_L.mp3`,

   
  };

  let lineY100;
  let currentFrequency = startFrequency;
  let isAudiometryRunning = false;

  const startButtonRef = useRef(null);
  const stopButtonRef = useRef(null);
  const frequencyIncrementRef = useRef(null);
  const tonePlayerRef = useRef(null);
  const doctorMessageBoxRef = useRef(null);
  const okButtonRef = useRef(null);


  useEffect(() => {
    // Destructure current from refs
    const startButton = startButtonRef.current;
    const stopButton = stopButtonRef.current;
    const frequencyIncrement = frequencyIncrementRef.current;
    const tonePlayer = tonePlayerRef.current;
    const doctorMessageBox = doctorMessageBoxRef.current;
    const okButton = okButtonRef.current;

    // Function to play the audio associated with the current frequency
    const playAudioForCurrentFrequency = () => {
      const audioFile = audioFiles[currentFrequency];

      if (audioFile) {
        tonePlayer.src = audioFile;
        tonePlayer.play();
        tonePlayer.onended = () => {
          // Check for alert at 1000 Hz after audio has ended
          if (currentFrequency === 125) {
            const response = window.confirm("IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL");

            if (response) {
              const canvas = document.getElementById('yourCanvasId'); // Replace 'yourCanvasId' with your actual canvas ID

              if (canvas) {
                const ctx = canvas.getContext('2d');
            
                // Define the coordinates and properties for the red "O"
                const pointX = 120.5; // X-coordinate for the blue line (at the left edge)
                const pointY = lineY100; // Y-coordinate for the blue line
                const pointSize = 10; // Size of the "O"
                const lineWidth = 2; // Line width of the "O"
                
                ctx.strokeStyle = 'red'; // Set stroke color to red
                ctx.lineWidth = lineWidth; // Set line width
                ctx.beginPath();
            
                // Draw the circle
                ctx.arc(pointX, pointY, pointSize / 2, 0, 2 * Math.PI);
            
                ctx.stroke();
              
            } else {
              currentFrequency = 0.1;
              stepFrequency = 25;
            }
          }

        }
          currentFrequency += stepFrequency;

          // Adjust the stepFrequency based on your needs
          // ... (other conditions)

          if (currentFrequency <= endFrequency) {
            frequencyIncrement.value = `${currentFrequency} Hz`;
            playAudioForCurrentFrequency();
          } else {
            // Test is complete
            stopAudiometry();
          }
        };
      }
    };


    const startAudiometry = () => {
      isAudiometryRunning = true;
      startButton.style.display = 'none';
      stopButton.style.display = 'inline-block';
      playNextTone();
    };

    // Function to stop the audiometry
    const stopAudiometry = () => {
      isAudiometryRunning = false;
      startButton.style.display = 'inline-block';
      stopButton.style.display = 'none';
      currentFrequency = startFrequency;
      tonePlayer.pause();
      tonePlayer.currentTime = 0;
      frequencyIncrement.value = '';
    };

    // Function to play the first tone
    const playNextTone = () => {
      frequencyIncrement.value = `${currentFrequency} Hz`;
      playAudioForCurrentFrequency();
    };

    // Function to handle the OK button click in the doctor message box
    const handleOkButtonClick = () => {
      doctorMessageBox.style.display = 'none';
      // Mark the point on the graph
      // ... (code for marking point)
      stopAudiometry();
    };

    // Add click event listeners to the start and stop buttons
    okButton.addEventListener('click', handleOkButtonClick);
    startButton.addEventListener('click', startAudiometry);
    stopButton.addEventListener('click', stopAudiometry);
  }, []); // Empty dependency array to run the effect only once


  return (
    <div>
      <button ref={startButtonRef} id="startButton">Start Audiometry</button>
      <button ref={stopButtonRef} id="stopButton" style={{ display: 'none' }}>Stop Audiometry</button>
      <input ref={frequencyIncrementRef} type="text" id="frequencyIncrement" readOnly />
      <audio ref={tonePlayerRef} id="tonePlayer"></audio>
      <div ref={doctorMessageBoxRef} id="doctorMessageBox" className="message-box">
        <p>Please visit a doctor.</p>
        <button ref={okButtonRef} id="okButton">OK</button>
      </div>
    </div>
  );
};

export default Audiogram;
