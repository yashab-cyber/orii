export const validate = (schema) => (req, res, next) => {
  try {
    const parsed = schema.parse(req.body);
    req.validated = parsed;
    next();
  } catch (e) {
    res.status(400).json({ error: 'ValidationError', details: e.errors });
  }
};

export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
