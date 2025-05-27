const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const educationFrontend = path.resolve(__dirname, '../../../education/frontend');
const overridesDir = path.resolve(__dirname, '../src');
const tempBuildDir = path.resolve(__dirname, '../temp_build');

console.log('🚀 Building custom student portal...');

// Step 1: Copy education frontend as base
console.log('📁 Copying education frontend as base...');
fs.copySync(educationFrontend, tempBuildDir);

// Step 2: Override with custom files
console.log('🔄 Applying custom overrides...');
fs.copySync(overridesDir, path.join(tempBuildDir, 'src'), { overwrite: true });

// Step 2.5: Merge package.json dependencies
console.log('📦 Merging package dependencies...');
const packagePath = path.join(tempBuildDir, 'package.json');
const overridesPkg = fs.readJsonSync(path.resolve(__dirname, '../package.json'));
const basePkg = fs.readJsonSync(packagePath);

// Merge dependencies
basePkg.dependencies = { ...basePkg.dependencies, ...overridesPkg.dependencies };
basePkg.scripts.build = 'vite build --base=/assets/srkr_student_portal/frontend/';
fs.writeJsonSync(packagePath, basePkg, { spaces: 2 });

// Step 3: Update vite config for custom output
console.log('⚙️ Updating vite configuration...');
const viteConfigPath = path.join(tempBuildDir, 'vite.config.js');
const viteConfig = `
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: '../../../srkr_student_portal/srkr_student_portal/public/frontend',
    emptyOutDir: true,
  }
})
`;
fs.writeFileSync(viteConfigPath, viteConfig);

// Step 4: Install dependencies
console.log('📥 Installing dependencies...');
process.chdir(tempBuildDir);
execSync('npm install', { stdio: 'inherit' });

// Step 5: Build
console.log('🔨 Building frontend...');
execSync('npm run build', { stdio: 'inherit' });

// Step 6: Copy HTML
console.log('📄 Copying HTML file...');
const htmlSrc = '../../../srkr_student_portal/srkr_student_portal/public/frontend/index.html';
const htmlDest = '../../../srkr_student_portal/srkr_student_portal/www/custom-student.html';
fs.copySync(htmlSrc, htmlDest);

// Step 7: Cleanup
console.log('🧹 Cleaning up temp directory...');
process.chdir(path.resolve(__dirname, '../../..'));
fs.removeSync(tempBuildDir);

console.log('✅ Build complete! Your custom student portal is ready.');
console.log('🌐 Access it at: http://127.0.0.1:8002/custom-student');