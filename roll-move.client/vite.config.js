import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { env } from 'process';

// Define paths for HTTPS certificate and key
const baseFolder =
    env.APPDATA !== undefined && env.APPDATA !== ''
        ? `${env.APPDATA}/ASP.NET/https`
        : `${env.HOME}/.aspnet/https`;

const certificateName = "roll-move.client";
const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

// Ensure certificate files exist
if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
    throw new Error("HTTPS certificate files not found. Please run the ASP.NET development certificate command.");
}

// Vite configuration
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000, // Use environment variable or default to 3000
        open: true, // Automatically open the browser
        https: {
            key: fs.readFileSync(keyFilePath),
            cert: fs.readFileSync(certFilePath),
        },
    },
});
