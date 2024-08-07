const authMiddleware = (onlyAdmin = false) => {
    return async (req, res, next) => {
      try {
        if (!req.user) {
            throw {message: "You need to log in to access this route", status: 401};
        }

        if (onlyAdmin && !req.user.isAdmin) {
          throw {message: "Insufficient Permissions", status: 403};
        }
        
        next();
      } catch (error) {
        next(error);
      }
    };
  };

export default authMiddleware