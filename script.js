const cancelBtn = document.createElement('button');

// 2. Add text and a custom ID to the button
cancelBtn.innerText = 'Click me!!';
cancelBtn.id = 'dynamic-cancel-btn';

// 3. Define what happens when the button is clicked
cancelBtn.addEventListener('click', () => {
    alert('Thanks! For your Time and Coming in Event');
    // Add your custom cancel logic/code here
});

// 4. Append the button directly to the body of the web page
document.body.appendChild(cancelBtn);