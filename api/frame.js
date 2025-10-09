export default function handler(req, res) {
  const frame = {
    "frame": {
      "version": "1",
      "imageUrl": "https://mini-app-tetris-base-xf5c.vercel.app/preview-thumb.png",
      "buttonTitle": "🎮 Play Tetris Now",
      "buttonUrl": "https://mini-app-tetris-base-xf5c.vercel.app",
      "postUrl": "https://mini-app-tetris-base-xf5c.vercel.app/api/frame"
    }
  };

  res.status(200).json(frame);
}
