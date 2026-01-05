const sendMail = async (req, res) => {
    try {
        return res.status(200).json({ result: "Success", success: true });
    } catch (error) {
        console.error("Error:", error);
        return res.status(400).json({
            success: false,
            message: "Unable to process request",
        });
    }
}

module.exports = {
    sendMail
}