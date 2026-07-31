export const authorized = (...allowUser) => {
  return (req, res, next) => {
    if (!allowUser.includes(req.user.role)) {
      return res.status(403).json({ success: false, message: "Access denied" });
    }
    next();
  };
};
