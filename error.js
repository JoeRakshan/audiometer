import React, { useEffect,useState,useRef} from 'react';
import html2canvas from 'html2canvas';
import './right.css';


const AudiogramGraph = () => {
  useEffect(() => {
    const frequencies = [0, 125, 250, 500, 1000, 2000, 4000, 8000];
        const thresholds = [-10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]; // Reversed order
        
        // Define the normal range threshold
        const normalRangeThreshold = 10;

    // Your existing code for drawing the audiogram...

    const canvas = document.getElementById('audiogramCanvas');
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = 'black'; // Change label color to black
        ctx.font = 'bold 14px Arial';
        ctx.fillText('Frequency (Hz)', width / 2 - 50, height - 10);

        // Draw y-axis label
        ctx.save();
        ctx.rotate(-Math.PI / 2);
        ctx.font = 'bold 14px Arial';
        ctx.fillText('Hearing Threshold (dB)', -height / 2 - 60, 20);
        ctx.restore();

        // Draw x-axis
        ctx.beginPath();
        ctx.moveTo(50, height - 50);
        ctx.lineTo(width - 50, height - 50);
        ctx.strokeStyle = 'black';
        ctx.stroke();

        // Draw y-axis
        ctx.beginPath();
        ctx.moveTo(50, height - 50);
        ctx.lineTo(50, 50);
        ctx.strokeStyle = 'black';
        ctx.stroke();

        // Draw frequency labels on x-axis
        for (let i = 0; i < frequencies.length; i++) {
            const x = 50 + i * (width - 100) / (frequencies.length - 1);
            ctx.fillText(frequencies[i] + ' Hz', x - 20, height - 30);
        }

        // Draw threshold labels on y-axis
        for (let i = 0; i < thresholds.length; i++) {
            const y = 50 + i * (height - 100) / (thresholds.length - 1);
            ctx.fillText(thresholds[i] + ' dB', 20, y + 5);
        }

        // Draw a blue horizontal line at 100 dB
ctx.strokeStyle = 'gray';
ctx.lineWidth = 0.5;
const lineY100 = height - 50 - (100 - thresholds[0]) * (height - 100) / (thresholds[thresholds.length - 1] - thresholds[0]);
ctx.beginPath();
ctx.moveTo(50, lineY100);
ctx.lineTo(width - 50, lineY100);
ctx.stroke();

ctx.strokeStyle = 'gray';
ctx.lineWidth = 0.5;
const lineY200 = height - 50 - (90 - thresholds[0]) * (height - 100) / (thresholds[thresholds.length - 1] - thresholds[0]);
ctx.beginPath();
ctx.moveTo(50, lineY200);
ctx.lineTo(width - 50, lineY200);
ctx.stroke();

ctx.strokeStyle = 'gray';
ctx.lineWidth = 0.5;
const lineY300 = height - 50 - (80 - thresholds[0]) * (height - 100) / (thresholds[thresholds.length - 1] - thresholds[0]);
ctx.beginPath();
ctx.moveTo(50, lineY300);
ctx.lineTo(width - 50, lineY300);
ctx.stroke();


ctx.strokeStyle = 'gray';
ctx.lineWidth = 0.5;

// Draw vertical grid lines
for (let i = 1; i < frequencies.length; i++) {
    const x = 50 + i * (width - 100) / (frequencies.length - 1);
    ctx.beginPath();
    ctx.moveTo(x, 50);
    ctx.lineTo(x, height - 50);
    ctx.stroke();
}

// Draw horizontal grid lines
for (let i = 1; i < thresholds.length; i++) {
    const y = 50 + i * (height - 100) / (thresholds.length - 1);
    ctx.beginPath();
    ctx.moveTo(50, y);
    ctx.lineTo(width - 50, y);
    ctx.stroke();
}

    

   // useEffect will run only once on component mount

  const startFrequency = 0;
  const endFrequency = 8000.2;
  let stepFrequency = 25;

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

  let currentFrequency = startFrequency;
  let isAudiometryRunning = false;

  // Get refs for HTML elements
  const startButtonRef = useRef(null);
  const stopButtonRef = useRef(null);
  const frequencyIncrementRef = useRef(null);
  const tonePlayerRef = useRef(null);
  const doctorMessageBoxRef = useRef(null);
  const okButtonRef = useRef(null);
  const startButton = startButtonRef.current;
  const stopButton = stopButtonRef.current;
  const frequencyIncrement = frequencyIncrementRef.current;
  const tonePlayer = tonePlayerRef.current;
  const doctorMessageBox = doctorMessageBoxRef.current;
  const okButton = okButtonRef.current;

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
const stopAudiometry = () => {
  isAudiometryRunning = false;
  startButton.style.display = 'inline-block';
  stopButton.style.display = 'none';
  currentFrequency = startFrequency;
  tonePlayer.pause();
  tonePlayer.currentTime = 0;
  frequencyIncrement.value = '';
};
const playNextTone = () => {
  frequencyIncrement.value = `${currentFrequency} Hz`;
  playAudioForCurrentFrequency();
};
const handleOkButtonClick = () => {
  doctorMessageBox.style.display = 'none';
  // Mark the point on the graph
  // ... (code for marking point)
  stopAudiometry();
};
okButton.addEventListener('click', handleOkButtonClick);
    startButton.addEventListener('click', startAudiometry);
    stopButton.addEventListener('click', stopAudiometry);
  
  }, []); 

  



  const handleDownload = () => {
    html2canvas(document.body, { scale: 2 }).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'RightEar.png';
      link.click();
    });
  };
  



  return (
    <div>
     
      <div id="audiogramContainer">
        <div id="graph-title">Right Ear Audiogram</div>
        <canvas id="audiogramCanvas" width="600" height="500"></canvas>

        <input type="text" id="frequencyIncrement" readOnly />

        
        <br />
        <button id="startButton"  className='rounded-button'>Start</button>
        <button id="stopButton" className="rounded-button" style={{ display: 'none' }}>Stop</button>
        <button id="downloadButton" className="rectangle-button" onClick={handleDownload}>
          Download <span className="arrow">▼</span>
        </button>
      </div>

      <script>
        // Your existing script for drawing mild grid lines, displaying message boxes, and handling audio...
      </script>
    </div>
  );
};

export default AudiogramGraph;
