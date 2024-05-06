import React, { useEffect,useRef,useState } from 'react';
import html2canvas from 'html2canvas';



const AudiogramGraph = () => {




  const startFrequency = 0;
  const startFrequency2=0.1;
  const startFrequency3=0.2;
  const startFrequency4=0.3;
  const startFrequency5=0.4;


  const endFrequency = 8000;
  const stepFrequency = 25;

  const [currentFrequency, setCurrentFrequency] = useState(startFrequency);
  const [isAudiometryRunning, setIsAudiometryRunning] = useState(false);
  const frequencyIncrementRef = useRef();
  const resultMessageRef = useRef();
  const resultMessageNormalRef = useRef();




  // Map each frequency to its corresponding audio file
  const audioFiles = {
    0: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    25: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    50: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    75: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    100: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    125: 'beep125_L.mp3',

    0.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    25.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    50.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    75.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    100.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    125.1: '125-20db left.mp3',

    0.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    25.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    50.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    75.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    100.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    125.2: '125-30db left.mp3',

    0.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    25.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    50.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    75.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    100.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    125.3: '125-40db left.mp3',


    0.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    25.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    50.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    75.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    100.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    125.4: '125-50db left.mp3',

    
    200: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    225: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    250: 'beep250_L.mp3',

   
    200.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    225.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    250.1: '250-20db left.mp3',

    
    200.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    225.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    250.2: '250-30db left.mp3',

    200.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    225.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    250.3: '250-40db left.mp3',

    200.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    225.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    250.4: '250-50db left.mp3',

   
    400: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    425: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    450: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    475: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    500: 'beep500_L.mp3',
    
    
    400.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    425.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    450.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    475.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    500.1: '500-20db left.mp3',

    
    400.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    425.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    450.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    475.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    500.2: '500-30db left.mp3',

    400.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    425.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    450.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    475.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    500.3: '500-40db left.mp3',

    400.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    425.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    450.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    475.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    500.4: '500-50db left.mp3',

    
    
    900: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    925: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    950: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    975: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    1000: 'beep1000_L.mp3',

    
    900.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    925.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    950.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    975.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    1000.1: '1000-20db left.mp3',

   
    900.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    925.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    950.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    975.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    1000.2: '1000-30db left.mp3',

    900.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    925.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    950.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    975.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    1000.3: '1000-40db left.mp3',

    900.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    925.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    950.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    975.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    1000.4: '1000-50db left.mp3',
    
   
    
    1900: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    1925: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    1950: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    1975: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    2000: 'beep2000_L.mp3',

    
    
    1900.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    1925.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    1950.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    1975.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    2000.1: '2000-20db left.mp3',

    
    
    1900.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    1925.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    1950.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    1975.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    2000.2: '2000-30db left.mp3',

    1900.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    1925.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    1950.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    1975.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    2000.3: '2000-40db left.mp3',

    1900.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    1925.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    1950.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    1975.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    2000.4: '2000-50db left.mp3',
   
   
    
    3900: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    3925: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    3950: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    3975: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    4000: 'beep4000_L.mp3',

   
    3900.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    3925.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    3950.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    3975.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    4000.1: '4000-20db left.mp3',

    
    3900.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    3925.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    3950.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    3975.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    4000.2: '4000-30db left.mp3',  

    3900.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    3925.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    3950.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    3975.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    4000.3: '4000-40db left.mp3',  

    3900.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    3925.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    3950.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    3975.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    4000.4: '4000-50db left.mp3',  


          
    
    7900: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    7925: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    7950: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    7975: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    8000: 'beep8000_L.mp3',

   
    7900.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    7925.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    7950.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    7975.1: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    8000.1: '8000-20db left.mp3',

    
    7900.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    7925.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    7950.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    7975.2: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    8000.2: '8000-30db left.mp3',

    7900.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    7925.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    7950.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    7975.3: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    8000.3: '8000-40db left.mp3',

    7900.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    7925.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    7950.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    7975.4: 'WhatsApp Audio 2023-09-17 at 9.50.46 AM.mp3',
    8000.4: '8000-50db left.mp3',
  };

  const playAudioForCurrentFrequency = () => {
    const audioFile = audioFiles[currentFrequency];

    // Implement your audio playing logic here using audioFile
    if (audioFile) {
      // Play the audio
      const audio = new Audio(audioFile);
      audio.play();
        
      // Set up an event listener for audio end
      audio.addEventListener('ended', () => {
        // For demonstration, I'm simulating the alert at 125 Hz
        if (currentFrequency === 125) {
          const response = window.confirm(
            'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
          );

          if (response) {
            const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 121; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY100; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

// Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
            setCurrentFrequency(currentFrequency + 75);
          } else {
            // Logic for Cancel button click
            setCurrentFrequency(startFrequency2);
          }
        } else {
          // Logic for other frequencies
          setCurrentFrequency(currentFrequency + stepFrequency);
        }



        if (currentFrequency === 125.1) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 120.5; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY200; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
              setCurrentFrequency(currentFrequency + 75);
            } else {
              // Logic for Cancel button click
              setCurrentFrequency(startFrequency3);
            }
          } 

          if (currentFrequency === 125.2) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 120.5; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY300; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
             ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
              setCurrentFrequency(currentFrequency + 75);
            } else {
              // Logic for Cancel button click
              setCurrentFrequency(startFrequency4);
            }
          } 

          if (currentFrequency === 125.3) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 120.5; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY400; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
              setCurrentFrequency(currentFrequency + 75);
            } else {
              // Logic for Cancel button click
              setCurrentFrequency(startFrequency5);
            }
          } 

          if (currentFrequency === 125.4) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 120.5; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY500; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
              setCurrentFrequency(currentFrequency + 75);
            } else {
              // Logic for Cancel button click
              resultMessageRef.current.textContent = response
              ? 'Test successful. Continue to the next frequency.'
              : 'Please visit a doctor.';  
              stopAudiometry();
              return;          }
          } 

          if (currentFrequency === 250) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 192; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY100; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
              setCurrentFrequency(currentFrequency + 200);
            } else {
              // Logic for Cancel button click
              setCurrentFrequency(startFrequency2+200);
            }
          } 


          if (currentFrequency === 250.1) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
              const ctx = canvas.getContext('2d');            
              const pointX = 192; // X-coordinate for the blue line (at the left edge)
              const pointY = lineY200; // Y-coordinate for the blue line
              const pointSize = 10; // Size of the "O"
              const lineWidth = 2; // Line width of the "O"
              ctx.strokeStyle = 'blue'; // Set stroke color to blue
                ctx.lineWidth = lineWidth; // Set line width

                ctx.beginPath();

                // Draw the "X"
                ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
                ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
                ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
                ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

      
              ctx.stroke();
              setCurrentFrequency(currentFrequency + 200);
            } else {
              // Logic for Cancel button click
              setCurrentFrequency(startFrequency3+200);
            }
          } 

          if (currentFrequency === 250.2) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 192; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY300; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
              setCurrentFrequency(currentFrequency + 200);
            } else {
              // Logic for Cancel button click
              setCurrentFrequency(startFrequency4+200);

                     }
          } 

          if (currentFrequency === 250.3) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 192; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY400; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
              setCurrentFrequency(currentFrequency + 200);
            } else {
              // Logic for Cancel button click
              setCurrentFrequency(startFrequency5+200);
            }
          } 

          if (currentFrequency === 250.4) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 192; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY500; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width
            
            ctx.beginPath();
            
            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);
            
    
            ctx.stroke();
              setCurrentFrequency(currentFrequency + 200);
            } else {
              // Logic for Cancel button click
              resultMessageRef.current.textContent = response
              ? 'Test successful. Continue to the next frequency.'
              : 'Please visit a doctor.';   
              stopAudiometry();
              return;                 }
          } 

          if (currentFrequency === 500) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 264.5; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY100; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
              setCurrentFrequency(currentFrequency + 400);
            } else {
              // Logic for Cancel button click
              setCurrentFrequency(startFrequency2+400);
            }
          } 
          

          if (currentFrequency === 500.1) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 264.5; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY200; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
              setCurrentFrequency(currentFrequency + 400);
            } else {
              // Logic for Cancel button click
              setCurrentFrequency(startFrequency3+400);
            }
          } 

          if (currentFrequency === 500.2) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
              const ctx = canvas.getContext('2d');            
              const pointX = 264.5; // X-coordinate for the blue line (at the left edge)
              const pointY = lineY300; // Y-coordinate for the blue line
              const pointSize = 10; // Size of the "O"
              const lineWidth = 2; // Line width of the "O"
              ctx.strokeStyle = 'blue'; // Set stroke color to blue
                ctx.lineWidth = lineWidth; // Set line width

                ctx.beginPath();

                // Draw the "X"
                ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
                ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
                ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
                ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

      
              ctx.stroke();
              setCurrentFrequency(currentFrequency + 400);
            } else {
              // Logic for Cancel button click
              setCurrentFrequency(startFrequency4+400);
            }
          } 

          if (currentFrequency === 500.3) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
              const ctx = canvas.getContext('2d');            
              const pointX = 264.5; // X-coordinate for the blue line (at the left edge)
              const pointY = lineY400; // Y-coordinate for the blue line
              const pointSize = 10; // Size of the "O"
              const lineWidth = 2; // Line width of the "O"
              ctx.strokeStyle = 'blue'; // Set stroke color to blue
                ctx.lineWidth = lineWidth; // Set line width

                ctx.beginPath();

                // Draw the "X"
                ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
                ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
                ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
                ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

      
              ctx.stroke();
              setCurrentFrequency(currentFrequency + 400);
            } else {
              // Logic for Cancel button click
              setCurrentFrequency(startFrequency5+400);
            }
          } 

          if (currentFrequency === 500.4) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
              const ctx = canvas.getContext('2d');            
              const pointX = 264.5; // X-coordinate for the blue line (at the left edge)
              const pointY = lineY500; // Y-coordinate for the blue line
              const pointSize = 10; // Size of the "O"
              const lineWidth = 2; // Line width of the "O"
              ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

      
              ctx.stroke();
              setCurrentFrequency(currentFrequency + 400);
            } else {
              resultMessageRef.current.textContent = response
              ? 'Test successful. Continue to the next frequency.'
              : 'Please visit a doctor.';  
              stopAudiometry();
              return;                   }
          } 


          if (currentFrequency === 1000) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 336.5;// X-coordinate for the blue line (at the left edge)
            const pointY = lineY100; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
              setCurrentFrequency(currentFrequency + 900);
            } else {
              // Logic for Cancel button click
              setCurrentFrequency(startFrequency2+900);
            }
          } 

          if (currentFrequency === 1000.1) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
              const ctx = canvas.getContext('2d');            
              const pointX = 336.5;// X-coordinate for the blue line (at the left edge)
              const pointY = lineY200; // Y-coordinate for the blue line
              const pointSize = 10; // Size of the "O"
              const lineWidth = 2; // Line width of the "O"
              ctx.strokeStyle = 'blue'; // Set stroke color to blue
                ctx.lineWidth = lineWidth; // Set line width

                ctx.beginPath();

                // Draw the "X"
                ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
                ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
                ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
                ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

      
              ctx.stroke();
              setCurrentFrequency(currentFrequency + 900);
            } else {
              // Logic for Cancel button click
              setCurrentFrequency(startFrequency3+900);
            }
          } 

          if (currentFrequency === 1000.2) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 336.5;// X-coordinate for the blue line (at the left edge)
            const pointY = lineY300; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
              setCurrentFrequency(currentFrequency + 900);
            } else {
              setCurrentFrequency(startFrequency4+900);
                          }
          } 

          if (currentFrequency === 1000.3) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 336.5;// X-coordinate for the blue line (at the left edge)
            const pointY = lineY400; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
              setCurrentFrequency(currentFrequency + 900);
            } else {
              setCurrentFrequency(startFrequency5+900);
                          }
          } 
          if (currentFrequency === 1000.4) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 336.5;// X-coordinate for the blue line (at the left edge)
            const pointY = lineY500; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
              setCurrentFrequency(currentFrequency + 900);
            } else {
              // Logic for Cancel button click
              resultMessageRef.current.textContent = response
              ? 'Test successful. Continue to the next frequency.'
              : 'Please visit a doctor.';  
              stopAudiometry();
              return;                  }
          } 


          if (currentFrequency === 2000) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 407.5; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY100; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
              setCurrentFrequency(currentFrequency + 1900);
            } else {
              // Logic for Cancel button click
              setCurrentFrequency(startFrequency2+1900);
            }
          } 

          if (currentFrequency === 2000.1) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
              const ctx = canvas.getContext('2d');            
              const pointX = 407.5; // X-coordinate for the blue line (at the left edge)
              const pointY = lineY200; // Y-coordinate for the blue line
              const pointSize = 10; // Size of the "O"
              const lineWidth = 2; // Line width of the "O"
              ctx.strokeStyle = 'blue'; // Set stroke color to blue
                ctx.lineWidth = lineWidth; // Set line width

                ctx.beginPath();

                // Draw the "X"
                ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
                ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
                ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
                ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

              ctx.stroke();
              setCurrentFrequency(currentFrequency + 1900);
            } else {
              // Logic for Cancel button click
              setCurrentFrequency(startFrequency3+1900);
            }
          } 

          if (currentFrequency === 2000.2) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 407.5; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY300; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

            ctx.stroke();
              setCurrentFrequency(currentFrequency + 1900);
            } else {
              setCurrentFrequency(startFrequency4+1900);
                     }
          } 

          if (currentFrequency === 2000.3) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 407.5; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY400; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
              setCurrentFrequency(currentFrequency + 1900);
            } else {
              setCurrentFrequency(startFrequency5+1900);
                       }
          } 

          if (currentFrequency === 2000.4) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 407.5; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY500; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
              setCurrentFrequency(currentFrequency + 1900);
            } else {
              // Logic for Cancel button click
              resultMessageRef.current.textContent = response
              ? 'Test successful. Continue to the next frequency.'
              : 'Please visit a doctor.';  
              stopAudiometry();
              return;                  }
          } 

          if (currentFrequency === 4000) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 478; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY100; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
              setCurrentFrequency(currentFrequency + 3900);
            } else {
              // Logic for Cancel button click
              setCurrentFrequency(startFrequency2+3900);
            }
          } 

          if (currentFrequency === 4000.1) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 478; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY200; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

                
            ctx.stroke();
              setCurrentFrequency(currentFrequency + 3900);
            } else {
              // Logic for Cancel button click
              setCurrentFrequency(startFrequency3+3900);
            }
          } 

          if (currentFrequency === 4000.2) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 478; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY300; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
              setCurrentFrequency(currentFrequency + 3900);
            } else {
              // Logic for Cancel button click
              setCurrentFrequency(startFrequency4+3900);
            }
          } 

          if (currentFrequency === 4000.3) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 478; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY400; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
              setCurrentFrequency(currentFrequency + 3900);
            } else {
              // Logic for Cancel button click
              setCurrentFrequency(startFrequency5+3900);
            }
          } 


          if (currentFrequency === 4000.4) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 478; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY500; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width
            
            ctx.beginPath();
            
            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);
            
    
            ctx.stroke();
              setCurrentFrequency(currentFrequency + 3900);
            } else {
              // Logic for Cancel button click
              resultMessageRef.current.textContent = response
              ? 'Test successful. Continue to the next frequency.'
              : 'Please visit a doctor.';  
              stopAudiometry();
              return;                   }
          } 



          if (currentFrequency === 8000) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 550; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY100; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
            resultMessageNormalRef.current.textContent = response
              ? 'You Are Normal.'
              : 'You Are Normal.';    
              stopAudiometry();
              return;  
            } else {
              // Logic for Cancel button click
              setCurrentFrequency(startFrequency2+7900);
              
            }
          } 

          if (currentFrequency === 8000.1) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
              const ctx = canvas.getContext('2d');            
              const pointX = 550; // X-coordinate for the blue line (at the left edge)
              const pointY = lineY200; // Y-coordinate for the blue line
              const pointSize = 10; // Size of the "O"
              const lineWidth = 2; // Line width of the "O"
              ctx.strokeStyle = 'blue'; // Set stroke color to blue
                ctx.lineWidth = lineWidth; // Set line width

                ctx.beginPath();

                // Draw the "X"
                ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
                ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
                ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
                ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

      
              ctx.stroke();
              resultMessageNormalRef.current.textContent = response
              ? 'You Are Normal.'
              : 'You Are Normal.';    
              stopAudiometry();
              return;  
            } else {
              setCurrentFrequency(startFrequency3+7900);
                          }
          } 

          if (currentFrequency === 8000.2) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 550; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY300; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
            resultMessageRef.current.textContent = response
            ? 'Please visit a doctor.'
            : 'Please visit a doctor.';  
                    
              stopAudiometry();
              return;  
            } else {
              // Logic for Cancel button click
              setCurrentFrequency(startFrequency4+7900);
 
            }
          } 

          if (currentFrequency === 8000.3) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 550; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY400; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

            ctx.stroke();
            resultMessageRef.current.textContent = response
            ? 'Please visit a doctor.'
            : 'Please visit a doctor.';  
              stopAudiometry();
              return;  
            } else {
              // Logic for Cancel button click
              setCurrentFrequency(startFrequency4+7900);
 
            }
          } 

          if (currentFrequency === 8000.4) {
            const response = window.confirm(
              'IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL'
            );
  
            if (response) {
              const canvas = document.getElementById('audiogramCanvas');
            const ctx = canvas.getContext('2d');            
            const pointX = 550; // X-coordinate for the blue line (at the left edge)
            const pointY = lineY500; // Y-coordinate for the blue line
            const pointSize = 10; // Size of the "O"
            const lineWidth = 2; // Line width of the "O"
            ctx.strokeStyle = 'blue'; // Set stroke color to blue
            ctx.lineWidth = lineWidth; // Set line width

            ctx.beginPath();

            // Draw the "X"
            ctx.moveTo(pointX - pointSize / 2, pointY - pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY + pointSize / 2);
            ctx.moveTo(pointX - pointSize / 2, pointY + pointSize / 2);
            ctx.lineTo(pointX + pointSize / 2, pointY - pointSize / 2);

    
            ctx.stroke();
            resultMessageRef.current.textContent = response
            ? 'Please visit a doctor.'
            : 'Please visit a doctor.';  
            stopAudiometry();
            return;         
            } else {
              resultMessageRef.current.textContent = response
              ? 'Test successful. Continue to the next frequency.'
              : 'Please visit a doctor.';  
              stopAudiometry();
              return;       
            }
          } 

          
          

      });
    }
  };

  const startAudiometry = () => {
    setIsAudiometryRunning(true);
    playAudioForCurrentFrequency(); // play the first audio immediately
  };

  const stopAudiometry = () => {
    setIsAudiometryRunning(false);
    setCurrentFrequency(startFrequency);
    frequencyIncrementRef.current.value = '';
    // Stop audio playback logic
  };



  let lineY100;
  let lineY200;
  let lineY300;
  let lineY400;
  let lineY500;


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
lineY100 = height - 50 - (100 - thresholds[0]) * (height - 100) / (thresholds[thresholds.length - 1] - thresholds[0]);
ctx.beginPath();
ctx.moveTo(50, lineY100);
ctx.lineTo(width - 50, lineY100);
ctx.stroke();

ctx.strokeStyle = 'gray';
ctx.lineWidth = 0.5;
lineY200 = height - 50 - (90 - thresholds[0]) * (height - 100) / (thresholds[thresholds.length - 1] - thresholds[0]);
ctx.beginPath();
ctx.moveTo(50, lineY200);
ctx.lineTo(width - 50, lineY200);
ctx.stroke();

ctx.strokeStyle = 'gray';
ctx.lineWidth = 0.5;
lineY300 = height - 50 - (80 - thresholds[0]) * (height - 100) / (thresholds[thresholds.length - 1] - thresholds[0]);
ctx.beginPath();
ctx.moveTo(50, lineY300);
ctx.lineTo(width - 50, lineY300);
ctx.stroke();

ctx.strokeStyle = 'gray';
ctx.lineWidth = 0.5;
lineY400 = height - 50 - (70 - thresholds[0]) * (height - 100) / (thresholds[thresholds.length - 1] - thresholds[0]);
ctx.beginPath();
ctx.moveTo(50, lineY400);
ctx.lineTo(width - 50, lineY400);
ctx.stroke();

ctx.strokeStyle = 'gray';
ctx.lineWidth = 0.5;
lineY500 = height - 50 - (60 - thresholds[0]) * (height - 100) / (thresholds[thresholds.length - 1] - thresholds[0]);
ctx.beginPath();
ctx.moveTo(50, lineY500);
ctx.lineTo(width - 50, lineY500);
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
const toneDuration=2;

    if (isAudiometryRunning) {
      const intervalId = setInterval(() => {
        playAudioForCurrentFrequency();
      }, toneDuration*1000);
      
      return () => {
        clearInterval(intervalId);
      };
    }
    
 

    // ... (Your existing code for drawing the audiogram)

    // ... (Your existing code for drawing grid lines)

  },[currentFrequency, isAudiometryRunning]);

  const handleDownload = () => {
    const audiogramContainer = document.getElementById('audiogramContainer');
    if (!audiogramContainer) {
      console.error('Element with id "audiogramContainer" not found.');
      return;
    }
  
    html2canvas(audiogramContainer, { scale: 2 }).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'LeftEar.png';
      link.click();
    });
  };
  
  
  



  return (
    <div>
     
      <div id="audiogramContainer">
        <div id="graph-title">Left Ear Audiogram</div>
        <canvas id="audiogramCanvas" width="600" height="500"></canvas>

        <input type="text" id="frequencyIncrement" ref={frequencyIncrementRef} value={`${currentFrequency} Hz`} readOnly />
 

        
        <br />
        <button id="startButton"  className='rounded-button' onClick={startAudiometry}>Start</button>
 
        <button id="stopButton" className="rounded-button"  style={{ display: isAudiometryRunning ? 'inline-block' : 'none' }} onClick={stopAudiometry}>
        Stop
      </button> 
        <button id="downloadButton" className="rectangle-button" onClick={handleDownload}>
          Download <span className="arrow">▼</span>
        </button>
      </div>
      <div id="resultMessage"   ref={resultMessageRef}></div>
      <div id="resultMessage"   ref={resultMessageNormalRef}></div>


      
    </div>
  );
};

export default AudiogramGraph;
