export default function handler(req, res) {
  res.setPreviewData({ user: "Joakim" });
  res.redirect(req.query.redirect);
}
