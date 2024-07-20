const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const qrcode = require("qrcode");

router.post("/generate", async (req, res) => {
    const { longUrl } = req.body;

    try {

        if (!validUrl.isUri(longUrl)) {
            return res.status(401).json({ error: "Invalid Url" });
        }
        qrcode.toDataURL(longUrl, (err, url) => {
            if (err) {
                console.error('Error generating QR code:', err);
                return res.status(500).json({ error: 'Failed to generate QR code' });
            }
            res.json({ qrCode: url });
        });
    } catch (error) {
        console.error('Error generating QR code:', error);
        res.status(500).json({ error: 'Failed to generate QR code' });
    }

});

module.exports = router;