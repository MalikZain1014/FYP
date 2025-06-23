import jwt from "jsonwebtoken";

// Middleware for student access
export function studentAccess(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }

  jwt.verify(token, "usama-usama-usama", (err, decoded) => {
    if (err || decoded.userType !== "student") {
      return res
        .status(403)
        .json({ message: "Access denied", err: err.message });
    }
    req.user = { userId: decoded.userId }; // Set the userId in req.user
    next();
  });
}

// Middleware for teacher access
export function teacherAccess(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }

  jwt.verify(token, "usama-usama-usama", (err, decoded) => {
    if (err || decoded.userType !== "teacher") {
      return res
        .status(403)
        .json({ message: "Access denied", err: err.message });
    }

    next();
  });
}

// Middleware for admin access
export function adminAccess(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }

  jwt.verify(token, "usama-usama-usama", (err, decoded) => {
    if (err || decoded.userType !== "admin") {
      return res
        .status(403)
        .json({ message: "Access denied", err: err.message });
    }

    next();
  });
}

//Middleware for teacher and admin access

export function teacherOrAdminAccess(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied No Token" });
  }

  jwt.verify(token, "usama-usama-usama", (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .json({ message: "Access denied", error: err.message });
    }

    if (decoded.userType !== "teacher" && decoded.userType !== "admin") {
      return res
        .status(403)
        .json({
          message: "Access denied",
          error: "Not authorized",
          accountType: decoded.userType,
        });
    }

    next();
  });
}
