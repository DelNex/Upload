export default function handler(req, res) {
    res.setHeader(
        "Cache-Control",
        "no-store"
    );

    res.setHeader(
        "Content-Type",
        "application/json"
    );

    if (!process.env.UPLOAD_SERVER) {
        return res.status(500).json({
            error: "UPLOAD_SERVER is not configured"
        });
    }

    return res.status(200).json({
        uploadServer: process.env.UPLOAD_SERVER
    });
}
