# Galle Ride Co

The public site accepts bike-booking requests; the protected booking desk is at `/admin`.

## Local run

1. Copy `.env.example` to `.env` and set `VITE_API_URL` to `http://localhost:3001`.
2. In a second terminal, start the backend from `../GalleRideCoB` with `npm run dev`.
3. Run `npm run dev` in this folder.
4. Open `http://localhost:5173`, then visit `http://localhost:5173/admin` for the booking desk.

## Vercel

Deploy `GalleRideCoB` as the backend Vercel project first. Then set `VITE_API_URL` in this frontend project's Vercel variables to its URL (for example, `https://your-backend.vercel.app`). `VITE_API_URL` is intentionally public; database and admin secrets belong only in the backend project.
