 
function playAudioForCurrentFrequency() {
            const audioFile = audioFiles[currentFrequency];
            const previousFrequency = currentFrequency;


            if (audioFile) {
                tonePlayer.src = audioFile;
                tonePlayer.play();
                tonePlayer.onended = function() {
                    // Check for alert at 1000 Hz after audio has ended
                   if (currentFrequency === 125) {
    const response = confirm("IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL");

    if (response) {
    // Show a message indicating the need to visit a doctor
    doctorMessageBox.textContent = "Please visit a doctor.";

    // Move to the next frequency at 200 dB

    // Plot the point on the blue horizontal line for the previous frequency at 200 dB as an "X"
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
}else{
   
    currentFrequency=0.1;
    stepFrequency=25;

}


}
<script src="run.js"></script>

if (currentFrequency === 125.1) {
    const response = confirm("IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL");

    if (response) {
    // Show a message indicating the need to visit a doctor
    
    // Move to the next frequency at 200 dB

    // Plot the point on the blue horizontal line for the previous frequency at 200 dB as an "X"
    const pointX = 120.5; // X-coordinate for the blue line (at the left edge)
        const pointY = lineY200; // Y-coordinate for the blue line
        const pointSize = 10; // Size of the "O"
        const lineWidth = 2; // Line width of the "O"
        ctx.strokeStyle = 'red'; // Set stroke color to red
        ctx.lineWidth = lineWidth; // Set line width
        ctx.beginPath();

        // Draw the circle
        ctx.arc(pointX, pointY, pointSize / 2, 0, 2 * Math.PI);

        ctx.stroke();
}else{
    currentFrequency=0.2;
    stepFrequency=25;
}
}
if (currentFrequency === 125.2) {
    const response = confirm("IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL");

    if (response) {
    // Show a message indicating the need to visit a doctor
   
    // Move to the next frequency at 200 dB

    // Plot the point on the blue horizontal line for the previous frequency at 200 dB as an "X"
    const pointX = 120.5; // X-coordinate for the blue line (at the left edge)
        const pointY = lineY300; // Y-coordinate for the blue line
        const pointSize = 10; // Size of the "O"
        const lineWidth = 2; // Line width of the "O"
        ctx.strokeStyle = 'red'; // Set stroke color to red
        ctx.lineWidth = lineWidth; // Set line width
        ctx.beginPath();

        // Draw the circle
        ctx.arc(pointX, pointY, pointSize / 2, 0, 2 * Math.PI);

        ctx.stroke();
}else{
    doctorMessageBox.style.display = 'block';
        return;}
}


if (currentFrequency === 250) {
    const response = confirm("IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL");

    if (response) {
    
        const pointX = 192; // X-coordinate for the blue line (at the left edge)
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
    currentFrequency =125.1;
    stepFrequency=25;
}}
if (currentFrequency === 250.1) {
    const response = confirm("IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL");

    if (response) {
    // Show a message indicating the need to visit a doctor
    const pointX = 192; // X-coordinate for the blue line (at the left edge)
        const pointY = lineY200; // Y-coordinate for the blue line
        const pointSize = 10; // Size of the "O"
        const lineWidth = 2; // Line width of the "O"
        ctx.strokeStyle = 'red'; // Set stroke color to red
        ctx.lineWidth = lineWidth; // Set line width
        ctx.beginPath();

        // Draw the circle
        ctx.arc(pointX, pointY, pointSize / 2, 0, 2 * Math.PI);

        ctx.stroke();
} else {
    currentFrequency =125.2;
    stepFrequency=25;
}}

if (currentFrequency === 250.2) {
    const response = confirm("IF YOU HEAR THE BEEP SOUND, CLICK ON OK TO CONTINUE. OTHERWISE, CLICK CANCEL");

    if (response) {
    // Show a message indicating the need to visit a doctor
    const pointX = 192; // X-coordinate for the blue line (at the left edge)
        const pointY = lineY300; // Y-coordinate for the blue line
        const pointSize = 10; // Size of the "O"
        const lineWidth = 2; // Line width of the "O"
        ctx.strokeStyle = 'red'; // Set stroke color to red
        ctx.lineWidth = lineWidth; // Set line width
        ctx.beginPath();

        // Draw the circle
        ctx.arc(pointX, pointY, pointSize / 2, 0, 2 * Math.PI);

        ctx.stroke();
} else {
    doctorMessageBox.style.display = 'block';
        return;

}}

if (currentFrequency === 500) {
    const response = confirm("IF YOU HEAR THE BEEP SOUND  CLICK ON OK TO CONTINUE OTHERWISE CLICK CANCEL");
    if (response) {
        // Show the "Please visit a doctor" message
        if (response) {
        // Show a message indicating the need to visit a doctor
        const pointX = 264.5; // X-coordinate for the blue line (at the left edge)
        const pointY = lineY100; // Y-coordinate for the blue line
        const pointSize = 10; // Size of the "O"
        const lineWidth = 2; // Line width of the "O"
        ctx.strokeStyle = 'red'; // Set stroke color to red
        ctx.lineWidth = lineWidth; // Set line width
        ctx.beginPath();

        // Draw the circle
        ctx.arc(pointX, pointY, pointSize / 2, 0, 2 * Math.PI);

        ctx.stroke();
    }
    } else {
        currentFrequency =250.1;
    stepFrequency=25;
    }
}
if (currentFrequency === 500.1) {
    const response = confirm("IF YOU HEAR THE BEEP SOUND  CLICK ON OK TO CONTINUE OTHERWISE CLICK CANCEL");
    if (response) {
        // Show the "Please visit a doctor" message
        if (response) {
        // Show a message indicating the need to visit a doctor
        const pointX = 264.5; // X-coordinate for the blue line (at the left edge)
        const pointY = lineY200; // Y-coordinate for the blue line
        const pointSize = 10; // Size of the "O"
        const lineWidth = 2; // Line width of the "O"
        ctx.strokeStyle = 'red'; // Set stroke color to red
        ctx.lineWidth = lineWidth; // Set line width
        ctx.beginPath();

        // Draw the circle
        ctx.arc(pointX, pointY, pointSize / 2, 0, 2 * Math.PI);

        ctx.stroke();
    }
    } else {
        currentFrequency =250.2;
    stepFrequency=25;

    }
}

if (currentFrequency === 500.2) {
    const response = confirm("IF YOU HEAR THE BEEP SOUND  CLICK ON OK TO CONTINUE OTHERWISE CLICK CANCEL");
    if (response) {
        // Show the "Please visit a doctor" message
        if (response) {
        // Show a message indicating the need to visit a doctor
        const pointX = 264.5; // X-coordinate for the blue line (at the left edge)
        const pointY = lineY300; // Y-coordinate for the blue line
        const pointSize = 10; // Size of the "O"
        const lineWidth = 2; // Line width of the "O"
        ctx.strokeStyle = 'red'; // Set stroke color to red
        ctx.lineWidth = lineWidth; // Set line width
        ctx.beginPath();

        // Draw the circle
        ctx.arc(pointX, pointY, pointSize / 2, 0, 2 * Math.PI);

        ctx.stroke();
    }
    } else {
        doctorMessageBox.style.display = 'block';
        return;

    }
}

if (currentFrequency === 1000) {
    const response = confirm("IF YOU HEAR THE BEEP SOUND  CLICK ON OK TO CONTINUE OTHERWISE CLICK CANCEL");
    if (response) {
        // Show the "Please visit a doctor" message
        if (response) {
            const pointX = 336.5; // X-coordinate for the blue line (at the left edge)
        const pointY = lineY100; // Y-coordinate for the blue line
        const pointSize = 10; // Size of the "O"
        const lineWidth = 2; // Line width of the "O"
        ctx.strokeStyle = 'red'; // Set stroke color to red
        ctx.lineWidth = lineWidth; // Set line width
        ctx.beginPath();

        // Draw the circle
        ctx.arc(pointX, pointY, pointSize / 2, 0, 2 * Math.PI);

        ctx.stroke(); 
    }
    } else {
        currentFrequency =500.1;
    stepFrequency=100;
    }
}

if (currentFrequency === 1000.1) {
    const response = confirm("IF YOU HEAR THE BEEP SOUND  CLICK ON OK TO CONTINUE OTHERWISE CLICK CANCEL");
    if (response) {
        // Show the "Please visit a doctor" message
        if (response) {
            const pointX = 336.5; // X-coordinate for the blue line (at the left edge)
        const pointY = lineY200; // Y-coordinate for the blue line
        const pointSize = 10; // Size of the "O"
        const lineWidth = 2; // Line width of the "O"
        ctx.strokeStyle = 'red'; // Set stroke color to red
        ctx.lineWidth = lineWidth; // Set line width
        ctx.beginPath();

        // Draw the circle
        ctx.arc(pointX, pointY, pointSize / 2, 0, 2 * Math.PI);

        ctx.stroke(); 
    }
    } else {
        currentFrequency =500.2;
    stepFrequency=100;
    }
}

if (currentFrequency === 1000.2) {
    const response = confirm("IF YOU HEAR THE BEEP SOUND  CLICK ON OK TO CONTINUE OTHERWISE CLICK CANCEL");
    if (response) {
        // Show the "Please visit a doctor" message
        if (response) {
            const pointX = 336.5; // X-coordinate for the blue line (at the left edge)
        const pointY = lineY300; // Y-coordinate for the blue line
        const pointSize = 10; // Size of the "O"
        const lineWidth = 2; // Line width of the "O"
        ctx.strokeStyle = 'red'; // Set stroke color to red
        ctx.lineWidth = lineWidth; // Set line width
        ctx.beginPath();

        // Draw the circle
        ctx.arc(pointX, pointY, pointSize / 2, 0, 2 * Math.PI);

        ctx.stroke(); 
    }
    } else {
        doctorMessageBox.style.display = 'block';
        return;
    }
}

if (currentFrequency === 2000) {
    const response = confirm("IF YOU HEAR THE BEEP SOUND  CLICK ON OK TO CONTINUE OTHERWISE CLICK CANCEL");
    if (response) {
        // Show the "Please visit a doctor" message
        if (response) {
            const pointX = 407.5; // X-coordinate for the blue line (at the left edge)
        const pointY = lineY100; // Y-coordinate for the blue line
        const pointSize = 10; // Size of the "O"
        const lineWidth = 2; // Line width of the "O"
        ctx.strokeStyle = 'red'; // Set stroke color to red
        ctx.lineWidth = lineWidth; // Set line width
        ctx.beginPath();

        // Draw the circle
        ctx.arc(pointX, pointY, pointSize / 2, 0, 2 * Math.PI);

        ctx.stroke();
    }
    } else {
        currentFrequency =1000.1;
    stepFrequency=200;
    }
}

if (currentFrequency === 2000.1) {
    const response = confirm("IF YOU HEAR THE BEEP SOUND  CLICK ON OK TO CONTINUE OTHERWISE CLICK CANCEL");
    if (response) {
        // Show the "Please visit a doctor" message
        if (response) {
            const pointX = 407.5; // X-coordinate for the blue line (at the left edge)
        const pointY = lineY200; // Y-coordinate for the blue line
        const pointSize = 10; // Size of the "O"
        const lineWidth = 2; // Line width of the "O"
        ctx.strokeStyle = 'red'; // Set stroke color to red
        ctx.lineWidth = lineWidth; // Set line width
        ctx.beginPath();

        // Draw the circle
        ctx.arc(pointX, pointY, pointSize / 2, 0, 2 * Math.PI);

        ctx.stroke();
    }
    } else {
        currentFrequency =1000.2;
    stepFrequency=200;
    }
}

if (currentFrequency === 2000.2) {
    const response = confirm("IF YOU HEAR THE BEEP SOUND  CLICK ON OK TO CONTINUE OTHERWISE CLICK CANCEL");
    if (response) {
        // Show the "Please visit a doctor" message
        if (response) {
            const pointX = 407.5; // X-coordinate for the blue line (at the left edge)
        const pointY = lineY300; // Y-coordinate for the blue line
        const pointSize = 10; // Size of the "O"
        const lineWidth = 2; // Line width of the "O"
        ctx.strokeStyle = 'red'; // Set stroke color to red
        ctx.lineWidth = lineWidth; // Set line width
        ctx.beginPath();

        // Draw the circle
        ctx.arc(pointX, pointY, pointSize / 2, 0, 2 * Math.PI);

        ctx.stroke();
    }
    } else {
        doctorMessageBox.style.display = 'block';
        return;
    }
}

if (currentFrequency === 4000) {
    const response = confirm("IF YOU HEAR THE BEEP SOUND  CLICK ON OK TO CONTINUE OTHERWISE CLICK CANCEL");
    if (response) {
        const pointX = 478; // X-coordinate for the blue line (at the left edge)
        const pointY = lineY100; // Y-coordinate for the blue line
        const pointSize = 10; // Size of the "O"
        const lineWidth = 2; // Line width of the "O"
        ctx.strokeStyle = 'red'; // Set stroke color to red
        ctx.lineWidth = lineWidth; // Set line width
        ctx.beginPath();

        // Draw the circle
        ctx.arc(pointX, pointY, pointSize / 2, 0, 2 * Math.PI);

        ctx.stroke(); // Stroke the lines to create the "X"
    } else {
        // Mark the point on the blue horizontal line for 4000 Hz as an "X"
        doctor1.style.display = 'block';
        return;
    }
}

if (currentFrequency === 4000.1) {
    const response = confirm("IF YOU HEAR THE BEEP SOUND  CLICK ON OK TO CONTINUE OTHERWISE CLICK CANCEL");
    if (response) {
        const pointX = 478; // X-coordinate for the blue line (at the left edge)
        const pointY = lineY200; // Y-coordinate for the blue line
        const pointSize = 10; // Size of the "O"
        const lineWidth = 2; // Line width of the "O"
        ctx.strokeStyle = 'red'; // Set stroke color to red
        ctx.lineWidth = lineWidth; // Set line width
        ctx.beginPath();

        // Draw the circle
        ctx.arc(pointX, pointY, pointSize / 2, 0, 2 * Math.PI);

        ctx.stroke();
    } else {
        // Mark the point on the blue horizontal line for 4000 Hz as an "X"
        doctor1.style.display = 'block';
        return;
    }
}


if (currentFrequency === 4000.2) {
    const response = confirm("IF YOU HEAR THE BEEP SOUND  CLICK ON OK TO CONTINUE OTHERWISE CLICK CANCEL");
    if (response) {
        const pointX = 478; // X-coordinate for the blue line (at the left edge)
        const pointY = lineY300; // Y-coordinate for the blue line
        const pointSize = 10; // Size of the "O"
        const lineWidth = 2; // Line width of the "O"
        ctx.strokeStyle = 'red'; // Set stroke color to red
        ctx.lineWidth = lineWidth; // Set line width
        ctx.beginPath();

        // Draw the circle
        ctx.arc(pointX, pointY, pointSize / 2, 0, 2 * Math.PI);

        ctx.stroke();
    } else {
        // Mark the point on the blue horizontal line for 4000 Hz as an "X"
        doctor1.style.display = 'block';
        return;
    }
}


if (currentFrequency === 8000) {
    const response = confirm("IF YOU HEAR THE BEEP SOUND  CLICK ON OK TO CONTINUE OTHERWISE CLICK CANCEL");
    if (response) {
        const pointX = 550; // X-coordinate for the blue line (at the left edge)
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
        // Mark the point on the blue horizontal line for 8000 Hz as an "X"
        doctor1.style.display = 'block';
        return;
        
    }
}

if (currentFrequency === 8000.1) {
    const response = confirm("IF YOU HEAR THE BEEP SOUND  CLICK ON OK TO CONTINUE OTHERWISE CLICK CANCEL");
    if (response) {
        const pointX = 550; // X-coordinate for the blue line (at the left edge)
        const pointY = lineY200; // Y-coordinate for the blue line
        const pointSize = 10; // Size of the "O"
        const lineWidth = 2; // Line width of the "O"
        ctx.strokeStyle = 'red'; // Set stroke color to red
        ctx.lineWidth = lineWidth; // Set line width
        ctx.beginPath();

        // Draw the circle
        ctx.arc(pointX, pointY, pointSize / 2, 0, 2 * Math.PI);

        ctx.stroke();
    } else {
        // Mark the point on the blue horizontal line for 8000 Hz as an "X"
        doctor1.style.display = 'block';
        return;
        
    }
}

if (currentFrequency === 8000.2) {
    const response = confirm("IF YOU HEAR THE BEEP SOUND  CLICK ON OK TO CONTINUE OTHERWISE CLICK CANCEL");
    if (response) {
        const pointX = 550; // X-coordinate for the blue line (at the left edge)
        const pointY = lineY300; // Y-coordinate for the blue line
        const pointSize = 10; // Size of the "O"
        const lineWidth = 2; // Line width of the "O"
        ctx.strokeStyle = 'red'; // Set stroke color to red
        ctx.lineWidth = lineWidth; // Set line width
        ctx.beginPath();

        // Draw the circle
        ctx.arc(pointX, pointY, pointSize / 2, 0, 2 * Math.PI);

        ctx.stroke();
    } else {
        // Mark the point on the blue horizontal line for 8000 Hz as an "X"
        doctor1.style.display = 'block';
        return;
        
    }
}


                    // Continue to the next frequency
                    currentFrequency += stepFrequency;

                    // Adjust the stepFrequency based on your needs
                    // For example, you can increase the step frequency
                    // based on specific conditions.
                   
                    
                    if (currentFrequency > 975) {
                        stepFrequency = 200; // Change the step frequency after 4000Hz
                    }
                    if (currentFrequency == 600.1) {
                        stepFrequency = 200; // Change the step frequency after 4000Hz
                    }
                    if (currentFrequency == 600.2) {
                        stepFrequency = 200; // Change the step frequency after 4000Hz
                    }
                    if (currentFrequency > 3975) {
                        stepFrequency = 400; // Change the step frequency after 4000Hz
                    }
                    
                    if (currentFrequency <= endFrequency) {
                        frequencyIncrement.value = `${currentFrequency} Hz`;
                        playAudioForCurrentFrequency();
                    } else {
                        // Test is complete
                        stopAudiometry();
                    }
                };
            }
        }

        // Function to start the audiometry
        function startAudiometry() {
            isAudiometryRunning = true;
            startButton.style.display = 'none';
            stopButton.style.display = 'inline-block';
            playNextTone();
        }

        // Function to stop the audiometry
        function stopAudiometry() {
            isAudiometryRunning = false;
            startButton.style.display = 'inline-block';
            stopButton.style.display = 'none';
            currentFrequency = startFrequency; // Reset frequency for next test
            tonePlayer.pause();
            tonePlayer.currentTime = 0;
            frequencyIncrement.value = '';
        }

        // Function to play the first tone
        function playNextTone() {
            frequencyIncrement.value = `${currentFrequency} Hz`;
            playAudioForCurrentFrequency();
        }

        // Function to handle the OK button click in the doctor message box
        okButton.addEventListener('click', function() {
            // Hide the doctor message box
            doctorMessageBox.style.display = 'none';

            // Mark the point on the graph

            // Stop the audiometry
            stopAudiometry();
        });
        
        // Add click event listeners to the start and stop buttons
        startButton.addEventListener('click', startAudiometry);
        stopButton.addEventListener('click', stopAudiometry);
   // Function to handle the OK button click in the doctor message box
   okButton.addEventListener('click', function() {
       // Hide the doctor message box
       doctorMessageBox.style.display = 'none';
   
       // Mark the point on the red horizontal line
       const pointX = 50 + (currentFrequency - startFrequency) * (width - 100) / (endFrequency - startFrequency);
       const pointY = redLineY; // Y-coordinate of the red horizontal line
       const pointRadius = 5; // Adjust the radius of the point as needed
       ctx.fillStyle = 'red';
       ctx.beginPath();
       ctx.arc(pointX, pointY, pointRadius, 0, 2 * Math.PI);
       ctx.fill();
   
       // Stop the audiometry
       stopAudiometry();
   });
