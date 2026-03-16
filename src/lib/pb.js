import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.VITE_PB_URL || "https://pocketbase-render-ycpw.onrender.com");

export default pb;
