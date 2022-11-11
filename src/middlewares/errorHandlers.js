let errorHandlers = (err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: err.message });
};
module.exports = errorHandlers;