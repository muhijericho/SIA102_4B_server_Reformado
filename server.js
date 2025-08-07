const express = require(`express`);
const app = express();
const PORT = 3000;

app.get(`/`, (req, res) => {
    res.send(`
        <html>
            <head>
            </head>
            <body >
                <div style="text-align: center; width: 45%; height: 50%; background-color: blue; margin-left: 100px;">
                    <h1 style="color: White;">Server Under Maintenance</h1>
                    <p>We are currently performing scheduled maintenance. We apologize for any inconvenience this may cause.</p>
                    <p>Please check back later.</p>
                    <p>Thank you for your patience!</p>
                </div>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



