# My Vike Project

## 專案簡介

本專案為 Vike + Vue 應用，支援 Open Graph、Docker Compose 一鍵啟動。

---

## 快速啟動（推薦 Docker Compose）

### 1. 安裝 Docker 與 Docker Compose
- 下載安裝：[Docker Desktop](https://www.docker.com/products/docker-desktop/)

### 2. 啟動專案
```sh
docker compose up --build
```
- 第一次會自動建置，之後只需 `docker compose up`

### 3. 開啟瀏覽器
- 訪問 [http://localhost:3000/service-us](http://localhost:3000)

---

## 手動啟動（本機 Node 環境）

1. 安裝 [Node.js 20+](https://nodejs.org/)
2. 安裝 [pnpm](https://pnpm.io/)
3. 安裝依賴：
   ```sh
   pnpm install
   ```
4. 啟動開發伺服器：
   ```sh
   pnpm dev
   ```

---

## GitHub 部署方案

### 🚀 方案一：Vercel 部署（推薦）

您的專案已經配置了 Vercel！

**步驟：**
1. 前往 [vercel.com](https://vercel.com/) 註冊帳號
2. 連接您的 GitHub 儲存庫
3. 選擇專案並點擊 "Deploy"
4. Vercel 會自動偵測 Vike 專案並進行部署

**優勢：**
- ✅ 自動部署（每次 push 都會觸發）
- ✅ 免費額度足夠個人使用
- ✅ 全球 CDN 加速
- ✅ 自動 HTTPS
- ✅ 預覽分支功能

### 🌐 方案二：Netlify 部署

**步驟：**
1. 前往 [netlify.com](https://netlify.com/) 註冊
2. 連接 GitHub 儲存庫
3. 設定建置指令：
   - **Build command:** `pnpm build`
   - **Publish directory:** `dist`

### ⚙️ 方案三：GitHub Actions + GitHub Pages

**限制：** GitHub Pages 僅支援靜態網站，不支援 SSR

為靜態建置新增 GitHub Actions：

**新建檔案：** `.github/workflows/deploy.yml`
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: latest

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v3
```

### 🐳 方案四：GitHub Actions + Docker Hub

**新建檔案：** `.github/workflows/docker.yml`
```yaml
name: Docker Build and Push

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Login to Docker Hub
        if: github.event_name != 'pull_request'
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          platforms: linux/amd64,linux/arm64
          push: ${{ github.event_name != 'pull_request' }}
          tags: |
            your-username/my-vike-project:latest
            your-username/my-vike-project:${{ github.sha }}
```

### 🔧 方案五：GitHub Codespaces 開發環境

**新建檔案：** `.devcontainer/devcontainer.json`
```json
{
  "name": "Vike Vue Development",
  "image": "mcr.microsoft.com/devcontainers/typescript-node:20",
  "features": {
    "ghcr.io/devcontainers/features/docker-in-docker:2": {}
  },
  "postCreateCommand": "npm install -g pnpm && pnpm install",
  "forwardPorts": [3000],
  "portsAttributes": {
    "3000": {
      "label": "Vike App",
      "onAutoForward": "notify"
    }
  },
  "customizations": {
    "vscode": {
      "extensions": [
        "Vue.volar",
        "bradlc.vscode-tailwindcss",
        "ms-vscode.vscode-typescript-next"
      ]
    }
  }
}
```

### 📋 部署方案比較

| 方案 | 費用 | SSR 支援 | 自動部署 | 設定難度 | 推薦度 |
|------|------|----------|----------|----------|--------|
| Vercel | 免費 | ✅ | ✅ | ⭐ | ⭐⭐⭐⭐⭐ |
| Netlify | 免費 | ✅ | ✅ | ⭐⭐ | ⭐⭐⭐⭐ |
| GitHub Pages | 免費 | ❌ | ✅ | ⭐⭐ | ⭐⭐⭐ |
| Docker Hub | 免費 | ✅ | ✅ | ⭐⭐⭐ | ⭐⭐⭐ |
| Codespaces | 付費 | ✅ | ❌ | ⭐⭐ | ⭐⭐⭐ |

**推薦：使用 Vercel**，因為您的專案已經有相關配置且完全免費！

---

## 🔄 GitHub Actions CI/CD（推薦）

### 💡 什麼是 CI/CD？
**CI/CD** = **持續整合 (Continuous Integration)** + **持續部署 (Continuous Deployment)**

GitHub Actions 就是 CI/CD 的完美實現！它能夠：
- ✅ **自動測試**：每次 push 都會執行測試
- ✅ **自動建置**：確保程式碼能正確編譯
- ✅ **自動部署**：成功建置後自動部署到生產環境
- ✅ **品質檢查**：Lint、型別檢查、安全掃描
- ✅ **並行處理**：同時執行多個任務提高效率

### 🛠️ 完整 CI/CD 工作流程

**建立檔案：** `.github/workflows/ci-cd.yml`
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

env:
  NODE_VERSION: '20'
  PNPM_VERSION: 'latest'

jobs:
  # ========== CI 階段 ==========
  lint-and-test:
    name: 🔍 代碼品質檢查
    runs-on: ubuntu-latest
    steps:
      - name: 📥 檢出代碼
        uses: actions/checkout@v4

      - name: 🟢 設置 Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: 📦 安裝 pnpm
        uses: pnpm/action-setup@v2
        with:
          version: ${{ env.PNPM_VERSION }}

      - name: 📚 快取依賴
        uses: actions/cache@v4
        with:
          path: ~/.pnpm-store
          key: ${{ runner.os }}-pnpm-${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            ${{ runner.os }}-pnpm-

      - name: 🔧 安裝依賴
        run: pnpm install --frozen-lockfile

      - name: 🔍 TypeScript 檢查
        run: pnpm vue-tsc --noEmit

      - name: 🧪 運行測試 (如果有)
        run: |
          if [ -f "package.json" ] && grep -q '"test"' package.json; then
            pnpm test
          else
            echo "沒有找到測試腳本，跳過測試"
          fi

  build:
    name: 🏗️ 建置應用
    runs-on: ubuntu-latest
    needs: lint-and-test
    steps:
      - name: 📥 檢出代碼
        uses: actions/checkout@v4

      - name: 🟢 設置 Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}

      - name: 📦 安裝 pnpm
        uses: pnpm/action-setup@v2
        with:
          version: ${{ env.PNPM_VERSION }}

      - name: 🔧 安裝依賴
        run: pnpm install --frozen-lockfile

      - name: 🏗️ 建置專案
        run: pnpm build

      - name: 📤 上傳建置產物
        uses: actions/upload-artifact@v4
        with:
          name: dist-files
          path: dist/
          retention-days: 7

  # ========== CD 階段 ==========
  deploy-vercel:
    name: 🚀 部署到 Vercel
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    steps:
      - name: 📥 檢出代碼
        uses: actions/checkout@v4

      - name: 📥 下載建置產物
        uses: actions/download-artifact@v4
        with:
          name: dist-files
          path: dist/

      - name: 🚀 部署到 Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'

  deploy-pages:
    name: 📄 部署到 GitHub Pages
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: 📥 下載建置產物
        uses: actions/download-artifact@v4
        with:
          name: dist-files
          path: dist/

      - name: 📄 設置 Pages
        uses: actions/configure-pages@v4

      - name: 📤 上傳到 Pages
        uses: actions/upload-pages-artifact@v2
        with:
          path: dist/

      - name: 🚀 部署 Pages
        id: deployment
        uses: actions/deploy-pages@v3

  # ========== 通知階段 ==========
  notify:
    name: 📢 部署通知
    runs-on: ubuntu-latest
    needs: [deploy-vercel, deploy-pages]
    if: always()
    steps:
      - name: 📢 部署結果通知
        run: |
          if [ "${{ needs.deploy-vercel.result }}" == "success" ] || [ "${{ needs.deploy-pages.result }}" == "success" ]; then
            echo "🎉 部署成功！"
          else
            echo "❌ 部署失敗"
            exit 1
          fi
```

### 🎯 CI/CD 優勢

**持續整合 (CI) 的好處：**
- 🔍 **早期發現問題**：每次提交都會檢查
- 🧪 **自動測試**：確保程式碼品質
- 📊 **程式碼覆蓋率**：了解測試完整性
- 🔒 **安全檢查**：掃描安全漏洞

**持續部署 (CD) 的好處：**
- ⚡ **快速交付**：自動部署到生產環境
- 🎯 **一致性**：每次部署都相同
- 🔄 **回滾能力**：出問題可快速回復
- 📈 **更頻繁發布**：降低發布風險

### 🔧 設定步驟

1. **建立 Secrets**（在 GitHub 儲存庫設定中）：
   ```
   VERCEL_TOKEN: 您的 Vercel Token
   VERCEL_ORG_ID: 您的 Vercel 組織 ID
   VERCEL_PROJECT_ID: 您的 Vercel 專案 ID
   ```

2. **啟用 GitHub Pages**：
   - 前往儲存庫設定 → Pages
   - Source 選擇 "GitHub Actions"

3. **推送程式碼**：
   ```bash
   git add .
   git commit -m "🚀 設置 CI/CD 流水線"
   git push origin main
   ```

### 📊 工作流程監控

在 GitHub 儲存庫中查看：
- **Actions 標籤**：查看所有工作流程
- **綠色勾號 ✅**：CI/CD 成功
- **紅色叉號 ❌**：CI/CD 失敗
- **黃色圓點 🟡**：CI/CD 執行中

### 💡 進階功能

- **分支保護**：要求 CI 通過才能合併
- **環境變數**：不同環境使用不同設定
- **矩陣建置**：在多個 Node.js 版本上測試
- **快取優化**：加速建置時間
- **並行執行**：同時執行多個任務

GitHub Actions CI/CD 讓您的開發流程更加專業和自動化！🎉

---

## 目錄結構
- `Dockerfile`、`docker-compose.yml`：Docker 一鍵啟動設定
- `package.json`、`pnpm-lock.yaml`：依賴管理
- `pages/`、`components/`：主要程式碼

---

## 其他
- 若有 .env 需求，請自行建立 .env 檔案
- 有任何問題請聯絡專案負責人

