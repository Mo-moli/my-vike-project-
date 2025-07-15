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

## 目錄結構
- `Dockerfile`、`docker-compose.yml`：Docker 一鍵啟動設定
- `package.json`、`pnpm-lock.yaml`：依賴管理
- `pages/`、`components/`：主要程式碼

---

## 其他
- 若有 .env 需求，請自行建立 .env 檔案
- 有任何問題請聯絡專案負責人

